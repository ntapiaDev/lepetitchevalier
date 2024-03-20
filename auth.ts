import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import type { UserRole } from "@prisma/client";
import authConfig from "@/auth.config";
import { db } from "@/lib/db";
import { getUserById, verifyEmail } from "@/modules/auth/user.repository";

interface ExtendedUser {
  role: UserRole;
  kingdoms: {
    kingdomId: string,
    joinedAt: Date
  }[];
}
declare module "next-auth" {
  interface User extends ExtendedUser { }
};
declare module "@auth/core/jwt" {
  interface JWT extends ExtendedUser { }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth({
  pages: {
    // TODO: "/" instead? Redirect to "api/auth" + ?error=OAuthAccountNotLinked
    signIn: "./../../"
  },
  events: {
    async linkAccount({ user }) {
      if (user.id) verifyEmail(user.id);
    }
  },
  callbacks: {
    async session({ token, session }) {
      if (token.sub) session.user.id = token.sub;

      session.user.role = token.role;
      session.user.kingdoms = token.kingdoms;

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const user = await getUserById(token.sub);
      if (!user) return token;

      token.role = user.role;
      token.kingdoms = user.kingdoms;

      return token;
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig
});

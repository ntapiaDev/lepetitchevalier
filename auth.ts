import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { UserRole } from "@prisma/client";
import authConfig from "@/auth.config";
import { db } from "@/lib/db";
import { getUserById, verifyEmail } from "@/modules/auth/user.repository";

declare module "next-auth" {
  interface User {
    role: UserRole;
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    role: UserRole;
  }
}

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
      if (token.sub && session.user) session.user.id = token.sub;
      if (token.role && session.user) session.user.role = token.role;
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const user = await getUserById(token.sub);
      if (!user) return token;

      token.role = user.role;
      return token;
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig
});

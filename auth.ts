import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import type { Camp, UserRole } from "@prisma/client";
import authConfig from "@/auth.config";
import { db } from "@/lib/db";
import { getUserById, verifyEmail } from "@/modules/auth/user.repository";

declare module "next-auth" {
  interface User {
    username: string | null,
    role: UserRole;
    kingdoms: {
      kingdomName: string,
      joinedAt: Date
    }[];
    camps: Camp[]
  }
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
      if (!token.sub) return session;
      session.user.id = token.sub;

      const user = await getUserById(token.sub);
      if (!user) return session;

      session.user.username = user.username;
      session.user.role = user.role;
      session.user.kingdoms = user.kingdoms;
      session.user.camps = user.camps;

      return session;
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig
});

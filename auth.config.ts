import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { getUserByEmail } from "./modules/auth/user.repository";
import { loginSchema } from "./modules/auth/schemas/login";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = loginSchema.safeParse(credentials);        
        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          const passwordMatch = await bcrypt.compare(
            password,
            user.password
          );
          if (passwordMatch) return user;
        }

        return null;
      }
    })
  ],
} satisfies NextAuthConfig;

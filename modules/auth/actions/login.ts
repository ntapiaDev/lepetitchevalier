"use server";

import { AuthError } from "next-auth";
import { z } from "zod";
import { signIn } from "@/auth";
import { LOBBY_URL } from "@/routes";
import { getUserByEmail } from "../user.repository";
import { loginSchema } from "../schemas/login";

export const login = async (values: z.infer<typeof loginSchema>, callbackUrl?: string | null) => {
  const validatedFields = loginSchema.safeParse(values);
  if (!validatedFields.success) return { error: "Champs invalides!" };

  const { email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);
  if (!existingUser || !existingUser.email || !existingUser.password) return { error: "Cet utilisateur n'existe pas!" };

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: callbackUrl || LOBBY_URL
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Identifiants invalides!" };
        default:
          return { error: "Un problème est survenu!" };
      }
    };
    throw error;
  }
}

"use server";

import bcrypt from "bcryptjs";
import { z } from "zod";
import { addUser, getUserByEmail, getUserByUsername } from "../user.repository";
import { registerSchema } from "../schemas/register";

export const signup = async (values: z.infer<typeof registerSchema>) => {
  const validatedFields = registerSchema.safeParse(values);
  if (!validatedFields.success) return { error: "Champs invalides!" };

  const { username, email, password } = validatedFields.data;

  const existingUsername = await getUserByUsername(username);
  if (existingUsername) return { error: "Ce nom est déjà pris!" };

  const existingEmail = await getUserByEmail(email);
  if (existingEmail) return { error: "Cet email est déjà enregistré!" };

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await addUser(username, email, hashedPassword);
    return { success: "Enregistrement réussi!" };
  } catch {
    return { error: "Un problème est survenu!" };
  }
}

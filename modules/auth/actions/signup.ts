"use server";

import bcrypt from "bcryptjs";
import { z } from "zod";
import { addUser, getUserByEmail } from "../user.repository";
import { registerSchema } from "../schemas/register";

export const signup = async (values: z.infer<typeof registerSchema>) => {
  const validatedFields = registerSchema.safeParse(values);
  if (!validatedFields.success) return { error: "Champs invalides!" };

  const { name, email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);
  if (existingUser) return { error: "Cet email est déjà enregistré!" };

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await addUser(name, email, hashedPassword);
    return { success: "Enregistrement réussi!" };
  } catch {
    return { error: "Un problème est survenu!" };
  }
}

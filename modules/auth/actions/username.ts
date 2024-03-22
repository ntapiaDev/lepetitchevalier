"use server";

import { z } from "zod";
import { getUserByUsername, updateUsername } from "../user.repository";
import { currentUser } from "../user.utils";
import { usernameSchema } from "../schemas/username";

export const username = async (values: z.infer<typeof usernameSchema>) => {
  const user = await currentUser();
  if (!user?.id) return { error: "Vous devez être connecté pour modifier votre pseudonyme!" };

  const validatedFields = usernameSchema.safeParse(values);
  if (!validatedFields.success) return { error: "Champs invalides!" };

  const { username } = validatedFields.data;

  const existingUsername = await getUserByUsername(username);
  if (existingUsername) return { error: "Ce nom est déjà pris!" };

  try {
    await updateUsername(user.id, username);
    return { success: "Pseudonyme modifié avec succès!" };
  } catch {
    return { error: "Un problème est survenu!" };
  }
}

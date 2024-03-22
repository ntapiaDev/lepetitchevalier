import { z } from "zod";

export const usernameSchema = z.object({
  username: z.string()
    .min(1, { message: "Veuillez entrer votre pseudonyme" })
    .min(3, { message: "Votre pseudonyme doit faire au moins 3 caractères" })
    .max(16, { message: "Votre pseudonyme ne doit pas dépasser 16 caractères" })
});

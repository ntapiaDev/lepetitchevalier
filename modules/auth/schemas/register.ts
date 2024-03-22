import { z } from "zod";

export const registerSchema = z.object({
  username: z.string()
    .min(1, { message: "Veuillez entrer votre pseudonyme" })
    .min(3, { message: "Votre pseudonyme doit faire au moins 3 caractères" })
    .max(16, { message: "Votre pseudonyme ne doit pas dépasser 16 caractères" }),
  email: z.string()
    .email({ message: "Cette adresse n'est pas valide" }),
  password: z.string()
    .min(1, { message: "Veuillez entrer votre mot de passe" })
    .min(8, { message: "Votre mot de passe doit faire au moins 8 caractères" })
    .max(16, { message: "Votre mot de passe ne doit pas dépasser 16 caractères" })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      { message: "Votre mot de passe doit contenir au moins une majuscule, une minuscule et un chiffre" }
    )
});

import { z } from "zod";

export const registerSchema = z.object({
  name: z.string()
    .min(1, { message: "Veuillez entrer votre nom" })
    .min(3, { message: "Votre nom doit faire au moins 3 caractères" })
    .max(16, { message: "Votre nom ne doit pas dépasser 16 caractères" }),
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

import { z } from "zod";

export const loginSchema = z.object({
  email: z.string()
    .email({ message: "Cette adresse n'est pas valide" }),
  password: z.string()
    .min(1, { message: "Mot de passe requis" })
});

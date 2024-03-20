"use server";

import { currentUser } from "@/modules/auth/user.utils";
import { joinKingdom } from "../kingdom.repository";

export const join = async (kingdomId: string) => {
  const user = await currentUser();
  if (!user?.id) return { error: "Vous devez être connecté pour rejoindre un royaume!" };

  if (user.kingdoms.find(k => k.kingdomId === kingdomId)) return { error: "Vous êtes déjà sur ce royaume!" };

  try {
    await joinKingdom(user.id, kingdomId);
    return { success: "Vous avez bien rejoint ce royaume!" };
  } catch {
    return { error: "Un problème est survenu!" };
  }
}

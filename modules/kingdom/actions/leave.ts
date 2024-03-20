"use server";

import { currentUser } from "@/modules/auth/user.utils";
import { leaveKingdom } from "../kingdom.repository";

export const leave = async (kingdomId: string) => {
  const user = await currentUser();
  if (!user?.id) return { error: "Vous devez être connecté pour quitter un royaume!" };

  if (!user.kingdoms.find(k => k.kingdomId === kingdomId)) return { error: "Vous n'êtes pas sur ce royaume actuellement!" };

  try {
    await leaveKingdom(user.id, kingdomId);
    return { success: "Vous avez bien quitté ce royaume!" };
  } catch {
    return { error: "Un problème est survenu!" };
  }
}

"use server";

import { currentUser } from "@/modules/auth/user.utils";
import { leaveKingdomThenRemoveCamp } from "../kingdom.repository";

export const leave = async (kingdomName: string) => {
  const user = await currentUser();
  if (!user?.username) return { error: "Vous devez être connecté pour quitter un royaume!" };

  if (!user.kingdoms.find(k => k.kingdomName === kingdomName)) return { error: "Vous n'êtes pas sur ce royaume actuellement!" };

  try {
    await leaveKingdomThenRemoveCamp(user.username, kingdomName);
    return { success: "Vous avez bien quitté ce royaume!" };
  } catch {
    return { error: "Un problème est survenu!" };
  }
}

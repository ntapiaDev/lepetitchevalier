"use server";

import { currentUser } from "@/modules/auth/user.utils";
import { joinKingdomThenAddCamp } from "../kingdom.repository";

export const join = async (kingdomName: string) => {
  const user = await currentUser();
  if (!user?.name) return { error: "Vous devez être connecté pour rejoindre un royaume!" };

  if (user.kingdoms.find(k => k.kingdomName === kingdomName)) return { error: "Vous êtes déjà sur ce royaume!" };

  try {
    await joinKingdomThenAddCamp(user.name, kingdomName);
    return { success: "Vous avez bien rejoint ce royaume!" };
  } catch {
    return { error: "Un problème est survenu!" };
  }
}

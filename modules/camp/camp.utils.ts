import { User } from "next-auth";
import { currentUser } from "@/modules/auth/user.utils";

export const currentCamp = async (kingdomName: string) => {
  const user = await currentUser();
  if (!user) return;
  const camp = findCurrentCamp(user, kingdomName);
  return camp;
}

export const findCurrentCamp = (user: User, kingdomName: string) => {
  const camp = user.camps.find(c => c.kingdomName === kingdomName);
  return camp;
}

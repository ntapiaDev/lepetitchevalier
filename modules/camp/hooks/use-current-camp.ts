import { useCurrentUser } from "@/modules/auth/hooks/use-current-user";
import { findCurrentCamp } from "../camp.utils";

export const useCurrentCamp = (kingdomName: string) => {
  const user = useCurrentUser();
  if (!user) return;
  const camp = findCurrentCamp(user, kingdomName);
  return camp;
}

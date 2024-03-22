import { db } from "@/lib/db";

export const getCampByUserAndKingdomName = async (userName: string, kingdomName: string) => {
  const camp = await db.camp.findUnique({
    where: {
      userName_kingdomName: {
        userName,
        kingdomName
      }
    }
  });
  return camp;
}

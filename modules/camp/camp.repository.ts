import { db } from "@/lib/db";

export const getCampByUserAndKingdomId = async (userId: string, kingdomId: string) => {
  const camp = await db.camp.findUnique({
    where: {
      userId_kingdomId: {
        userId,
        kingdomId
      }
    }
  });
  return camp;
}

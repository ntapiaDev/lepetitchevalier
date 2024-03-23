import type { Camp } from "@prisma/client";
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

export const updateCampSinceLastUpdate = async (camp: Camp) => {
  const hoursSinceLastUpdate = (new Date().getTime() - new Date(camp.lastUpdate).getTime()) / 1000 / 60 / 60;

  const updatedCamp = await db.camp.update({
    where: { id: camp.id },
    data: {
      wood: { increment: camp.woodPerHour * hoursSinceLastUpdate },
      stone: { increment: camp.stonePerHour * hoursSinceLastUpdate },
      food: { increment: camp.foodPerHour * hoursSinceLastUpdate },
      lastUpdate: new Date()
    }
  });
  return updatedCamp;
}

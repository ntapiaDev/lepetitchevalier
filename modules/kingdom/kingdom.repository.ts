import { db } from "@/lib/db";

export const addKingdom = async (name: string, speed?: number) => {
  await db.kingdom.create({
    data: {
      name,
      speed,
      createdAt: new Date()
    }
  });
}

export const getKingdomById = async (id: string) => {
  const kingdoms = await db.kingdom.findUnique({
    where: { id },
    include: {
      users: {
        select: {
          userName: true,
          joinedAt: true
        }
      }
    }
  });
  return kingdoms;
}

export const getKingdomByName = async (name: string) => {
  const kingdoms = await db.kingdom.findFirst({
    where: { name },
    include: {
      users: {
        select: {
          userName: true,
          joinedAt: true
        }
      }
    }
  });
  return kingdoms;
}

export const getKingdoms = async () => {
  const kingdoms = await db.kingdom.findMany({
    include: {
      users: {
        select: {
          userName: true,
          joinedAt: true
        }
      }
    }
  });
  return kingdoms;
}

export const joinKingdomThenAddCamp = async (userName: string, kingdomName: string) => {
  await db.$transaction([
    db.usersOnKingdoms.create({
      data: {
        userName,
        kingdomName,
        joinedAt: new Date()
      }
    }),
    db.camp.create({
      data: {
        userName,
        kingdomName,
        lastUpdate: new Date()
      }
    })
  ]);
}

export const leaveKingdomThenRemoveCamp = async (userName: string, kingdomName: string) => {
  await db.$transaction([
    db.usersOnKingdoms.delete({
      where: {
        userName_kingdomName: { userName, kingdomName }
      }
    }),
    db.camp.delete({
      where: {
        userName_kingdomName: { userName, kingdomName }
      }
    })
  ]);
}

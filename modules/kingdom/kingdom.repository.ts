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
          userId: true,
          joinedAt: true
        }
      }
    }
  });
  return kingdoms;
}

export const getKingdomByName = async (name: string) => {
  const kingdoms = await db.kingdom.findFirst({
    where: {
      name: {
        equals: name,
        mode: 'insensitive'
      }
    },
    include: {
      users: {
        select: {
          userId: true,
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
          userId: true,
          joinedAt: true
        }
      }
    }
  });
  return kingdoms;
}

export const joinKingdomThenAddCamp = async (userId: string, kingdomId: string) => {
  await db.$transaction([
    db.usersOnKingdoms.create({
      data: {
        userId,
        kingdomId,
        joinedAt: new Date()
      }
    }),
    db.camp.create({
      data: {
        userId,
        kingdomId,
        lastUpdate: new Date()
      }
    })
  ]);
}

export const leaveKingdomThenRemoveCamp = async (userId: string, kingdomId: string) => {
  await db.$transaction([
    db.usersOnKingdoms.delete({
      where: {
        userId_kingdomId: { userId, kingdomId }
      }
    }),
    db.camp.delete({
      where: {
        userId_kingdomId: { userId, kingdomId }
      }
    })
  ]);
}

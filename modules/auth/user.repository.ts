import { db } from "@/lib/db";

export const addUser = async (
  name: string,
  email: string,
  password: string
) => {
  await db.user.create({
    data: {
      name,
      email,
      password
    }
  });
}

export const getUserByEmail = async (email: string) => {
  const user = await db.user.findUnique({
    where: { email },
    include: {
      kingdoms: {
        select: {
          kingdomId: true,
          joinedAt: true
        }
      }
    }
  });
  return user;
}

export const getUserById = async (id: string) => {
  const user = await db.user.findUnique({
    where: { id },
    include: {
      kingdoms: {
        select: {
          kingdomId: true,
          joinedAt: true
        }
      }
    }
  });
  return user;
}

export const verifyEmail = async (id: string) => {
  await db.user.update({
    where: { id },
    data: { emailVerified: new Date() }
  });
}

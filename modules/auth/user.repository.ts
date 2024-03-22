import { db } from "@/lib/db";

export const addUser = async (
  username: string,
  email: string,
  password: string
) => {
  await db.user.create({
    data: {
      username,
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
          kingdomName: true,
          joinedAt: true
        }
      },
      camps: true
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
          kingdomName: true,
          joinedAt: true
        }
      },
      camps: true
    }
  });
  return user;
}

export const getUserByUsername = async (username: string) => {
  const user = await db.user.findUnique({ where: { username } });
  return user;
}

export const updateUsername = async (id: string, username: string) => {
  await db.user.update({
    where: { id },
    data: { username }
  });
}

export const verifyEmail = async (id: string) => {
  await db.user.update({
    where: { id },
    data: { emailVerified: new Date() }
  });
}

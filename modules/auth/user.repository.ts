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
  try {
    const user = await db.user.findUnique({ where: { email } });
    return user;
  } catch {
    return null;
  }
}

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({ where: { id } });
    return user;
  } catch {
    return null;
  }
}

export const verifyEmail = async (id: string) => {
  await db.user.update({
    where: { id },
    data: { emailVerified: new Date() }
  });
}

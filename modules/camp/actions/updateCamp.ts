"use server";

import type { Camp } from "@prisma/client";
import { updateCampSinceLastUpdate } from "../camp.repository";

export const updateCamp = async (camp: Camp) => {
  const updatedCamp = await updateCampSinceLastUpdate(camp);
  return { success: updatedCamp };
}

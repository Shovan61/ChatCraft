"use server";

import { client } from "@/lib/prisma";

export const findUser = async (clerkId: string) => {
  try {
    return await client.user.findUnique({
      where: {
        clerkId,
      },
      include: {
        integrations: {
          select: {
            id: true,
            token: true,
            expiresAt: true,
            name: true,
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Error in findUser function");
  }
};

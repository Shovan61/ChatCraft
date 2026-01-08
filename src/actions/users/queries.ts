"use server";

import { client } from "@/lib/prisma";

export const findUser = async (clerkId: string) => {
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
};

export const createUser = async (
  clerkId: string,
  firstName: string,
  lastName: string,
  email: string
) => {
  return await client.user.create({
    data: {
      clerkId,
      firstName,
      lastName,
      email,
    },
    select: {
      firstName: true,
      lastName: true,
    },
  });
};

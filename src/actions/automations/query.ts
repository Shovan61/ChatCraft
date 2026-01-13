import { client } from "@/lib/prisma";

export const getAutomations = async (clerkId: string) => {
  return await client.user.findUnique({
    where: { clerkId },
    select: {
      automations: {
        orderBy: {
          createdAt: "asc",
        },
        include: {
          keywords: true,
          listner: true,
        },
      },
    },
  });
};

export const createAutomation = async (clerkId: string, id?: string) => {
  try {
    const result = await client.user.update({
      where: {
        clerkId,
      },
      data: {
        automations: {
          create: {
            ...(id && { id }),
          },
        },
      },
    });
    if (result) {
      return { status: 200, data: result };
    }
    return { status: 404, data: undefined };
  } catch (error) {
    console.log(error);

    return { status: 500, data: undefined };
  }
};

export const findAutomation = async (id: string) => {
  return await client.automation.findUnique({
    where: {
      id,
    },
    include: {
      keywords: true,
      trigger: true,
      posts: true,
      listner: true,
      user: {
        select: {
          integrations: true,
        },
      },
    },
  });
};

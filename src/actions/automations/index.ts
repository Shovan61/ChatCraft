import { log } from "node:console";
import { onCurrentUser } from "../users";
import { getAutomations } from "./query";

export const getAllAutomations = async () => {
  const user = await onCurrentUser();
  try {
    const automations = await getAutomations(user.id);

    if (automations) return { status: 200, data: automations.automations };

    return { status: 404, data: [] };
  } catch (error) {
    console.log(error);

    return { status: 500, data: [] };
  }
};

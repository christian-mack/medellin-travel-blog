"use server";

import { loops } from "@/utils/loops";

export default async function createNewSubscriber(data: FormData) {
  const newSubscriber = {
    email: data.get("email") as string,
    properties: {
      firstName: data.get("firstName") as string,
      lastName: data.get("lastName") as string,
      userGroup: data.get("userGroup") as string,
    },
  };

  const response = await loops.createContact(
    newSubscriber.email,
    newSubscriber.properties
  );

  return response;
}

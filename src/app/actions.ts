"use server";

import { prisma } from "~/utils/db";

export async function createUser() {
  console.log("creating user..."); // this would be replaced by prisma.user.create()

  // update config metadata
  await prisma.setupMetadata.update({
    where: { id: 1 },
    data: {
      configured: true,
      configuredAt: new Date(),
    },
  });

  const updatedMetadata = await prisma.setupMetadata.findFirst();
  console.log("updated metadata: ", updatedMetadata);
}

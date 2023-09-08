import { SetupMetadata } from "@prisma/client";
import { prisma } from "~/utils/db";

export default async function configStatus(): Promise<SetupMetadata> {
  let setupMetadata = await prisma.setupMetadata.findFirst();
  console.log("setupMetadata found in query...", setupMetadata);

  // if no setup metadata exists, seed it
  if (!setupMetadata) {
    setupMetadata = await prisma.setupMetadata.create({
      data: {
        id: 1,
        configured: false,
        initializedAt: new Date(),
      },
    });
    console.log("setupMetadata just seeded...", setupMetadata);
  }

  return setupMetadata;
}

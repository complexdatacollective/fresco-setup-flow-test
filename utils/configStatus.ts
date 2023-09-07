import { prisma } from "~/utils/db";

export default async function configStatus(): Promise<string> {
  let setupMetadata = await prisma.setupMetadata.findFirst();

  if (!setupMetadata) {
    console.log("no setupMetadata found, seeding...");
    setupMetadata = await prisma.setupMetadata.create({
      data: {
        configured: false,
        initializedAt: new Date(),
      },
    });
    console.log("Seeded setupMetadata");
  }

  const isExpired = false; // todo: check if expired (> 5 minutes since initializedAt)

  // not configured, not expired
  if (!setupMetadata?.configured && !isExpired) {
    return "Please create a user to finish configuration.";
  }

  // not configured, expired
  if (!setupMetadata?.configured && isExpired) {
    return "The configuration is expired. Please reinitialize";
  }

  // configured
  return `configured at ${setupMetadata?.configuredAt}`;
}

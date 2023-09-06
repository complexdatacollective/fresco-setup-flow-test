import { prisma } from "~/utils/db";

export default async function configStatus(): Promise<string> {
  const setupMetadata = await prisma.setupMetadata.findFirst();
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

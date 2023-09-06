import { prisma } from "~/utils/db";

async function main() {
  // seed setupMetadata when app is first configured
  console.log("Seeding...");
  await prisma.setupMetadata.create({
    data: {
      configured: false,
      initializedAt: new Date(),
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client';
import { curriculum } from './curriculum';
const connectionString = process.env.DATABASE_URL;
if (!connectionString)
  throw new Error('DATABASE_URL is required to seed the database');
const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString }),
});
async function seed() {
  for (const { topics, ...data } of curriculum) {
    await prisma.$transaction(async (tx) => {
      const module = await tx.module.upsert({
        where: { slug: data.slug },
        create: { ...data, isSystem: true },
        update: { ...data, isSystem: true },
      });
      for (const topic of topics) {
        const values = {
          ...topic,
          objectives: [...topic.objectives],
          moduleId: module.id,
        };
        await tx.topic.upsert({
          where: { moduleId_key: { moduleId: module.id, key: topic.key } },
          create: values,
          update: values,
        });
      }
    });
  }
  console.info(
    `Seeded ${curriculum.length} modules; existing user progress preserved.`,
  );
}
seed()
  .catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());

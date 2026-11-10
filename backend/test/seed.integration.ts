import 'dotenv/config';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { randomUUID } from 'node:crypto';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client';
import { curriculum } from '../prisma/curriculum';
const connectionString = process.env.DATABASE_URL;
if (!connectionString) throw new Error('DATABASE_URL is required');
const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString }),
});
const userId = randomUUID();
async function verify() {
  execFileSync('npm', ['run', 'db:seed'], { stdio: 'inherit' });
  const slugs = curriculum.map((module) => module.slug);
  const before = await prisma.topic.findMany({
    where: { module: { slug: { in: slugs } } },
    orderBy: { id: 'asc' },
  });
  assert.equal(before.length, 44);
  await prisma.user.create({
    data: {
      id: userId,
      email: `seed-test-${userId}@example.invalid`,
      passwordHash: 'integration-test-not-a-login',
    },
  });
  const progress = await prisma.userTopicProgress.create({
    data: {
      userId,
      topicId: before[0].id,
      isCompleted: true,
      completedAt: new Date(),
    },
  });
  execFileSync('npm', ['run', 'db:seed'], { stdio: 'inherit' });
  const after = await prisma.topic.findMany({
    where: { module: { slug: { in: slugs } } },
    orderBy: { id: 'asc' },
  });
  assert.deepEqual(
    after.map((topic) => topic.id),
    before.map((topic) => topic.id),
  );
  assert.equal(
    await prisma.module.count({ where: { slug: { in: slugs } } }),
    8,
  );
  assert.deepEqual(
    await prisma.userTopicProgress.findUniqueOrThrow({
      where: { id: progress.id },
    }),
    progress,
  );
  console.info(
    'Seed integration passed: stable topic IDs, no duplicates, user progress preserved.',
  );
}
verify()
  .catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.user.deleteMany({ where: { id: userId } });
    await prisma.$disconnect();
  });

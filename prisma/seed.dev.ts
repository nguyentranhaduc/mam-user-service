import 'dotenv/config';

import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.users.createMany({
    data: [
      {
        email: 'alice@example.com',
        passwordHash: 'hashed-password-1',
        firstName: 'Alice',
        lastName: 'Nguyen',
      },
      {
        email: 'bob@example.com',
        passwordHash: 'hashed-password-2',
        firstName: 'Bob',
        lastName: 'Tran',
      },
    ],
  });
}

try {
  await main();
  await prisma.$disconnect();
} catch (err) {
  console.error(err);
  await prisma.$disconnect();
  process.exit(1);
}

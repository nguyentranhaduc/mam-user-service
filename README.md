# MAM System - The User Microservice

## Setup Database

```
npx prisma migrate dev --name init
npx tsx prisma/seed.ts
```
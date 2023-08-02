import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as 
{
    prisma?: PrismaClient | undefined
}


export const primsa = 
globalForPrisma.prisma ?? 
new PrismaClient({
    log: ["query", "info", "warn"]
});

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = primsa
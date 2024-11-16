import { hashSync } from "bcrypt";
import { prisma } from "./prisma-client";

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.log(e);
  }
}
async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "Ибрагим Барашников",
        email: "ibragim@mail.ru",
        password: hashSync("11111", 10),
        verified: true,
        role: "USER",
      },
      {
        fullName: "Кира Ливенцова",
        email: "luna@mail.ru",
        password: hashSync("12345678", 10),
        verified: true,
        role: "ADMIN",
      },
    ],
  });
}
async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
}

main().then(async () => {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
});

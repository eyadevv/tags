import { Prisma, PrismaClient } from "@prisma/client";

const PRISMA = new PrismaClient();

async function main() {
  await PRISMA.$connect();

  try {
    await PRISMA.tag
      .createMany({
        skipDuplicates: true,
        data: [
          {
            accountNumber: "123123",
            bankName: "bankak",
            name: "Eyad Faisal",
            phoneNumber: "0967098861",
            type: "FREE",
            creatorName: "eyad faisal",
            style: {
              bgColor: "white",
              bankRounded: "full",
              textColor: "red",
            },
          },
          {
            accountNumber: "4556454",
            bankName: "fawry",
            name: "Eyad Faisal",
            phoneNumber: "0967098861",
            type: "FREE",
            creatorName: "eyad faisal",
            style: {
              bgColor: "black",
              bankRounded: "full",
              textColor: "red",
            },
          },
        ],
      })
      .then((res) => console.log(res));
  } catch (error) {
    console.log(error);
  }
}

main();

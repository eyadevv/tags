import { TAGSTYPE, PrismaClient } from "@prisma/client";

const PRISMA = new PrismaClient();
async function main() {
  await PRISMA.$connect();

  try {
    await PRISMA.tag
      .createMany({
        skipDuplicates: true,
        data: [...data],
      })
      .then((res) => console.log(res));
  } catch (error) {
    console.log(error);
  }
}

main();
const data: any = [
  {
    bg: "#f44336",
    bank: "bankak",
    bgStyle: "gradient",
    bankRadius: "5",
    tagRadius: "3",
  },
  // generate 10 more Tags with more complex graidents
  {},
];

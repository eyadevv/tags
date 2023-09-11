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
    slug: "pinky",
    bank: "ocash",
    type: "FREE",

    font: "mono",
    icons: false,
    barcode: true,
  },
  {
    slug: "crazy",
    bank: "ocash",

    type: "PAID",

    font: "mono",
    icons: false,
    barcode: true,
  },
  {
    slug: "bluetown",
    bank: "fawry",
    type: "PREMIUM",
    creatorName: "eyad faisal",
    text: "white",
    font: "mono",
    icons: false,
    barcode: true,
  },
  {
    slug: "redsky",
    type: "FREE",
    creatorName: "eyad faisal",
    text: "white",
    font: "mono",
    icons: false,
    barcode: true,
  },
  {
    slug: "fancycake",
    bank: "ocash",
    type: "PAID",
    font: "mono",
    icons: false,
    barcode: true,
  },
  {
    slug: "outcast",
    bank: "bankak",
    creatorName: "eyad faisal",

    type: "PAID",
    font: "mono",
    icons: false,
    barcode: true,
  },
];

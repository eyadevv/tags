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
    bank: "ocash",
    font: "mono",
    icons: false,
    barcode: true,
  },
  {
    bank: "ocash",
    font: "mono",
    icons: false,
    barcode: true,
  },
  {
    bank: "fawry",
    text: "white",
    font: "mono",
    icons: false,
    barcode: true,
  },
  {
    text: "white",
    font: "mono",
    icons: false,
    barcode: true,
  },
  {
    bank: "ocash",
    font: "mono",
    icons: false,
    barcode: true,
  },
  {
    bank: "bankak",
    font: "mono",
    icons: false,
    barcode: true,
  },
];

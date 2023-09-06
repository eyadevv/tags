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
    account: "123123",
    bank: "bankak",
    name: "ahmed adam ali",
    phone: "0967098861",
    type: "FREE",
    creatorName: "eyad faisal",
    style: {
      bg: "bg-pink-900",
      bank: "full",
      text: "white",
      font: "mono",
      icons: false,
      barcode: true,
    },
  },
  {
    slug: "crazy",
    account: "123123",
    bank: "ocash",
    name: "ahmed adam ali",
    phone: "0967098861",
    type: "PAID",
    creatorName: "eyad faisal",
    style: {
      bg: "bg-gradient-to-bl from-cyan-900 via-red-600 to-black",
      bank: "full",
      text: "white",
      font: "mono",
      icons: false,
      barcode: true,
    },
  },
  {
    slug: "bluetown",
    account: "123123",
    bank: "fawry",
    name: "ahmed adam ali",
    phone: "0967098861",
    type: "PREMIUM",
    creatorName: "eyad faisal",
    style: {
      bg: "bg-blue-900",
      bank: "full",
      text: "white",
      font: "mono",
      icons: false,
      barcode: true,
    },
  },
  {
    slug: "redsky",
    account: "123123",
    bank: "bankak",
    name: "ahmed adam ali",
    phone: "0967098861",
    type: "FREE",
    creatorName: "eyad faisal",
    style: {
      bg: "bg-red-900",
      bank: "full",
      text: "white",
      font: "mono",
      icons: false,
      barcode: true,
    },
  },
  {
    slug: "fancycake",
    account: "123123",
    bank: "ocash",
    name: "ahmed adam ali",
    phone: "0967098861",
    type: "PAID",
    creatorName: "eyad faisal",
    style: {
      bg: "bg-gradient-to-br from-purple-900 to-pink-600",
      bank: "full",
      text: "white",
      font: "mono",
      icons: false,
      barcode: true,
    },
  },
  {
    slug: "outcast",
    account: "123123",
    bank: "bankak",
    name: "ahmed adam ali",
    phone: "0967098861",
    type: "PAID",
    creatorName: "eyad faisal",
    style: {
      bg: "bg-gradient-to-br from-red-900 via-white to-black",
      bank: "full",
      text: "white",
      font: "mono",
      icons: false,
      barcode: true,
    },
  },
];

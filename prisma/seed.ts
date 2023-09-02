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
            account: "123123",
            bank: "bankak",
            name: "Eyad Faisal",
            phone: "0967098861",
            type: "PAID",
            creatorName: "eyad faisal",
            style: {
              bg: "white",
              bank: "full",
              text: "red",
              font: "mono",
              icons: true,
              barcode: true,
            },
          },
          {
            account: "4556454",
            bank: "fawry",
            name: "Eyad Faisal",
            phone: "0967098861",
            type: "FREE",
            creatorName: "eyad faisal",
            style: {
              bg: "black",
              bank: "full",
              text: "red",
              font: "mono",
              icons: false,
              barcode: true,
            },
          },
          {
            account: "4556454",
            bank: "fawry",
            name: "ahmed adam ali",
            phone: "0967098861",
            type: "PREMIUM",
            creatorName: "eyad faisal",
            style: {
              bg: "black",
              bank: "full",
              text: "red",
              font: "mono",
              icons: false,
              barcode: true,
            },
          },

          {
            account: "4556454",
            bank: "bankak",
            name: "ahmed adam ali",
            phone: "0967098861",
            type: "PREMIUM",
            creatorName: "eyad faisal",
            style: {
              bg: "red-900",
              bank: "full",
              text: "red",
              font: "mono",
              icons: false,
              barcode: true,
            },
          },
          {
            account: "4556454",
            bank: "fawry",
            name: "ahmed adam ali",
            phone: "0967098861",
            type: "PREMIUM",
            creatorName: "eyad faisal",
            style: {
              bg: "gradient-to-br from-red-900 to-black",
              bank: "full",
              text: "red",
              font: "mono",
              icons: false,
              barcode: true,
            },
          },
          {
            account: "4556454",
            bank: "fawry",
            name: "ahmed adam ali",
            phone: "0967098861",
            type: "PREMIUM",
            creatorName: "eyad faisal",
            style: {
              bg: "cyan-900",
              bank: "full",
              text: "red",
              font: "mono",
              icons: false,
              barcode: true,
            },
          },
          {
            account: "4556454",
            bank: "fawry",
            name: "ahmed adam ali",
            phone: "0967098861",
            type: "PREMIUM",
            creatorName: "eyad faisal",
            style: {
              bg: "secondary",
              bank: "full",
              text: "red",
              font: "mono",
              icons: false,
              barcode: true,
            },
          },
          {
            account: "4556454",
            bank: "fawry",
            name: "ahmed adam ali",
            phone: "0967098861",
            type: "PREMIUM",
            creatorName: "eyad faisal",
            style: {
              bg: "primary",
              bank: "full",
              text: "red",
              font: "mono",
              icons: false,
              barcode: true,
            },
          },
          {
            account: "4556454",
            bank: "fawry",
            name: "ahmed adam ali",
            phone: "0967098861",
            type: "PREMIUM",
            creatorName: "eyad faisal",
            style: {
              bg: "black",
              bank: "full",
              text: "red",
              font: "mono",
              icons: false,
              barcode: true,
            },
          },
          {
            account: "4556454",
            bank: "fawry",
            name: "ahmed adam ali",
            phone: "0967098861",
            type: "PREMIUM",
            creatorName: "eyad faisal",
            style: {
              bg: "purple-900",
              bank: "full",
              text: "red",
              font: "mono",
              icons: false,
              barcode: true,
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

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
    bg: "radial-gradient(circle at center, rgb(0, 0, 0) 0.00%,rgb(0, 75, 255) 15.00%,rgb(0, 75, 255) 20.00%,rgb(0, 0, 0) 30.00%,rgb(0, 75, 255) 41.00%,rgb(0, 0, 0) 53.00%,rgb(0, 75, 255) 67.00%,rgb(0, 0, 0) 77.00%,rgb(0, 0, 0) 87.00%,rgb(0, 26, 255) 100.00%)",
  },
  { bg: "radial-gradient(circle at 50% 50%, #ff0000, #0000ff)" },
  { bg: "radial-gradient(circle at 50% 50%, #00ff00, #ff00ff)" },
  { bg: "radial-gradient(circle at 50% 50%, #ffff00, #00ffff)" },
  { bg: "radial-gradient(circle at 50% 50%, #ff8000, #0080ff)" },
  { bg: "radial-gradient(circle at 50% 50%, #8000ff, #80ff00)" },
  { bg: "radial-gradient(circle at 50% 50%, #ff0080, #00ff80)" },
  { bg: "radial-gradient(circle at 50% 50%, #00ff80, #ff0080)" },
  { bg: "radial-gradient(circle at 50% 50%, #0080ff, #8000ff)" },
  { bg: "radial-gradient(circle at 50% 50%, #00ffff, #ffff00)" },
  { bg: "radial-gradient(circle at 50% 50%, #0000ff, #ff0000)" },
  { bg: "radial-gradient(circle at 50% 50%, #ff0000, #0000ff, #00ff00)" },
  { bg: "radial-gradient(circle at 50% 50%, #00ffff, #ffff00, #ff00ff)" },
  { bg: "radial-gradient(circle at 50% 50%, #ff8000, #0080ff, #8000ff)" },
  { bg: "radial-gradient(circle at 50% 50%, #8000ff, #80ff00, #00ff80)" },
  { bg: "radial-gradient(circle at 50% 50%, #ff0080, #00ff80, #0080ff)" },
  { bg: "radial-gradient(circle at 50% 50%, #00ff80, #ff0080, #80ff00)" },
  { bg: "radial-gradient(circle at 50% 50%, #0080ff, #8000ff, #00ffff)" },
  { bg: "radial-gradient(circle at 50% 50%, #00ffff, #ffff00, #0000ff)" },
  { bg: "radial-gradient(circle at 50% 50%, #0000ff, #ff0000, #00ff00)" },
  {
    bg: "radial-gradient(circle at 50% 50%, #ff0000, #0000ff, #00ffff, #ffff00)",
  },
  ,
  {
    bg: "radial-gradient(circle at center, rgb(0, 0, 0) 0.00%,rgb(233, 0, 255) 16.00%,rgb(0, 0, 0) 30.00%,rgb(233, 0, 255) 41.00%,rgb(0, 0, 0) 53.00%,rgb(226, 0, 255) 67.00%,rgb(0, 0, 0) 77.00%,rgb(0, 0, 0) 87.00%,rgb(255, 0, 255) 100.00%)",
  },
  {
    bg: "radial-gradient(circle at center, rgb(0, 0, 0) 0.00%,rgb(233, 0, 255) 16.00%,rgb(0, 0, 0) 30.00%,rgb(233, 0, 255) 41.00%,rgb(0, 0, 0) 53.00%,rgb(226, 0, 255) 67.00%,rgb(0, 0, 0) 77.00%,rgb(0, 0, 0) 87.00%,rgb(255, 0, 255) 100.00%)",
  },
  {
    bg: "radial-gradient(circle at center, rgb(0, 0, 0) 0.00%,rgb(233, 0, 255) 16.00%,rgb(0, 0, 0) 30.00%,rgb(233, 0, 255) 41.00%,rgb(0, 0, 0) 53.00%,rgb(226, 0, 255) 67.00%,rgb(0, 0, 0) 77.00%,rgb(0, 0, 0) 87.00%,rgb(255, 0, 255) 100.00%)",
  },
];

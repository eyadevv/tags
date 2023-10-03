"use server";
import PRISMA from "@/lib/prisma";
export default async function FetchTag(id: number) {
  const tag = await PRISMA.tag
    .findUnique({
      where: {
        id,
      },
    })
    .then((res) => res)
    .catch(() => null);

  await PRISMA.tag.update({
    where: {
      id,
    },
    data: {
      downloads: Number(tag?.downloads) + 1,
    },
  });

  return 200;
}

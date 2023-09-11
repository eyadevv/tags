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

  return tag;
}

"use server";
import PRISMA from "@/lib/prisma";
export default async function FetchTag() {
  const tag = await PRISMA.tag
    .findUnique({
      where: {
        id: 1,
      },
    })
    .then((res) => res)
    .catch((err) => null);

  return tag;
}

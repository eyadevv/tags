"use server";
import PRISMA from "@/lib/prisma";
export default async function FetchTag(id: number | string) {
  let res;
  try {
    if (id === "new") {
      return 200;
    } else {
      const downloads = await PRISMA.tag
        .findUnique({
          where: {
            id: Number(id),
          },
        })
        .then((res) => Number(res?.downloads))
        .catch(() => 0);
      await PRISMA.tag.update({
        where: {
          id: Number(id),
        },
        data: {
          downloads: downloads + 1,
        },
      });
    }
    return 200;
  } catch (error) {
    return 500;
  }
}

"use server";
import PRISMA from "@/lib/prisma";
export default async function Load(id: number) {
  try {
    const res = await PRISMA.tag.findMany({
      skip: id,
      take: 30,
    });
    return res;
  } catch (error) {
    console.log(error);
    return [];
  }
}

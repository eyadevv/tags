"use server";
import PRISMA from "@/lib/prisma";
import { BGSTYLE } from "@prisma/client";
export default async function PublishTag(data: any) {
  const { bank, tagRadius, bgStyle, bg, type, bankRadius, color } = data;
  let status;
  const tag = await PRISMA.tag
    .create({
      data: {
        bank,
        tagRadius,
        bgStyle,
        bg,
        type,
        bankRadius,
        color,
      },
    })
    .then((res) => {
      status = "Success";
      return res;
    })
    .catch(
      (err) =>
        (status = "Found a tag with the same Design ,please change you design")
    );
  return status;
}

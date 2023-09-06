import PRISMA from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  Req: Request,
  params: { params: { id: number | string } }
) {
  const id = params.params.id;
  try {
    const tag = await PRISMA.tag
      .findUnique({
        where: {
          id: Number(id),
        },
      })
      .then((res) => res)
      .catch((err) => {
        throw new Error(err);
      });

    return NextResponse.json({
      tag,
    });
  } catch (err) {
    return NextResponse.json({
      msg: "There was an error",
    });
  }
}

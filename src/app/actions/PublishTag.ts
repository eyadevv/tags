"use server";
import * as FS from "node:fs/promises";
import PRISMA from "@/lib/prisma";
export default async function PublishTag(data: any) {
  const write = await FS.writeFile("test.png", Buffer.from(data), "base64");
  return write;
}

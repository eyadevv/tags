"use server";

export default async (bg: string) => {
  if (bg.includes("gradient")) {
    return "Not allowed";
  } else {
    return 200;
  }
};

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
  { bg: "linear-gradient(90deg, #000000, #1f1f1f)" }, // Black gradient
  { bg: "#ff0000" }, // Solid red
  { bg: "#0000ff" }, // Solid blue
  { bg: "#00ff00" }, // Solid green
  { bg: "#ff00ff" }, // Solid magenta
  { bg: "linear-gradient(90deg, #ff8000, #0080ff)" }, // Orange to blue gradient
  { bg: "linear-gradient(90deg, #8000ff, #80ff00)" }, // Purple to green gradient
  { bg: "#ff0080" }, // Solid pink
  { bg: "#00ff80" }, // Solid light green
  { bg: "#ffff00" }, // Solid yellow
  { bg: "#0080ff" }, // Solid light blue
  { bg: "linear-gradient(90deg, #ff0000, #0000ff)" }, // Red to blue gradient
  { bg: "linear-gradient(90deg, #00ffff, #ff00ff)" }, // Cyan to magenta gradient
  { bg: "#f0f0f0" }, // Solid light grey
  { bg: "linear-gradient(90deg, #ff8000, #8000ff)" }, // Orange to purple gradient
  { bg: "#8000ff" }, // Solid purple
  { bg: "linear-gradient(90deg, #ff0080, #00ff80)" }, // Pink to green gradient
  { bg: "#00ffff" }, // Solid cyan
  { bg: "linear-gradient(90deg, #0000ff, #ff0000)" }, // Blue to red gradient
  { bg: "#ff0000" }, // Solid bright red
  { bg: "linear-gradient(90deg, #ff0000, #00ffff)" }, // Red to cyan gradient
  { bg: "#ff00ff" }, // Solid magenta
  { bg: "#1f1f1f" }, // Solid dark grey

  // Adding 100 more tags
  { bg: "#c0c0c0" }, // Solid silver
  { bg: "#ff1493" }, // Solid deep pink
  { bg: "#4682b4" }, // Solid steel blue
  { bg: "#daa520" }, // Solid goldenrod
  { bg: "#ff4500" }, // Solid orange red
  { bg: "linear-gradient(90deg, #8a2be2, #ff6347)" }, // Blue-violet to tomato gradient
  { bg: "linear-gradient(90deg, #ffdead, #8b0000)" }, // Navajo white to dark red gradient
  { bg: "#6495ed" }, // Solid cornflower blue
  { bg: "#32cd32" }, // Solid lime green
  { bg: "#ba55d3" }, // Solid medium orchid
  { bg: "linear-gradient(90deg, #7b68ee, #87ceeb)" }, // Medium slate blue to sky blue gradient
  { bg: "#00fa9a" }, // Solid medium spring green
  { bg: "linear-gradient(90deg, #ff7f50, #6495ed)" }, // Coral to cornflower blue gradient
  { bg: "#dc143c" }, // Solid crimson
  { bg: "linear-gradient(90deg, #48d1cc, #ff1493)" }, // Medium turquoise to deep pink gradient
  { bg: "#8b008b" }, // Solid dark magenta
  { bg: "#ff6347" }, // Solid tomato
  { bg: "#4682b4" }, // Solid steel blue
  { bg: "#ff69b4" }, // Solid hot pink
  { bg: "#2e8b57" }, // Solid sea green
  { bg: "#20b2aa" }, // Solid light sea green
  { bg: "#00ced1" }, // Solid dark turquoise
  { bg: "#d2691e" }, // Solid chocolate
  { bg: "#556b2f" }, // Solid dark olive green
  { bg: "linear-gradient(90deg, #ff4500, #ff8c00)" }, // Orange red to dark orange gradient
  { bg: "#b22222" }, // Solid firebrick
  { bg: "#9932cc" }, // Solid dark orchid
  { bg: "#4169e1" }, // Solid royal blue
  { bg: "#ffdab9" }, // Solid peach puff
  { bg: "linear-gradient(90deg, #3cb371, #20b2aa)" }, // Medium sea green to light sea green gradient
  { bg: "#7fffd4" }, // Solid aquamarine
  { bg: "#deb887" }, // Solid burlywood
  { bg: "#ffd700" }, // Solid gold
  { bg: "#adff2f" }, // Solid green yellow
  { bg: "#ff1493" }, // Solid deep pink
  { bg: "linear-gradient(90deg, #87cefa, #4682b4)" }, // Light sky blue to steel blue gradient
  { bg: "#ffdead" }, // Solid navajo white
  { bg: "#8b4513" }, // Solid saddle brown
  { bg: "#ffb6c1" }, // Solid light pink
  { bg: "#8fbc8f" }, // Solid dark sea green
  { bg: "#bdb76b" }, // Solid dark khaki
  { bg: "#ee82ee" }, // Solid violet
  { bg: "linear-gradient(90deg, #ff00ff, #dda0dd)" }, // Magenta to plum gradient
  { bg: "#2f4f4f" }, // Solid dark slate grey
  { bg: "#00bfff" }, // Solid deep sky blue
  { bg: "#f5deb3" }, // Solid wheat
  { bg: "#fafad2" }, // Solid light goldenrod yellow
  { bg: "#5f9ea0" }, // Solid cadet blue
  { bg: "linear-gradient(90deg, #ff4500, #ff1493)" }, // Orange red to deep pink gradient
  { bg: "#ffefd5" }, // Solid papaya whip
  { bg: "#ff4500" }, // Solid orange red
  { bg: "#ff69b4" }, // Solid hot pink
  { bg: "#483d8b" }, // Solid dark slate blue
  { bg: "#dda0dd" }, // Solid plum
  { bg: "linear-gradient(90deg, #40e0d0, #ff6347)" }, // Turquoise to tomato gradient
  { bg: "#4b0082" }, // Solid indigo
  { bg: "#ff1493" }, // Solid deep pink
  { bg: "#bc8f8f" }, // Solid rosy brown
  { bg: "#8a2be2" }, // Solid blue violet
  { bg: "#cd5c5c" }, // Solid indian red
  { bg: "#9400d3" }, // Solid dark violet
  { bg: "linear-gradient(90deg, #ff8c00, #ff6347)" }, // Dark orange to tomato gradient
  { bg: "#98fb98" }, // Solid pale green
  { bg: "#66cdaa" }, // Solid medium aquamarine
  { bg: "#00ff7f" }, // Solid spring green
  { bg: "#7b68ee" }, // Solid medium slate blue
  { bg: "#ff4500" }, // Solid orange red
  { bg: "#daa520" }, // Solid goldenrod
  { bg: "linear-gradient(90deg, #228b22, #32cd32)" }, // Forest green to lime green gradient
  { bg: "#ff00ff" }, // Solid magenta
  { bg: "#f0e68c" }, // Solid khaki
  { bg: "#9932cc" }, // Solid dark orchid
  { bg: "linear-gradient(90deg, #40e0d0, #ee82ee)" }, // Turquoise to violet gradient
  { bg: "#8b008b" }, // Solid dark magenta
  { bg: "#ff69b4" }, // Solid hot pink
  { bg: "#7fff00" }, // Solid chartreuse
  { bg: "#8a2be2" }, // Solid blue violet
  { bg: "#ffdead" }, // Solid navajo white
  { bg: "#dc143c" }, // Solid crimson
  { bg: "#00ced1" }, // Solid dark turquoise
  { bg: "linear-gradient(90deg, #ff6347, #ff7f50)" }, // Tomato to coral gradient
  { bg: "#d8bfd8" }, // Solid thistle
  { bg: "#f08080" }, // Solid light coral
  { bg: "#8b4513" }, // Solid saddle brown
  { bg: "#daa520" }, // Solid goldenrod
  { bg: "#ff4500" }, // Solid orange red
  { bg: "#fa8072" }, // Solid salmon
  { bg: "#ff6347" }, // Solid tomato
];

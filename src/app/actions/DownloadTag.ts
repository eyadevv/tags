"use server";
import { CanvasRenderingContext2D, createCanvas, loadImage } from "canvas"; // Import from the default canvas package
import { NextResponse } from "next/server";

// Function to extract colors from a CSS linear gradient string
function parseGradient(gradient: string) {
  const regex = /rgb\((\d+), (\d+), (\d+)\)(?: (\d+)%|)/g;
  let colors = [];
  let match;

  while ((match = regex.exec(gradient)) !== null) {
    colors.push(`rgba(${match[1]}, ${match[2]}, ${match[3]}, 1)`);
  }

  return colors;
}

export default async function FetchTag(
  id: any,
  state: {
    slug: any;
    bg: any;
    bgStyle: any;
    bank: any;
    account: any;
    name: any;
    phone: any;
    bankRadius: any;
    tagRadius: any;
    color: any;
    branch: any;
  }
) {
  const width = 360;
  const height = 360;

  const {
    slug,
    bg,
    bgStyle,
    bank,
    account,
    name,
    phone,
    bankRadius,
    tagRadius,
    color,
    branch,
  } = state;

  // Create canvas
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");
  console.log(state);

  // Set the background color or gradient
  if (bgStyle === "GRADIENT" && bg.startsWith("linear-gradient")) {
    const colors = parseGradient(bg); // Extract colors from gradient
    const gradient = ctx.createLinearGradient(0, 0, width, height);

    // Add colors to the gradient
    colors.forEach((color, index) => {
      const position = index / (colors.length - 1); // Calculate the position for the gradient
      gradient.addColorStop(position, color);
    });

    ctx.fillStyle = gradient;
  } else {
    // If it's not a gradient, use a solid color
    ctx.fillStyle = bg || "#4c4c4c"; // Default to dark gray if no bg
  }

  ctx.fillRect(0, 0, width, height); // Fill the background

  // Draw rounded rectangle with specified border radius
  drawRoundedRect(ctx, 0, 0, width, height, tagRadius || 100);

  // Draw a circle for the bank logo
  const circleX = width / 2;
  const circleY = 70; // Position closer to the top
  const circleRadius = bankRadius || 50;

  ctx.beginPath();
  ctx.arc(circleX, circleY, circleRadius, 0, Math.PI * 2, true); // Draw full circle
  ctx.fillStyle = "#ffffff"; // White color for the circle
  ctx.fill();
  ctx.closePath();

  // Set text color
  ctx.fillStyle = color || "#ffffff"; // Use provided text color or default to white

  // Account number
  ctx.font = "bold 30px Arial";
  ctx.textAlign = "center";
  ctx.fillText(account, width / 2, 180); // Use account from state

  // Account holder's name
  ctx.font = "25px Arial";
  ctx.fillText(name, width / 2, 230); // Use name from state

  // Account holder's mobile number
  ctx.font = "20px Arial";
  ctx.fillText(phone, width / 2, 280); // Use phone from state

  // Optionally draw the branch if it exists
  if (branch) {
    ctx.font = "20px Arial";
    ctx.fillText(branch, width / 2, 310); // Use branch from state
  }

  // Create a Data URL from the canvas
  const dataUrl = canvas.toDataURL("image/png");

  // Return the Data URL
  return dataUrl;
}

// Function to draw a rounded rectangle
function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  ctx.fill();
}

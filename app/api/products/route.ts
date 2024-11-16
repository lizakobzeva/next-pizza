import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
  const products = prisma.product.findMany();
  return NextResponse.json(products);
}

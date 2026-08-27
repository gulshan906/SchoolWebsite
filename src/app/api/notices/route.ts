import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "notices",
      "notices.json"
    );

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({
        notices: [],
      });
    }

    const file = fs.readFileSync(filePath, "utf8");
    const notices = JSON.parse(file);

    return NextResponse.json({
      notices: Array.isArray(notices) ? notices : [],
    });
  } catch (error) {
    console.error("Notice API Error:", error);

    return NextResponse.json(
      {
        notices: [],
      },
      {
        status: 500,
      }
    );
  }
}

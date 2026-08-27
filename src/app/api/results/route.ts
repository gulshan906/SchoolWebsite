import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const resultsFolder = path.join(
      process.cwd(),
      "public",
      "results",
    );

    if (!fs.existsSync(resultsFolder)) {
      return NextResponse.json({
        results: [],
      });
    }

    const files = fs
      .readdirSync(resultsFolder, {
        withFileTypes: true,
      })
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .filter(
        (file) =>
          path.extname(file).toLowerCase() === ".pdf",
      )
      .sort((a, b) =>
        a.localeCompare(b, undefined, {
          numeric: true,
          sensitivity: "base",
        }),
      );

    const results = files.map((file) => ({
      name: file,
      url: `/results/${encodeURIComponent(file)}`,
    }));

    return NextResponse.json({
      results,
    });
  } catch (error) {
    console.error("Results API Error:", error);

    return NextResponse.json(
      {
        results: [],
      },
      {
        status: 500,
      },
    );
  }
}

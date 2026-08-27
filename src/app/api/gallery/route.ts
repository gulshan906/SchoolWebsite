import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const IMAGE_EXTENSIONS = [
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
];

const VIDEO_EXTENSIONS = [
  ".mp4",
  ".webm",
  ".mov",
];

export async function GET() {
  try {
    const galleryFolder = path.join(
      process.cwd(),
      "public",
      "images",
      "gallery",
    );

    if (!fs.existsSync(galleryFolder)) {
      return NextResponse.json({ items: [] });
    }

    const files = fs
      .readdirSync(galleryFolder, { withFileTypes: true })
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name);

    const items = files
      .filter((file) => {
        const ext = path.extname(file).toLowerCase();

        return (
          IMAGE_EXTENSIONS.includes(ext) ||
          VIDEO_EXTENSIONS.includes(ext)
        );
      })
      .sort((a, b) =>
        a.localeCompare(b, undefined, {
          numeric: true,
          sensitivity: "base",
        }),
      )
      .map((file) => {
        const ext = path.extname(file).toLowerCase();

        return {
          type: VIDEO_EXTENSIONS.includes(ext)
            ? "video"
            : "image",
          src: `/images/gallery/${encodeURIComponent(file)}`,
          name: file,
        };
      });

    return NextResponse.json({ items });
  } catch (error) {
    console.error("Gallery API Error:", error);

    return NextResponse.json(
      { items: [] },
      { status: 500 },
    );
  }
}

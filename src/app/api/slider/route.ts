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

const originalSlideText: Record<
  string,
  {
    title: string;
    text: string;
  }
> = {
  "slide-1.jpg": {
    title: "Welcome to Shiv Gurukul Public School",
    text: "Every child has the potential to shine.",
  },

  "slide-2.jpg": {
    title: "Learning for a Bright Future",
    text: "Strong academics, values, confidence and holistic development.",
  },

  "slide-3.jpg": {
    title: "Dedicated Teachers",
    text: "Guiding every learner with knowledge, care and encouragement.",
  },

  "slide-4.jpg": {
    title: "Learning Beyond the Classroom",
    text: "Sports, activities and creative experiences for every child.",
  },

  "slide-5.jpg": {
    title: "Growing Together",
    text: "Nurturing today's learners and empowering tomorrow's leaders.",
  },
};

function makeTitle(fileName: string) {
  return path
    .basename(fileName, path.extname(fileName))
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export async function GET() {
  try {
    const sliderFolder = path.join(
      process.cwd(),
      "public",
      "images",
      "slider",
    );

    if (!fs.existsSync(sliderFolder)) {
      return NextResponse.json({
        items: [],
      });
    }

    const files = fs
      .readdirSync(sliderFolder, {
        withFileTypes: true,
      })
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .filter((fileName) => {
        const extension = path
          .extname(fileName)
          .toLowerCase();

        return (
          IMAGE_EXTENSIONS.includes(extension) ||
          VIDEO_EXTENSIONS.includes(extension)
        );
      })
      .sort((a, b) =>
        a.localeCompare(b, undefined, {
          numeric: true,
          sensitivity: "base",
        }),
      );

    const items = files.map((fileName) => {
      const extension = path
        .extname(fileName)
        .toLowerCase();

      const type = VIDEO_EXTENSIONS.includes(extension)
        ? "video"
        : "image";

      const original =
        originalSlideText[fileName];

      return {
        type,

        src: `/images/slider/${encodeURIComponent(
          fileName,
        )}`,

        name: fileName,

        title:
          original?.title ??
          makeTitle(fileName),

        text:
          original?.text ??
          (type === "video"
            ? "Watch memorable moments from Shiv Gurukul Public School."
            : "Memorable moments from Shiv Gurukul Public School."),
      };
    });

    return NextResponse.json({
      items,
    });
  } catch (error) {
    console.error(
      "Slider API Error:",
      error,
    );

    return NextResponse.json(
      {
        items: [],
      },
      {
        status: 500,
      },
    );
  }
}

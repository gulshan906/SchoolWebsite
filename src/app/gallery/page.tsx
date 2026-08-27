"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type GalleryItem = {
  type: "image" | "video";
  src: string;
  name: string;
};

export default function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGallery = async () => {
      try {
        const response = await fetch("/api/gallery", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Gallery loading failed");
        }

        const data = await response.json();

        setItems(
          Array.isArray(data.items)
            ? data.items
            : [],
        );
      } catch (error) {
        console.error(error);
        setItems([]);
      } finally {
        setLoading(false);
      }
    };

    loadGallery();
  }, []);

  useEffect(() => {
    if (items.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((value) =>
        value >= items.length - 1
          ? 0
          : value + 1,
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [items.length]);

  const previous = () => {
    if (!items.length) return;

    setCurrent((value) =>
      value === 0
        ? items.length - 1
        : value - 1,
    );
  };

  const next = () => {
    if (!items.length) return;

    setCurrent((value) =>
      value >= items.length - 1
        ? 0
        : value + 1,
    );
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">

          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-xs font-black text-slate-950">
              SGPS
            </div>

            <div>
              <p className="font-black">
                Shiv Gurukul
              </p>

              <p className="text-[9px] font-bold uppercase tracking-widest text-slate-500">
                Public School
              </p>
            </div>
          </Link>

          <Link
            href="/"
            className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-black transition hover:bg-blue-700"
          >
             Home
          </Link>

        </div>
      </header>

      {/* HERO */}
      <section className="px-4 py-14 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-300">
            School Gallery
          </p>

          <h1 className="mt-3 text-4xl font-black sm:text-6xl">
            Moments From
            <span className="block text-blue-300">
              Our School.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400">
            School campus, classroom activities,
            events, celebrations and memorable moments.
          </p>

          {/* MAIN MIXED SLIDER */}
          <div className="relative mt-10 overflow-hidden rounded-3xl border border-white/10 bg-slate-900">

            {loading ? (
              <div className="flex min-h-[350px] items-center justify-center">
                <p className="font-black text-slate-400">
                  Loading Gallery...
                </p>
              </div>
            ) : items.length === 0 ? (
              <div className="flex min-h-[350px] flex-col items-center justify-center text-center">
                <div className="text-6xl">
                  
                </div>

                <p className="mt-4 font-black">
                  Gallery Empty
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Add images or videos to
                  public/images/gallery
                </p>
              </div>
            ) : (
              <>
                <div className="flex min-h-[300px] items-center justify-center bg-black sm:min-h-[500px] lg:min-h-[600px]">

                  {items[current].type === "video" ? (
                    <video
                      key={items[current].src}
                      src={items[current].src}
                      controls
                      playsInline
                      preload="metadata"
                      className="max-h-[600px] w-full object-contain"
                    />
                  ) : (
                    <img
                      src={items[current].src}
                      alt={items[current].name}
                      className="max-h-[600px] w-full object-contain"
                    />
                  )}

                </div>

                {/* PREVIOUS */}
                <button
                  type="button"
                  onClick={previous}
                  aria-label="Previous"
                  className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl font-black text-slate-950 shadow-lg sm:left-5 sm:h-14 sm:w-14"
                >
                  
                </button>

                {/* NEXT */}
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next"
                  className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl font-black text-slate-950 shadow-lg sm:right-5 sm:h-14 sm:w-14"
                >
                  
                </button>

                {/* TYPE */}
                <div className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1.5 text-xs font-black backdrop-blur">
                  {items[current].type === "video"
                    ? " Video"
                    : " Photo"}
                </div>

                {/* COUNTER */}
                <div className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1.5 text-xs font-black backdrop-blur">
                  {current + 1} / {items.length}
                </div>

                {/* DOTS */}
                {items.length > 1 && (
                  <div className="absolute bottom-5 left-1/2 flex max-w-[90%] -translate-x-1/2 gap-2 overflow-x-auto rounded-full bg-black/50 px-3 py-2 backdrop-blur">

                    {items.map((item, index) => (
                      <button
                        key={item.src}
                        type="button"
                        onClick={() =>
                          setCurrent(index)
                        }
                        aria-label={`Show ${index + 1}`}
                        className={`h-2.5 shrink-0 rounded-full transition-all ${
                          current === index
                            ? "w-8 bg-white"
                            : "w-2.5 bg-white/30"
                        }`}
                      />
                    ))}

                  </div>
                )}
              </>
            )}

          </div>

          {/* MIXED GALLERY */}
          <section className="mt-14">

            <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-300">
              Gallery
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Photos & Videos
            </h2>

            <p className="mt-3 text-sm text-slate-500">
              All school photos and videos are displayed
              together.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {items.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() =>
                    setCurrent(index)
                  }
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900 text-left shadow-lg"
                >

                  <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-black">

                    {item.type === "video" ? (
                      <>
                        <video
                          src={item.src}
                          muted
                          playsInline
                          preload="metadata"
                          className="h-full w-full object-contain"
                        />

                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-xl text-slate-950 shadow-xl">
                            
                          </div>
                        </div>
                      </>
                    ) : (
                      <img
                        src={item.src}
                        alt={item.name}
                        className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.02]"
                      />
                    )}

                    <div className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-black backdrop-blur">
                      {item.type === "video"
                        ? " Video"
                        : " Photo"}
                    </div>

                  </div>

                  <div className="p-4">

                    <p className="truncate text-sm font-black">
                      {item.name}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Click to view
                    </p>

                  </div>

                </button>
              ))}

            </div>

          </section>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-4 py-8 text-center text-xs text-slate-500">
         {new Date().getFullYear()} Shiv Gurukul Public School.
        All Rights Reserved.
              <div className="mt-5">
        </div>
      </footer>

    </main>
  );
}




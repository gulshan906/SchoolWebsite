"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteFooter() {
  const pathname = usePathname();

  // HOME PAGE PAR FOOTER NAHI DIKHANA
  if (pathname === "/") {
    return null;
  }

  return (
    <>
      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-950 px-4 pb-24 pt-8 text-white md:pb-8">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-8 md:grid-cols-3">

            {/* SCHOOL */}
            <div>
              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-sm font-black text-slate-950">
                  SGPS
                </div>

                <div>
                  <p className="font-black">
                    Shiv Gurukul Public School
                  </p>

                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500">
                    Learn &bull; Grow &bull; Shine
                  </p>
                </div>

              </div>

              <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
                Nurturing young minds and building bright futures through
                quality education, strong values and holistic development.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <p className="font-black">
                Quick Links
              </p>

              <div className="mt-4 grid grid-cols-2 gap-3 pb-4 text-sm text-slate-400">

                <Link
                  href="/teachers"
                  className="transition hover:text-white"
                >
                  Teachers
                </Link>

                <Link
                  href="/academics"
                  className="transition hover:text-white"
                >
                  Academics
                </Link>

                <Link
                  href="/facilities"
                  className="transition hover:text-white"
                >
                  Facilities
                </Link>

                <Link
                  href="/gallery"
                  className="transition hover:text-white"
                >
                  Gallery
                </Link>

                <Link
                  href="/examination"
                  className="transition hover:text-white"
                >
                  Examination
                </Link>

                <Link
                  href="/admissions"
                  className="transition hover:text-white"
                >
                  Admissions
                </Link>

                <Link
                  href="/contact"
                  className="transition hover:text-white"
                >
                  Contact
                </Link>

                <a
                  href="#about"
                  className="transition hover:text-white"
                >
                  About Us
                </a>

                {/* INSTAGRAM */}
                <a
                  href="https://www.instagram.com/shivgurukulpublicschool_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-pink-400"
                >
                  Instagram
                </a>

                {/* YOUTUBE */}
                <a
                  href="https://youtube.com/@shivsagar119?si=buWd994AV8wszcVV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-red-400"
                >
                  YouTube
                </a>

              </div>
            </div>

            {/* CONTACT */}
            <div>
              <p className="font-black">
                Contact Us
              </p>

              <div className="mt-4 space-y-3 text-sm text-slate-400">

                <p>
                  Mangobandar, Khaira, Jamui, Bihar &ndash; 811305
                </p>

                <a
                  href="tel:9631857371"
                  className="block transition hover:text-white"
                >
                  9631857371
                </a>

                <a
                  href="mailto:shivgurukulpublicschool@gmail.com"
                  className="block break-all transition hover:text-white"
                >
                  shivgurukulpublicschool@gmail.com
                </a>

                {/* INSTAGRAM */}
                <a
                  href="https://www.instagram.com/shivgurukulpublicschool_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition hover:text-pink-400"
                >
                  📸 Instagram
                </a>

                {/* YOUTUBE */}
                <a
                  href="https://youtube.com/@shivsagar119?si=buWd994AV8wszcVV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition hover:text-red-400"
                >
                  ▶️ YouTube
                </a>

              </div>
            </div>

          </div>

          {/* COPYRIGHT */}
          <div className="mt-8 border-t border-white/10 pt-5 text-center text-xs text-slate-600">
            &copy; 2026 Shiv Gurukul Public School. All Rights Reserved.
          </div>

        </div>
      </footer>

      {/* ================= MOBILE BOTTOM BAR ================= */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 p-2 shadow-lg backdrop-blur md:hidden">

        <div className="mx-auto grid max-w-md grid-cols-3 gap-2">

          {/* CALL */}
          <a
            href="tel:9631857371"
            className="rounded-xl bg-slate-100 px-2 py-3 text-center text-[11px] font-black transition hover:bg-slate-200"
          >
            📞 Call
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/919631857371"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-green-50 px-2 py-3 text-center text-[11px] font-black text-green-700 transition hover:bg-green-100"
          >
            💬 WhatsApp
          </a>

          {/* ADMISSION */}
          <Link
            href="/admissions"
            className="rounded-xl bg-blue-700 px-2 py-3 text-center text-[11px] font-black text-white transition hover:bg-blue-800"
          >
            📝 Admission
          </Link>

        </div>

      </div>
    </>
  );
}
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* TOP BAR */}
      <div className="bg-slate-950 px-4 py-2 text-center text-xs font-bold text-white">
        🎓 Shiv Gurukul Public School • Established 2015
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 font-black text-white">
              SG
            </div>

            <div>
              <p className="font-black">Shiv Gurukul</p>
              <p className="text-[9px] font-bold uppercase tracking-widest text-slate-500">
                Public School
              </p>
            </div>
          </Link>

          <Link
            href="/"
            className="rounded-full bg-blue-700 px-5 py-2.5 text-sm font-black text-white transition hover:bg-blue-800"
          >
            ← Home
          </Link>

        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-blue-800 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-300">
            Contact Us
          </p>

          <h1 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">
            We&apos;re Here to
            <span className="block text-blue-300">
              Help You.
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-blue-100 sm:text-base">
            Have a question about admissions, academics or school activities?
            Contact Shiv Gurukul Public School.
          </p>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">

          {/* CONTACT CARDS */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {/* PHONE */}
            <a
              href="tel:9631857371"
              className="rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-4xl">📞</div>

              <p className="mt-5 text-xs font-black uppercase text-slate-400">
                School Phone
              </p>

              <p className="mt-2 font-black">
                9631857371
              </p>
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/919631857371"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-4xl">💬</div>

              <p className="mt-5 text-xs font-black uppercase text-slate-400">
                WhatsApp
              </p>

              <p className="mt-2 font-black">
                9631857371
              </p>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:shivgurukulpublicschool@gmail.com"
              className="rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-4xl">✉️</div>

              <p className="mt-5 text-xs font-black uppercase text-slate-400">
                Email
              </p>

              <p className="mt-2 break-all text-sm font-black">
                shivgurukulpublicschool@gmail.com
              </p>
            </a>

            {/* TIMING */}
            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-4xl">⏰</div>

              <p className="mt-5 text-xs font-black uppercase text-slate-400">
                School Timing
              </p>

              <p className="mt-2 font-black">
                8 AM – 2 PM
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Monday – Saturday
              </p>
            </div>

          </div>

          {/* ADDRESS + MAP */}
          <div className="mt-8 grid gap-6 lg:grid-cols-2">

            {/* ADDRESS */}
            <div className="rounded-3xl bg-white p-7 shadow-sm sm:p-8">

              <p className="text-sm font-black uppercase tracking-wider text-blue-700">
                School Address
              </p>

              <h2 className="mt-3 text-2xl font-black">
                Shiv Gurukul Public School
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Mangobandar, Khaira, Jamui
                <br />
                Bihar – 811305
              </p>

              <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                <p className="text-xs font-black uppercase text-slate-400">
                  Working Days
                </p>

                <p className="mt-2 font-black">
                  Monday – Saturday
                </p>
              </div>

            </div>

            {/* GOOGLE MAPS */}
            <div className="flex min-h-[320px] items-center justify-center rounded-3xl bg-slate-950 p-8 text-center text-white">

              <div>

                <div className="text-6xl">
                  📍
                </div>

                <h2 className="mt-5 text-2xl font-black">
                  Google Maps
                </h2>

                <p className="mt-3 text-sm text-slate-400">
                  Find Shiv Gurukul Public School on Google Maps.
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Shiv+Gurukul+Public+School+Mangobandar+Khaira+Jamui+Bihar+811305"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-black text-white transition hover:bg-blue-700"
                >
                  Get Directions →
                </a>

              </div>

            </div>

          </div>

          {/* SOCIAL MEDIA */}
          <div className="mt-10 rounded-3xl bg-white p-8 text-center shadow-sm">

            <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-700">
              Follow Us
            </p>

            <h2 className="mt-2 text-2xl font-black">
              Connect With Shiv Gurukul
            </h2>

            <p className="mt-3 text-sm text-slate-500">
              Follow our school for latest updates, activities and events.
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/shivgurukulpublicschool_"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-7 py-3 text-sm font-black text-white transition hover:scale-105 sm:w-auto"
              >
                📸 Instagram
              </a>

              {/* YOUTUBE */}
              <a
                href="https://youtube.com/@shivsagar119?si=buWd994AV8wszcVV"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-red-600 px-7 py-3 text-sm font-black text-white transition hover:scale-105 hover:bg-red-700 sm:w-auto"
              >
                ▶️ YouTube
              </a>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
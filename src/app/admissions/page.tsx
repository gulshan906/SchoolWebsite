import Link from "next/link";

const admissionRules = [
  "Parents / Guardians wishing to admit their child are requested to complete all admission forms carefully and accurately. The date of birth once entered cannot be altered as per applicable rules.",
  "Students who have previously attended another school may be required to produce a transfer certificate.",
  "Admission eligibility will depend on the class, age and applicable school admission requirements.",
  "Admission once processed may be subject to the school's applicable admission rules and policies.",
  "Parents are requested to provide correct information and required documents during the admission process.",
  "Students are encouraged to maintain discipline, respect teachers and follow school guidelines.",
  "Parents are requested to cooperate with the school for the overall development and education of their child.",
];

const disciplineRules = [
  "Students should attend school regularly and punctually.",
  "Students should maintain proper discipline within the school premises.",
  "Students should respect teachers, staff members and fellow students.",
  "Students should take care of school property and maintain cleanliness.",
  "Students should follow the prescribed school uniform and applicable school guidelines.",
  "Students should not bring unnecessary valuable items to school.",
];

const notices = [
  {
    date: "24.08.2026",
    text: "Admission enquiry and school visit information will be updated by the school.",
  },
  {
    date: "20.08.2026",
    text: "Parents are requested to contact the school office for admission related information.",
  },
  {
    date: "15.08.2026",
    text: "School information and important announcements will be displayed on this notice board.",
  },
  {
    date: "10.08.2026",
    text: "Parents are requested to regularly check the notice board for important updates.",
  },
  {
    date: "05.08.2026",
    text: "Students and parents are requested to follow all school rules and discipline guidelines.",
  },
];

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-200 via-slate-200 to-indigo-100 text-slate-900">

      {/* TOP BAR */}
      <div className="bg-slate-950 px-4 py-2 text-center text-xs font-bold text-white">
        🎓 Welcome to Shiv Gurukul Public School • Established 2015
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 font-black text-white shadow-sm">
              SG
            </div>

            <div>
              <p className="text-sm font-black sm:text-base">
                Shiv Gurukul
              </p>

              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500">
                Public School
              </p>
            </div>

          </Link>

          {/* BACK HOME */}
          <Link
            href="/"
            className="rounded-full bg-blue-700 px-5 py-2.5 text-sm font-black text-white shadow-sm transition hover:bg-blue-800"
          >
            ← Home
          </Link>

        </div>

      </header>

      {/* PAGE CONTENT */}
      <section className="bg-gradient-to-br from-blue-700 via-indigo-700 to-indigo-950 px-4 py-14 text-white sm:px-6 lg:px-8">

        <div className="mx-auto max-w-7xl">

          {/* PAGE TITLE */}

          <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-200">
            Admissions
          </p>

          <h1 className="mt-3 text-4xl font-black sm:text-5xl">
            Admission Information
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
            Information regarding admission rules, discipline,
            school timings and important notices for parents and students.
          </p>

        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-7xl">

          {/* MAIN 2 COLUMN LAYOUT */}
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_350px]">

            {/* LEFT CONTENT */}
            <div className="space-y-8">

              {/* ADMISSION */}
              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                <div className="border-b border-dashed border-blue-300 pb-3">

                  <h2 className="border-l-4 border-blue-600 pl-3 text-2xl font-black text-blue-700">
                    ADMISSION
                  </h2>

                </div>

                <div className="mt-6">

                  <h3 className="text-lg font-black text-blue-700">
                    RULES FOR ADMISSION
                  </h3>

                  <ul className="mt-4 space-y-4">

                    {admissionRules.map((rule, index) => (
                      <li
                        key={index}
                        className="flex gap-3 text-sm leading-6 text-slate-700"
                      >
                        <span className="mt-1 shrink-0 font-black text-teal-500">
                          ›
                        </span>

                        <span>{rule}</span>
                      </li>
                    ))}

                  </ul>

                </div>

              </section>

              {/* DISCIPLINE */}
              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                <div className="border-b border-dashed border-blue-300 pb-3">

                  <h2 className="border-l-4 border-blue-600 pl-3 text-2xl font-black text-blue-700">
                    RULES &amp; DISCIPLINE FOR STUDENTS
                  </h2>

                </div>

                <ul className="mt-6 space-y-4">

                  {disciplineRules.map((rule, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-sm leading-6 text-slate-700"
                    >
                      <span className="mt-1 shrink-0 font-black text-teal-500">
                        ›
                      </span>

                      <span>{rule}</span>
                    </li>
                  ))}

                </ul>

              </section>

              {/* SCHOOL TIMING */}
              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                <div className="border-b border-dashed border-blue-300 pb-3">

                  <h2 className="border-l-4 border-blue-600 pl-3 text-2xl font-black text-blue-700">
                    SCHOOL TIMING
                  </h2>

                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-xl bg-slate-50 p-5">
                    <p className="text-xs font-black uppercase text-slate-400">
                      Opening
                    </p>

                    <p className="mt-2 text-xl font-black">
                      8:00 AM
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-5">
                    <p className="text-xs font-black uppercase text-slate-400">
                      Closing
                    </p>

                    <p className="mt-2 text-xl font-black">
                      2:00 PM
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-5">
                    <p className="text-xs font-black uppercase text-slate-400">
                      Working Days
                    </p>

                    <p className="mt-2 text-xl font-black">
                      Mon – Sat
                    </p>
                  </div>

                </div>

              </section>

              {/* ADMISSION PROCESS */}
              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                <div className="border-b border-dashed border-blue-300 pb-3">

                  <h2 className="border-l-4 border-blue-600 pl-3 text-2xl font-black text-blue-700">
                    ADMISSION PROCESS
                  </h2>

                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-5">
                    <div className="text-2xl">📞</div>
                    <h3 className="mt-3 font-black">
                      01. Enquiry
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      Contact the school for admission information.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-5">
                    <div className="text-2xl">🏫</div>
                    <h3 className="mt-3 font-black">
                      02. School Visit
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      Visit the school and discuss admission requirements.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-5">
                    <div className="text-2xl">📝</div>
                    <h3 className="mt-3 font-black">
                      03. Admission
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      Complete the required admission formalities.
                    </p>
                  </div>

                </div>

              </section>

            </div>

            {/* RIGHT NOTICE BOARD */}
            <aside className="lg:sticky lg:top-24 lg:self-start">

              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

                {/* NOTICE TITLE */}
                <div className="border-b border-dashed border-blue-300 p-5">

                  <h2 className="border-l-4 border-blue-600 pl-3 text-2xl font-black text-blue-700">
                    NOTICE BOARD
                  </h2>

                </div>

                {/* NOTICE LIST */}
                <div className="divide-y divide-slate-100">

                  {notices.map((notice, index) => (
                    <div
                      key={index}
                      className="p-5 transition hover:bg-blue-50"
                    >

                      <div className="flex gap-3">

                        <span className="mt-1 shrink-0 text-lg font-black text-teal-500">
                          ›
                        </span>

                        <div>

                          <p className="text-xs font-black text-blue-700">
                            {notice.date}
                          </p>

                          <p className="mt-1 text-sm leading-6 text-slate-700">
                            {notice.text}
                          </p>

                        </div>

                      </div>

                    </div>
                  ))}

                </div>

                {/* CONTACT BOX */}
                <div className="border-t border-slate-200 bg-slate-950 p-5 text-white">

                  <p className="text-xs font-black uppercase tracking-wider text-blue-300">
                    Admission Enquiry
                  </p>

                  <a
                    href="tel:9631857371"
                    className="mt-2 block text-xl font-black"
                  >
                    📞 9631857371
                  </a>

                  <a
                    href="https://wa.me/919631857371"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 block rounded-full bg-green-500 px-5 py-3 text-center text-sm font-black"
                  >
                    💬 WhatsApp Enquiry
                  </a>

                </div>

              </div>

            </aside>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 px-4 py-8 text-center text-white">

        <p className="font-black">
          Shiv Gurukul Public School
        </p>

        <p className="mt-2 text-xs text-slate-400">
          Mangobandar, Khaira, Jamui • Bihar – 811305
        </p>

        <p className="mt-1 text-xs text-slate-500">
          Classes 1–10 • CBSE Curriculum • English Medium
        </p>

              <div className="mt-5">
        </div>
      </footer>

    </main>
  );
}




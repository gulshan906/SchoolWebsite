import Link from "next/link";

export default function AcademicsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* TOP BAR */}
      <div className="bg-slate-950 px-4 py-2 text-center text-xs font-bold text-white">
        🎓 Shiv Gurukul Public School
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 font-black text-white">
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

          <Link
            href="/"
            className="rounded-full bg-blue-700 px-5 py-2.5 text-sm font-black text-white"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-blue-800 px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-300">
            Academics
          </p>

          <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Building Strong Foundations for a
            <span className="block text-blue-300">
              Bright Future.
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-blue-100 sm:text-base">
            We focus on strong academic foundations while helping students
            develop curiosity, creativity, communication, critical thinking,
            confidence and a positive attitude towards learning.
          </p>
        </div>
      </section>

      {/* ACADEMIC INFORMATION */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-3xl">🎓</div>

              <p className="mt-5 text-xs font-black uppercase tracking-wider text-slate-400">
                Classes
              </p>

              <h2 className="mt-2 text-2xl font-black">
                Class 1 – 10
              </h2>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-3xl">📚</div>

              <p className="mt-5 text-xs font-black uppercase tracking-wider text-slate-400">
                Board
              </p>

              <h2 className="mt-2 text-2xl font-black">
                CBSE
              </h2>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-3xl">🌐</div>

              <p className="mt-5 text-xs font-black uppercase tracking-wider text-slate-400">
                Medium
              </p>

              <h2 className="mt-2 text-2xl font-black">
                English
              </h2>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-3xl">🏫</div>

              <p className="mt-5 text-xs font-black uppercase tracking-wider text-slate-400">
                School Type
              </p>

              <h2 className="mt-2 text-lg font-black">
                Co-Educational
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                English Medium School
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-700">
              Our Academic Approach
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Learning That Goes
              <span className="text-blue-700">
                {" "}Beyond Textbooks.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              Our academic approach aims to make learning meaningful,
              engaging and practical. Students are encouraged to ask
              questions, explore ideas, communicate clearly and develop
              confidence in their abilities.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🧠",
                title: "Critical Thinking",
                text: "Encouraging students to understand concepts, ask questions and think independently.",
              },
              {
                icon: "🎨",
                title: "Creativity",
                text: "Providing opportunities for students to express ideas and explore their creative abilities.",
              },
              {
                icon: "💬",
                title: "Communication",
                text: "Developing confident communication and presentation skills through classroom participation.",
              },
              {
                icon: "🔬",
                title: "Conceptual Learning",
                text: "Helping students build clear and strong understanding of fundamental concepts.",
              },
              {
                icon: "🤝",
                title: "Collaborative Learning",
                text: "Promoting teamwork, cooperation, respect and learning from one another.",
              },
              {
                icon: "🌱",
                title: "Holistic Development",
                text: "Balancing academics with values, activities, confidence and life skills.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-lg font-black">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-slate-950 p-8 text-white sm:p-12">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-300">
            Curriculum
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            CBSE Curriculum
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
            Shiv Gurukul Public School follows the CBSE curriculum for
            students from Classes 1 to 10. Our academic programme focuses
            on knowledge, understanding, discipline, communication,
            creativity and overall development.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="font-black">📖 Strong Fundamentals</p>

              <p className="mt-2 text-sm text-slate-400">
                Building strong foundations in core subjects.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="font-black">🧪 Practical Learning</p>

              <p className="mt-2 text-sm text-slate-400">
                Encouraging learning through activities and experiences.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="font-black">🗣️ Communication Skills</p>

              <p className="mt-2 text-sm text-slate-400">
                Developing confident speaking and communication.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="font-black">🏆 Overall Development</p>

              <p className="mt-2 text-sm text-slate-400">
                Academics combined with activities, values and life skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white px-4 py-8 text-center">
        <p className="text-sm font-black">
          Shiv Gurukul Public School
        </p>

        <p className="mt-1 text-xs text-slate-500">
          Classes 1–10 • CBSE Curriculum • English Medium
        </p>

        <Link
          href="/"
          className="mt-4 inline-block text-sm font-bold text-blue-700"
        >
          ← Back to Home
        </Link>
      </footer>
    </main>
  );
}
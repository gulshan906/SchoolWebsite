"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const sliderItems = [
  {
    image: "/images/slider/slide-1.jpg",
    title: "Welcome to Shiv Gurukul Public School",
    text: "Every child has the potential to shine.",
  },
  {
    image: "/images/slider/slide-2.jpg",
    title: "Learning for a Bright Future",
    text: "Strong academics, values, confidence and holistic development.",
  },
  {
    image: "/images/slider/slide-3.jpg",
    title: "Dedicated Teachers",
    text: "Guiding every learner with knowledge, care and encouragement.",
  },
  {
    image: "/images/slider/slide-4.jpg",
    title: "Learning Beyond the Classroom",
    text: "Sports, activities and creative experiences for every child.",
  },
  {
    image: "/images/slider/slide-5.jpg",
    title: "Growing Together",
    text: "Nurturing today's learners and empowering tomorrow's leaders.",
  },
];

type Notice = {
  date: string;
  text: string;
};

const teachers = [
  {
    id: 1,
    name: "Neha Bharti",
    designation: "Senior Teacher",
    qualification: "B.Sc. Mathematics (Honours), B.Ed.",
    experience: "10+ Years of Teaching Experience",
    subject: "Mathematics",
    message:
      "Every child has the potential to achieve great things when guided with patience, encouragement, and the right learning approach. As a Mathematics teacher, my aim is not only to help students understand numbers and formulas, but also to develop their confidence, logical thinking, and problem-solving abilities. I believe learning should be clear, engaging, and enjoyable. Together, we can turn challenges into opportunities and help every child learn, grow, and achieve their full potential.",
    photo: "/images/teachers/teacher-1.jpg",
  },
  {
    id: 2,
    name: "Golden Kumar",
    designation: "Teacher",
    qualification: "B.Sc. Mathematics (Honours), BLL.B.",
    experience: "8+ Years of Teaching Experience",
    subject: "English",
    message:
      "Education is not just about gaining knowledge; it is about developing the confidence and ability to use that knowledge in real life. As a Law teacher, my goal is to make every concept clear, engaging, and meaningful for students. I encourage students to think critically, understand the reasoning behind every legal principle, and approach challenges with confidence. With the right guidance, discipline, and continuous learning, I believe every student can unlock their potential and build a strong foundation for a successful future.",
    photo: "/images/teachers/teacher-2.jpg",
  },
  {
    id: 3,
    name: "Gulshan Kumar",
    designation: "Teacher",
    qualification: "B.Tech, M.Tech. in Computer Engineering.",
    experience: "4+ Years of Teaching Experience",
    subject: "Computer Lab",
    message:
      "Technology is not just a subject to learn—it is a skill that empowers students to explore, create, and shape their future. My aim is to make every Computer Lab session practical, engaging, and easy to understand. Through hands-on learning and continuous guidance, I encourage students to become confident, creative, and responsible users of technology. I believe that when students learn by doing, they not only gain technical skills but also develop the confidence to face the challenges of tomorrow.",
    photo: "/images/teachers/teacher-3.jpg",
  },
];

const reasons = [
  {
    icon: "🎓",
    title: "Quality Education",
    text: "Strong academic foundations for lifelong learning and success.",
  },
  {
    icon: "👨‍🏫",
    title: "Dedicated Teachers",
    text: "Teachers who guide and support every learner with care.",
  },
  {
    icon: "🧠",
    title: "Smart Learning",
    text: "Encouraging curiosity, creativity and critical thinking.",
  },
  {
    icon: "🛡️",
    title: "Safe Environment",
    text: "A caring, disciplined and positive environment for children.",
  },
  {
    icon: "⚽",
    title: "Activities & Sports",
    text: "Opportunities to participate, learn and develop confidence.",
  },
  {
    icon: "🌱",
    title: "Holistic Growth",
    text: "Developing knowledge, character, communication and values.",
  },
];

function ImageBox({
  src,
  alt,
  className = "",
  icon = "📷",
}: {
  src: string;
  alt: string;
  className?: string;
  icon?: string;
}) {
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!error ? (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-contain sm:object-cover"
          onError={() => setError(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 via-white to-blue-50">
          <div className="text-center">
            <div className="text-4xl">{icon}</div>
            <p className="mt-2 text-xs font-bold text-slate-400">
              Photo Coming Soon
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [notices, setNotices] = useState<Notice[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((current) =>
        current === sliderItems.length - 1 ? 0 : current + 1,
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const loadNotices = async () => {
      try {
        const response = await fetch("/api/notices", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Notice loading failed");
        }

        const data = await response.json();

        setNotices(
          Array.isArray(data.notices) ? data.notices : [],
        );
      } catch (error) {
        console.error("Notice loading error:", error);
        setNotices([]);
      }
    };

    loadNotices();
  }, []);

  const previousSlide = () => {
    setCurrentSlide((current) =>
      current === 0 ? sliderItems.length - 1 : current - 1,
    );
  };

  const nextSlide = () => {
    setCurrentSlide((current) =>
      current === sliderItems.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* ================= TOP BAR ================= */}
      <div className="bg-slate-950 px-4 py-2 text-center text-xs font-bold text-white">
        🎓 Welcome to Shiv Gurukul Public School • Established 2015
      </div>

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

          <Link href="/" className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-xs font-black text-white shadow">
              SGPS
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

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-4 text-sm font-bold lg:flex">

            <Link href="/" className="hover:text-blue-700">
              Home
            </Link>

            <a href="#about" className="hover:text-blue-700">
              About
            </a>

            <Link href="/academics" className="hover:text-blue-700">
              Academics
            </Link>

            <Link href="/facilities" className="hover:text-blue-700">
              Facilities
            </Link>

            <Link href="/gallery" className="hover:text-blue-700">
              Gallery
            </Link>

            <Link href="/examination" className="hover:text-blue-700">
              Examination
            </Link>

            <Link href="/admissions" className="hover:text-blue-700">
              Admissions
            </Link>

            <Link href="/contact" className="hover:text-blue-700">
              Contact
            </Link>

          </nav>

          <Link
            href="/admissions"
            className="hidden rounded-full bg-blue-700 px-6 py-3 text-sm font-black text-white lg:block"
          >
            Enquire Now
          </Link>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={() => setMobileMenu(!mobileMenu)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-xl lg:hidden"
          >
            {mobileMenu ? "✕" : "☰"}
          </button>

        </div>

        {/* MOBILE MENU */}
        {mobileMenu && (
          <div className="border-t border-slate-200 bg-white p-4 lg:hidden">

            <div className="flex flex-col gap-1">

              <Link href="/" className="rounded-xl px-4 py-3 font-bold">
                🏠 Home
              </Link>

              <Link href="/academics" className="rounded-xl px-4 py-3 font-bold">
                📚 Academics
              </Link>

              <Link href="/facilities" className="rounded-xl px-4 py-3 font-bold">
                🏢 Facilities
              </Link>

              <Link href="/gallery" className="rounded-xl px-4 py-3 font-bold">
                🖼️ Gallery
              </Link>

              <Link href="/examination" className="rounded-xl px-4 py-3 font-bold">
                📝 Examination
              </Link>

              <Link href="/admissions" className="rounded-xl px-4 py-3 font-bold">
                🎓 Admissions
              </Link>

              <Link href="/contact" className="rounded-xl px-4 py-3 font-bold">
                📞 Contact
              </Link>

            </div>

          </div>
        )}

      </header>

      {/* ================= IMAGE SLIDER ================= */}
      <section className="bg-slate-950 px-3 py-4 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="relative overflow-hidden rounded-3xl">

            <div className="relative aspect-[4/3] min-h-0 sm:aspect-[16/9] sm:min-h-[450px] lg:min-h-[570px]">

              <ImageBox
                src={sliderItems[currentSlide].image}
                alt={sliderItems[currentSlide].title}
                icon="🏫"
                className="absolute inset-0 h-full w-full"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

              <button
                type="button"
                onClick={previousSlide}
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl font-black shadow-lg"
              >
                ←
              </button>

              <button
                type="button"
                onClick={nextSlide}
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl font-black shadow-lg"
              >
                →
              </button>

              <div className="absolute bottom-10 left-6 right-6 text-white sm:left-10 lg:left-14">

                <span className="rounded-full bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-wider backdrop-blur">
                  Shiv Gurukul Public School
                </span>

                <h1 className="mt-5 max-w-3xl text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">
                  {sliderItems[currentSlide].title}
                </h1>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-200 sm:text-base">
                  {sliderItems[currentSlide].text}
                </p>

              </div>

              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">

                {sliderItems.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      index === currentSlide
                        ? "w-9 bg-white"
                        : "w-2.5 bg-white/40"
                    }`}
                  />
                ))}

              </div>

              <div className="absolute right-5 top-5 rounded-full bg-black/50 px-3 py-1 text-xs font-black text-white">
                {currentSlide + 1} / {sliderItems.length}
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= ABOUT SCHOOL ================= */}
      <section
        id="about"
        className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
      >

        <div className="border-t-4 border-blue-700 pt-5">

          <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-700">
            About Our School
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            Nurturing Young Minds.
            <span className="block text-blue-700">
              Building Bright Futures.
            </span>
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-2">

            <div className="space-y-5 text-sm leading-7 text-slate-600 sm:text-base">

              <p>
                Our school is a nurturing and progressive CBSE-affiliated
                learning community for students from Classes 1 to 10,
                committed to providing a strong foundation for lifelong
                learning and success.
              </p>

              <p>
                We believe that every child is unique and deserves the right
                environment to learn, grow, and discover their potential.
                Our approach combines academic excellence, individual
                attention, discipline, creativity, values, and holistic
                development.
              </p>

              <p>
                With dedicated educators, a child-friendly environment,
                engaging teaching methodologies, and opportunities beyond
                the classroom, we strive to make learning meaningful,
                confident, and enjoyable.
              </p>

              <p>
                For us, education is not only about achieving good marks—it
                is about developing knowledge, character, confidence,
                communication skills, and a positive attitude towards life.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <ImageBox
                src="/images/school/building.jpg"
                alt="School Building"
                icon="🏫"
                className="aspect-square rounded-3xl"
              />

              <ImageBox
                src="/images/school/classroom.jpg"
                alt="School Classroom"
                icon="📚"
                className="mt-8 aspect-square rounded-3xl"
              />

              <div className="-mt-8 flex aspect-square items-center justify-center rounded-3xl bg-slate-950 p-5 text-center text-white">

                <div>
                  <div className="text-4xl">🎓</div>

                  <p className="mt-3 font-black">
                    Classes 1–10
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    CBSE Curriculum
                  </p>
                </div>

              </div>

              <div className="flex aspect-square items-center justify-center rounded-3xl bg-blue-50 p-5 text-center">

                <div>
                  <div className="text-4xl">🌱</div>

                  <p className="mt-3 font-black">
                    Holistic Development
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Knowledge • Values • Confidence
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* SGPS */}
          <div className="mt-10 overflow-hidden rounded-3xl bg-gradient-to-r from-slate-950 via-blue-950 to-blue-800 p-7 text-white shadow-lg sm:p-9">

            <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">

              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-xl font-black tracking-wide">
                SGPS
              </div>

              <div>

                <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-300">
                  Shiv Gurukul Public School
                </p>

                <h3 className="mt-2 text-2xl font-black sm:text-3xl">
                  Learn • Grow • Shine
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Classes 1–10 | CBSE Curriculum | English Medium |
                  Co-Educational School | Holistic Development
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= DIRECTOR + NOTICE ================= */}
      <section
        id="director"
        className="bg-slate-50 px-4 py-14 sm:px-6 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-7 lg:grid-cols-[1fr_390px]">

            {/* DIRECTOR */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

              <div className="border-t-4 border-blue-700 pt-4">

                <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-700">
                  Director&apos;s Message
                </p>

                <h2 className="mt-2 text-2xl font-black sm:text-3xl">
                  Every Child Has the Potential to Shine.
                </h2>

              </div>

              <div className="mt-6 flex flex-col gap-6 sm:flex-row">

                <div className="w-full shrink-0 sm:w-36">

                  <ImageBox
                    src="/images/director/director.jpg"
                    alt="Director Shiv Kumar Singh"
                    icon="👨‍💼"
                    className="mx-auto aspect-[3/4] w-32 rounded-2xl border-4 border-white shadow-lg sm:w-36"
                  />

                  <div className="mt-3 text-center">

                    <p className="text-[10px] font-black uppercase tracking-wider text-blue-700">
                      Director
                    </p>

                    <p className="mt-1 text-sm font-black">
                      Shiv Kumar Singh
                    </p>

                    <p className="text-[10px] text-slate-400">
                      SGPS
                    </p>

                  </div>

                </div>

                <div className="text-sm leading-6 text-slate-600">

                  <p className="font-black text-slate-950">
                    Dear Parents,
                  </p>

                  <p className="mt-3">
                    Welcome to our school community.
                  </p>

                  <p className="mt-3">
                    We believe education is not only about academic
                    achievement. It is about developing confidence,
                    character, discipline, values and the courage to face
                    the future.
                  </p>

                  <p className="mt-3">
                    Every child is unique. We aim to provide a safe,
                    caring and inspiring environment where every student
                    feels valued and motivated to do their best.
                  </p>

                  <p className="mt-3">
                    Together, let us nurture today&apos;s learners and
                    empower tomorrow&apos;s leaders.
                  </p>

                  <div className="mt-4 border-t border-slate-200 pt-4">

                    <p className="font-black text-slate-950">
                      Warm regards,
                    </p>

                    <p className="font-bold text-blue-700">
                      Shiv Kumar Singh
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* NOTICE BOARD */}
            <aside className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

              <div className="border-b border-slate-200 px-6 pb-4 pt-6">

                <div className="border-l-4 border-blue-700 pl-3">

                  <h2 className="text-2xl font-black text-fuchsia-700">
                    NOTICE BOARD
                  </h2>

                  <div className="mt-1 border-b border-dashed border-cyan-500" />

                </div>

              </div>

              <div className="notice-window overflow-hidden">

                <div className="notice-track">

                  {[...notices, ...notices].map((notice, index) => (
                    <div
                      key={`${notice.date}-${index}`}
                      className="flex gap-3 border-b border-slate-100 px-6 py-4"
                    >

                      <span className="mt-1 shrink-0 text-lg font-black text-cyan-500">
                        ›
                      </span>

                      <p className="text-sm leading-6 text-slate-700">

                        <span className="font-black text-cyan-600">
                          {notice.date}
                        </span>

                        {" : "}

                        {notice.text}

                      </p>

                    </div>
                  ))}

                </div>

              </div>

            </aside>

          </div>

        </div>

      </section>

      {/* ================= TEACHERS ================= */}
      <section
        id="teachers"
        className="px-4 py-14 sm:px-6 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <div>

              <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-700">
                Our Faculty
              </p>

              <h2 className="mt-2 text-3xl font-black sm:text-4xl">
                Meet Our{" "}
                <span className="text-blue-700">
                  Dedicated Teachers
                </span>
              </h2>

            </div>

            <Link
              href="/teachers"
              className="rounded-full bg-blue-700 px-6 py-3 text-center text-sm font-black text-white"
            >
              View All Faculty →
            </Link>

          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">

            {teachers.map((teacher) => (
              <article
                key={teacher.id}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="flex justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-5 pt-6">

                  <ImageBox
                    src={teacher.photo}
                    alt={teacher.name}
                    icon="👨‍🏫"
                    className="aspect-[3/4] w-32 rounded-2xl border-4 border-white shadow-lg sm:w-36"
                  />

                </div>

                <div className="p-5">

                  <h3 className="text-xl font-black">
                    {teacher.name}
                  </h3>

                  <p className="mt-1 text-xs font-black uppercase tracking-wider text-blue-700">
                    {teacher.designation}
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-3">

                    <div className="rounded-xl bg-slate-50 p-3">

                      <p className="text-[9px] font-black uppercase text-slate-400">
                        Qualification
                      </p>

                      <p className="mt-1 text-xs font-bold">
                        {teacher.qualification}
                      </p>

                    </div>

                    <div className="rounded-xl bg-slate-50 p-3">

                      <p className="text-[9px] font-black uppercase text-slate-400">
                        Experience
                      </p>

                      <p className="mt-1 text-xs font-bold">
                        {teacher.experience}
                      </p>

                    </div>

                  </div>

                  <div className="mt-4 rounded-xl bg-blue-50 p-3">

                    <p className="text-[9px] font-black uppercase text-blue-700">
                      Subject
                    </p>

                    <p className="mt-1 text-sm font-bold">
                      {teacher.subject}
                    </p>

                  </div>

                  <div className="mt-4 rounded-2xl bg-slate-50 p-4">

                    <p className="text-[9px] font-black uppercase tracking-wider text-slate-400">
                      Teacher&apos;s Message
                    </p>

                    <p className="mt-2 text-xs leading-6 text-slate-600">
                      &quot;{teacher.message}&quot;
                    </p>

                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section
        id="why-us"
        className="bg-slate-50 px-4 py-14 sm:px-6 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-700">
              Why Choose Us
            </p>

            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Where Education Meets{" "}
              <span className="text-blue-700">
                Care, Character & Excellence.
              </span>
            </h2>

          </div>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
                  {reason.icon}
                </div>

                <h3 className="mt-5 text-lg font-black">
                  {reason.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {reason.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= ADMISSIONS ================= */}
      <section
        id="admissions"
        className="px-4 py-14 sm:px-6 lg:px-8"
      >

        <div className="mx-auto max-w-6xl rounded-[2rem] bg-gradient-to-br from-blue-700 to-slate-950 p-8 text-white shadow-xl sm:p-12">

          <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-200">
            Admissions
          </p>

          <h2 className="mt-2 max-w-4xl text-3xl font-black sm:text-5xl">
            Give Your Child a Strong Start for Tomorrow.
          </h2>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-blue-100 sm:text-base">
            Admission process: Enquiry & School Visit.
          </p>

          <div className="mt-7">

            <Link
              href="/admissions"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-black text-blue-800 shadow-md hover:bg-blue-50"
            >
              📝 View Admission Details →
            </Link>

          </div>

        </div>

      </section>

      {/* =========================================================
          DIRECT CONTACT STRIP
          CALL + WHATSAPP + DIRECTIONS + ADMISSIONS
      ========================================================= */}
      <section className="px-4 pb-14 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-6xl">

          <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl sm:grid-cols-4">

            {/* CALL */}
            <a
              href="tel:9631857371"
              className="flex items-center justify-center gap-2 border-b border-slate-200 px-4 py-5 text-sm font-black transition hover:bg-slate-50 sm:border-b-0 sm:border-r"
            >
              <span className="text-xl">📞</span>
              <span>Call Us</span>
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/919631857371"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 border-b border-slate-200 px-4 py-5 text-sm font-black transition hover:bg-green-50 sm:border-b-0 sm:border-r"
            >
              <span className="text-xl">💬</span>
              <span>WhatsApp</span>
            </a>

            {/* DIRECTIONS */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Mangobandar+Khaira+Jamui+Bihar"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 border-b border-slate-200 px-4 py-5 text-sm font-black transition hover:bg-blue-50 sm:border-b-0 sm:border-r"
            >
              <span className="text-xl">📍</span>
              <span>Directions</span>
            </a>

            {/* ADMISSION */}
            <Link
              href="/admissions"
              className="flex items-center justify-center gap-2 px-4 py-5 text-sm font-black transition hover:bg-blue-50"
            >
              <span className="text-xl">📝</span>
              <span>Admissions</span>
            </Link>

          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="bg-slate-950 px-4 py-14 text-white sm:px-6 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">

            <div>

              <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-300">
                Contact Us
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                We Would Love to
                <span className="block text-blue-300">
                  Hear From You.
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-slate-400">
                For admission enquiries, school information or any other
                assistance, please contact Shiv Gurukul Public School.
              </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              <a
                href="tel:9631857371"
                className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10"
              >
                <div className="text-2xl">📞</div>

                <p className="mt-3 text-[10px] font-black uppercase tracking-wider text-slate-500">
                  School Phone
                </p>

                <p className="mt-1 font-black">
                  9631857371
                </p>
              </a>

              <a
                href="https://wa.me/919631857371"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10"
              >
                <div className="text-2xl">💬</div>

                <p className="mt-3 text-[10px] font-black uppercase tracking-wider text-slate-500">
                  WhatsApp
                </p>

                <p className="mt-1 font-black">
                  9631857371
                </p>
              </a>

              <a
                href="mailto:shivgurukulpublicschool@gmail.com"
                className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10"
              >
                <div className="text-2xl">✉️</div>

                <p className="mt-3 text-[10px] font-black uppercase tracking-wider text-slate-500">
                  School Email
                </p>

                <p className="mt-1 break-all text-sm font-black">
                  shivgurukulpublicschool@gmail.com
                </p>
              </a>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                <div className="text-2xl">⏰</div>

                <p className="mt-3 text-[10px] font-black uppercase tracking-wider text-slate-500">
                  School Timing
                </p>

                <p className="mt-1 font-black">
                  8:00 AM – 2:00 PM
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Monday – Saturday
                </p>

              </div>

            </div>

          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">

            <p className="text-[10px] font-black uppercase tracking-wider text-slate-500">
              School Address
            </p>

            <p className="mt-1 text-sm font-bold text-slate-200">
              Mangobandar, Khaira, Jamui, Bihar – 811305
            </p>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-950 px-4 pb-24 pt-8 text-white md:pb-8">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-8 md:grid-cols-3">

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
                    Learn • Grow • Shine
                  </p>

                </div>

              </div>

              <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
                Nurturing young minds and building bright futures through
                quality education, strong values and holistic development.
              </p>

            </div>

            <div>

              <p className="font-black">
                Quick Links
              </p>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-400 pb-4">

                <Link href="/teachers">Teachers</Link>
                <Link href="/academics">Academics</Link>
                <Link href="/facilities">Facilities</Link>
                <Link href="/gallery">Gallery</Link>
                <Link href="/examination">Examination</Link>
                <Link href="/admissions">Admissions</Link>
                <Link href="/contact">Contact</Link>
                <a href="#about">About Us</a>
                <a href="https://www.instagram.com/shivgurukulpublicschool_" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://youtube.com/@shivsagar119?si=buWd994AV8wszcVV" target="_blank" rel="noopener noreferrer">YouTube</a>

              </div>

            </div>

            <div>

              <p className="font-black">
                Contact Us
              </p>

              <div className="mt-4 space-y-3 text-sm text-slate-400">

                <p>
                  📍 Mangobandar, Khaira, Jamui, Bihar – 811305
                </p>

                <a href="tel:9631857371" className="block">
                  📞 9631857371
                </a>

                <a
                  href="mailto:shivgurukulpublicschool@gmail.com"
                  className="block break-all"
                >
                  ✉️ shivgurukulpublicschool@gmail.com
                </a>

              </div>

            </div>

          </div>

          <div className="mt-8 border-t border-white/10 pt-5 text-center text-xs text-slate-600">
            © 2026 Shiv Gurukul Public School. All Rights Reserved.
          </div>

        </div>

      </footer>

      {/* ================= MOBILE BOTTOM BAR ================= */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 p-2 shadow-lg backdrop-blur md:hidden">

        <div className="mx-auto grid max-w-md grid-cols-3 gap-2">

          <a
            href="tel:9631857371"
            className="rounded-xl bg-slate-100 px-2 py-3 text-center text-[11px] font-black"
          >
            📞 Call
          </a>

          <a
            href="https://wa.me/919631857371"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-green-50 px-2 py-3 text-center text-[11px] font-black text-green-700"
          >
            💬 WhatsApp
          </a>

          <Link
            href="/admissions"
            className="rounded-xl bg-blue-700 px-2 py-3 text-center text-[11px] font-black text-white"
          >
            📝 Admission
          </Link>

        </div>

      </div>

      {/* ================= NOTICE ANIMATION ================= */}
      <style jsx>{`
        .notice-window {
          height: 390px;
        }

        .notice-track {
          animation: noticeScroll 28s linear infinite;
        }

        .notice-track:hover {
          animation-play-state: paused;
        }

        @keyframes noticeScroll {
          0% {
            transform: translateY(0);
          }

          100% {
            transform: translateY(-50%);
          }
        }

        @media (max-width: 640px) {
          .notice-window {
            height: 330px;
          }

          .notice-track {
            animation-duration: 24s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .notice-track {
            animation: none;
          }
        }
      `}</style>

    </main>
  );
}



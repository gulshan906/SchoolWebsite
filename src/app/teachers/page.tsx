"use client";
import Link from "next/link";

type Teacher = {
  id: number;
  name: string;
  designation: string;
  image: string;
  qualification: string;
  experience: string;
  subject: string;
  message: string;
};

const teachers: Teacher[] = [
  {
    id: 1,
    name: "Neha Bharti",
    designation: "Senior Teacher",
    image: "/images/teachers/teacher-1.jpg",
    qualification: "B.Sc. Mathematics (Honours), B.Ed.",
    experience: "10+ Years of Teaching Experience",
    subject: "Mathematics",
    message:
      "Every child has the potential to achieve great things when guided with patience, encouragement, and the right learning approach. As a Mathematics teacher, my aim is not only to help students understand numbers and formulas, but also to develop their confidence, logical thinking, and problem-solving abilities. I believe learning should be clear, engaging, and enjoyable. Together, we can turn challenges into opportunities and help every child learn, grow, and achieve their full potential.",
  },

  {
    id: 2,
    name: "Golden Kumar",
    designation: "Teacher",
    image: "/images/teachers/teacher-2.jpg",
    qualification: "B.Sc. Mathematics (Honours), BLL.B.",
    experience: "8+ Years of Teaching Experience",
    subject: "English",
    message:
      "Education is not just about gaining knowledge; it is about developing the confidence and ability to use that knowledge in real life. As a Law teacher, my goal is to make every concept clear, engaging, and meaningful for students. I encourage students to think critically, understand the reasoning behind every legal principle, and approach challenges with confidence. With the right guidance, discipline, and continuous learning, I believe every student can unlock their potential and build a strong foundation for a successful future.",
  },

  {
    id: 3,
    name: "Gulshan Kumar",
    designation: "Teacher",
    image: "/images/teachers/teacher-3.jpg",
    qualification: "B.Tech, M.Tech. in Computer Engineering.",
    experience: "4+ Years of Teaching Experience",
    subject: "Computer Lab",
    message:
      "Technology is not just a subject to learnÃ¢â‚¬â€it is a skill that empowers students to explore, create, and shape their future. My aim is to make every Computer Lab session practical, engaging, and easy to understand. Through hands-on learning and continuous guidance, I encourage students to become confident, creative, and responsible users of technology. I believe that when students learn by doing, they not only gain technical skills but also develop the confidence to face the challenges of tomorrow.",
  },

  {
    id: 4,
    name: "Teacher Profile 4",
    designation: "Teacher",
    image: "/images/teachers/teacher-4.jpg",
    qualification: "B.A., B.Ed.",
    experience: "6+ Years of Teaching Experience",
    subject: "Social Science",
    message:
      "We encourage every child to learn with confidence.",
  },

  {
    id: 5,
    name: "Teacher Profile 5",
    designation: "Teacher",
    image: "/images/teachers/teacher-5.jpg",
    qualification: "M.A., B.Ed.",
    experience: "6+ Years of Teaching Experience",
    subject: "Hindi",
    message:
      "Education builds confidence, character and responsibility.",
  },

  {
    id: 6,
    name: "Teacher Profile 6",
    designation: "Teacher",
    image: "/images/teachers/teacher-6.jpg",
    qualification: "M.Sc., B.Ed.",
    experience: "5+ Years of Teaching Experience",
    subject: "Physics",
    message:
      "Every student can achieve their potential with the right guidance.",
  },

  {
    id: 7,
    name: "Teacher Profile 7",
    designation: "Teacher",
    image: "/images/teachers/teacher-7.jpg",
    qualification: "B.Sc., B.Ed.",
    experience: "5+ Years of Teaching Experience",
    subject: "Chemistry",
    message:
      "Learning should be meaningful, practical and enjoyable.",
  },

  {
    id: 8,
    name: "Teacher Profile 8",
    designation: "Teacher",
    image: "/images/teachers/teacher-8.jpg",
    qualification: "B.Com., B.Ed.",
    experience: "4+ Years of Teaching Experience",
    subject: "Commerce",
    message:
      "We help students discover their strengths and talents.",
  },

  {
    id: 9,
    name: "Teacher Profile 9",
    designation: "Teacher",
    image: "/images/teachers/teacher-9.jpg",
    qualification: "B.P.Ed.",
    experience: "5+ Years of Teaching Experience",
    subject: "Physical Education",
    message:
      "Sports teach discipline, teamwork and confidence.",
  },

  {
    id: 10,
    name: "Teacher Profile 10",
    designation: "Teacher",
    image: "/images/teachers/teacher-10.jpg",
    qualification: "B.A., B.Ed.",
    experience: "4+ Years of Teaching Experience",
    subject: "Computer",
    message:
      "Technology and creativity help students prepare for the future.",
  },
];

function TeacherImage({
  src,
  name,
}: {
  src: string;
  name: string;
}) {
  return (
    <div className="relative h-72 w-full overflow-hidden bg-gradient-to-br from-blue-50 via-slate-100 to-white">

      <img
        src={src}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-top"
        onError={(event) => {
          event.currentTarget.style.display = "none";

          const fallback =
            event.currentTarget.parentElement?.querySelector(
              "[data-image-fallback]",
            ) as HTMLElement | null;

          if (fallback) {
            fallback.style.display = "flex";
          }
        }}
      />

      <div
        data-image-fallback
        className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-blue-50 via-white to-slate-100"
      >
        <div className="text-center">
          <div className="text-2xl font-black text-slate-300">FACULTY</div>

          <p className="mt-3 text-xs font-black uppercase tracking-wider text-slate-400">
            Faculty Photo
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Photo Coming Soon
          </p>
        </div>
      </div>

    </div>
  );
}

export default function TeachersPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

          <div>

            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700 sm:text-sm">
              Our Faculty
            </p>

            <h1 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl lg:text-5xl">
              Meet Our{" "}
              <span className="text-blue-700">
                Dedicated Teachers
              </span>
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
              Meet our dedicated faculty members who guide students with
              knowledge, discipline, care and experience.
            </p>

          </div>

          <Link
            href="/"
            className="w-fit rounded-full bg-blue-700 px-6 py-3 text-sm font-black text-white transition hover:bg-blue-800"
          >
            Ã¢â€ Â Back Home
          </Link>

        </div>

        {/* FACULTY GRID */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {teachers.map((teacher) => (
            <article
              key={teacher.id}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              {/* IMAGE */}
              <TeacherImage
                src={teacher.image}
                name={teacher.name}
              />

              {/* CONTENT */}
              <div className="p-6">

                {/* NAME */}
                <h2 className="text-2xl font-black text-slate-950">
                  {teacher.name}
                </h2>

                {/* DESIGNATION */}
                <p className="mt-1 text-xs font-black uppercase tracking-wider text-blue-700">
                  {teacher.designation}
                </p>

                {/* QUALIFICATION + EXPERIENCE */}
                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">

                  {/* QUALIFICATION */}
                  <div className="rounded-2xl bg-slate-50 p-4">

                    <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                      Qualification
                    </p>

                    <p className="mt-2 text-sm font-bold leading-5 text-slate-800">
                      {teacher.qualification}
                    </p>

                  </div>

                  {/* EXPERIENCE */}
                  <div className="rounded-2xl bg-slate-50 p-4">

                    <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                      Experience
                    </p>

                    <p className="mt-2 text-sm font-bold leading-5 text-slate-800">
                      {teacher.experience}
                    </p>

                  </div>

                </div>

                {/* SUBJECT */}
                <div className="mt-4 rounded-2xl bg-blue-50 p-4">

                  <p className="text-[10px] font-black uppercase tracking-wider text-blue-700">
                    Subject
                  </p>

                  <p className="mt-2 text-sm font-black text-slate-900">
                    {teacher.subject}
                  </p>

                </div>

                {/* TEACHER MESSAGE */}
                <div className="mt-4 rounded-2xl border border-slate-100 bg-slate-50 p-5">

                  <div className="flex items-center gap-2">

                    <span className="text-lg">
                      Ã°Å¸â€™Â¬
                    </span>

                    <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                      Teacher&apos;s Message
                    </p>

                  </div>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    &quot;{teacher.message}&quot;
                  </p>

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>

    </main>
  );
}



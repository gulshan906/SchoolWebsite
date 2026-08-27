import Link from "next/link"; 

const facilities = [ 
  { 
    icon: "", 
    title: "Smart Learning", 
    text: "A supportive learning environment designed to make education engaging and meaningful.", 
  }, 
  { 
    icon: "🏫", 
    title: "Modern Classrooms", 
    text: "Comfortable and child-friendly classrooms designed to support effective learning.", 
  }, 
  { 
    icon: "📚", 
    title: "Technology Enabled Learning", 
    text: "Technology-supported teaching to make concepts easier to understand.", 
  }, 
  { 
    icon: "💻", 
    title: "Library", 
    text: "A reading environment that encourages curiosity, discovery and independent learning.", 
  }, 
  { 
    icon: "📖", 
    title: "Sports & Activities", 
    text: "Encouraging physical fitness, teamwork, confidence and discipline.", 
  }, 
  { 
    icon: "🎨", 
    title: "Creative Activities", 
    text: "Opportunities for children to explore creativity through activities and experiences.", 
  }, 
  { 
    icon: "⚽", 
    title: "Practical Learning", 
    text: "Learning experiences that help students connect classroom concepts with real life.", 
  }, 
  { 
    icon: "🌱", 
    title: "Holistic Development", 
    text: "Supporting academic, social, creative and personal development.", 
  }, 
  { 
    icon: "🧪", 
    title: "Safe Environment", 
    text: "A caring, disciplined and positive environment where every child feels valued.", 
  }, 
  { 
    icon: "🛡️", 
    title: "Dedicated Faculty", 
    text: "Teachers committed to guiding students and supporting their individual learning needs.", 
  }, 
  { 
    icon: "🤝", 
    title: "Parent Partnership", 
    text: "Strong communication between school and family for better student development.", 
  }, 
  { 
    icon: "👨‍🏫", 
    title: "Value Based Education", 
    text: "Developing character, discipline, respect, responsibility and positive values.", 
  }, 
]; 

export default function FacilitiesPage() { 
  return ( 
    <main className="min-h-screen bg-slate-50 text-slate-900"> 

      <div className="bg-slate-950 px-4 py-2 text-center text-xs font-bold text-white"> 
        Shiv Gurukul Public School 
      </div> 

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
            className="rounded-full bg-blue-700 px-5 py-2.5 text-sm font-black text-white" 
          > 
            Back Home 
          </Link> 

        </div> 
      </header> 

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-blue-800 px-4 py-20 text-white"> 
        <div className="mx-auto max-w-7xl"> 

          <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-300"> 
            Facilities 
          </p> 

          <h1 className="mt-3 max-w-4xl text-4xl font-black sm:text-6xl"> 
            Everything That Helps 
            <span className="block text-blue-300"> 
              Children Grow. 
            </span> 
          </h1> 

          <p className="mt-6 max-w-3xl text-sm leading-7 text-blue-100 sm:text-base"> 
            We aim to provide a supportive environment where students can 
            learn, participate, explore their interests and develop confidence. 
          </p> 

        </div> 
      </section> 

      <section className="px-4 py-16 sm:px-6 lg:px-8"> 

        <div className="mx-auto max-w-7xl"> 

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"> 

            {facilities.map((facility) => ( 
              <article 
                key={facility.title} 
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl" 
              > 
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl"> 
                  {facility.icon} 
                </div> 

                <h2 className="mt-6 text-xl font-black"> 
                  {facility.title} 
                </h2> 

                <p className="mt-3 text-sm leading-7 text-slate-600"> 
                  {facility.text} 
                </p> 
              </article> 
            ))} 

          </div> 

        </div> 

      </section> 

      <footer className="bg-slate-950 px-4 py-8 text-center text-white"> 
        <p className="font-black">Shiv Gurukul Public School</p> 
        <p className="mt-1 text-xs text-slate-500"> 
          Classes 1–10 • CBSE • English Medium 
        </p> 
              <div className="mt-5"> 
        </div> 
      </footer> 

    </main> 
  ); 
} 

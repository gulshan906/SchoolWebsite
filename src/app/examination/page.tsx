import Link from "next/link"; 

export default function ExaminationPage() { 
  return ( 
    <main className="min-h-screen bg-slate-50 text-slate-900"> 

      {/* ===================================================== 
          PAGE HEADER 
      ===================================================== */} 
      <section className="bg-gradient-to-br from-blue-800 via-blue-700 to-slate-950 px-4 py-14 text-white sm:px-6 lg:px-8"> 

        <div className="mx-auto max-w-7xl"> 

          <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-200"> 
            Examination 
          </p> 

          <h1 className="mt-3 text-4xl font-black sm:text-5xl"> 
            Examination & Results 
          </h1> 

          <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base"> 
            Find examination information, important updates and school 
            results in one place. 
          </p> 

        </div> 

      </section> 

      {/* ===================================================== 
          MAIN CONTENT 
      ===================================================== */} 
      <section className="px-4 py-12 sm:px-6 lg:px-8"> 

        <div className="mx-auto max-w-7xl"> 

          <div className="grid gap-7 lg:grid-cols-[1fr_350px]"> 

            {/* LEFT CONTENT */} 
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"> 

              <div className="border-l-4 border-cyan-500 pl-4"> 

                <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700"> 
                  Examination 
                </p> 

                <h2 className="mt-2 text-2xl font-black sm:text-3xl"> 
                  Examination Information 
                </h2> 

              </div> 

              <p className="mt-6 text-sm leading-7 text-slate-600 sm:text-base"> 
                Shiv Gurukul Public School follows a structured academic 
                and examination system designed to support the learning 
                progress of every student. 
              </p> 

              <div className="mt-8 grid gap-4 sm:grid-cols-2"> 

                {/* CARD */} 
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5"> 

                  <div className="text-3xl"> 

                  </div> 

                  <h3 className="mt-4 font-black"> 
                    Annual Examination 
                  </h3> 

                  <p className="mt-2 text-sm leading-6 text-slate-600"> 
                    Annual examination information and schedules will be 
                    published by the school. 
                  </p> 

                </div> 

                {/* CARD */} 
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5"> 

                  <div className="text-3xl"> 

                  </div> 

                  <h3 className="mt-4 font-black"> 
                    Examination Schedule 
                  </h3> 

                  <p className="mt-2 text-sm leading-6 text-slate-600"> 
                    Students and parents should follow the examination 
                    schedule issued by the school. 
                  </p> 

                </div> 

                {/* CARD */} 
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5"> 

                  <div className="text-3xl"> 

                  </div> 

                  <h3 className="mt-4 font-black"> 
                    Classes 1–10 
                  </h3> 

                  <p className="mt-2 text-sm leading-6 text-slate-600"> 
                    Examination information is applicable to students of 
                    Classes 1 to 10. 
                  </p> 

                </div> 

                {/* CARD */} 
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5"> 

                  <div className="text-3xl"> 

                  </div> 

                  <h3 className="mt-4 font-black"> 
                    Student Results 
                  </h3> 

                  <p className="mt-2 text-sm leading-6 text-slate-600"> 
                    Published results can be viewed through the Result 
                    section. 
                  </p> 

                </div> 

              </div> 

            </div> 

            {/* ================================================= 
                RIGHT SIDE 
            ================================================= */} 
            <aside className="h-fit overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"> 

              {/* NOTICE BOARD */} 
              <div className="border-b border-slate-200 p-6"> 

                <div className="border-l-4 border-cyan-500 pl-3"> 

                  <h2 className="text-2xl font-black text-fuchsia-700"> 
                    NOTICE BOARD 
                  </h2> 

                  <div className="mt-1 border-b border-dashed border-cyan-500" /> 

                </div> 

                <div className="mt-5 space-y-4"> 

                  <div className="flex gap-3"> 

                    <span className="text-xl font-black text-cyan-500"> 

                    </span> 

                    <p className="text-sm leading-6 text-slate-600"> 
                      Examination related notices will be published here. 
                    </p> 

                  </div> 

                  <div className="flex gap-3"> 

                    <span className="text-xl font-black text-cyan-500"> 

                    </span> 

                    <p className="text-sm leading-6 text-slate-600"> 
                      Parents and students are requested to check the 
                      notice board regularly. 
                    </p> 

                  </div> 

                </div> 

              </div> 

              {/* RESULT */} 
              <div className="p-6"> 

                <div className="border-l-4 border-cyan-500 pl-3"> 

                  <h2 className="text-2xl font-black text-fuchsia-700"> 
                    RESULT 
                  </h2> 

                  <div className="mt-1 border-b border-dashed border-cyan-500" /> 

                </div> 

                <p className="mt-5 text-sm leading-6 text-slate-600"> 
                  Click below to view the latest examination result. 
                </p> 

                {/* PDF BUTTON */} 
                <a 
                  href="/result" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-5 flex items-center justify-between rounded-xl bg-blue-900 px-5 py-4 text-sm font-black text-white transition hover:bg-blue-700" 
                > 

                  <span> 
                     Latest Result 
                  </span> 

                  <span> 

                  </span> 

                </a> 

              </div> 

            </aside> 

          </div> 

          {/* ================================================= 
              RESULT BIG CARD 
          ================================================= */} 
          <div className="mt-8 rounded-3xl bg-gradient-to-r from-slate-950 to-blue-900 p-7 text-white shadow-xl sm:p-9"> 

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"> 

              <div> 

                <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-300"> 
                  Latest Result 
                </p> 

                <h2 className="mt-2 text-2xl font-black sm:text-3xl"> 
                  Examination Result 
                </h2> 

                <p className="mt-2 text-sm text-slate-300"> 
                  Click the button to open the result PDF. 
                </p> 

              </div> 

              <a 
                href="/result" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-black text-blue-900 shadow-lg transition hover:bg-blue-50" 
              > 
                 View Result PDF  
              </a> 

            </div> 

          </div> 

          {/* ================================================= 
              BACK HOME 
          ================================================= */} 
          <div className="mt-8 text-center"> 

            <Link 
              href="/" 
              className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-black text-slate-800 transition hover:bg-slate-100" 
            > 
               Back to Home 
            </Link> 

          </div> 

        </div> 

      </section> 

    </main> 
  ); 
} 

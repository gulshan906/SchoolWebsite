"use client"; 

import Link from "next/link"; 
import { useEffect, useState } from "react"; 

type ResultFile = { 
  name: string; 
  url: string; 
}; 

export default function ResultPage() { 
  const [results, setResults] = useState<ResultFile[]>([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => { 
    const loadResults = async () => { 
      try { 
        const response = await fetch("/api/results", { 
          cache: "no-store", 
        }); 

        if (!response.ok) { 
          throw new Error("Results loading failed"); 
        } 

        const data = await response.json(); 

        setResults( 
          Array.isArray(data.results) 
            ? data.results 
            : [], 
        ); 
      } catch (error) { 
        console.error("Results error:", error); 
        setResults([]); 
      } finally { 
        setLoading(false); 
      } 
    }; 

    loadResults(); 
  }, []); 

  return ( 
    <main className="min-h-screen bg-slate-50"> 

      {/* HEADER */} 
      <section className="bg-gradient-to-r from-indigo-950 to-indigo-800 px-4 py-16 text-white sm:px-6 lg:px-8"> 
        <div className="mx-auto max-w-7xl"> 

          <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-300"> 
            Examination 
          </p> 

          <h1 className="mt-3 text-3xl font-black sm:text-5xl"> 
            Examination Results 
          </h1> 

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-200"> 
            View and download the latest examination results. 
          </p> 

        </div> 
      </section> 

      {/* RESULTS */} 
      <section className="px-4 py-12 sm:px-6 lg:px-8"> 

        <div className="mx-auto max-w-5xl"> 

          {loading ? ( 
            <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-lg"> 
              <p className="font-black text-slate-600"> 
                Loading Results... 
              </p> 
            </div> 
          ) : results.length === 0 ? ( 
            <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-lg"> 

              <div className="text-5xl"> 

              </div> 

              <h2 className="mt-4 text-xl font-black text-slate-900"> 
                No Results Available 
              </h2> 

              <p className="mt-2 text-sm text-slate-500"> 
                Results will be published here. 
              </p> 

            </div> 
          ) : ( 
            <div className="grid gap-5 sm:grid-cols-2"> 

              {results.map((result, index) => ( 
                <article 
                  key={result.url} 
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl" 
                > 

                  <div className="flex items-start gap-4"> 

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-2xl text-red-600" aria-hidden="true"> 
                      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"> 
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /> 
                        <path d="M14 2v6h6" /> 
                        <path d="M8 13h8M8 17h6" /> 
                      </svg> 
                    </div> 

                    <div className="min-w-0 flex-1"> 

                      <p className="text-xs font-black uppercase tracking-widest text-indigo-600"> 
                        Result {index + 1} 
                      </p> 

                      <h2 className="mt-2 break-words text-lg font-black text-slate-900"> 
                        {result.name} 
                      </h2> 

                    </div> 

                  </div> 

                  <div className="mt-6 flex gap-3"> 

                    <a 
                      href={result.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 rounded-full bg-indigo-700 px-5 py-3 text-center text-sm font-black text-white transition hover:bg-indigo-800" 
                    > 
                       View PDF 
                    </a> 

                    <a 
                      href={result.url} 
                      download 
                      className="rounded-full border border-slate-300 px-5 py-3 text-sm font-black text-slate-700 transition hover:bg-slate-100" 
                    > 
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"> 
                        <path d="M12 3v12" /> 
                        <path d="m7 10 5 5 5-5" /> 
                        <path d="M5 21h14" /> 
                      </svg> 
                    </a> 

                  </div> 

                </article> 
              ))} 

            </div> 
          )} 

          {/* BACK HOME */} 
          <div className="mt-10 text-center"> 

            <Link 
              href="/" 
              className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-black text-slate-700 transition hover:bg-slate-100" 
            > 
               Back to Home 
            </Link> 

          </div> 

        </div> 

      </section> 

    </main> 
  ); 
} 

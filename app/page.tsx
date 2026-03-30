import Link from 'next/link';

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 sm:px-6 lg:px-10">
      <div className="mt-5 flex justify-center">
            <Link
              href="/giogay"
              className="inline-flex rounded-lg border border-sky-400 bg-sky-500/20 px-5 py-2 text-sm font-semibold tracking-wide text-sky-200 transition hover:bg-sky-500/35"
            >
              click here gaylord
            </Link>
          </div>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-xl sm:p-6">
          <p className="mb-4 text-center">
            <img
              src="https://capsule-render.vercel.app/api?type=waving&color=0:0f2027,100:203a43&height=200&section=header&text=Caine%20Bautista&fontSize=40&fontColor=ffffff&animation=fadeIn"
              alt="Caine Bautista banner"
              className="mx-auto w-full max-w-4xl rounded-xl"
            />
          </p>
          <p className="text-center">
            <img
              src="https://readme-typing-svg.herokuapp.com?font=Inter&size=22&duration=3000&color=2F80ED&center=true&vCenter=true&width=650&lines=Computer+Science+Student;Systems+%26+Backend+Engineer;Concurrency+%26+Simulation+Focused;Full-Stack+%26+Cross-Platform+Builder"
              alt="Typing intro"
              className="mx-auto w-full max-w-3xl"
            />
          </p>    
        </section>

        <section className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6">
          <h2 className="mb-4 text-2xl font-bold">About Me</h2>
          <p className="text-slate-300">
            Computer Science student building <strong>high-performance systems</strong>,{' '}
            <strong>multithreaded simulations</strong>, and <strong>scalable full-stack applications</strong>.
          </p>
          <p className="mt-3 text-slate-300">
            I work across layers - from low-level systems and databases to web, mobile, and desktop
            applications.
          </p>
          <p className="mt-5 text-slate-200">I design systems that are:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-300">
            <li>Scalable</li>
            <li>Measurable</li>
            <li>Architecturally clean</li>
            <li>Performance-aware</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
          <h2 className="mb-4 text-2xl font-bold">Focus Areas</h2>
          <div className="flex flex-wrap justify-center gap-2">
            <img src="https://img.shields.io/badge/Multithreading-Systems-blue?style=for-the-badge" alt="Multithreading Systems" />
            <img src="https://img.shields.io/badge/Statistical-Modeling-1f6feb?style=for-the-badge" alt="Statistical Modeling" />
            <img src="https://img.shields.io/badge/Backend-Architecture-0a192f?style=for-the-badge" alt="Backend Architecture" />
            <img src="https://img.shields.io/badge/Databases-Engineering-2F80ED?style=for-the-badge" alt="Databases Engineering" />
            <img src="https://img.shields.io/badge/Cross--Platform-Development-111827?style=for-the-badge" alt="Cross Platform Development" />
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
          <h2 className="mb-6 text-2xl font-bold">Tech Stack</h2>

          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-slate-200">Languages</h3>
              <img src="https://skillicons.dev/icons?i=c,cpp,java,python,rust,ts,js,haskell" alt="Languages" />
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-slate-200">Databases</h3>
              <div className="flex flex-wrap items-center gap-2">
                <img src="https://skillicons.dev/icons?i=mysql,postgres,mongodb,sqlite" alt="Databases" />
                <img
                  src="https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white"
                  alt="Supabase"
                />
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-slate-200">Backend and Infrastructure</h3>
              <img src="https://skillicons.dev/icons?i=nodejs,fastapi,flask,docker,linux" alt="Backend and Infrastructure" />
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-slate-200">Application Development</h3>
              <div className="flex flex-wrap items-center gap-2">
                <img src="https://skillicons.dev/icons?i=react,reactnative" alt="Application Development" />
                <img src="https://img.shields.io/badge/Desktop-Apps-0a192f?style=flat-square" alt="Desktop Apps" />
                <img src="https://img.shields.io/badge/CLI-Tools-111827?style=flat-square" alt="CLI Tools" />
                <img src="https://img.shields.io/badge/TUI-Applications-1f2937?style=flat-square" alt="TUI Applications" />
                <img src="https://img.shields.io/badge/Web-Applications-2563eb?style=flat-square" alt="Web Applications" />
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-slate-200">Tooling</h3>
              <img src="https://skillicons.dev/icons?i=git,github,vscode,neovim,vim" alt="Tooling" />
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
          <h2 className="mb-4 text-2xl font-bold">Engineering Themes</h2>
          <ul className="list-disc space-y-2 pl-5 text-slate-300">
            <li>Multithreaded vote simulation engines with probabilistic modeling</li>
            <li>Data validation pipelines and statistical comparison workflows</li>
            <li>YOLOv8 plus ONNX real-time object detection systems</li>
            <li>Rust plus SQL-based backend systems</li>
            <li>REST APIs with relational and NoSQL databases</li>
            <li>CLI, TUI, desktop, web, and mobile application development</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
          <h2 className="mb-4 text-2xl font-bold">GitHub Analytics</h2>
          <p className="text-center">
            <img
              src="https://streak-stats.demolab.com?user=caineirb&cache_seconds=86400"
              alt="GitHub streak stats"
              className="mx-auto"
            />
          </p>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
          <h2 className="mb-4 text-2xl font-bold">Contribution Activity</h2>
          <p className="text-center">
            <img
              src="https://github-readme-activity-graph.vercel.app/graph?username=caineirb&theme=github-compact&hide_border=true"
              alt="Contribution graph"
              className="mx-auto w-full max-w-4xl"
            />
          </p>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-800 p-6 text-center">
          <h2 className="mb-4 text-2xl font-bold">Engineering Philosophy</h2>
          <blockquote className="space-y-1 text-slate-200">
            <p>Design systems, not scripts.</p>
            <p>Build across layers.</p>
            <p>Measure before optimizing.</p>
            <p>Prefer clarity over cleverness.</p>
            <p>Performance is a feature.</p>
          </blockquote>
          <p className="mt-6">
            <a href="https://github.com/caineirb" target="_blank" rel="noreferrer">
              <img
                src="https://img.shields.io/badge/GitHub-caineirb-0f2027?style=for-the-badge&logo=github&logoColor=white"
                alt="GitHub profile"
                className="mx-auto"
              />
            </a>
          </p>
        </section>

        <section>
          <p className="text-center">
            <img
              src="https://capsule-render.vercel.app/api?type=waving&color=0:203a43,100:0f2027&height=120&section=footer"
              alt="Footer banner"
              className="mx-auto w-full max-w-4xl"
            />
          </p>
        </section>
      </div>
    </main>
  );
}

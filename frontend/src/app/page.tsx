const modules = [
  'Advanced JavaScript & TypeScript',
  'Node.js & NestJS Fundamentals',
  'PostgreSQL & Prisma',
  'Authentication & Security',
  'Next.js Full-Stack Frontend',
  'Testing & Code Quality',
  'DevOps & Deployment',
  'Architecture & Advanced Backend',
];
export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <header className="mb-16 flex items-center justify-between border-b border-stone-300 pb-6">
        <span className="text-xl font-bold tracking-tight">
          DevPath<span className="text-green-700">.</span>
        </span>
        <span className="text-sm text-stone-600">Monorepo foundation</span>
      </header>
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-green-800">
        Build your full-stack practice
      </p>
      <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
        A clear path.
        <br />
        One topic at a time.
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-600">
        Eight learning modules, from JavaScript fundamentals to production
        architecture. The workspace is ready for you to build the tracker
        described in specs.md.
      </p>
      <a
        className="mt-8 inline-block rounded-lg bg-green-900 px-5 py-3 font-medium text-white"
        href="#curriculum"
      >
        Explore the curriculum <span aria-hidden="true">↗</span>
      </a>
      <section
        id="curriculum"
        className="mt-20"
        aria-labelledby="curriculum-title"
      >
        <h2 id="curriculum-title" className="mb-6 text-2xl font-bold">
          Your learning roadmap
        </h2>
        <ol className="grid gap-3 sm:grid-cols-2">
          {modules.map((title, index) => (
            <li
              key={title}
              className="flex gap-5 rounded-xl border border-stone-200 bg-white p-6"
            >
              <span className="font-mono text-sm text-green-800">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-stone-500">
                  {index === 7 ? 'Advanced' : 'Core'} curriculum
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <footer className="mt-12 border-t border-stone-300 pt-6 text-sm leading-relaxed text-stone-600">
        Foundation preview. Account access, completion tracking and personal
        tasks are not implemented yet. See README.md for setup and the
        implementation roadmap.
      </footer>
    </main>
  );
}

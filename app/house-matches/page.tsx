export default function HouseMatches() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">ArenaX</h1>
            <p className="text-sm text-slate-500">
              College Events & House Championship
            </p>
          </div>

          <a
            href="/dashboard"
            className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700"
          >
            Dashboard
          </a>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900">
            House Matches
          </h2>

          <p className="mt-2 text-slate-500">
            Follow the ongoing house competitions and match results.
          </p>
        </div>

        {/* Houses */}
        <section className="grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
            <p className="text-sm font-semibold uppercase text-indigo-600">
              House 1
            </p>

            <h3 className="mt-2 text-3xl font-bold text-slate-900">
              Arjunas
            </h3>

            <p className="mt-4 text-4xl font-bold text-indigo-600">
              0
            </p>

            <p className="text-sm text-slate-500">
              Match Points
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
            <p className="text-sm font-semibold uppercase text-purple-600">
              House 2
            </p>

            <h3 className="mt-2 text-3xl font-bold text-slate-900">
              Bharatas
            </h3>

            <p className="mt-4 text-4xl font-bold text-purple-600">
              0
            </p>

            <p className="text-sm text-slate-500">
              Match Points
            </p>
          </div>

        </section>

        {/* Matches */}
        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm">

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Match Results
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Sports and other house competitions
              </p>
            </div>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600">
              No matches yet
            </span>
          </div>

          <div className="mt-6 rounded-xl border border-dashed border-slate-200 p-10 text-center">
            <p className="font-medium text-slate-700">
              No house matches have been added.
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Upcoming matches and their scores will appear here.
            </p>
          </div>

        </section>

        {/* Access information */}
        <div className="mt-6 rounded-xl bg-indigo-50 p-5 text-sm text-indigo-700">
          House match scores can be updated by authorised Student
          Coordinators, Teachers or Admin.
        </div>

      </div>
    </main>
  );
}
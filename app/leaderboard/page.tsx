export default function Leaderboard() {
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
            Leaderboards
          </h2>

          <p className="mt-2 text-slate-500">
            Track house standings and individual student performance.
          </p>
        </div>

        {/* House Championship */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                House Championship
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Overall house points
              </p>
            </div>

            <span className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600">
              Current Standings
            </span>
          </div>

          {/* Houses */}
          <div className="mt-6 space-y-4">

            <div className="flex items-center justify-between rounded-xl border p-5">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold">1</span>

                <div>
                  <p className="font-bold text-slate-900">
                    Arjunas
                  </p>

                  <p className="text-sm text-slate-500">
                    House
                  </p>
                </div>
              </div>

              <p className="text-xl font-bold text-slate-900">
                0 pts
              </p>
            </div>

            <div className="flex items-center justify-between rounded-xl border p-5">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold">2</span>

                <div>
                  <p className="font-bold text-slate-900">
                    Bharatas
                  </p>

                  <p className="text-sm text-slate-500">
                    House
                  </p>
                </div>
              </div>

              <p className="text-xl font-bold text-slate-900">
                0 pts
              </p>
            </div>

          </div>
        </section>

        {/* Individual Leaderboard */}
        <section className="mt-6 rounded-2xl bg-white p-6 shadow-sm">

          <h3 className="text-xl font-bold text-slate-900">
            Individual Leaderboard
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Individual sports and cultural performance.
          </p>

          <div className="mt-6 overflow-hidden rounded-xl border">

            <div className="grid grid-cols-4 bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-600">
              <span>Rank</span>
              <span>Student</span>
              <span>House</span>
              <span className="text-right">Points</span>
            </div>

            <div className="grid grid-cols-4 px-5 py-5 text-sm text-slate-500">
              <span>—</span>
              <span>No results yet</span>
              <span>—</span>
              <span className="text-right">0</span>
            </div>

          </div>

        </section>

        {/* Note */}
        <div className="mt-6 rounded-xl bg-indigo-50 p-5 text-sm text-indigo-700">
          Individual scores will be entered by authorised teachers or Admin.
          Students can view their own points and the leaderboard.
        </div>

      </div>
    </main>
  );
}
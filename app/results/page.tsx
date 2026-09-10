export default function Results() {
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
            My Results
          </h2>

          <p className="mt-2 text-slate-500">
            View your sports and cultural event performance.
          </p>
        </div>

        {/* Student summary */}
        <section className="grid gap-4 sm:grid-cols-3">

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Total Events</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">0</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Events Won</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">0</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Individual Points</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">0</p>
          </div>

        </section>

        {/* Sports */}
        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm">

          <h3 className="text-xl font-bold text-slate-900">
            Sports Results
          </h3>

          <div className="mt-5 overflow-hidden rounded-xl border">

            <div className="grid grid-cols-4 bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-600">
              <span>Event</span>
              <span>Position</span>
              <span>Points</span>
              <span className="text-right">Status</span>
            </div>

            <div className="px-5 py-8 text-center text-sm text-slate-500">
              No sports results available yet.
            </div>

          </div>

        </section>

        {/* Cultural */}
        <section className="mt-6 rounded-2xl bg-white p-6 shadow-sm">

          <h3 className="text-xl font-bold text-slate-900">
            Cultural Results
          </h3>

          <div className="mt-5 overflow-hidden rounded-xl border">

            <div className="grid grid-cols-4 bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-600">
              <span>Event</span>
              <span>Position</span>
              <span>Points</span>
              <span className="text-right">Status</span>
            </div>

            <div className="px-5 py-8 text-center text-sm text-slate-500">
              No cultural results available yet.
            </div>

          </div>

        </section>

        <div className="mt-6 rounded-xl bg-indigo-50 p-5 text-sm text-indigo-700">
          Individual scores can be entered only by authorised Teachers or
          Admin. Students can view their results here.
        </div>

      </div>
    </main>
  );
}
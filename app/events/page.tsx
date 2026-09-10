export default function Events() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              ArenaX
            </h1>
            <p className="text-sm text-slate-500">
              College Events & House Championship
            </p>
          </div>

          <a
            href="/dashboard"
            className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Dashboard
          </a>
        </div>
      </header>

      {/* Page */}
      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Events
          </h2>
          <p className="mt-2 text-slate-500">
            Explore sports, cultural and house championship events.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-8 flex flex-wrap gap-3">
          <button className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white">
            All Events
          </button>

          <button className="rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm">
            Sports
          </button>

          <button className="rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm">
            Cultural
          </button>

          <button className="rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm">
            House Championship
          </button>
        </div>

        {/* Events */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* Event 1 */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <div className="flex h-32 items-center justify-center bg-indigo-600">
              <span className="text-4xl">⚽</span>
            </div>

            <div className="p-6">
              <span className="text-xs font-semibold uppercase text-indigo-600">
                Sports
              </span>

              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Football Championship
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Inter-house football competition.
              </p>

              <div className="mt-5 space-y-2 text-sm text-slate-600">
                <p>📅 Date: To be announced</p>
                <p>📍 Venue: College Ground</p>
              </div>

              <button className="mt-5 w-full rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white">
                View Event
              </button>
            </div>
          </div>

          {/* Event 2 */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <div className="flex h-32 items-center justify-center bg-purple-600">
              <span className="text-4xl">🎤</span>
            </div>

            <div className="p-6">
              <span className="text-xs font-semibold uppercase text-purple-600">
                Cultural
              </span>

              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Battle of Bands
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Showcase your band's talent and compete for points.
              </p>

              <div className="mt-5 space-y-2 text-sm text-slate-600">
                <p>📅 Date: To be announced</p>
                <p>📍 Venue: Auditorium</p>
              </div>

              <button className="mt-5 w-full rounded-xl bg-purple-600 py-3 text-sm font-semibold text-white">
                View Event
              </button>
            </div>
          </div>

          {/* Event 3 */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <div className="flex h-32 items-center justify-center bg-pink-600">
              <span className="text-4xl">🏆</span>
            </div>

            <div className="p-6">
              <span className="text-xs font-semibold uppercase text-pink-600">
                House Championship
              </span>

              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Annual House Championship
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Earn points for your house through different events.
              </p>

              <div className="mt-5 space-y-2 text-sm text-slate-600">
                <p>📅 Date: To be announced</p>
                <p>📍 Venue: Main Campus</p>
              </div>

              <button className="mt-5 w-full rounded-xl bg-pink-600 py-3 text-sm font-semibold text-white">
                View Event
              </button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
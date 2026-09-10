export default function Updates() {
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

      <div className="mx-auto max-w-5xl px-6 py-10">

        {/* Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Updates & Announcements
          </h2>

          <p className="mt-2 text-slate-500">
            Stay updated with events, timings, deadlines and important notices.
          </p>
        </div>

        {/* Update 1 */}
        <div className="mb-5 rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
              Event Update
            </span>

            <span className="text-sm text-slate-400">
              Recently posted
            </span>
          </div>

          <h3 className="mt-4 text-xl font-bold text-slate-900">
            Event timings will be announced
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Check the Events section regularly for confirmed dates,
            timings and venues.
          </p>
        </div>

        {/* Update 2 */}
        <div className="mb-5 rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-600">
              Registration
            </span>

            <span className="text-sm text-slate-400">
              Deadline
            </span>
          </div>

          <h3 className="mt-4 text-xl font-bold text-slate-900">
            Event registration deadlines
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Application deadlines for individual sports and cultural events
            will be displayed here.
          </p>
        </div>

        {/* Update 3 */}
        <div className="mb-5 rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-600">
              House Championship
            </span>

            <span className="text-sm text-slate-400">
              Announcement
            </span>
          </div>

          <h3 className="mt-4 text-xl font-bold text-slate-900">
            House matches
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            House match schedules and results will be updated on ArenaX.
          </p>
        </div>

        {/* Empty state */}
        <div className="mt-8 rounded-2xl border border-dashed border-slate-300 p-8 text-center">
          <p className="font-medium text-slate-700">
            More updates will appear here.
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Updates will eventually be posted by authorised users.
          </p>
        </div>

      </div>
    </main>
  );
}
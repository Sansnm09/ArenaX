export default function TeacherDashboard() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">ArenaX</h1>
            <p className="text-sm text-slate-500">
              Teacher Panel
            </p>
          </div>

          <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-600">
            Teacher
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Welcome */}
        <section className="rounded-2xl bg-gradient-to-r from-emerald-700 to-teal-700 p-8 text-white">
          <p className="text-sm text-white/80">
            ArenaX Faculty
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Teacher Dashboard
          </h2>

          <p className="mt-2 max-w-2xl text-white/80">
            Enter individual student scores, record results and
            review student performance.
          </p>
        </section>

        {/* Overview */}
        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Students</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">0</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Events</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">0</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Scores Entered</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">0</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Results Published</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">0</p>
          </div>

        </section>

        {/* Actions */}
        <section className="mt-8">

          <h3 className="mb-4 text-xl font-bold text-slate-900">
            Teacher Actions
          </h3>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {/* Enter Scores */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h4 className="text-lg font-bold text-slate-900">
                Enter Individual Scores
              </h4>

              <p className="mt-2 text-sm text-slate-500">
                Record student performance in sports and cultural
                events.
              </p>

              <button className="mt-5 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white">
                Enter Scores
              </button>
            </div>

            {/* Results */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h4 className="text-lg font-bold text-slate-900">
                Manage Results
              </h4>

              <p className="mt-2 text-sm text-slate-500">
                Review student results before they are published.
              </p>

              <button className="mt-5 rounded-xl bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white">
                View Results
              </button>
            </div>

            {/* Students */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h4 className="text-lg font-bold text-slate-900">
                Students
              </h4>

              <p className="mt-2 text-sm text-slate-500">
                View students assigned to your events and activities.
              </p>

              <button className="mt-5 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white">
                View Students
              </button>
            </div>

          </div>
        </section>

        {/* Recent scores */}
        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm">

          <h3 className="text-xl font-bold text-slate-900">
            Recent Scores
          </h3>

          <div className="mt-5 rounded-xl border border-dashed border-slate-200 p-10 text-center">
            <p className="font-medium text-slate-700">
              No scores entered yet.
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Student scores will appear here after they are recorded.
            </p>
          </div>

        </section>

        {/* Permission */}
        <div className="mt-6 rounded-2xl bg-emerald-50 p-6">
          <h3 className="font-bold text-emerald-900">
            Teacher Access
          </h3>

          <p className="mt-2 text-sm leading-6 text-emerald-800">
            Teachers can enter and manage individual student scores
            for the events assigned to them. They cannot manage
            student accounts or overall house configuration.
          </p>
        </div>

      </div>
    </main>
  );
}
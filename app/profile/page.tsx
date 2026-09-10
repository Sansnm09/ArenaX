export default function Profile() {
  return (
    <main className="min-h-screen bg-slate-50">

      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">ArenaX</h1>
            <p className="text-sm text-slate-500">Student Profile</p>
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

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900">
            My Profile
          </h2>
          <p className="mt-2 text-slate-500">
            View your ArenaX account and participation details.
          </p>
        </div>

        {/* Student information */}
        <section className="rounded-2xl bg-white p-8 shadow-sm">

          <div className="flex items-center gap-5 border-b pb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-2xl font-bold text-indigo-700">
              S
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Student Name
              </h3>
              <p className="text-sm text-slate-500">
                Student ID: 234509
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">

            <div>
              <p className="text-sm text-slate-500">Student ID</p>
              <p className="mt-1 font-semibold text-slate-900">
                234509
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">House</p>
              <p className="mt-1 font-semibold text-slate-900">
                Not Assigned
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Registered Events</p>
              <p className="mt-1 font-semibold text-slate-900">
                0
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Total Points</p>
              <p className="mt-1 font-semibold text-slate-900">
                0
              </p>
            </div>

          </div>
        </section>

        {/* Participation */}
        <section className="mt-6 rounded-2xl bg-white p-8 shadow-sm">

          <h3 className="text-xl font-bold text-slate-900">
            Participation
          </h3>

          <div className="mt-5 rounded-xl border border-dashed border-slate-300 p-8 text-center">
            <p className="font-medium text-slate-700">
              No events participated in yet.
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Your registered events and results will appear here.
            </p>

            <a
              href="/events"
              className="mt-5 inline-block rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white"
            >
              Explore Events
            </a>
          </div>

        </section>

      </div>
    </main>
  );
}
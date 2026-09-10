export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">ArenaX</h1>
            <p className="text-sm text-slate-500">
              Admin Control Panel
            </p>
          </div>

          <span className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600">
            Administrator
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Welcome */}
        <section className="rounded-2xl bg-gradient-to-r from-indigo-700 to-purple-700 p-8 text-white">
          <p className="text-sm text-white/80">ArenaX Administration</p>

          <h2 className="mt-2 text-3xl font-bold">
            Admin Dashboard
          </h2>

          <p className="mt-2 max-w-2xl text-white/80">
            Manage students, teachers, coordinators, events, scores,
            houses and overall points from one place.
          </p>
        </section>

        {/* Overview */}
        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Students</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">0</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Teachers</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">0</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Coordinators</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">0</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Events</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">0</p>
          </div>

        </section>

        {/* Management */}
        <section className="mt-8">

          <h3 className="mb-4 text-xl font-bold text-slate-900">
            Management
          </h3>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h4 className="text-lg font-bold text-slate-900">
                User Accounts
              </h4>

              <p className="mt-2 text-sm text-slate-500">
                Create and manage student, teacher and coordinator
                accounts.
              </p>

              <button className="mt-5 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white">
                Manage Users
              </button>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h4 className="text-lg font-bold text-slate-900">
                Coordinators
              </h4>

              <p className="mt-2 text-sm text-slate-500">
                Assign students as Student Coordinators and manage
                their access.
              </p>

              <button className="mt-5 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white">
                Assign Coordinators
              </button>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h4 className="text-lg font-bold text-slate-900">
                Events
              </h4>

              <p className="mt-2 text-sm text-slate-500">
                Manage event limits, deadlines, timings and event
                information.
              </p>

              <button className="mt-5 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white">
                Manage Events
              </button>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h4 className="text-lg font-bold text-slate-900">
                House Points
              </h4>

              <p className="mt-2 text-sm text-slate-500">
                Maintain the official points for the house
                championship.
              </p>

              <button className="mt-5 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white">
                Manage Points
              </button>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h4 className="text-lg font-bold text-slate-900">
                Individual Scores
              </h4>

              <p className="mt-2 text-sm text-slate-500">
                View and manage individual sports and cultural
                scores.
              </p>

              <button className="mt-5 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white">
                Manage Scores
              </button>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h4 className="text-lg font-bold text-slate-900">
                Updates
              </h4>

              <p className="mt-2 text-sm text-slate-500">
                Publish announcements, deadlines, timings and other
                updates.
              </p>

              <button className="mt-5 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white">
                Manage Updates
              </button>
            </div>

          </div>
        </section>

        {/* Important rule */}
        <div className="mt-8 rounded-2xl bg-amber-50 p-6">
          <h3 className="font-bold text-amber-900">
            Admin Control
          </h3>

          <p className="mt-2 text-sm leading-6 text-amber-800">
            The Admin has overall control of ArenaX, including user
            accounts, event limits, house points, individual scores
            and house configuration.
          </p>
        </div>

      </div>
    </main>
  );
}
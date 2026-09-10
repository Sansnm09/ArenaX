export default function CoordinatorDashboard() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">ArenaX</h1>
            <p className="text-sm text-slate-500">
              Student Coordinator Panel
            </p>
          </div>

          <span className="rounded-full bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-600">
            Student Coordinator
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Welcome */}
        <section className="rounded-2xl bg-gradient-to-r from-purple-700 to-indigo-700 p-8 text-white">
          <p className="text-sm text-white/80">
            ArenaX Coordination
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Coordinator Dashboard
          </h2>

          <p className="mt-2 max-w-2xl text-white/80">
            Manage events, registrations, timings, deadlines and
            house-match scores.
          </p>
        </section>

        {/* Overview */}
        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">My Events</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">0</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Registrations</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">0</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Upcoming Events</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">0</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">House Matches</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">0</p>
          </div>

        </section>

        {/* Management */}
        <section className="mt-8">

          <h3 className="mb-4 text-xl font-bold text-slate-900">
            Coordinator Actions
          </h3>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {/* Events */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h4 className="text-lg font-bold text-slate-900">
                Create Event
              </h4>

              <p className="mt-2 text-sm text-slate-500">
                Create sports and cultural events with dates, timings,
                venues and descriptions.
              </p>

              <button className="mt-5 rounded-xl bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white">
                Create Event
              </button>
            </div>

            {/* Edit Events */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h4 className="text-lg font-bold text-slate-900">
                Edit Events
              </h4>

              <p className="mt-2 text-sm text-slate-500">
                Update event information, timings, deadlines and
                participation limits.
              </p>

              <button className="mt-5 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white">
                Manage Events
              </button>
            </div>

            {/* Registrations */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h4 className="text-lg font-bold text-slate-900">
                Registrations
              </h4>

              <p className="mt-2 text-sm text-slate-500">
                View students registered for your events and manage
                event participation.
              </p>

              <button className="mt-5 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white">
                View Registrations
              </button>
            </div>

            {/* House Matches */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h4 className="text-lg font-bold text-slate-900">
                House Matches
              </h4>

              <p className="mt-2 text-sm text-slate-500">
                Record scores and results for house matches between
                the participating houses.
              </p>

              <button className="mt-5 rounded-xl bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white">
                Update Match Scores
              </button>
            </div>

            {/* Individual Scores */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h4 className="text-lg font-bold text-slate-900">
                Student Scores
              </h4>

              <p className="mt-2 text-sm text-slate-500">
                Upload individual sports and cultural scores where
                coordinator access has been provided.
              </p>

              <button className="mt-5 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white">
                Enter Scores
              </button>
            </div>

            {/* Updates */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h4 className="text-lg font-bold text-slate-900">
                Post Update
              </h4>

              <p className="mt-2 text-sm text-slate-500">
                Publish event timings, deadlines and important
                announcements.
              </p>

              <button className="mt-5 rounded-xl bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white">
                Post Update
              </button>
            </div>

          </div>
        </section>

        {/* Permission note */}
        <div className="mt-8 rounded-2xl bg-purple-50 p-6">
          <h3 className="font-bold text-purple-900">
            Coordinator Access
          </h3>

          <p className="mt-2 text-sm leading-6 text-purple-800">
            Student Coordinators can manage assigned events and
            house-match scores without waiting for separate Admin
            approval. Individual score access will depend on the
            permissions assigned to the coordinator.
          </p>
        </div>

      </div>
    </main>
  );
}
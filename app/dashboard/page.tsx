"use client";

export default function Dashboard() {
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

          <div className="text-right">
            <p className="font-semibold text-slate-900">Student</p>
            <p className="text-sm text-slate-500">Student ID: 234509</p>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-6 py-8">

        {/* Welcome */}
        <section className="rounded-2xl bg-gradient-to-r from-indigo-700 to-purple-700 p-8 text-white">
          <p className="text-sm text-white/80">Welcome back</p>

          <h2 className="mt-2 text-3xl font-bold">
            Your ArenaX Dashboard
          </h2>

          <p className="mt-2 max-w-2xl text-white/80">
            Keep track of your events, participation, results and house
            standings.
          </p>
        </section>

        {/* Quick stats */}
        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Registered Events</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">0</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Upcoming Events</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">0</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">My Points</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">0</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">House Position</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">-</p>
          </div>

        </section>

        {/* Main sections */}
        <section className="mt-8 grid gap-6 lg:grid-cols-2">

          {/* Upcoming events */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900">
                Upcoming Events
              </h3>

              <button className="text-sm font-medium text-indigo-600">
                View all
              </button>
            </div>

            <div className="mt-6 rounded-xl border border-dashed border-slate-200 p-8 text-center">
              <p className="font-medium text-slate-700">
                No upcoming events
              </p>

              <p className="mt-1 text-sm text-slate-500">
                New events will appear here.
              </p>
            </div>
          </div>

          {/* My participation */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900">
              My Participation
            </h3>

            <div className="mt-6 rounded-xl border border-dashed border-slate-200 p-8 text-center">
              <p className="font-medium text-slate-700">
                You haven't registered for any events yet.
              </p>

              <button className="mt-4 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white">
                Explore Events
              </button>
            </div>
          </div>

        </section>

        {/* Bottom sections */}
        <section className="mt-6 grid gap-6 lg:grid-cols-3">

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-bold text-slate-900">My Results</h3>
            <p className="mt-2 text-sm text-slate-500">
              Your sports and cultural results will appear here.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-bold text-slate-900">House Standings</h3>
            <p className="mt-2 text-sm text-slate-500">
              See how your house is performing.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-bold text-slate-900">Latest Updates</h3>
            <p className="mt-2 text-sm text-slate-500">
              Important announcements will appear here.
            </p>
          </div>

        </section>

      </div>
    </main>
  );
}
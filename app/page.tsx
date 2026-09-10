import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <nav className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-bold">
            ArenaX
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            <Link
              href="/events"
              className="text-slate-300 hover:text-white"
            >
              Events
            </Link>

            <Link
              href="/leaderboard"
              className="text-slate-300 hover:text-white"
            >
              Leaderboard
            </Link>

            <Link
              href="/results"
              className="text-slate-300 hover:text-white"
            >
              Results
            </Link>

            <Link
              href="/profile"
              className="text-slate-300 hover:text-white"
            >
              Profile
            </Link>

            <Link
              href="/register"
              className="rounded-lg bg-white px-4 py-2 font-semibold text-slate-950 hover:bg-slate-200"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-[75vh] items-center justify-center px-6">
        <div className="mx-auto max-w-4xl text-center">

          <div className="mb-6 inline-block rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
            College Events & Competitions
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl">
            Welcome to ArenaX
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Your central platform for college events, competitions,
            registrations, results, rankings and house points.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/events"
              className="rounded-lg bg-white px-7 py-3 font-semibold text-slate-950 hover:bg-slate-200"
            >
              Explore Events
            </Link>

            <Link
              href="/register"
              className="rounded-lg border border-slate-700 px-7 py-3 font-semibold text-white hover:bg-slate-900"
            >
              Register Now
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-slate-800 px-6 py-16">
        <div className="mx-auto max-w-6xl">

          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold">
              Everything in one arena
            </h2>

            <p className="mt-3 text-slate-400">
              Discover, participate and track your college competitions.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {/* Events */}
            <Link
              href="/events"
              className="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition hover:-translate-y-1 hover:border-slate-600"
            >
              <div className="mb-4 text-3xl">01</div>

              <h3 className="text-xl font-bold">
                Events
              </h3>

              <p className="mt-3 text-slate-400">
                Browse upcoming college events and competitions and
                find something to participate in.
              </p>
            </Link>

            {/* Leaderboard */}
            <Link
              href="/leaderboard"
              className="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition hover:-translate-y-1 hover:border-slate-600"
            >
              <div className="mb-4 text-3xl">02</div>

              <h3 className="text-xl font-bold">
                Leaderboard
              </h3>

              <p className="mt-3 text-slate-400">
                Track house rankings, points and competition
                performance.
              </p>
            </Link>

            {/* Results */}
            <Link
              href="/results"
              className="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition hover:-translate-y-1 hover:border-slate-600"
            >
              <div className="mb-4 text-3xl">03</div>

              <h3 className="text-xl font-bold">
                Results
              </h3>

              <p className="mt-3 text-slate-400">
                View competition results and see how participants
                performed.
              </p>
            </Link>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-slate-800 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to enter the arena?
          </h2>

          <p className="mt-4 text-slate-400">
            Explore events and become part of the competition.
          </p>

          <Link
            href="/events"
            className="mt-8 inline-block rounded-lg bg-white px-7 py-3 font-semibold text-slate-950 hover:bg-slate-200"
          >
            View Events
          </Link>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-6 py-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <p className="font-semibold">
            ArenaX
          </p>

          <p className="text-sm text-slate-500">
            College Events Platform
          </p>
        </div>
      </footer>

    </main>
  );
}

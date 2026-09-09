"use client";

import { useState } from "react";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-5xl grid md:grid-cols-2 overflow-hidden rounded-3xl bg-white shadow-2xl">

        {/* Left side */}
        <div className="hidden md:flex flex-col justify-between bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 p-10 text-white">
          <div>
            <div className="text-3xl font-bold tracking-tight">
              ArenaX
            </div>
            <div className="mt-2 text-sm text-white/80">
              College Events & House Championship
            </div>
          </div>

          <div>
            <p className="text-4xl font-bold leading-tight">
              Compete.
              <br />
              Participate.
              <br />
              Represent.
            </p>

            <p className="mt-5 max-w-sm text-white/80">
              Your central platform for sports, cultural events,
              house competitions, results and leaderboards.
            </p>
          </div>

          <div className="text-sm text-white/70">
            Sports • Cultural • Houses • Results
          </div>
        </div>

        {/* Login side */}
        <div className="p-8 sm:p-12">
          <div className="mb-10 md:hidden">
            <div className="text-3xl font-bold text-slate-900">
              ArenaX
            </div>
            <p className="mt-1 text-sm text-slate-500">
              College Events & House Championship
            </p>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900">
              Welcome back
            </h1>
            <p className="mt-2 text-slate-500">
              Sign in to access your ArenaX account.
            </p>
          </div>

          <form className="space-y-5">

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                User ID
              </label>

              <input
                type="text"
                placeholder="Enter your User ID"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 pr-20 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-indigo-600"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button
              type="button"
              className="w-full rounded-xl bg-indigo-600 py-3.5 font-semibold text-white transition hover:bg-indigo-700"
            >
              Sign In
            </button>

          </form>

          <div className="mt-8 rounded-xl bg-slate-50 p-4 text-center text-sm text-slate-500">
            Your account is created and managed by the Admin.
          </div>

        </div>
      </div>
    </main>
  );
}
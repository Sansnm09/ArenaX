"use client";

import { useState } from "react";

export default function Register() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">ArenaX</h1>
            <p className="text-sm text-slate-500">
              Event Registration
            </p>
          </div>

          <a
            href="/events"
            className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700"
          >
            Events
          </a>
        </div>
      </header>

      <div className="mx-auto max-w-2xl px-6 py-10">
        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900">
            Register for an Event
          </h2>

          <p className="mt-2 text-slate-500">
            Submit your details to participate in an ArenaX event.
          </p>

          {submitted ? (
            <div className="mt-8 rounded-xl bg-emerald-50 p-6 text-center">
              <h3 className="font-bold text-emerald-800">
                Registration submitted
              </h3>

              <p className="mt-2 text-sm text-emerald-700">
                Your registration has been recorded successfully.
              </p>

              <a
                href="/events"
                className="mt-5 inline-block rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white"
              >
                Back to Events
              </a>
            </div>
          ) : (
            <form
              className="mt-8 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Student Name
                </label>

                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Student ID
                </label>

                <input
                  type="text"
                  required
                  placeholder="Enter your Student ID"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Select Event
                </label>

                <select
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500"
                >
                  <option value="">Choose an event</option>
                  <option>Football Championship</option>
                  <option>Battle of Bands</option>
                  <option>Annual House Championship</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Category
                </label>

                <select
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500"
                >
                  <option value="">Choose category</option>
                  <option>Sports</option>
                  <option>Cultural</option>
                  <option>House Championship</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-indigo-600 py-3.5 font-semibold text-white hover:bg-indigo-700"
              >
                Submit Registration
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
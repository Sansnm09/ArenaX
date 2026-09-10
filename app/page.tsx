"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">ArenaX</h1>
          <p className="text-slate-400 mt-2">
            College Events & Competitions
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-slate-900 text-center">
            Student Login
          </h2>

          <p className="text-slate-500 text-center mt-2 mb-6">
            Login to access your ArenaX dashboard
          </p>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Student Email
              </label>

              <input
                type="email"
                placeholder="Enter your college email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-slate-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-slate-900"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-slate-950 py-3 font-semibold text-white hover:bg-slate-800"
            >
              Login
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm text-slate-500">
              Don't have an account?
            </p>

            <button
              onClick={() => router.push("/register")}
              className="mt-1 text-sm font-semibold text-slate-900 hover:underline"
            >
              Register as a Student
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

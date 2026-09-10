"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

export default function Home() {
  const [status, setStatus] = useState("Testing Supabase...");

  useEffect(() => {
    async function testConnection() {
      const supabase = createClient();

      const { error } = await supabase
        .from("test")
        .select("*")
        .limit(1);

      if (error) {
        setStatus("Supabase is connected, but the test table is not created yet.");
      } else {
        setStatus("Supabase connected successfully!");
      }
    }

    testConnection();
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">
          ArenaX
        </h1>

        <p className="mt-4 text-slate-700">
          {status}
        </p>
      </div>
    </main>
  );
}
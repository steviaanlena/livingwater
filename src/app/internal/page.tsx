"use client";

import { useState } from "react";
import Logo from "@/components/Logo";
import ContentCalendar from "@/components/ContentCalendar";

export default function InternalPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "12345") {
      setAuthenticated(true);
      setError("");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-navy-50 to-cream">
        <form
          onSubmit={handleLogin}
          className="bg-white rounded-2xl p-10 shadow-lg w-full max-w-sm space-y-6"
        >
          <div className="text-center">
            <Logo size={56} className="mx-auto mb-4" />
            <h1 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy-800">
              Internal Access
            </h1>
            <p className="text-sm text-navy-500 mt-1">LivingWater Admin</p>
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center bg-red-50 py-2 rounded-lg">
              {error}
            </p>
          )}

          <div>
            <label htmlFor="username" className="block text-sm font-medium text-navy-700 mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-navy-200 bg-cream focus:outline-none focus:ring-2 focus:ring-navy-400 transition-all"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-navy-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-navy-200 bg-cream focus:outline-none focus:ring-2 focus:ring-navy-400 transition-all"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-navy-600 text-white rounded-lg font-medium hover:bg-navy-700 transition-colors"
          >
            Sign In
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <header className="bg-white border-b border-navy-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo size={36} />
            <div>
              <span className="font-[family-name:var(--font-playfair)] text-lg font-bold text-navy-700">
                LivingWater
              </span>
              <span className="text-navy-400 text-sm ml-2">Content Calendar</span>
            </div>
          </div>
          <button
            onClick={() => setAuthenticated(false)}
            className="text-sm text-navy-500 hover:text-navy-700 transition-colors"
          >
            Sign Out
          </button>
        </div>
      </header>
      <ContentCalendar />
    </div>
  );
}

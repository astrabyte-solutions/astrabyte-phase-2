"use client";

import { FormEvent, useState } from "react";

export default function AdminLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => null);
        setError(json?.error || "Invalid credentials");
        return;
      }

      window.location.href = "/admin-x9k2a7q";
    } catch {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md bg-surface border border-border rounded-2xl p-8 space-y-5">
      <h1 className="text-3xl font-bold">Admin Login</h1>
      <input
        name="email"
        type="email"
        required
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full bg-background border border-border rounded-xl px-4 py-3"
      />
      <input
        name="password"
        type="password"
        required
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full bg-background border border-border rounded-xl px-4 py-3"
      />
      {error && <p className="text-sm text-red-400">{error}</p>}
      <button type="submit" disabled={loading} className="w-full bg-primary text-white py-3 rounded-xl font-semibold disabled:opacity-60">
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}

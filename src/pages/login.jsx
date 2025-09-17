import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const nav = useNavigate();

  function submit(e) {
    e.preventDefault();
    // mock login
    alert("Logged in (demo)");
    nav("/");
  }

  return (
    <div className="container py-24">
      <div className="max-w-md mx-auto card p-6">
        <h1 className="text-2xl font-bold mb-4">Sign In</h1>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm">Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} className="mt-1 block w-full rounded-md border p-2" />
          </div>
          <div>
            <label className="block text-sm">Password</label>
            <input type="password" className="mt-1 block w-full rounded-md border p-2" />
          </div>
          <button type="submit" className="w-full bg-[var(--primary-color)] text-white py-2 rounded">Sign in</button>
        </form>
      </div>
    </div>
  );
}

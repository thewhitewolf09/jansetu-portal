import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const loc = useLocation();
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-3xl text-[var(--primary-color)]">account_balance</span>
          <Link to="/" className="text-xl font-bold text-slate-900">JanSetu</Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link className={`text-sm ${loc.pathname === "/" ? "text-[var(--primary-color)] font-semibold" : "text-slate-600"}`} to="/">Home</Link>
          <Link className={`text-sm ${loc.pathname === "/report" ? "text-[var(--primary-color)] font-semibold" : "text-slate-600"}`} to="/report">Report Issue</Link>
          <Link className={`text-sm ${loc.pathname === "/track" ? "text-[var(--primary-color)] font-semibold" : "text-slate-600"}`} to="/track">Track Status</Link>
          <Link className={`text-sm ${loc.pathname === "/help" ? "text-[var(--primary-color)] font-semibold" : "text-slate-600"}`} to="/help">Help</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/login" className="hidden sm:inline-block px-3 py-1 rounded-md border border-slate-200 text-sm">Sign in</Link>
          <button className="md:hidden p-2">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}

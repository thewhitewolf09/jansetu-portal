import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-700/60 to-slate-900/60 text-white py-20" style={{
      backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6))"
    }}>
      <div className="container text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold">Welcome to JanSetu</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">Empowering citizens to report issues — in just a click.</p>
        <div className="mt-8 flex justify-center gap-4">
          <Link to="/report" className="bg-[var(--primary-color)] text-white px-6 py-3 rounded-md font-semibold">Report an Issue</Link>
          <Link to="/track" className="bg-white text-slate-900 px-6 py-3 rounded-md font-semibold">Track Status</Link>
        </div>
      </div>
    </section>
  );
}

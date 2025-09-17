import React from "react";
import announcements from "../data/announcements.json";
import roadClosed from "../images/road closed.jpg";
import waterSupply from "../images/Water Supply Disruption.jpg";

const imageMap = {
  roadClosed,
  waterSupply,
};


export default function Announcements() {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6 text-center">Announcements & Notices</h2>
        <div className="grid gap-6">
          {announcements.map(a => (
            <article key={a.id} className="card p-4 md:flex md:gap-6">
              <div className="md:w-1/3 h-50 bg-cover bg-center" style={{ backgroundImage: `url(${imageMap[a.image]})` }} />
              <div className="p-4 md:w-2/3">
                <p className="text-xs font-semibold text-[var(--primary-color)]">Notice</p>
                <h3 className="text-xl font-bold">{a.title}</h3>
                <p className="text-sm text-slate-600 mt-2">{a.body}</p>
                <p className="text-xs text-slate-400 mt-2">{a.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

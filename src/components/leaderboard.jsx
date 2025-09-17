import React from "react";
import data from "../data/leaderboard.json";

export default function Leaderboard() {
  return (
    <section className="py-12 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6">Leaderboard</h2>
        <div className="card overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-xs font-medium text-slate-500">Rank</th>
                <th className="px-6 py-3 text-xs font-medium text-slate-500">User</th>
                <th className="px-6 py-3 text-xs font-medium text-slate-500">Contributions</th>
                <th className="px-6 py-3 text-xs font-medium text-slate-500">Badge</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {data.map(row => (
                <tr key={row.rank} className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold">{row.rank}</td>
                  <td className="px-6 py-4 font-medium">{row.name}</td>
                  <td className="px-6 py-4 text-sm text-slate-500">{row.contributions}</td>
                  <td className="px-6 py-4">
                    {row.badge ? <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${row.badge==="Gold"?"bg-amber-400 text-white":row.badge==="Silver"?"bg-slate-400 text-white":"bg-amber-700 text-white"}`}>{row.badge}</span> : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

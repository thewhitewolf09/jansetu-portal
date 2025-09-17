import React, { useEffect, useState } from "react";
import metricsData from "../data/metrics.json";

export default function Metrics() {
  const [counts, setCounts] = useState({ reported: 0, resolved: 0, pending: 0 });

  useEffect(() => {
    // simple animate
    const animate = (id, to) => {
      let start = 0;
      const dur = 900;
      const step = () => {
        start += Math.ceil(to / (dur / 30));
        if (start >= to) start = to;
        setCounts(prev => ({ ...prev, [id]: start }));
        if (start < to) setTimeout(step, 30);
      };
      step();
    };
    animate("reported", metricsData.reported);
    animate("resolved", metricsData.resolved);
    animate("pending", metricsData.pending);
  }, []);

  return (
    <section className="py-12 bg-slate-100">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">Metrics / Impact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="card p-6">
            <p className="text-4xl font-bold text-[var(--primary-color)]">{counts.reported}</p>
            <p className="mt-2 text-sm text-slate-600">Total Issues Reported</p>
          </div>
          <div className="card p-6">
            <p className="text-4xl font-bold text-green-500">{counts.resolved}</p>
            <p className="mt-2 text-sm text-slate-600">Issues Resolved</p>
          </div>
          <div className="card p-6">
            <p className="text-4xl font-bold text-amber-500">{counts.pending}</p>
            <p className="mt-2 text-sm text-slate-600">Issues Pending</p>
          </div>
        </div>
      </div>
    </section>
  );
}

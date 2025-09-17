import React, { useEffect, useState } from "react";
import issuesData from "../data/issues.json";

export default function TrackStatus() {
  const [issues, setIssues] = useState([]);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    // load mock
    setIssues(issuesData);
  }, []);

  function handleSearch(e) {
    e.preventDefault();
    const val = query.trim();
    if (!val) return setSelected(null);
    const found = issues.find(it => it.id.toLowerCase() === val.toLowerCase());
    setSelected(found || { notFound: true, id: val });
  }

  return (
    <div className="container py-12">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-bold mb-2">Track Your Issues</h2>
          <p className="text-slate-600 mb-4">Enter your tracking ID or choose from your reported issues.</p>

          <form onSubmit={handleSearch} className="mb-4 relative">
            <input value={query} onChange={e => setQuery(e.target.value)} placeholder="#12345" className="w-full rounded-md p-3 pl-12 border" />
            <button className="absolute right-2 top-2 bg-[var(--primary-color)] text-white px-3 py-1 rounded">Search</button>
          </form>

          <div className="card">
            <div className="px-6 py-4 border-b"><strong>Your Reported Issues</strong></div>
            <ul>
              {issues.map(it => (
                <li key={it.id} className="px-6 py-3 border-b hover:bg-slate-50 cursor-pointer" onClick={() => setSelected(it)}>
                  <div className="flex justify-between">
                    <div>
                      <div className="font-medium">{it.id}</div>
                      <div className="text-sm text-slate-500">{it.type}</div>
                    </div>
                    <div className="text-sm">
                      <span className={`px-2 py-0.5 rounded-full text-xs ${it.status==="Resolved"?"bg-green-100 text-green-800":it.status==="In Progress"?"bg-yellow-100 text-yellow-800":"bg-red-100 text-red-800"}`}>{it.status}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-2 card p-6">
          {!selected && <p className="text-slate-600">Select an issue to view details or search by tracking ID.</p>}
          {selected?.notFound && <div>No issue found for <strong>{selected.id}</strong></div>}
          {selected && !selected.notFound && (
            <>
              <h3 className="text-xl font-semibold">{selected.type} <span className="text-sm text-slate-500">({selected.id})</span></h3>
              <p className="text-sm text-slate-600 mt-2">{selected.desc}</p>
              <div className="mt-4">
                <p className="text-sm">Reported: <span className="font-medium">{selected.date}</span></p>
                <p className="text-sm mt-1">Status: <span className="font-medium">{selected.status}</span></p>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-2">Status Timeline</h4>
                <ol className="border-l ml-3">
                  <li className="mb-4 pl-4">
                    <div className="text-sm font-semibold">Reported</div>
                    <div className="text-xs text-slate-500">{selected.date}</div>
                  </li>
                  <li className="mb-4 pl-4">
                    <div className="text-sm font-semibold">Under Review</div>
                    <div className="text-xs text-slate-500">Assigned to dept.</div>
                  </li>
                </ol>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-2">Comments & Updates</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-slate-50 rounded border">
                    <div className="text-sm font-medium">Public Works Dept.</div>
                    <div className="text-sm text-slate-600">Inspection scheduled this afternoon.</div>
                  </div>
                  <div className="p-3">
                    <textarea placeholder="Add a public comment..." className="w-full rounded-md border p-2"></textarea>
                    <div className="flex justify-end mt-2">
                      <button className="bg-[var(--primary-color)] text-white px-3 py-1 rounded">Post Comment</button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

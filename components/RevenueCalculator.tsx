"use client";

import { useMemo, useState } from "react";

export default function RevenueCalculator() {
  const [patients, setPatients] = useState(50);
  const monthlyValue = 500;
  const annualRevenue = useMemo(() => patients * monthlyValue * 12, [patients]);

  return (
    <div className="relative rounded-[36px] border border-cloud bg-white p-7 shadow-md sm:p-9">
      <div className="relative">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ember">Revenue calculator</p>
          <span className="rounded-full bg-paper px-3 py-1 text-[11px] font-medium text-fog">Illustrative</span>
        </div>
        <div className="mt-10">
          <div className="flex items-end justify-between">
            <label htmlFor="patients" className="text-sm font-bold text-graphite">Active care plan patients</label>
            <span className="text-3xl font-bold tracking-[-0.04em] text-ember">{patients}</span>
          </div>
          <input
            id="patients"
            type="range"
            min="10"
            max="200"
            step="5"
            value={patients}
            onChange={(event) => setPatients(Number(event.target.value))}
            className="mt-5 w-full accent-[#ff5a00]"
          />
          <div className="mt-2 flex justify-between text-xs text-fog"><span>10 patients</span><span>200 patients</span></div>
        </div>
        <div className="mt-10 rounded-2xl bg-obsidian p-6 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ember">Projected annual recurring cash flow</p>
          <p className="mt-3 text-4xl font-bold tracking-[-0.05em] text-white">${annualRevenue.toLocaleString("en-US")}</p>
          <p className="mt-2 text-sm text-mist">
            {patients} patients × $500/mo × 12 months
          </p>
        </div>
      </div>
    </div>
  );
}

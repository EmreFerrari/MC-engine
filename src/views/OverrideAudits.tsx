import React from 'react';
import { Fingerprint, Calendar, User, Search, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

export function OverrideAudits() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-6">
      <div className="flex flex-col gap-1 mb-8 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 font-mono text-xs px-2 py-0.5 font-bold tracking-widest rounded flex items-center gap-1.5 uppercase shadow-[0_0_10px_rgba(16,185,129,0.1)]">
            <Fingerprint className="w-3 h-3" />
            L7 IMMUTABLE AUDIT LEDGER
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white uppercase font-sans">Override Audits</h1>
        </div>
        <p className="text-sm text-slate-500 font-mono tracking-wide mt-2 max-w-3xl">
          Cryptographically signed log of every human override injected into the L2/L4 models. Prevents "black box" accountability by forcing structural traceability. Systemic overrides are surfaced for policy review.
        </p>
      </div>

      <div className="bg-[#090D17] border border-slate-800 rounded-lg p-5">
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-80">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
            <input 
              type="text" 
              placeholder="Search adjudicator, node, or ID..." 
              className="w-full bg-[#050810] border border-slate-700 rounded pl-9 pr-3 py-1.5 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 font-mono"
            />
          </div>
          <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-500/70 font-bold flex items-center gap-1"><ShieldCheck className="w-3 h-3"/> LEDGER INTACT</span>
        </div>

        <table className="w-full text-left border-collapse font-sans">
          <thead className="text-[10px] text-slate-500 uppercase font-mono tracking-widest bg-[#050810]">
            <tr>
              <th className="pb-3 pt-3 px-4 font-semibold rounded-tl border-b border-slate-800">Timestamp / ID</th>
              <th className="pb-3 pt-3 px-4 font-semibold border-b border-slate-800">Adjudicator</th>
              <th className="pb-3 pt-3 px-4 font-semibold border-b border-slate-800">Injection Point</th>
              <th className="pb-3 pt-3 px-4 font-semibold border-b border-slate-800 whitespace-nowrap">Delta (Model vs Human)</th>
              <th className="pb-3 pt-3 px-4 font-semibold rounded-tr border-b border-slate-800 w-[40%]">Justification Extract</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/40 text-slate-300 text-sm">
            <tr className="hover:bg-slate-800/20 transition-colors">
              <td className="py-4 px-4 align-top">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono mb-1"><Calendar className="w-3 h-3" /> 2026-05-24 14:32Z</div>
                <div className="text-[10px] font-mono text-emerald-500 font-bold tracking-widest uppercase">ADJ-8890</div>
              </td>
              <td className="py-4 px-4 align-top">
                <div className="flex items-center gap-1.5 font-semibold text-slate-200"><User className="w-3.5 h-3.5 text-slate-500" /> Cmdr. S. Jenkins</div>
                <div className="text-[10px] font-mono text-slate-500 mt-1 uppercase tracking-widest">Global Log. Cmd</div>
              </td>
              <td className="py-4 px-4 align-top">
                <div className="font-mono text-xs text-amber-500">Port Ent. Bravo</div>
                <div className="text-[10px] font-mono text-slate-500 mt-1 uppercase tracking-widest">Process Routing</div>
              </td>
              <td className="py-4 px-4 align-top whitespace-nowrap">
                <div className="flex flex-col gap-1 font-mono text-xs">
                  <div className="text-slate-500 line-through">L2: 2.1 Days</div>
                  <div className="text-emerald-400 font-bold">L7: 0.5 Days</div>
                </div>
              </td>
              <td className="py-4 px-4 align-top text-xs text-slate-400 leading-relaxed font-mono">
                "Local process change authorized bypassing customary inspection for Class C materiel during active Phase 2 operations. See Auth Dir #882."
              </td>
            </tr>
            <tr className="hover:bg-slate-800/20 transition-colors">
              <td className="py-4 px-4 align-top">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono mb-1"><Calendar className="w-3 h-3" /> 2026-05-23 09:12Z</div>
                <div className="text-[10px] font-mono text-emerald-500 font-bold tracking-widest uppercase">ADJ-8874</div>
              </td>
              <td className="py-4 px-4 align-top">
                <div className="flex items-center gap-1.5 font-semibold text-slate-200"><User className="w-3.5 h-3.5 text-slate-500" /> Dir. M. Vance</div>
                <div className="text-[10px] font-mono text-slate-500 mt-1 uppercase tracking-widest">Defense Prd. Act</div>
              </td>
              <td className="py-4 px-4 align-top">
                <div className="font-mono text-xs text-amber-500">Transit Hub Alpha</div>
                <div className="text-[10px] font-mono text-slate-500 mt-1 uppercase tracking-widest">Fail Prob.</div>
              </td>
              <td className="py-4 px-4 align-top whitespace-nowrap">
                <div className="flex flex-col gap-1 font-mono text-xs">
                  <div className="text-slate-500 line-through">L2: 12% Risk</div>
                  <div className="text-red-400 font-bold">L7: 45% Risk</div>
                </div>
              </td>
              <td className="py-4 px-4 align-top text-xs text-slate-400 leading-relaxed font-mono">
                "Supplier heavily reliant on informal, unprotected sub-tier manufacturing nodes exposed to regional kinetic denial. Model assumptions on surge capacity rejected based on Q1 red-team."
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

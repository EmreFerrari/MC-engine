import React, { useState } from 'react';
import { ActivitySquare, FileText, Check, X, Clock, User, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const queueItems = [
  { id: 'ADJ-8891', subject: 'Semiconductor Buffering Constraint', modelOutput: 'Risk: 12% (Nominal)', recommended: 'Risk: 85% (Critical)', source: 'HUMINT / Site Visit (Analyst K)', status: 'pending', time: '14m ago' },
  { id: 'ADJ-8890', subject: 'Port Congestion at Node C', modelOutput: 'Delay: 2.1d', recommended: 'Delay: 0.5d', source: 'Process Change Local', status: 'approved', time: '2h ago', analyst: 'J. Doe' },
  { id: 'ADJ-8889', subject: 'Cyber Resilience Score - Logistics Firm', modelOutput: 'Score: 92/100', recommended: 'Score: 40/100', source: 'L1 Adversarial Flag (Deception)', status: 'pending', time: '5h ago' },
];

export function AdjudicationQueue() {
  const [selected, setSelected] = useState(queueItems[0].id);

  return (
    <div className="max-w-[1400px] mx-auto space-y-6 flex flex-col h-[calc(100vh-100px)]">
      <div className="flex flex-col gap-1 mb-2 border-b border-slate-800 pb-4 shrink-0">
        <div className="flex items-center gap-3">
          <div className="bg-amber-500/10 border border-amber-500/30 text-amber-500 font-mono text-xs px-2 py-0.5 font-bold tracking-widest rounded flex items-center gap-1.5 uppercase shadow-[0_0_10px_rgba(245,158,11,0.1)]">
            <ActivitySquare className="w-3 h-3" />
            L7 MANDATORY ADJUDICATION
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white uppercase font-sans">Human Adjudication Queue</h1>
        </div>
        <p className="text-sm text-slate-500 font-mono tracking-wide mt-2 max-w-3xl">
          Models output distributions, not decisions. Software cannot synthesize tacit knowledge, geopolitical intent, or unwritten rules. 
          The L7 queue forces human analysts to take accountability for final system parameters.
        </p>
      </div>

      <div className="flex-1 flex gap-6 min-h-[400px] overflow-hidden">
        {/* Left: Queue List */}
        <div className="w-1/3 bg-[#090D17] border border-slate-800 rounded-lg flex flex-col overflow-hidden shrink-0">
          <div className="p-3 border-b border-slate-800 bg-[#050810] flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
            <span>Pending Review</span>
            <span className="bg-amber-500 text-amber-950 px-2 py-0.5 rounded">2 ITEMS</span>
          </div>
          <div className="overflow-y-auto flex-1 p-2 space-y-2">
            {queueItems.map((item) => (
              <div 
                key={item.id} 
                onClick={() => setSelected(item.id)}
                className={cn(
                  "p-3 rounded border cursor-pointer transition-colors",
                  selected === item.id 
                    ? "bg-slate-800/80 border-slate-600" 
                    : "bg-[#050810] border-slate-800 hover:border-slate-700 hover:bg-slate-900",
                  item.status === 'approved' && "opacity-60"
                )}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className={cn("font-mono text-[9px] font-bold tracking-widest px-1.5 py-0.5 rounded uppercase", item.status === 'pending' ? "bg-amber-500/20 text-amber-500" : "bg-emerald-500/20 text-emerald-500")}>
                    {item.id}
                  </span>
                  <span className="text-[9px] font-mono text-slate-500 flex items-center gap-1"><Clock className="w-3 h-3" />{item.time}</span>
                </div>
                <h4 className="text-sm font-semibold text-slate-200 mb-1">{item.subject}</h4>
                <div className="text-xs text-slate-500 font-mono uppercase tracking-widest mt-2">{item.source}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Adjudication Workspace */}
        <div className="flex-1 bg-[#090D17] border border-slate-800 rounded-lg flex flex-col relative overflow-hidden">
          <div className="p-4 border-b border-slate-800 flex justify-between items-start bg-[#050810]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-amber-500 text-[10px] uppercase font-mono font-bold tracking-widest bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">ACTION REQUIRED</span>
                <span className="text-slate-400 text-xs font-mono">ADJ-8891</span>
              </div>
              <h2 className="text-xl font-bold text-white mt-2">Semiconductor Buffering Constraint</h2>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-bold font-mono tracking-widest uppercase bg-red-950/50 text-red-500 border border-red-900 hover:bg-red-900/50 transition-colors">
                <X className="w-4 h-4" /> Reject Override
              </button>
              <button className="flex items-center gap-1.5 px-4 py-1.5 rounded text-xs font-bold font-mono tracking-widest uppercase bg-emerald-600 text-emerald-50 transition-colors hover:bg-emerald-500">
                <Check className="w-4 h-4" /> Sign & Commit
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900 border border-slate-700/50 rounded-lg p-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-slate-600"></div>
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2 font-bold">L2 Model Baseline Output</div>
                <div className="font-mono text-2xl font-bold tracking-tighter text-slate-300">Risk: 12%</div>
                <div className="text-xs text-slate-400 mt-2 font-mono">Based on historical shipping data and public capacity declarations.</div>
              </div>
              
              <div className="bg-[#1a0f05] border border-amber-500/30 rounded-lg p-4 relative overflow-hidden shadow-[0_0_20px_rgba(245,158,11,0.05)]">
                <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
                <div className="text-[10px] font-mono text-amber-500/80 uppercase tracking-widest mb-2 font-bold flex items-center gap-1">Requested Override <AlertCircle className="w-3 h-3" /></div>
                <div className="font-mono text-2xl font-bold tracking-tighter text-amber-500">Risk: 85%</div>
                <div className="text-xs text-amber-500/70 mt-2 font-mono">Based on HUMINT field observations of informal capacity limitations.</div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-200 mb-3 border-b border-slate-800 pb-2">Analyst Justification Memo</h3>
              <div className="bg-slate-900 border border-slate-800 rounded p-4 text-sm text-slate-300 leading-relaxed font-sans relative">
                <FileText className="absolute top-4 right-4 w-5 h-5 text-slate-700" />
                <p className="mb-4 text-amber-200/90 font-mono text-xs">Origin: SITE VISIT (May 14) / ANALYST K.</p>
                <p>
                  The quantitative model assumes full operational capacity 24/7 as declared by the facility. During the site visit, it was observed that the second shift is staffed entirely by temporary workers with less than 2 weeks tenure.
                </p>
                <p className="mt-3">
                  This informal labor configuration will not survive an 10x wartime surge. A massive quality cliff is imminent if loading exceeds current peacetime rates. The baseline 12% disruption risk is systematically blind to this tacit constraint. Override to 85% required for correct L4 consequence modeling.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-6">
              <h3 className="text-sm font-bold text-slate-200 mb-3">Sign-off Authority</h3>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                  <User className="w-5 h-5 text-slate-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Cmdr. Sarah Jenkins</div>
                  <div className="text-xs text-slate-500 font-mono uppercase tracking-widest">Global Logistics Command</div>
                </div>
              </div>
              <p className="text-[10px] font-mono text-slate-500 mt-4 max-w-lg border-l-2 border-slate-700 pl-3 uppercase tracking-widest">
                By clicking "Sign & Commit", you accept professional accountability for injecting this assumption into the operational model. This action will be permanently recorded in the Audit Ledger.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

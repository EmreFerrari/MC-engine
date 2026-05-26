import React from 'react';
import { FileBox, Zap, Play, Search, AlertOctagon } from 'lucide-react';
import { cn } from '@/lib/utils';

const scenarios = [
  { id: 'SCEN-842', name: 'Taiwan Strait Blockade (Adversarial)', desc: 'Full maritime denial with simultaneous localized cyber disruption of primary logistics nodes.', time: '14 Days to P90 Failure', type: 'WARTIME MOBILIZATION (10X)', runCount: 142, active: true },
  { id: 'SCEN-119', name: 'Red Sea Chokepoint Closure', desc: 'Sustained kinetic denial of Bab el-Mandeb strait forcing routing via Cape of Good Hope.', time: '22 Days to P90 Failure', type: 'KINETIC DENIAL', runCount: 84, active: false },
  { id: 'SCEN-551', name: 'Rare Earth Export Embargo (PRC)', desc: 'Legal and physical embargo on critical minerals required for Tier 2 and Tier 3 defense manufacturing.', time: '45 Days to P90 Failure', type: 'ECONOMIC WARFARE', runCount: 201, active: false },
  { id: 'SCEN-002', name: 'Peacetime Baseline (Current Real)', desc: 'Standard operating conditions factoring in current port congestion and ambient cyber noise.', time: 'N/A', type: 'BASELINE', runCount: 890, active: false },
];

export function ScenarioLibrary() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-6">
      <div className="flex flex-col gap-1 mb-6 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 font-mono text-xs px-2 py-0.5 font-bold tracking-widest rounded flex items-center gap-1.5 uppercase shadow-[0_0_10px_rgba(239,68,68,0.1)]">
            <FileBox className="w-3 h-3" />
            L2 WARTIME SCENARIO LIBRARY
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white uppercase font-sans">Scenario Library</h1>
        </div>
        <p className="text-sm text-slate-500 font-mono tracking-wide mt-2 max-w-3xl">
          Palantir and C3 optimize existing processes based on historical continuity. War represents a fundamental discontinuity. 
          The L2 Library injects severe, non-linear stress (10x demand surges, zero-day port outages) to test the L3 structural graph.
        </p>
      </div>

      <div className="flex justify-between items-center bg-[#090D17] p-3 rounded-lg border border-slate-800 mb-6">
        <div className="relative w-96">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
          <input 
            type="text" 
            placeholder="Search scenarios by operational domain..." 
            className="w-full bg-[#050810] border border-slate-700 rounded-md pl-9 pr-3 py-2 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-red-500 font-mono"
          />
        </div>
        <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded text-xs font-bold uppercase tracking-widest font-mono transition-colors">
          + Author New Inject
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {scenarios.map(scenario => (
          <div key={scenario.id} className={cn(
            "bg-[#090D17] border rounded-lg p-5 flex flex-col justify-between transition-all group",
            scenario.active ? "border-red-500/40 shadow-[0_0_20px_rgba(239,68,68,0.05)] bg-[#100606]" : "border-slate-800 hover:border-slate-600"
          )}>
            <div>
              <div className="flex justify-between items-start mb-3">
                <span className={cn(
                  "text-[10px] uppercase font-mono font-bold tracking-widest px-2 py-0.5 rounded border",
                  scenario.type === 'BASELINE' ? "bg-slate-800 text-slate-300 border-slate-700" : "bg-red-500/10 text-red-500 border-red-500/20"
                )}>
                  {scenario.type}
                </span>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{scenario.id}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{scenario.name}</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-sans min-h-[60px]">{scenario.desc}</p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-slate-800/60 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500">Historical Runs</span>
                  <span className="text-sm font-mono text-slate-300 font-bold">{scenario.runCount}</span>
                </div>
                {scenario.time !== 'N/A' && (
                  <div className="flex flex-col border-l border-slate-800 pl-4">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500">Median TTL</span>
                    <span className="text-sm font-mono text-amber-500 font-bold flex items-center gap-1"><AlertOctagon className="w-3 h-3"/> {scenario.time}</span>
                  </div>
                )}
              </div>
              
              <button className={cn(
                "px-5 py-2 rounded text-xs font-bold uppercase tracking-widest font-mono flex items-center gap-2 transition-all",
                scenario.active ? "bg-red-600 text-white hover:bg-red-500" : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              )}>
                {scenario.active ? <><Zap className="w-3.5 h-3.5 fill-current" /> Active</> : <><Play className="w-3.5 h-3.5" /> Launch</>}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

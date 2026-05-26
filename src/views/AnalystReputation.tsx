import React, { useState } from 'react';
import { Target, Search, BarChart3, Fingerprint, Award, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AreaChart, Area, XAxis, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';

const analysts = [
  { id: 'AN-772', name: 'Analyst J.Doe', group: 'Red-Cell 2', acc: '91%', overrides: 12, correct: 11, weight: 'HIGH', joined: 'Oct 2024', focus: 'Taiwan / Semiconductor' },
  { id: 'AN-391', name: 'Analyst M.Smith', group: 'Global Log. Cmd', acc: '80%', overrides: 5, correct: 4, weight: 'MED', joined: 'Feb 2025', focus: 'Pacific Logistics' },
  { id: 'AN-102', name: 'Analyst T.Nguyen', group: 'Supply Chain Res.', acc: '87%', overrides: 8, correct: 7, weight: 'HIGH', joined: 'Nov 2023', focus: 'Chokepoint Nodes' },
  { id: 'AN-553', name: 'Team Red-Cell 4', group: 'Adversarial Tt.', acc: '41%', overrides: 34, correct: 14, weight: 'LOW', joined: 'Jan 2026', focus: 'Cyber Denials' },
];

const mockAccData = [
  { month: 'Jan', score: 82 },
  { month: 'Feb', score: 85 },
  { month: 'Mar', score: 84 },
  { month: 'Apr', score: 88 },
  { month: 'May', score: 91 },
];

export function AnalystReputation() {
  const [selected, setSelected] = useState(analysts[0]);

  return (
    <div className="max-w-[1400px] mx-auto space-y-6 flex flex-col h-[calc(100vh-100px)]">
      <div className="flex flex-col gap-1 mb-2 border-b border-slate-800 pb-4 shrink-0">
        <div className="flex items-center gap-3">
          <div className="bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs px-2 py-0.5 font-bold tracking-widest rounded flex items-center gap-1.5 uppercase shadow-[0_0_10px_rgba(59,130,246,0.1)]">
            <Target className="w-3 h-3" />
            L7 ANALYST REPUTATION SYSTEM
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white uppercase font-sans">Analyst Profiles & Scoring</h1>
        </div>
        <p className="text-sm text-slate-500 font-mono tracking-wide mt-2 max-w-3xl">
          The simulation engine automatically weights HUMINT overrides inversely proportional to the historical accuracy of the analyst bounding. Human capital is treated as a quantified asset with measurable drift and precision.
        </p>
      </div>

      <div className="flex-1 flex gap-6 min-h-[400px] overflow-hidden">
        {/* Left: Analyst Directory */}
        <div className="w-80 bg-[#090D17] border border-slate-800 rounded-lg flex flex-col overflow-hidden shrink-0">
          <div className="p-3 border-b border-slate-800 bg-[#050810] flex flex-col gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
              <input 
                type="text" 
                placeholder="Search analysts..." 
                className="w-full bg-slate-900 border border-slate-700 rounded pl-9 pr-3 py-2 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 font-mono"
              />
            </div>
          </div>
          <div className="overflow-y-auto flex-1 p-2 space-y-2">
            {analysts.map((an) => (
              <div 
                key={an.id} 
                onClick={() => setSelected(an)}
                className={cn(
                  "p-3 rounded border cursor-pointer transition-colors",
                  selected.id === an.id 
                    ? "bg-slate-800/80 border-blue-500/50" 
                    : "bg-[#050810] border-slate-800 hover:border-slate-700 hover:bg-slate-900"
                )}
              >
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-sm font-semibold text-slate-200">{an.name}</h4>
                  <span className={cn(
                    "font-mono text-[9px] font-bold tracking-widest px-1.5 py-0.5 rounded uppercase",
                    an.weight === 'HIGH' ? "bg-emerald-500/20 text-emerald-500" :
                    an.weight === 'MED' ? "bg-amber-500/20 text-amber-500" :
                    "bg-red-500/20 text-red-500"
                  )}>
                    {an.weight} WT
                  </span>
                </div>
                <div className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">{an.group}</div>
                <div className="mt-3 flex gap-2 font-mono text-[9px] font-bold">
                  <span className="bg-slate-800 px-1.5 py-0.5 rounded text-slate-300">{an.acc} ACC</span>
                  <span className="bg-slate-800 px-1.5 py-0.5 rounded text-slate-300">{an.overrides} OVR</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Profile Details */}
        <div className="flex-1 bg-[#090D17] border border-slate-800 rounded-lg flex flex-col relative overflow-hidden">
          <div className="p-6 border-b border-slate-800 flex justify-between items-start bg-[#050810]">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded bg-slate-800 border border-slate-700 flex items-center justify-center">
                 <Fingerprint className="w-8 h-8 text-slate-500" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <h2 className="text-2xl font-bold text-white">{selected.name}</h2>
                  <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase tracking-widest font-bold">ADJUDICATOR L7</span>
                </div>
                <div className="text-xs text-slate-400 font-mono tracking-wide">{selected.group} &bull; ID: {selected.id}</div>
              </div>
            </div>
            
            <div className="bg-slate-900 border border-slate-800 p-3 rounded flex gap-6 text-center">
              <div>
                <div className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mb-1">Lifetime Overrides</div>
                <div className="font-mono font-bold text-xl text-slate-200">{selected.overrides}</div>
              </div>
              <div className="w-px bg-slate-700"></div>
              <div>
                <div className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mb-1">Confirmed Correct</div>
                <div className="font-mono font-bold text-xl text-emerald-400">{selected.correct}</div>
              </div>
              <div className="w-px bg-slate-700"></div>
              <div>
                <div className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mb-1">Current ACC Rank</div>
                <div className={cn("font-mono font-bold text-xl", selected.weight === 'HIGH' ? "text-emerald-400" : selected.weight === 'MED' ? "text-amber-500" : "text-red-400")}>{selected.acc}</div>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {/* Acc Trend */}
              <div className="bg-[#121622] border border-blue-500/20 rounded-lg p-5">
                <h3 className="font-bold text-[12px] uppercase tracking-widest flex items-center gap-2 text-slate-300 mb-4 border-b border-slate-800 pb-2">
                  <TrendingUp className="w-4 h-4 text-blue-500" /> Bounding Accuracy Trend
                </h3>
                <div className="h-32 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={mockAccData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="month" stroke="#334155" tick={{fill: '#64748b', fontSize: 10, fontFamily: 'JetBrains Mono'}} axisLine={false} tickLine={false} />
                      <RechartsTooltip 
                        contentStyle={{ backgroundColor: '#020408', borderColor: '#1e293b', color: '#f1f5f9', fontSize: 11 }}
                        itemStyle={{ color: '#e2e8f0', fontFamily: 'JetBrains Mono' }}
                      />
                      <Area type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorScore)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Engine Weighting Config */}
              <div className="bg-slate-900 border border-slate-700/50 rounded-lg p-5">
                <h3 className="font-bold text-[12px] uppercase tracking-widest flex items-center gap-2 text-slate-300 mb-4 border-b border-slate-800 pb-2">
                  <Award className="w-4 h-4 text-emerald-500" /> Engine Weighting Multiplier
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Base Multiplier</span>
                    <span className={cn(
                      "font-mono text-sm font-bold",
                      selected.weight === 'HIGH' ? "text-emerald-400" :
                      selected.weight === 'LOW' ? "text-red-400" : "text-amber-500"
                    )}>
                      {selected.weight === 'HIGH' ? '1.5x (Priority)' : selected.weight === 'LOW' ? '0.2x (Discounted)' : '1.0x (Standard)'}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug pt-1">
                    Future overrides originating from {selected.id} concerning {selected.focus} will be automatically assigned this probabilistic weight in the L4 Monte Carlo distribution.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Override History Linkage */}
            <div>
              <h3 className="font-bold text-[12px] uppercase tracking-widest flex items-center gap-2 text-slate-300 mb-3 border-b border-slate-800 pb-2">
                 Latest Ledger Injections
              </h3>
              <div className="bg-[#050810] border border-slate-800 rounded p-4 text-center">
                 <div className="text-slate-500 font-mono text-xs mb-3">View all historically signed overrides for this analyst</div>
                 <button className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded text-[10px] font-bold uppercase tracking-widest font-mono border border-slate-700 transition-colors">
                   Query L7 Audit Ledger
                 </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

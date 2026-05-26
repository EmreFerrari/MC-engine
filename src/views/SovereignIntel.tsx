import React, { useState } from 'react';
import { Users, Search, ShieldCheck, FileText, DatabaseZap, History, ExternalLink, Network, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

const contacts = [
  { id: 'C-091', name: 'Plant Manager H.', role: 'Operations Dir.', node: 'Advanced Optics Co. (Taiwan)', trust: 'B-Confidence', access: 'Tier 1', intel: 'Second shift running 90% temporary PRC labor. Imminent quality cliff if loaded >120%.', date: 'May 14, 2026', analyst: 'J.Doe' },
  { id: 'C-044', name: 'Logistics Coord. M.', role: 'Routing Spec.', node: 'Transit Hub Alpha', trust: 'A-Confidence', access: 'Tier 2', intel: 'Bypassing hazardous material inspection on 3rd shifts to maintain throughput targets.', date: 'Apr 28, 2026', analyst: 'M.Smith' },
  { id: 'C-112', name: 'Foreman K.', role: 'Assembly Lead', node: 'Component X Sub-tier', trust: 'C-Confidence', access: 'Informal', intel: 'Sourcing raw materials from sanctioned entities via shell company in Vietnam.', date: 'May 02, 2026', analyst: 'T.Nguyen' },
];

export function SovereignIntel() {
  const [selected, setSelected] = useState(contacts[0]);

  return (
    <div className="max-w-[1400px] mx-auto space-y-6 flex flex-col h-[calc(100vh-100px)]">
      <div className="flex flex-col gap-1 mb-2 border-b border-slate-800 pb-4 shrink-0">
        <div className="flex items-center gap-3">
          <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 font-mono text-xs px-2 py-0.5 font-bold tracking-widest rounded flex items-center gap-1.5 uppercase shadow-[0_0_10px_rgba(16,185,129,0.1)]">
            <Users className="w-3 h-3" />
            L3 SOVEREIGN RELATIONSHIP INTELLIGENCE
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white uppercase font-sans">Contact Management & Tacit Knowledge</h1>
        </div>
        <p className="text-sm text-slate-500 font-mono tracking-wide mt-2 max-w-3xl">
          Floor-level relationship intelligence. The "moat" that commercial software cannot replicate. Digital twins assume stated capacity and formal contracts; L3 captures unwritten rules, informal labor constraints, and human factors driving actual operational outcomes.
        </p>
      </div>

      <div className="flex-1 flex gap-6 min-h-[400px] overflow-hidden">
        {/* Left: Contact Directory */}
        <div className="w-80 bg-[#090D17] border border-slate-800 rounded-lg flex flex-col overflow-hidden shrink-0">
          <div className="p-3 border-b border-slate-800 bg-[#050810] flex flex-col gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
              <input 
                type="text" 
                placeholder="Search HUMINT contacts..." 
                className="w-full bg-slate-900 border border-slate-700 rounded pl-9 pr-3 py-2 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 font-mono"
              />
            </div>
          </div>
          <div className="overflow-y-auto flex-1 p-2 space-y-2">
            {contacts.map((contact) => (
              <div 
                key={contact.id} 
                onClick={() => setSelected(contact)}
                className={cn(
                  "p-3 rounded border cursor-pointer transition-colors",
                  selected.id === contact.id 
                    ? "bg-slate-800/80 border-emerald-500/50" 
                    : "bg-[#050810] border-slate-800 hover:border-slate-700 hover:bg-slate-900"
                )}
              >
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-sm font-semibold text-slate-200 truncate">{contact.name}</h4>
                  <span className={cn(
                    "font-mono text-[9px] font-bold tracking-widest px-1.5 py-0.5 rounded uppercase",
                    contact.trust.startsWith('A') ? "bg-emerald-500/20 text-emerald-500" :
                    contact.trust.startsWith('B') ? "bg-blue-500/20 text-blue-400" :
                    "bg-amber-500/20 text-amber-500"
                  )}>
                    {contact.trust.split('-')[0]}
                  </span>
                </div>
                <div className="text-[10px] text-slate-500 font-mono uppercase tracking-widest truncate">{contact.node}</div>
                <div className="mt-2 text-xs text-slate-400 font-mono line-clamp-2">
                  "{contact.intel}"
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Contact Profile & Relationship Assessment */}
        <div className="flex-1 bg-[#090D17] border border-slate-800 rounded-lg flex flex-col relative overflow-hidden">
          <div className="p-6 border-b border-slate-800 flex justify-between items-start bg-[#050810]">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-emerald-500 text-[10px] uppercase font-mono font-bold tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">HUMINT SOURCE</span>
                <span className="text-slate-400 text-xs font-mono">{selected.id}</span>
              </div>
              <h2 className="text-2xl font-bold text-white mt-1">{selected.name}</h2>
              <div className="text-sm text-slate-400 font-mono tracking-wide mt-1">{selected.role}</div>
            </div>
            <div className="text-right flex flex-col items-end gap-2">
               <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Access Level</div>
               <div className="font-mono text-sm font-bold bg-slate-900 border border-slate-700 px-3 py-1 rounded text-slate-300">{selected.access}</div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {/* Placement & Access */}
              <div className="bg-slate-900 border border-slate-700/50 rounded-lg p-5">
                <h3 className="font-bold text-[12px] uppercase tracking-widest flex items-center gap-2 text-slate-300 mb-4 border-b border-slate-800 pb-2">
                  <Network className="w-4 h-4 text-emerald-500" /> Placement & Access Map
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Primary Node Targeting</div>
                    <div className="text-sm font-medium text-slate-200 flex items-center justify-between">
                      {selected.node} <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Sub-Tier Visibility</div>
                    <div className="text-xs font-mono text-slate-400">Direct supervision of 2nd shift assembly and localized QA oversight. High visibility into raw material ingress.</div>
                  </div>
                </div>
              </div>
              
              {/* Relationship Assessment */}
              <div className="bg-[#121622] border border-blue-500/20 rounded-lg p-5">
                <h3 className="font-bold text-[12px] uppercase tracking-widest flex items-center gap-2 text-slate-300 mb-4 border-b border-slate-800 pb-2">
                  <ShieldCheck className="w-4 h-4 text-blue-500" /> Relationship Assessment
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-slate-900/50 border border-slate-800 p-2 rounded">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Confidence Modifier</span>
                    <span className={cn(
                      "font-mono text-xs font-bold px-2 py-0.5 rounded",
                      selected.trust.startsWith('A') ? "text-emerald-400" :
                      selected.trust.startsWith('B') ? "text-blue-400" :
                      "text-amber-500"
                    )}>{selected.trust}</span>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Handling Analyst</div>
                    <div className="text-sm font-medium text-slate-200 flex items-center gap-2">
                       {selected.analyst} <span className="bg-slate-800 text-[9px] px-1.5 py-0.5 rounded font-mono">WT: HIGH</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Intel Reports / Site Visits */}
            <div>
              <h3 className="font-bold text-[12px] uppercase tracking-widest flex items-center gap-2 text-slate-300 mb-3 border-b border-slate-800 pb-2">
                <History className="w-4 h-4 text-amber-500" /> Ground-Truth Intel Logs
              </h3>
              
              <div className="space-y-3">
                <div className="bg-[#050810] border border-slate-800 rounded p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2 font-mono text-xs text-amber-500 mb-1 font-bold">
                       <FileText className="w-3.5 h-3.5" /> OVERRIDE MEMO GENERATED
                    </div>
                    <span className="font-mono text-[10px] text-slate-500">{selected.date}</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed font-sans border-l-2 border-slate-700 pl-3">
                    "{selected.intel}"
                  </p>
                  <div className="mt-3 pt-3 border-t border-slate-800 text-[10px] uppercase font-mono tracking-widest text-slate-500 flex items-center gap-4">
                     <span>Result: Caused +48% Risk Shift (ADJ-8891)</span>
                     <button className="text-blue-400 hover:underline">View in Simulation</button>
                  </div>
                </div>
                
                <div className="bg-[#050810] border border-slate-800 rounded p-4 opacity-70">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2 font-mono text-xs text-slate-400 mb-1 font-bold">
                       <MessageSquare className="w-3.5 h-3.5" /> ROUTINE CONTACT (SITE VISIT)
                    </div>
                    <span className="font-mono text-[10px] text-slate-500">Mar 22, 2026</span>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed font-sans border-l-2 border-slate-800 pl-3">
                    Verified stated production capacity aligns with observed footprint. Minor delays in port outbound queues noted but within expected P50 tolerances.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

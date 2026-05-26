import React from 'react';
import { Network, Search, GitBranch } from 'lucide-react';
import { cn } from '@/lib/utils';

export function DependencyGraph() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-6 h-[calc(100vh-100px)] flex flex-col">
      <div className="flex flex-col gap-1 mb-2 border-b border-slate-800 pb-4 shrink-0">
        <div className="flex items-center gap-3">
          <div className="bg-slate-800 text-slate-300 font-mono text-xs px-2 py-0.5 font-bold tracking-widest rounded flex items-center gap-1.5 uppercase border border-slate-700">
            <Network className="w-3 h-3 text-slate-400" />
            L3 FRAGILITY REGISTER
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white uppercase font-sans">Sovereign Relationship Network</h1>
        </div>
        <p className="text-sm text-slate-500 font-mono tracking-wide mt-2 max-w-3xl">
          Visualizing undocumented operator pathways. Standard commercial graphs assume country-level aggregates or explicit contracts. 
          L3 tracks tacit capacity, informal relationships, and shared tooling at the sub-tier level.
        </p>
      </div>

      <div className="flex-1 flex gap-4 min-h-[400px] overflow-hidden">
        {/* Left Panel: Search & Filter */}
        <div className="w-80 bg-[#090D17] border border-slate-800 rounded-lg p-4 flex flex-col shrink-0">
          <div className="relative mb-6">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
            <input 
              type="text" 
              placeholder="Search entity, node, or material..." 
              className="w-full bg-[#050810] border border-slate-700 rounded pl-9 pr-3 py-2 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 font-mono"
            />
          </div>

          <h3 className="font-bold text-[10px] uppercase tracking-widest text-slate-500 mb-3 font-mono">Structural Lenses</h3>
          <div className="space-y-2 mb-6">
            <button className="w-full text-left px-3 py-2 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs font-bold tracking-widest uppercase flex justify-between items-center">
              Tacit Tooling Sharing <span>ACTIVE</span>
            </button>
            <button className="w-full text-left px-3 py-2 rounded bg-slate-900 border border-slate-800 text-slate-400 font-mono text-xs font-bold tracking-widest uppercase hover:bg-slate-800 transition-colors">
              Explicit Contracts
            </button>
            <button className="w-full text-left px-3 py-2 rounded bg-slate-900 border border-slate-800 text-slate-400 font-mono text-xs font-bold tracking-widest uppercase hover:bg-slate-800 transition-colors">
              Critical IP Clusters
            </button>
          </div>

          <div className="mt-auto pt-4 border-t border-slate-800">
            <div className="text-[10px] font-mono text-slate-500 mb-2 uppercase tracking-widest">Network Topology</div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-slate-900 p-2 rounded border border-slate-800 text-slate-400 font-mono"><span className="text-slate-200">14.2k</span> Nodes</div>
              <div className="bg-slate-900 p-2 rounded border border-slate-800 text-slate-400 font-mono"><span className="text-slate-200">82.1k</span> Edges</div>
            </div>
          </div>
        </div>

        {/* Right Panel: Simulated Graph Area */}
        <div className="flex-1 bg-[#090D17] border border-slate-800 rounded-lg p-5 relative overflow-hidden flex items-center justify-center">
          {/* Decorative Grid Background */}
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)', backgroundSize: '30px 30px', opacity: 0.2 }}></div>
          
          <div className="relative z-10 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 rounded-full border border-blue-500/30 flex items-center justify-center mb-4 relative">
              <div className="absolute w-full h-full rounded-full border border-blue-400/20 animate-ping"></div>
              <Network className="w-8 h-8 text-blue-400 opacity-80" />
            </div>
            <h2 className="text-slate-300 font-mono text-sm tracking-widest uppercase font-bold mb-2">Rendering WebGL Topology</h2>
            <p className="text-slate-500 font-mono text-xs max-w-md mx-auto leading-relaxed">
              Generating spatial layout for 14,000+ nodes using informal capacity clusters. Identifying single-points-of-failure unlisted in commercial trade records.
            </p>

            <div className="mt-8 flex items-center gap-6 text-[10px] uppercase font-mono tracking-widest text-slate-500">
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> Formal Contract</div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full border border-blue-500 bg-transparent shrink-0"></div> Tacit Sharing (Shift Workers)</div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-sm bg-purple-500/50 shadow-[0_0_8px_rgba(168,85,247,0.5)]"></div> Sovereign Capture Risk</div>
            </div>
          </div>

          {/* Floating UI Elements simulating graph interactions */}
          <div className="absolute top-6 right-6 bg-[#050810] border border-slate-800 p-3 rounded shadow-xl w-64">
            <div className="text-[9px] text-slate-500 font-mono uppercase tracking-widest mb-1 font-bold">Node Inspection</div>
            <div className="text-sm text-slate-200 font-semibold mb-2">Advanced Optics Co. (Taiwan)</div>
            <div className="space-y-1.5 font-mono text-[10px]">
              <div className="flex justify-between"><span className="text-slate-500">Tier:</span> <span className="text-slate-300">3 (Sub-Tier)</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Reported Output:</span> <span className="text-emerald-400">Stable</span></div>
              <div className="flex justify-between border-t border-slate-800 pt-1 mt-1"><span className="text-purple-400">Tacit Threat:</span> <span className="text-purple-400 font-bold">90% Shift workers from PRC</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

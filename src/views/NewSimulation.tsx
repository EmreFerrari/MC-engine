import React, { useState } from 'react';
import { ChevronRight, Settings2, GitMerge, Upload, Network, Database, ShieldAlert, History, KeyRound } from 'lucide-react';
import { cn } from '@/lib/utils';

export function NewSimulation() {
  const [step, setStep] = useState(1);
  const [tab, setTab] = useState('templates');

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Wizard Steps Header */}
      <div className="flex items-center gap-4 text-sm font-medium border-b border-slate-800 pb-6 mb-8">
        <div className={cn("flex items-center gap-2", step >= 1 ? "text-blue-500" : "text-slate-500")}>
          <div className="w-6 h-6 rounded-full flex items-center justify-center bg-blue-600 text-white font-bold text-xs">1</div>
          Network
        </div>
        <ChevronRight className="w-4 h-4 text-slate-700" />
        <div className={cn("flex items-center gap-2", step >= 2 ? "text-blue-500" : "text-slate-500")}>
          <div className="w-6 h-6 flex items-center justify-center bg-slate-800 rounded-full font-bold text-xs">2</div>
          Variables
        </div>
        <ChevronRight className="w-4 h-4 text-slate-700" />
        <div className={cn("flex items-center gap-2", step >= 3 ? "text-blue-500" : "text-slate-500")}>
          <div className="w-6 h-6 flex items-center justify-center bg-slate-800 rounded-full font-bold text-xs">3</div>
          Execute
        </div>
      </div>

      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Network Definition</h1>
          <p className="text-slate-400">Build your supply chain topology, classification labels, and kill chain relationships.</p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          {/* Tabs */}
          <div className="flex border-b border-slate-800 gap-8 mb-6">
            <button 
              onClick={() => setTab('manual')}
              className={cn("pb-3 text-sm font-medium transition-colors border-b-2", tab === 'manual' ? "border-blue-500 text-slate-200" : "border-transparent text-slate-500 hover:text-slate-400")}
            >
              Manual Builder
            </button>
            <button 
              onClick={() => setTab('import')}
              className={cn("pb-3 flex items-center gap-2 text-sm font-medium transition-colors border-b-2", tab === 'import' ? "border-blue-500 text-slate-200" : "border-transparent text-slate-500 hover:text-slate-400")}
            >
              Bulk Import (SIPR/JWICS)
            </button>
            <button 
              onClick={() => setTab('templates')}
              className={cn("pb-3 text-sm font-medium transition-colors border-b-2", tab === 'templates' ? "border-blue-500 text-slate-200" : "border-transparent text-slate-500 hover:text-slate-400")}
            >
              Template Library
            </button>
          </div>

          {tab === 'manual' && (
            <div className="h-96 border border-slate-800 rounded-xl bg-[#090D17] flex flex-col p-4 relative">
              <div className="flex gap-4 p-2 bg-slate-900 border border-slate-800 rounded-lg justify-start items-center">
                <div className="text-sm font-medium text-slate-400 mr-2">Add Node:</div>
                <select className="bg-slate-950 border border-slate-700 rounded px-3 py-1.5 text-sm text-slate-300">
                  <option>Tier-1 Prime</option>
                  <option>Sub-tier Sole Source</option>
                  <option>Transit Hub</option>
                  <option>Port of Entry</option>
                  <option>Storage Depot</option>
                  <option>Supplier Node</option>
                </select>
                <div className="w-px h-6 bg-slate-700 mx-2" />
                <div className="text-sm font-medium text-slate-400 mr-2">KCCS:</div>
                <select className="bg-slate-950 border border-slate-700 rounded px-3 py-1.5 text-sm text-slate-300">
                  <option>Low (None)</option>
                  <option>Medium (Logistics)</option>
                  <option>High (Munitions)</option>
                  <option>Critical (Specific Program)</option>
                </select>
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded text-sm ml-auto">
                  + Add Node
                </button>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center text-slate-500 opacity-50">
                <Network className="w-16 h-16 mb-4" />
                <p>Canvas is empty. Use the toolbar above to add nodes and connect them.</p>
              </div>

            </div>
          )}

          {tab === 'import' && (
            <div className="h-96 border border-slate-800 rounded-xl bg-[#090D17] flex flex-col items-center justify-center p-8">
                <ShieldAlert className="w-12 h-12 text-amber-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Classified Network Import</h3>
                <p className="text-slate-400 text-center max-w-md mb-6">Bulk Import supports importing JSON/CSV topology graphs from classified systems (SIPR/JWICS compatible format).</p>
                <button className="bg-slate-800 border border-slate-700 hover:bg-slate-700 px-6 py-3 rounded-lg flex items-center gap-2">
                  <Upload className="w-5 h-5" />
                  Select File ({">"}256-bit encrypted)
                </button>
            </div>
          )}

          {tab === 'templates' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="border border-slate-800 rounded-xl bg-slate-900/50 p-6 flex flex-col cursor-pointer hover:border-blue-500/50 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-blue-900/40 text-blue-400 text-xs font-mono px-2 py-1 rounded">Topology Preset</div>
                  <Database className="w-5 h-5 text-slate-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Single-Source Regional Hub</h3>
                <p className="text-sm text-slate-400 mb-6 flex-1">Standard 3-tier layout focusing on a single critical chokepoint port/hub feeding 2 primary depots.</p>
                <div className="pt-4 border-t border-slate-800 flex justify-between items-center text-xs text-slate-500">
                  <span className="flex items-center gap-1 font-mono"><Network className="w-4 h-4"/> 14 Nodes</span>
                </div>
                <div className="pt-2 flex flex-col gap-1 text-[10px] text-slate-500 font-mono">
                  <span className="flex items-center gap-1.5"><History className="w-3 h-3"/> Baseline Historic Accuracy: 88.4%</span>
                  <span className="flex items-center gap-1.5"><KeyRound className="w-3 h-3"/> Calibrated: 2026-05-01 (Auto-L1)</span>
                </div>
              </div>

              <div className="border border-amber-500/30 rounded-xl bg-[#1f160e] p-6 flex flex-col cursor-pointer hover:border-amber-500/50 transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-amber-500/10 rounded-bl-full" />
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-amber-500/20 text-amber-400 text-xs font-mono px-2 py-1 rounded font-bold">Adversarial Scenario (Validated)</div>
                  <ShieldAlert className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="text-lg font-semibold text-amber-50 mb-2">Taiwan Strait Blockade</h3>
                <p className="text-sm text-amber-500/70 mb-6 flex-1">Multi-tier global grid pre-loaded with validated assumptions, historical accuracy metrics, and adversarial failure cascades.</p>
                <div className="pt-4 border-t border-amber-500/20 flex flex-col gap-2 text-xs text-amber-500/60">
                  <span className="flex items-center gap-1 font-mono"><History className="w-4 h-4"/> Used in 842 simulations. Model accuracy vs actual: 95.2%.</span>
                  <span className="flex items-center gap-1 font-mono"><KeyRound className="w-4 h-4"/> Last validated: 2026-05-15 by [Analyst Y].</span>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Footer actions */}
        <div className="col-span-12 flex justify-between items-center bg-slate-900 border border-slate-800 rounded-xl p-4 mt-4">
          <div className="text-sm text-slate-500 font-mono">
            0 nodes • 0 edges • Need ≥2 nodes and ≥1 edge to continue
          </div>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg font-medium">
            Next: Variables
          </button>
        </div>
      </div>
    </div>
  );
}

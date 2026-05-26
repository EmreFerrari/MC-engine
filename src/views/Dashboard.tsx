import React, { useState } from 'react';
import { Plus, Zap, AlertTriangle, ChevronRight, Activity, ArrowRight, CheckCircle2, FileText, DatabaseZap, Clock, ShieldAlert, Target } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, BarChart, Bar, Title } from 'recharts';

interface DashboardProps {
  setCurrentView: (view: string) => void;
}

const trendData = [
  { value: 85 }, { value: 82 }, { value: 80 }, { value: 81 }, { value: 78 }, { value: 75 }, { value: 72 }
];

export function Dashboard({ setCurrentView }: DashboardProps) {
  const [showStressSuite, setShowStressSuite] = useState(false);

  const [dialect, setDialect] = useState<'financial' | 'operational'>('financial');

  return (
    <div className="max-w-[1400px] mx-auto pb-12">
      {/* Header Section */}
      <div className="flex justify-between items-end mb-8 border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-100 flex items-center gap-3">
            Command Center
            <span className="text-[10px] font-mono tracking-widest uppercase bg-slate-800 px-2 py-1 rounded text-slate-400 border border-slate-700 font-medium">L6 Hybrid Product Output</span>
          </h1>
          <p className="text-slate-400 mt-1.5 text-sm font-medium">Supply chain risk analysis — active simulations and comparative scenario matrices.</p>
        </div>

        <div className="flex items-center gap-4 relative">
          <button onClick={() => setCurrentView('new_simulation')} className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded text-sm font-medium flex items-center gap-2 transition-colors border border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
            <Plus className="w-4 h-4" />
            New Simulation (MC)
          </button>
          
          <div className="relative">
            <button 
              onClick={() => setShowStressSuite(!showStressSuite)}
              className="bg-slate-900 hover:bg-slate-800 text-slate-200 px-5 py-2.5 rounded text-sm font-medium flex items-center gap-2 transition-colors border border-slate-700"
            >
              <Zap className="w-4 h-4 text-amber-500" />
              Full Stress Test Suite
            </button>

            {showStressSuite && (
              <div className="absolute top-full right-0 mt-2 w-96 bg-[#0B0F19] border border-amber-500/30 rounded shadow-2xl z-20 overflow-hidden">
                <div className="p-3 border-b border-slate-800 font-medium text-[10px] text-amber-500/70 uppercase tracking-widest bg-slate-950 font-mono flex items-center gap-2">
                  <ShieldAlert className="w-3 h-3" />
                  Adversarial Test Suite (Rank by Fragility)
                </div>
                <div className="flex flex-col divide-y divide-slate-800/50">
                  {['Cyber Attack on Ports', 'Kinetic Strike on Hub', 'Rare Earth Embargo', 'Labor Strike', 'Quality Failure Cascade'].map(test => (
                    <button key={test} className="px-4 py-3 text-sm text-left hover:bg-slate-900 hover:text-white flex items-center justify-between text-slate-300 font-medium transition-colors">
                      {test}
                      <PlayIcon className="w-4 h-4 text-slate-500" />
                    </button>
                  ))}
                  <button className="px-4 py-3 bg-amber-500/10 text-amber-500 font-bold hover:bg-amber-500/20 text-center text-sm focus:outline-none flex items-center justify-center gap-2 tracking-wide">
                    <Zap className="w-4 h-4" />
                    RUN ALL SCENARIOS IN BATCH
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        
        {/* LEFT COLUMN: 8 cols */}
        <div className="xl:col-span-8 flex flex-col gap-6">
          
          {/* L7 COMPARISON PANEL */}
          <div className="bg-[#090D17] border border-slate-800 rounded-lg p-5 relative overflow-hidden">
            <div className="flex items-center justify-between mb-5 border-b border-slate-800 pb-3">
              <div>
                <h2 className="text-[15px] font-semibold text-slate-100 uppercase tracking-widest flex items-center gap-2">
                  L7 Interlocking Flow: Comparative Scenario Matrix
                </h2>
              </div>
              <div className="flex bg-slate-900 border border-slate-700/50 rounded overflow-hidden">
                <button 
                  onClick={() => setDialect('financial')}
                  className={cn("px-3 py-1 text-[10px] font-mono font-medium tracking-widest", dialect === 'financial' ? "bg-slate-800 text-slate-200" : "text-slate-500 hover:text-slate-300")}
                >
                  Financial Dialect
                </button>
                <button 
                  onClick={() => setDialect('operational')}
                  className={cn("px-3 py-1 text-[10px] font-mono font-medium tracking-widest", dialect === 'operational' ? "bg-slate-800 text-slate-200" : "text-slate-500 hover:text-slate-300")}
                >
                  Operational Dialect
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 min-h-[220px]">
              <ScenarioCard 
                badge="Baseline"
                title="Peacetime Steady-State"
                cost={dialect === 'financial' ? "$12M RaR" : "Nominal"}
                costLabel={dialect === 'financial' ? "Expected Loss" : "Stockpile Depletion"}
                delivery="14 days"
                isBase
              />
              <ScenarioCard 
                badge="Stressed"
                title="Taiwan Strait Blockade"
                cost={dialect === 'financial' ? "$340M RaR" : "-42% JASSM"}
                costLabel={dialect === 'financial' ? "Expected Loss" : "Stockpile Depletion"}
                delivery="45 days"
                delta="-31 days"
                isAlert
              />
              <ScenarioCard 
                badge="Mitigated"
                title="Blockade + Sec. Supplier"
                cost={dialect === 'financial' ? "$85M RaR" : "-15% JASSM"}
                costLabel={dialect === 'financial' ? "Expected Loss" : "Stockpile Depletion"}
                delivery="22 days"
                delta="+23 days from Stressed"
                isPositive
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* ADJUDICATION QUEUE */}
            <div className="bg-[#090D17] border border-slate-800 rounded-lg p-5 flex flex-col">
              <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  <h2 className="text-[13px] font-bold uppercase tracking-widest text-slate-200">Adjudication Queue</h2>
                </div>
                <span className="bg-amber-500/10 text-amber-500 border border-amber-500/20 text-[9px] px-2 py-0.5 rounded font-mono font-bold tracking-widest">MANDATORY HITL</span>
              </div>
              <div className="space-y-2 flex-1">
                <QueueItem 
                  title="Taiwan Strait Blockade (P99 = 62 Days)"
                  analyst="Analyst J. Doe"
                  desc="High discrepancy in Red Team HUMINT vs ERP data."
                  onClick={() => setCurrentView('simulation_results')}
                />
                <QueueItem 
                  title="Supplier Node Delta Capacity Drop"
                  analyst="Auto-generated"
                  desc="Adversarial screening flagged 15% noise in latest report."
                  isAutoQueued
                />
              </div>
            </div>

            {/* DECISION JOURNAL */}
            <div className="bg-[#090D17] border border-slate-800 rounded-lg p-5 flex flex-col">
              <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                <h2 className="text-[13px] font-bold uppercase tracking-widest text-slate-200 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-slate-400" />
                  Decision Journal
                </h2>
                <button className="text-blue-500 text-[10px] uppercase font-mono tracking-widest hover:underline">View All</button>
              </div>
              <div className="space-y-1">
                <JournalRow hash="#SCEN-842" title="Taiwan Strait Blockade" date="22 May 22:18" status="COMPLETED" analyst="J.Doe" acc="11/12" weight="HIGH" overrides="1" onClick={() => setCurrentView('simulation_results')} />
                <JournalRow hash="#SCEN-841" title="Kinetic Strike: Hub Alpha" date="21 May 14:05" status="COMPLETED" analyst="M.Smith" acc="4/5" weight="MED" overrides="0" />
                <JournalRow hash="#SCEN-840" title="Rare Earth Embargo" date="19 May 09:12" status="REJECTED" analyst="J.Doe" acc="11/12" weight="HIGH" overrides="3" />
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT COLUMN: 4 cols */}
        <div className="xl:col-span-4 flex flex-col gap-6">
          
          {/* NETWORK HEALTH SCORE */}
          <div className="bg-[#090D17] border border-slate-800 rounded-lg p-5 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-[100px] blur-2xl pointer-events-none" />
            <div className="flex items-end justify-between border-b border-slate-800 pb-3 mb-5 z-10">
              <h2 className="text-[13px] font-bold uppercase tracking-widest text-slate-200">Network Health</h2>
              <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Aggregate Exposure</div>
            </div>
            
            <div className="flex items-center gap-6 z-10 mb-6">
              <div className="relative w-28 h-28 shrink-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={[{ value: 72 }, { value: 28 }]} cx="50%" cy="50%" innerRadius={35} outerRadius={50} startAngle={90} endAngle={-270} dataKey="value" stroke="none">
                      <Cell fill="#f59e0b" />
                      <Cell fill="#1e293b" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold font-mono text-amber-500 tracking-tighter">72</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="text-amber-500 font-bold tracking-widest uppercase flex items-center gap-2 text-xs mb-1">
                  Moderate Risk
                </div>
                <div className="text-[10px] font-mono text-slate-400">VULNERABILITY SCORE</div>
                
                <div className="mt-3 w-full h-10 border-b border-slate-800/80 pb-1">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={trendData}>
                      <Line type="monotone" dataKey="value" stroke="#f59e0b" strokeWidth={2} dot={false} isAnimationActive={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-between text-[9px] text-slate-500 font-mono mt-1 tracking-widest">
                  <span>30D AGO (85)</span>
                  <span className="text-amber-500 font-bold">NOW (72)</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2 z-10">
              <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1 font-mono">Component Breakdown</div>
              <ScoreComponent label="Supplier Concentration Risk" score="18/25" color="text-red-400" border="border-red-500/20" />
              <ScoreComponent label="Transit Route Redundancy" score="15/25" color="text-amber-400" border="border-amber-500/20" />
              <ScoreComponent label="Inventory Buffer Adequacy" score="20/25" color="text-emerald-400" border="border-emerald-500/20" />
              <ScoreComponent label="Adversarial Exposure" score="19/25" color="text-blue-400" border="border-blue-500/20" />
            </div>
          </div>

          {/* SUMMARY CRITICAL PATH */}
          <div className="bg-[#090D17] border border-slate-800 rounded-lg p-5 flex flex-col flex-1">
            <h2 className="text-[13px] font-bold uppercase tracking-widest text-slate-200 border-b border-slate-800 pb-3 mb-4">Most Fragile Path (KCCS Weighted)</h2>
            <div className="flex flex-col flex-1 bg-[#050810] p-4 rounded border border-slate-800 relative justify-center items-center">
              
              <div className="flex gap-6 w-full justify-center relative z-10">
                <div className="flex-1 max-w-[180px]">
                  <NodeCard name="Supplier Node Delta" status="Degraded" role="Sub-tier Source" />
                </div>
                <div className="flex-1 max-w-[180px]">
                  <NodeCard name="Supplier Node Echo" status="Offline" role="Spec. Component" isAlert />
                </div>
              </div>
              
              {/* Branching SVGs spanning from Nodes to Hub */}
              <div className="w-full flex justify-center -my-1 h-10 relative z-0">
                 <svg className="w-full h-full absolute inset-0 text-slate-700" preserveAspectRatio="none" stroke="currentColor" fill="none" viewBox="0 0 100 100">
                    <path d="M25,0 C25,50 50,50 50,100" strokeWidth="2" strokeDasharray="4 2" />
                    <path d="M75,0 C75,50 50,50 50,100" strokeWidth="2" strokeDasharray="4 2" />
                 </svg>
                 <ArrowRight className="w-3.5 h-3.5 text-slate-500 rotate-90 absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#050810]" />
              </div>
              
              <div className="w-full max-w-[240px] z-10">
                <NodeCard name="Transit Hub Alpha" status="Red" role="Chokepoint" isAlert />
              </div>
              
              <div className="w-full flex justify-center h-8 relative z-0 -my-1">
                 <div className="w-px h-full" style={{ background: 'repeating-linear-gradient(to bottom, transparent, transparent 4px, #334155 4px, #334155 8px)' }} />
                 <ArrowRight className="w-3.5 h-3.5 text-slate-500 rotate-90 absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#050810]" />
              </div>

              <div className="w-full max-w-[240px] z-10 mt-2">
                <NodeCard name="Port of Entry Bravo" status="At-Risk" role="Port of Entry" />
              </div>
              
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

function JournalRow({hash, title, date, status, analyst, acc, weight, overrides, onClick}: any) {
  return (
    <div onClick={onClick} className={cn("flex items-center justify-between py-2 border-b border-slate-800/50 hover:bg-slate-900/50 px-2 -mx-2 rounded transition-colors cursor-pointer", onClick && "group")}>
      <div>
        <div className="flex items-center gap-2 mb-0.5">
          <span className="font-mono text-[10px] text-blue-500 tracking-widest">{hash}</span>
          <span className="text-[9px] bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-1 py-0.5 rounded font-mono font-bold tracking-widest">{status}</span>
        </div>
        <div className={cn("text-xs font-semibold text-slate-300", onClick && "group-hover:text-blue-400 transition-colors")}>{title}</div>
      </div>
      <div className="text-right flex flex-col items-end">
        <div className="font-mono text-[10px] text-slate-500">{date}</div>
        <div className="font-mono text-[9px] text-slate-400 mt-1 uppercase tracking-widest flex items-center justify-end gap-1.5 flex-wrap">
          <span className="text-slate-300 font-bold">{analyst}</span> 
          {acc && <span className="text-emerald-400 bg-emerald-500/10 px-1 rounded border border-emerald-500/20">{acc} ACC</span>}
          {weight && <span className={cn("px-1 py-0.5 rounded font-bold border leading-none pt-0.5 mb-[-2px]", weight === 'HIGH' ? "text-blue-400 bg-blue-500/10 border-blue-500/20" : "text-amber-500 bg-amber-500/10 border-amber-500/20")}>{weight} WEIGHT</span>}
          <span className="bg-slate-800 px-1 py-0.5 rounded border border-slate-700 ml-1">{overrides} OVR</span>
        </div>
      </div>
    </div>
  )
}

function ScoreComponent({ label, score, color, border }: { label: string, score: string, color: string, border: string }) {
  return (
    <div className="flex justify-between items-center text-xs">
      <span className="text-slate-300 font-medium">{label}</span>
      <span className={cn("font-mono text-[10px] px-2 py-0.5 rounded border font-bold", color, border, border.replace('border', 'bg').replace('/20', '/10'))}>{score}</span>
    </div>
  );
}

function QueueItem({ title, analyst, desc, isAutoQueued, onClick }: { title: string, analyst: string, desc: string, isAutoQueued?: boolean, onClick?: () => void }) {
  return (
    <div onClick={onClick} className={cn("bg-[#050810] border border-slate-800 p-3 rounded flex flex-col gap-1.5", onClick && "cursor-pointer hover:border-blue-500/50 hover:bg-slate-900/50 transition-colors group")}>
      <div className="flex justify-between items-start">
        <h4 className={cn("font-semibold text-xs", onClick && "group-hover:text-blue-400 transition-colors")}>{title}</h4>
        {isAutoQueued && <span className="bg-purple-500/10 text-purple-400 border border-purple-500/30 text-[8px] font-mono font-bold px-1.5 py-0.5 rounded uppercase tracking-widest shrink-0 ml-2">Auto-Queued</span>}
      </div>
      <p className="text-[11px] text-slate-400 leading-tight">{desc}</p>
      <div className="text-[9px] text-amber-500/80 flex items-center gap-1 font-mono uppercase tracking-widest mt-1 font-bold">
        <CheckCircle2 className="w-3 h-3 text-amber-500" /> Adj. Required: {analyst}
      </div>
    </div>
  );
}

function NodeCard({ name, status, role, isAlert }: { name: string, status: string, role: string, isAlert?: boolean }) {
  return (
    <div className={cn("bg-[#050810] border p-2.5 rounded w-full flex items-center justify-between", isAlert ? "border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.1)]" : "border-slate-800")}>
      <div>
        <div className="text-[9px] text-slate-500 font-mono uppercase tracking-widest mb-0.5 font-bold">{role}</div>
        <div className="font-semibold text-xs text-slate-200">{name}</div>
      </div>
      <div className={cn("text-[9px] font-mono inline-flex px-1.5 py-0.5 rounded border tracking-widest font-bold", isAlert ? "bg-red-500/10 text-red-500 border-red-500/30" : "bg-amber-500/10 text-amber-500 border-amber-500/30")}>
        {status}
      </div>
    </div>
  );
}

function ScenarioCard({ badge, title, cost, costLabel = "Expected Loss", delivery, delta, isBase, isPositive, isAlert }: any) {
  return (
    <div className={cn("border rounded p-4 bg-[#050810] relative overflow-hidden h-full flex flex-col", isBase ? "border-blue-500/30" : isAlert ? "border-red-500/30" : isPositive ? "border-emerald-500/30" : "border-slate-800")}>
      {isBase && <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />}
      {isAlert && <div className="absolute top-0 left-0 w-full h-1 bg-red-500" />}
      {isPositive && <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500" />}
      
      <div className={cn("text-[9px] font-mono mb-2 uppercase tracking-widest font-bold", isBase ? "text-blue-500" : isAlert ? "text-red-500" : isPositive ? "text-emerald-500" : "text-slate-500")}>{badge}</div>
      <h3 className="font-semibold mb-4 text-sm leading-tight text-slate-200">{title}</h3>
      
      <div className="space-y-4 mt-auto">
        <div>
          <div className="text-[9px] text-slate-500 uppercase tracking-widest font-mono mb-0.5 font-bold">{costLabel}</div>
          <div className={cn("font-mono text-lg font-bold", isAlert ? "text-red-400" : isPositive ? "text-emerald-400" : "text-amber-500")}>{cost}</div>
        </div>
        <div className="pt-3 border-t border-slate-800/60">
          <div className="text-[9px] text-slate-500 uppercase tracking-widest font-mono mb-0.5 font-bold">P90 Delivery</div>
          <div className="flex items-baseline flex-wrap gap-2">
            <div className="font-mono text-base text-slate-200 font-bold">{delivery}</div>
            {delta && (
              <div className={cn("text-[10px] font-mono font-bold px-1 py-0.5 rounded whitespace-nowrap", isPositive ? "text-emerald-400 bg-emerald-500/10" : "text-red-400 bg-red-500/10")}>
                {delta}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}


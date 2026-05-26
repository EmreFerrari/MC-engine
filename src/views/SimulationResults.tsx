import React, { useState } from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { ShieldAlert, Info, DatabaseZap, Clock, ArrowRight, Download, BarChartHorizontal, GitCompare, ExternalLink, ChevronDown, Flag, Target } from 'lucide-react';
import { cn } from '@/lib/utils';

// Dummy data for curves
const generateCurve = (shift: number, variance: number, maxH: number) => {
  const data = [];
  for (let i = 4; i <= 30; i++) {
    // Normal-ish distribution calculation
    const base = Math.exp(-Math.pow(i - shift, 2) / (2 * variance));
    const reported = (Math.exp(-Math.pow(i - shift, 2) / (2 * variance)) * maxH);
    const adversarial = (Math.exp(-Math.pow(i - (shift + 4), 2) / (2 * (variance + 1))) * maxH * 0.8);
    
    data.push({
      day: i,
      reported: reported,
      adversarial: adversarial,
      // 80% confidence band (just dummy math for visual)
      conf_lb: reported * 0.7,
      conf_ub: reported * 1.3,
    });
  }
  return data;
};

const curveData = generateCurve(19, 8, 100);

// Sample sensitivity data
const sensitivityData = [
  { factor: 'Port Buffer Capacity Drop (-10%)', impact: 14.2 },
  { factor: 'Sub-tier Labor Strike (+10% Risk)', impact: 8.5 },
  { factor: 'Red Sea Reroute Delay (+15%)', impact: 6.1 },
  { factor: 'Cyber Interference (+5% Noise)', impact: 3.4 }
];

export function SimulationResults() {
  const [wartime, setWartime] = useState(false);
  const [showAssumptions, setShowAssumptions] = useState(false);
  const [showExport, setShowExport] = useState(false);

  return (
    <div className="max-w-[1400px] mx-auto space-y-6 pb-12">
      {/* L7: MANDATORY HUMAN ADJUDICATION HEADER */}
      <div className="bg-[#090D17] border border-slate-800 rounded-lg p-5 flex flex-col md:flex-row justify-between items-start gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs px-2 py-0.5 font-bold tracking-widest rounded flex items-center gap-1.5 uppercase">
              <ShieldAlert className="w-3 h-3 text-blue-500" />
              SIMULATION ID: #SCEN-842
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white uppercase font-sans">Taiwan Strait Blockade (Adversarial)</h1>
          </div>
          
          <div className="text-slate-400 text-xs flex flex-wrap items-center gap-4 mt-3 font-mono">
            <div className="flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 rounded text-emerald-400 opacity-90 font-bold tracking-widest">
              L1 MODEL HEALTH: B+ 
            </div>
            <div className="text-[10px] tracking-widest text-slate-500">
              DRIFT: 4.2%
            </div>
            <div className="w-px h-3 bg-slate-700" />
            <div className="flex items-center gap-2 text-amber-500 font-bold tracking-widest bg-amber-500/10 px-2 py-1 rounded border border-amber-500/20">
              L7 ADJUDICATION: ANALYST J.DOE OVERRIDE ACTIVE
            </div>
            
            <button 
              onClick={() => setShowAssumptions(!showAssumptions)}
              className="text-blue-400 hover:text-blue-300 font-bold transition-colors flex items-center gap-1 text-[10px] tracking-widest py-1 border-b border-transparent hover:border-blue-400 uppercase"
            >
              <Info className="w-3 h-3" /> View Override Memo
            </button>
          </div>
        </div>

        <div className="flex gap-4">
          {/* L4: FINANCIAL DIALECT */}
          <div className="text-right flex flex-col items-end min-w-[160px] bg-slate-900 border border-slate-800 p-3 rounded">
            <div className="text-[9px] uppercase tracking-widest font-mono text-amber-500/70 mb-1 font-bold">Actuary Pricing Input (L4)</div>
            <div className="text-amber-500 flex items-center gap-2">
              <span className="font-mono text-xl font-bold tracking-tighter">~$2.4M</span>
              <span className="text-[9px] opacity-70 uppercase tracking-widest leading-tight text-left border-l border-amber-500/20 pl-2">per $100M<br/>coverage</span>
            </div>
          </div>
          
          {/* L6 Export Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setShowExport(!showExport)}
              className="h-full bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold tracking-widest uppercase px-4 rounded border border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.2)] flex items-center gap-2 transition-colors"
            >
              <Download className="w-4 h-4" /> Export Product <ChevronDown className="w-4 h-4" />
            </button>
            {showExport && (
              <div className="absolute top-full right-0 mt-2 w-64 bg-[#0B0F19] border border-blue-500/30 rounded shadow-2xl z-50 overflow-hidden">
                <div className="p-2 border-b border-slate-800 font-medium text-[9px] text-slate-500 uppercase tracking-widest bg-slate-950 font-mono">
                  L6 Hybrid Products
                </div>
                <div className="flex flex-col divide-y divide-slate-800/50">
                  <button className="px-4 py-3 text-sm text-left hover:bg-slate-900 hover:text-white flex items-center gap-3 text-slate-300 transition-colors">
                    <Flag className="w-4 h-4 text-emerald-500" />
                    <div>
                      <div className="font-bold">Decision Forcer</div>
                      <div className="text-[10px] text-slate-500 font-mono">Exec summary for policy</div>
                    </div>
                  </button>
                  <button className="px-4 py-3 text-sm text-left hover:bg-slate-900 hover:text-white flex items-center gap-3 text-slate-300 transition-colors">
                    <DatabaseZap className="w-4 h-4 text-amber-500" />
                    <div>
                      <div className="font-bold">Budget Unlocker</div>
                      <div className="text-[10px] text-slate-500 font-mono">POM justification memo</div>
                    </div>
                  </button>
                  <button className="px-4 py-3 text-sm text-left hover:bg-slate-900 hover:text-white flex items-center gap-3 text-slate-300 transition-colors">
                    <Target className="w-4 h-4 text-red-500" />
                    <div>
                      <div className="font-bold">Wargame Inject</div>
                      <div className="text-[10px] text-slate-500 font-mono">TTX scenario payload</div>
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {showAssumptions && (
        <div className="bg-[#050810] border-l-2 border-l-amber-500 border-t border-b border-r border-[#1e293b] rounded-r p-5 text-sm space-y-3 relative shadow-2xl">
          <div className="flex items-center gap-2">
            <DatabaseZap className="w-4 h-4 text-amber-500" />
            <h4 className="font-bold text-slate-200 uppercase tracking-widest text-xs font-mono">HUMINT Override Memo (Tacit Knowledge L7)</h4>
          </div>
          <p className="text-slate-300 text-[13px] leading-relaxed border-l border-slate-700 pl-4 py-1">
            <span className="text-amber-400 font-mono text-xs font-bold">&gt; Analyst J. Doe (May 22):</span> Model output 15% risk is systematically blind to informal capacity constraints. Overriding to 60% probability. Justification: HUMINT (Plant manager Taiwan via site visit May 14). Second shift is running entirely on temps with 2 weeks tenure. Quality cliff imminent.
          </p>
          <div className="text-slate-500 font-mono text-[10px] tracking-widest uppercase mt-2">
            Baseline: Assuming peacetime commerce, intact ports, no cyber disruption to port management systems.
          </div>
        </div>
      )}

      {/* Primary Metrics (L2 Operational Translation) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MetricCard title="P50 Delivery" days={14} color="text-emerald-400" border="border-emerald-500/20" opsImpact="JASSM stockpile nominal. 3rd MLR combat effective." />
        <MetricCard title="P90 Delivery" days={19} color="text-amber-400" border="border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.05)] bg-[#100b01]" opsImpact="JASSM stockpile below reserves on Day 14. 3rd MLR combat-ineffective for Air Supp." highlight />
        <MetricCard title="P99 Delivery" days={24} color="text-red-400" border="border-red-500/30 bg-[#120606]" opsImpact="Pacific air tasking order degrades 40%. Full operational collapse." />
      </div>

      {/* Chart Section (L1 Adversarial Screening + L2 Wartime Scenario) */}
      <div className="bg-[#090D17] border border-slate-800 rounded-lg p-5 relative overflow-hidden">
        <div className="flex justify-between items-center mb-5 relative z-10 border-b border-slate-800 pb-3">
          <div>
            <h3 className="font-bold text-[14px] uppercase tracking-widest text-slate-200">Probability Outcome Curve</h3>
            <p className="text-[10px] font-mono text-slate-500 mt-1 uppercase tracking-widest">L1 Data Integration + L2 Wartime Library</p>
          </div>
          
          <div className="flex bg-[#050810] rounded p-1 border border-slate-800">
            <button 
              onClick={() => setWartime(false)} 
              className={cn("px-4 py-1 text-[10px] font-mono font-bold transition-colors uppercase tracking-widest rounded", !wartime ? "bg-slate-800 text-slate-200 border border-slate-600" : "text-slate-500 hover:text-slate-300")}
            >
              Peacetime Baseline
            </button>
            <button 
              onClick={() => setWartime(true)} 
              className={cn("px-4 py-1 text-[10px] font-mono font-bold transition-colors uppercase tracking-widest rounded", wartime ? "bg-red-950 text-red-500 border border-red-900" : "text-slate-500 hover:text-red-400/80")}
            >
              Full Mobilization (10x Surge)
            </button>
          </div>
        </div>

        <div className="text-[10px] font-bold text-slate-400 mb-5 flex flex-wrap gap-5 font-mono border-b border-slate-800/40 pb-3 relative z-10 tracking-widest uppercase">
          <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 bg-blue-500 rounded-sm"></div> Reported Data</div>
          <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 bg-purple-500/80 rounded-sm shadow-[0_0_8px_rgba(168,85,247,0.5)]"></div> Adversarial Inject (15% Noise)</div>
          <div className="flex items-center gap-2 border border-slate-600 border-dashed px-2 rounded bg-slate-800/30 text-[9px]">80% Confidence Band</div>
        </div>

        <div className="h-[260px] w-full relative z-10">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={curveData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorReported" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorAdv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="day" stroke="#334155" tick={{fill: '#64748b', fontSize: 10, fontFamily: 'JetBrains Mono'}} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#020408', borderColor: '#1e293b', color: '#f1f5f9', fontSize: 11 }}
                itemStyle={{ color: '#e2e8f0', fontFamily: 'JetBrains Mono' }}
              />
              
              {!wartime ? (
                <>
                  <Area type="monotone" dataKey="conf_ub" stroke="none" fill="#1e293b" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="conf_lb" stroke="none" fill="#090d17" fillOpacity={1} />
                  <Area type="monotone" dataKey="reported" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorReported)" />
                  <Area type="monotone" dataKey="adversarial" stroke="#a855f7" strokeWidth={2} fillOpacity={1} fill="url(#colorAdv)" />
                  <ReferenceLine x={19} stroke="#f59e0b" strokeDasharray="3 3" label={{ position: 'top', value: 'P90 (19D)', fill: '#f59e0b', fontSize: 10, fontFamily: 'JetBrains Mono' }} />
                </>
              ) : (
                <>
                  <Area type="monotone" dataKey="adversarial" stroke="#ef4444" strokeWidth={2} fillOpacity={0.1} fill="#ef4444" />
                  <ReferenceLine x={28} stroke="#ef4444" strokeDasharray="4 4" strokeWidth={2} label={{ position: 'top', value: 'Combat Ineffective (Day 28)', fill: '#ef4444', fontSize: 10, fontFamily: 'JetBrains Mono', fontWeight: 'bold' }} />
                </>
              )}
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Assumption Diff (Run 1 vs Run 2) */}
        <div className="bg-[#090D17] border border-slate-800 rounded-lg p-5 flex flex-col">
          <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-3">
            <h3 className="font-bold text-[13px] uppercase tracking-widest flex items-center gap-2 text-slate-200"><GitCompare className="w-4 h-4 text-emerald-500" /> Assumption Diff</h3>
            <span className="text-[9px] font-mono tracking-widest text-slate-500">RUN 841 → 842</span>
          </div>
          <div className="flex-1 space-y-3">
            <div className="text-[10px] font-mono tracking-widest uppercase text-slate-500 font-bold mb-2">Input Deltas</div>
            
            <div className="bg-[#050810] border border-slate-800 rounded p-3 text-sm flex justify-between items-center">
              <div>
                <div className="font-semibold text-slate-300">Supplier Node Delta Capacity</div>
                <div className="text-[10px] text-slate-500 font-mono mt-1 w-48 truncate">Override injected by Analyst J.Doe</div>
              </div>
              <div className="flex gap-2 items-center font-mono text-xs font-bold">
                <span className="text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded line-through opacity-70">12% Risk</span>
                <ArrowRight className="w-3 h-3 text-slate-600" />
                <span className="text-amber-500 bg-amber-500/10 border border-amber-500/20 px-1.5 py-0.5 rounded">60% Risk</span>
              </div>
            </div>

            <div className="bg-[#050810] border border-slate-800 rounded p-3 text-sm flex justify-between items-center">
              <div>
                <div className="font-semibold text-slate-300">Port of Entry Bravo Congestion</div>
                <div className="text-[10px] text-slate-500 font-mono mt-1">L1 Data Engine Update</div>
              </div>
              <div className="flex gap-2 items-center font-mono text-xs font-bold">
                <span className="text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded line-through opacity-70">2.1d Delay</span>
                <ArrowRight className="w-3 h-3 text-slate-600" />
                <span className="text-amber-500 bg-amber-500/10 border border-amber-500/20 px-1.5 py-0.5 rounded">4.1d Delay</span>
              </div>
            </div>
            
            <div className="bg-[#050810] border border-slate-800 rounded p-3 text-sm flex justify-between items-center">
              <div>
                <div className="font-semibold text-slate-300">Asset Redundancy (JASSM)</div>
                <div className="text-[10px] text-slate-500 font-mono mt-1">Static</div>
              </div>
              <div className="flex gap-2 items-center font-mono text-xs font-bold">
                <span className="text-slate-500">Unchanged (0/5)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sensitivity / Tornado Diagram */}
        <div className="bg-[#090D17] border border-slate-800 rounded-lg p-5 flex flex-col">
          <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-3">
            <h3 className="font-bold text-[13px] uppercase tracking-widest flex items-center gap-2 text-slate-200"><BarChartHorizontal className="w-4 h-4 text-blue-500" /> Sensitivity Analysis</h3>
            <span className="text-[9px] font-mono tracking-widest text-slate-500">IMPACT ON P90 (DAYS)</span>
          </div>
          <div className="flex-1 flex flex-col justify-center space-y-4">
            {sensitivityData.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-48 text-right text-xs font-medium text-slate-300 truncate" title={item.factor}>
                  {item.factor}
                </div>
                <div className="flex-1 bg-slate-900/50 h-5 rounded overflow-hidden flex items-center relative border border-slate-800">
                  <div 
                    className={cn("h-full", idx === 0 ? "bg-red-500" : idx === 1 ? "bg-amber-500" : "bg-blue-500")} 
                    style={{ width: `${(item.impact / 15) * 100}%` }}
                  />
                  <div className="absolute inset-x-0 h-full w-px bg-slate-700 pointer-events-none left-1/2" />
                </div>
                <div className={cn("w-12 text-right font-mono text-xs font-bold", idx === 0 ? "text-red-400" : idx === 1 ? "text-amber-500" : "text-blue-400")}>
                  +{item.impact}d
                </div>
              </div>
            ))}
          </div>
          <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-4 text-center border-t border-slate-800/50 pt-3">
            Variables capable of flipping operational state
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* L4: Bottleneck Ranking + KCCS */}
        <div className="bg-[#090D17] border border-slate-800 rounded-lg p-5 flex flex-col">
          <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-3">
            <h3 className="font-bold text-[13px] uppercase tracking-widest flex items-center gap-2 text-slate-200">Bottleneck Ranking (KCCS)</h3>
          </div>
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-[12px] text-left border-collapse font-sans">
              <thead className="text-[9px] text-slate-500 uppercase font-mono tracking-widest bg-[#050810]">
                <tr>
                  <th className="pb-2 pt-2 px-3 font-semibold rounded-tl border-b border-slate-800">Node</th>
                  <th className="pb-2 pt-2 px-3 font-semibold text-center border-b border-slate-800">Fail %</th>
                  <th className="pb-2 pt-2 px-3 font-semibold text-center border-b border-slate-800">Delay</th>
                  <th className="pb-2 pt-2 px-3 font-semibold text-center border-b border-slate-800">Subst.</th>
                  <th className="pb-2 pt-2 px-3 font-semibold text-right rounded-tr border-b border-slate-800">KCCS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/40 text-slate-300">
                <tr className="hover:bg-slate-800/30">
                  <td className="py-3 px-3">
                    <div className="font-semibold">Transit Hub Alpha</div>
                    <div className="text-[9px] text-slate-500 font-mono mt-0.5 uppercase tracking-widest">Feeds: JASSM, LRASM</div>
                  </td>
                  <td className="py-3 px-3 text-center font-mono text-red-500 font-bold">34.2%</td>
                  <td className="py-3 px-3 text-center font-mono text-amber-500">6.4d</td>
                  <td className="py-3 px-3 text-center">
                    <span className="text-[9px] bg-red-950 text-red-500 font-mono px-1.5 py-0.5 rounded border border-red-900 font-bold">0/5</span>
                  </td>
                  <td className="py-3 px-3 text-right">
                    <span className="bg-red-500/20 border border-red-500/50 text-red-400 px-2 py-0.5 rounded text-[9px] tracking-widest font-bold font-mono">HIGH</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-800/30">
                  <td className="py-3 px-3">
                    <div className="font-semibold">Port Entry Bravo</div>
                    <div className="text-[9px] text-slate-500 font-mono mt-0.5 uppercase tracking-widest">Feeds: Vehicle Spares</div>
                  </td>
                  <td className="py-3 px-3 text-center font-mono text-amber-500 font-bold">22.8%</td>
                  <td className="py-3 px-3 text-center font-mono text-amber-500">4.1d</td>
                  <td className="py-3 px-3 text-center">
                    <span className="text-[9px] bg-amber-950 text-amber-500 font-mono px-1.5 py-0.5 rounded border border-amber-900 font-bold">2/5</span>
                  </td>
                  <td className="py-3 px-3 text-right">
                    <span className="bg-amber-500/10 border border-amber-500/30 text-amber-500 px-2 py-0.5 rounded text-[9px] tracking-widest font-bold font-mono">MED</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* L5: Actionable Mitigations (Political Economy) */}
        <div className="bg-[#090D17] border border-slate-800 rounded-lg p-5 flex flex-col h-full">
          <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-3">
            <h3 className="font-bold text-[13px] uppercase tracking-widest flex items-center gap-2 text-slate-200">Actionable Mitigations</h3>
            <span className="text-[9px] text-amber-500/80 font-mono uppercase tracking-widest font-bold flex items-center gap-1.5 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20"><DatabaseZap className="w-3 h-3 text-amber-500" /> TWO-OUTPUT SYSTEM ACTIVE</span>
          </div>
          <div className="space-y-4 flex-1">
            
            {/* Optimal */}
            <div className="bg-[#050810] border border-slate-800 rounded p-4 relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2 pr-20">
                  <h4 className="font-bold text-[13px] text-slate-300">Qualify sec. supplier for Node Delta</h4>
                </div>
                <div className="bg-slate-900/50 p-2.5 rounded-sm text-xs border-l-2 border-l-red-500 border border-slate-800/50 mb-3 space-y-1.5 shadow-inner">
                  <div className="text-red-400 uppercase tracking-widest font-bold text-[9px] font-mono flex items-center gap-1">
                    Political Economy Constraint (L5)
                  </div>
                  <div className="text-slate-400 text-[11px] leading-snug">Incumbent has protection in [Senator X's state]. SASC support likelihood: <span className="text-red-400 font-bold">LOW</span>. Not executable in &lt; 18 mos without emergency POM.</div>
                </div>
              </div>

              <div className="flex justify-between items-center text-[10px] font-mono font-bold mt-2">
                <span className="text-emerald-500">-11% failure contrib.</span>
                <span className="text-red-500 flex items-center gap-1"><Clock className="w-3 h-3" /> 18-24 mos (CONGRESSIONAL)</span>
              </div>
              <div className="absolute top-0 right-0 px-2 py-0.5 bg-slate-800 text-slate-400 font-mono text-[9px] tracking-widest border-b border-l border-slate-700">OPTIMAL</div>
            </div>

            {/* Executable */}
            <div className="bg-[#050810] border border-emerald-500/30 rounded p-4 relative overflow-hidden flex flex-col justify-between shadow-[0_0_15px_rgba(16,185,129,0.05)]">
              <div>
                <div className="flex justify-between items-start mb-2 pr-20">
                  <h4 className="font-bold text-[13px] text-slate-100">Increase inventory buffer at Depot Echo 12%</h4>
                </div>
                <p className="text-slate-400 text-[11px] mb-3 leading-relaxed">
                  Cost: <span className="text-amber-500 font-mono font-bold">$2.4M</span> (Available in current POM). Avoids <span className="text-amber-500 font-mono font-bold">$18M</span> Rev@Risk.
                </p>
              </div>
              
              <div className="flex justify-between items-center text-[10px] font-mono font-bold mt-2 pt-3 border-t border-slate-800/60">
                <span className="text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded">-4.2 days at P90</span>
                <span className="text-emerald-500 flex items-center gap-1"><Clock className="w-3 h-3" /> 90 Days (EXISTING AUTH)</span>
              </div>
              <div className="absolute top-0 right-0 px-2 py-0.5 bg-emerald-500/20 text-emerald-400 font-mono text-[9px] tracking-widest font-bold border-b border-l border-emerald-500/30">EXECUTABLE</div>
            </div>

          </div>
        </div>
      </div>

      {/* Decision Journal Fields */}
      <div className="bg-[#090D17] border border-slate-800 rounded-lg p-5 flex flex-col">
        <h3 className="font-bold text-[13px] uppercase tracking-widest flex items-center gap-2 text-slate-200 border-b border-slate-800 pb-3 mb-4">
          <DatabaseZap className="w-4 h-4 text-emerald-500" />
          Decision Journal Context
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[10px] uppercase font-mono tracking-widest text-slate-500 mb-2 font-bold">Why I Ran This</label>
            <textarea 
              className="w-full bg-[#050810] border border-slate-700 rounded p-3 text-sm text-slate-300 font-sans focus:outline-none focus:border-blue-500 min-h-[100px]"
              placeholder="e.g. Exploring impact of second-shift labor at Node Delta..."
              defaultValue="Testing the robustness of P90 delivery metrics against the HUMINT field report indicating 100% temporary labor on second shift at Supplier Node Delta."
            />
          </div>
          <div>
            <label className="block text-[10px] uppercase font-mono tracking-widest text-slate-500 mb-2 font-bold">What I Learned</label>
            <textarea 
              className="w-full bg-[#050810] border border-slate-700 rounded p-3 text-sm text-slate-300 font-sans focus:outline-none focus:border-emerald-500 min-h-[100px]"
              placeholder="e.g. Discovered that 15% drop in capacity leads to..."
              defaultValue="The baseline 12% risk fundamentally misprices the fragility. Injecting the 60% override causes the entire network's P90 delivery to push past 19 days, meaning the 3rd MLR goes combat ineffective because JASSM buffers drain faster than they fill."
            />
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2 rounded text-xs font-bold tracking-widest uppercase font-mono transition-colors">
            Save Journal Context
          </button>
        </div>
      </div>

    </div>
  );
}

function MetricCard({ title, days, color, border, opsImpact, highlight }: any) {
  return (
    <div className={cn("bg-[#090D17] rounded-lg p-4 relative overflow-hidden border", border)}>
      {highlight && <div className="absolute top-0 left-0 w-full h-0.5 bg-amber-500" />}
      <h3 className="text-slate-400 font-mono text-[9px] uppercase tracking-widest mb-2 font-bold">{title}</h3>
      <div className={cn("text-4xl font-mono tracking-tighter font-bold mb-3 flex items-baseline gap-1.5", color)}>
        {days} <span className="text-[12px] text-slate-500 font-sans tracking-normal font-medium">days</span>
      </div>
      <div className="pt-3 border-t border-slate-800/80">
        <h4 className="text-[8px] uppercase font-bold tracking-widest text-slate-500 mb-1.5 font-mono">Operational Domain Translation</h4>
        <p className="text-[11px] text-slate-300 leading-relaxed font-medium">{opsImpact}</p>
      </div>
    </div>
  );
}

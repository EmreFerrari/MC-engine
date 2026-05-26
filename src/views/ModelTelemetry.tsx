import React from 'react';
import { Target, ActivitySquare, ShieldAlert, GitCompare, ArrowRight } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { cn } from '@/lib/utils';

const driftData = [
  { month: 'Jan', drift: 1.2, predicted: 14.1, actual: 14.0 },
  { month: 'Feb', drift: 1.5, predicted: 14.2, actual: 14.1 },
  { month: 'Mar', drift: 2.1, predicted: 15.0, actual: 15.6 },
  { month: 'Apr', drift: 3.8, predicted: 15.5, actual: 17.2 },
  { month: 'May', drift: 4.2, predicted: 16.0, actual: 18.1 },
];

export function ModelTelemetry() {
  return (
    <div className="max-w-[1200px] mx-auto space-y-6 pb-12">
      <div className="flex justify-between items-end mb-8 border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-100 flex items-center gap-3">
            Model Telemetry & Drift
            <span className="text-[10px] font-mono tracking-widest uppercase bg-slate-800 px-2 py-1 rounded text-slate-400 border border-slate-700 font-medium">L1 Data Engine</span>
          </h1>
          <p className="text-slate-400 mt-1.5 text-sm font-medium">Historical accuracy tracker and prediction vs. actuals drift monitoring.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Drift Chart */}
        <div className="lg:col-span-2 bg-[#090D17] border border-slate-800 rounded-lg p-5 flex flex-col min-h-[350px]">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-bold text-[14px] uppercase tracking-widest text-slate-200">Systemic Drift (Predicted P50 vs Actuals)</h3>
              <p className="text-[10px] font-mono text-slate-500 mt-1 uppercase tracking-widest">Aggregate across all active scenarios</p>
            </div>
            <div className="text-right">
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Current Drift</div>
              <div className="text-3xl font-bold font-mono tracking-tighter text-amber-500">4.2%</div>
            </div>
          </div>
          
          <div className="flex-1 w-full min-h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={driftData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="month" stroke="#334155" tick={{fill: '#64748b', fontSize: 10, fontFamily: 'JetBrains Mono'}} />
                <YAxis yAxisId="left" stroke="#334155" tick={{fill: '#64748b', fontSize: 10, fontFamily: 'JetBrains Mono'}} domain={['auto', 'auto']} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#020408', borderColor: '#1e293b', color: '#f1f5f9', fontSize: 11 }}
                  itemStyle={{ color: '#e2e8f0', fontFamily: 'JetBrains Mono' }}
                />
                <Line yAxisId="left" type="monotone" name="Predicted (Days)" dataKey="predicted" stroke="#3b82f6" strokeWidth={2} dot={{fill: '#3b82f6', r: 4}} />
                <Line yAxisId="left" type="monotone" name="Actual (Days)" dataKey="actual" stroke="#f59e0b" strokeWidth={2} dot={{fill: '#f59e0b', r: 4}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 mt-4 font-mono text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            <div className="flex items-center gap-2"><div className="w-3 h-1 bg-blue-500"></div> Model Prediction</div>
            <div className="flex items-center gap-2"><div className="w-3 h-1 bg-amber-500"></div> Observed Actuals</div>
          </div>
        </div>

        {/* Analyst Reputation Matrix */}
        <div className="bg-[#090D17] border border-slate-800 rounded-lg p-5 flex flex-col">
          <div className="flex justify-between items-center mb-5 border-b border-slate-800 pb-3">
            <h3 className="font-bold text-[13px] uppercase tracking-widest flex items-center gap-2 text-slate-200">
              <Target className="w-4 h-4 text-emerald-500" /> Analyst Reputation
            </h3>
          </div>
          <p className="text-xs text-slate-400 mb-4 leading-relaxed">
            Engine automatically weights HUMINT overrides based on historical accuracy of the analyst bounding.
          </p>
          <div className="space-y-3">
            <AnalystRow name="Analyst J.Doe" overrides={12} correct={11} weight="HIGH" acc="91%" />
            <AnalystRow name="Analyst M.Smith" overrides={5} correct={4} weight="MED" acc="80%" />
            <AnalystRow name="Team Red-Cell 4" overrides={34} correct={14} weight="LOW" acc="41%" />
            <AnalystRow name="Analyst T.Nguyen" overrides={8} correct={7} weight="HIGH" acc="87%" />
          </div>
        </div>
      </div>
      
      {/* Recent Drift Diagnostics */}
      <h3 className="font-bold text-[13px] uppercase tracking-widest flex items-center gap-2 text-slate-200 mt-8 mb-4">Historical Accuracy Audits (Drift Log)</h3>
      <div className="bg-[#090D17] border border-slate-800 rounded-lg overflow-hidden">
        <table className="w-full text-[12px] text-left border-collapse font-sans">
          <thead className="text-[9px] text-slate-500 uppercase font-mono tracking-widest bg-[#050810] border-b border-slate-800">
            <tr>
              <th className="py-3 px-4 font-semibold">Simulation / Event</th>
              <th className="py-3 px-4 font-semibold text-center">Predicted P90</th>
              <th className="py-3 px-4 font-semibold text-center">Actual P90</th>
              <th className="py-3 px-4 font-semibold text-center">Drift %</th>
              <th className="py-3 px-4 font-semibold text-right">Root Cause (Auto-Classified)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-slate-300">
            <DriftRow name="Rare Earth Embargo (SCEN-221)" pred="45d" act="62d" drift="+37%" cause="L1 Capacity Baseline Stale" />
            <DriftRow name="Labor Strike Port Charlie (SCEN-419)" pred="12d" act="11d" drift="-8%" cause="Over-estimated Transit Delay" isPositive />
            <DriftRow name="Component X Shortage (SCEN-771)" pred="28d" act="34d" drift="+21%" cause="Undocumented Sub-Tier Dependency" />
          </tbody>
        </table>
      </div>

    </div>
  );
}

function AnalystRow({ name, overrides, correct, weight, acc }: any) {
  return (
    <div className="bg-[#050810] border border-slate-800 rounded p-3 flex justify-between items-center">
      <div>
        <div className="font-bold text-slate-300 text-sm mb-1">{name}</div>
        <div className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">
          {overrides} Overrides • {correct} Correct
        </div>
      </div>
      <div className="flex flex-col flex-end text-right gap-1.5">
        <div className={cn("text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border inline-block text-center", weight === 'HIGH' ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" : weight === 'LOW' ? "text-red-400 bg-red-500/10 border-red-500/20" : "text-amber-500 bg-amber-500/10 border-amber-500/20")}>
          {weight} WT
        </div>
        <div className="text-[10px] text-slate-400 font-mono font-bold">{acc} ACC</div>
      </div>
    </div>
  );
}

function DriftRow({ name, pred, act, drift, cause, isPositive }: any) {
  return (
    <tr className="hover:bg-slate-800/20 transition-colors">
      <td className="py-4 px-4 font-medium">{name}</td>
      <td className="py-4 px-4 text-center font-mono text-blue-400">{pred}</td>
      <td className="py-4 px-4 text-center font-mono text-amber-500 font-bold">{act}</td>
      <td className="py-4 px-4 text-center">
        <span className={cn("font-mono text-[10px] font-bold px-1.5 py-0.5 rounded", isPositive ? "text-emerald-400 bg-emerald-500/10" : "text-red-400 bg-red-500/10")}>
          {drift}
        </span>
      </td>
      <td className="py-4 px-4 text-right text-[10px] text-slate-400 font-mono uppercase tracking-widest">{cause}</td>
    </tr>
  );
}

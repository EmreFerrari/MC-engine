import React from 'react';
import { ShieldAlert, Globe, Activity, Lock, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

const intelFeeds = [
  { id: 'FEED-84A', source: 'PLA-Logistics-Public', type: 'Port Capacity', trust: 'LOW', adversarial: true, flags: ['Deception Signature Match', 'Inconsistent Output'], age: '4h', weight: '0.1' },
  { id: 'FEED-22C', source: 'COMINT-Intercept-Tango', type: 'Rail Transit', trust: 'HIGH', adversarial: false, flags: [], age: '12m', weight: '0.8' },
  { id: 'FEED-91B', source: 'Commercial-AIS', type: 'Vessel Tracking', trust: 'MED', adversarial: true, flags: ['GPS Spoofing Detected in Sector 4'], age: '1m', weight: '0.4' },
  { id: 'FEED-04X', source: 'HUMINT-Asset-K', type: 'Sub-tier Factory', trust: 'HIGH', adversarial: false, flags: [], age: '2d', weight: '0.9' },
  { id: 'FEED-55Y', source: 'OSINT-Financial', type: 'Capital Flow', trust: 'MED', adversarial: false, flags: ['Anomaly: Sudden Divestiture'], age: '5h', weight: '0.6' },
];

export function ThreatIntelFusion() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-6">
      <div className="flex flex-col gap-1 mb-8 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="bg-purple-500/10 border border-purple-500/30 text-purple-400 font-mono text-xs px-2 py-0.5 font-bold tracking-widest rounded flex items-center gap-1.5 uppercase shadow-[0_0_10px_rgba(168,85,247,0.1)]">
            <Globe className="w-3 h-3 text-purple-500" />
            L1 ADVERSARIAL SCREENING
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white uppercase font-sans">Threat Intel Fusion</h1>
        </div>
        <p className="text-sm text-slate-500 font-mono tracking-wide mt-2 max-w-3xl">
          Continuous ingestion, normalisation, and synthesis. Adversarial actors actively manipulate SCADA, AIS, and financial inputs. 
          Passive ingestion is equivalent to poisoning the model.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <MetricCard title="Active Feeds" value="1,492" unit="STREAMS" color="text-slate-200" />
        <MetricCard title="Poisoned Data Caught" value="14.2" unit="%" color="text-purple-400" border="border-purple-500/30" />
        <MetricCard title="Confidence Floor" value="0.65" unit="TOLERANCE" color="text-emerald-400" />
        <MetricCard title="L1 Drift State" value="NOMINAL" unit="STATUS" color="text-emerald-500" />
      </div>

      <div className="bg-[#090D17] border border-slate-800 rounded-lg p-5 flex flex-col">
        <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-3">
          <h3 className="font-bold text-[13px] uppercase tracking-widest flex items-center gap-2 text-slate-200">
            Live Feed Provenance Check
          </h3>
          <span className="text-[9px] text-blue-400 font-mono uppercase tracking-widest font-bold flex items-center gap-1.5 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
            <Activity className="w-3 h-3 text-blue-500" /> AUTO-QUARANTINE ACTIVE
          </span>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse font-sans">
            <thead className="text-[10px] text-slate-500 uppercase font-mono tracking-widest bg-[#050810]">
              <tr>
                <th className="pb-2 pt-2 px-3 font-semibold rounded-tl border-b border-slate-800">Stream ID</th>
                <th className="pb-2 pt-2 px-3 font-semibold border-b border-slate-800">Source Type</th>
                <th className="pb-2 pt-2 px-3 font-semibold border-b border-slate-800">Domain</th>
                <th className="pb-2 pt-2 px-3 font-semibold text-center border-b border-slate-800">Trust Score</th>
                <th className="pb-2 pt-2 px-3 font-semibold border-b border-slate-800 text-center">Engine Weight</th>
                <th className="pb-2 pt-2 px-3 font-semibold rounded-tr border-b border-slate-800 min-w-[200px]">Adversarial Flags (L1)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/40 text-slate-300 text-xs">
              {intelFeeds.map((feed) => (
                <tr key={feed.id} className={cn("hover:bg-slate-800/30 transition-colors", feed.adversarial ? "bg-purple-900/5 group" : "")}>
                  <td className="py-3 px-3 font-mono font-medium text-slate-300 flex items-center gap-2">
                    {feed.adversarial ? <Lock className="w-3 h-3 text-purple-500" /> : <Lock className="w-3 h-3 text-slate-600" />}
                    {feed.id}
                  </td>
                  <td className="py-3 px-3">
                    <div className="font-semibold">{feed.source}</div>
                    <div className="text-[10px] text-slate-500 font-mono mt-0.5 uppercase tracking-widest">Age: {feed.age}</div>
                  </td>
                  <td className="py-3 px-3 font-mono text-slate-400">{feed.type}</td>
                  <td className="py-3 px-3 text-center">
                    <span className={cn(
                      "px-2 py-0.5 rounded text-[10px] font-bold font-mono tracking-widest border",
                      feed.trust === 'HIGH' ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" : 
                      feed.trust === 'MED' ? "bg-amber-500/10 text-amber-500 border-amber-500/30" : 
                      "bg-red-500/10 text-red-400 border-red-500/30"
                    )}>
                      {feed.trust}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-center font-mono text-slate-300 font-medium">{feed.weight}</td>
                  <td className="py-3 px-3">
                    {feed.flags.length > 0 ? (
                      <div className="flex flex-col gap-1">
                        {feed.flags.map((flag, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-[10px] font-mono text-purple-400 uppercase tracking-widest bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20 w-fit">
                            <AlertTriangle className="w-3 h-3" />
                            {flag}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">NO FLAGS</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ title, value, unit, color, border }: any) {
  return (
    <div className={cn("bg-[#090D17] rounded-lg p-4 border border-slate-800", border)}>
      <h3 className="text-slate-400 font-mono text-[10px] uppercase tracking-widest mb-2 font-bold">{title}</h3>
      <div className={cn("text-3xl font-mono tracking-tighter font-bold mb-1 flex items-baseline gap-1.5", color)}>
        {value} <span className="text-[12px] text-slate-500 font-sans tracking-normal font-medium">{unit}</span>
      </div>
    </div>
  );
}

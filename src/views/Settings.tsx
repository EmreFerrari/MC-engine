import React from 'react';
import { Settings as SettingsIcon, Server, Shield, Database } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Settings() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-6">
      <div className="flex flex-col gap-1 mb-6 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="bg-slate-800 text-slate-300 font-mono text-xs px-2 py-0.5 font-bold tracking-widest rounded flex items-center gap-1.5 uppercase border border-slate-700">
            <SettingsIcon className="w-3 h-3" />
            PLATFORM CONFIGURATION
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white uppercase font-sans">Engine Settings</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SettingCard 
          icon={<Server className="w-5 h-5 text-blue-400" />}
          title="Compute Allocation"
          desc="Manage dedicated cores for L4 Monte Carlo simulations"
          status="256 Cores Active"
        />
        <SettingCard 
          icon={<Database className="w-5 h-5 text-purple-400" />}
          title="L1 Ingestion Feeds"
          desc="Configure OSINT, COMINT, and commercial AIS endpoints"
          status="5 Active Streams"
        />
        <SettingCard 
          icon={<Shield className="w-5 h-5 text-emerald-400" />}
          title="RBAC & Adjudicators"
          desc="Manage L7 sign-off authorities across commands"
          status="14 Adjudicators"
        />
      </div>

      <div className="bg-[#090D17] border border-slate-800 rounded-lg p-5 mt-6">
        <h3 className="font-bold text-[13px] uppercase tracking-widest flex items-center gap-2 text-slate-200 border-b border-slate-800 pb-3 mb-4">
          <SettingsIcon className="w-4 h-4 text-slate-400" />
          Escalation Triggers & Automation
        </h3>
        <p className="text-xs text-slate-400 mb-6 max-w-2xl">
          Configure rule-based engines that automatically spawn L4 simulations and ping L7 human adjudicators when L1 ingestion detects baseline drift on critical path nodes.
        </p>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-[#050810] border border-slate-700/50 rounded hover:border-slate-600 transition-colors">
            <div>
              <div className="font-semibold text-slate-200 mb-1">Auto-Queue Sim on "At-Risk" Node Degradation</div>
              <div className="text-[11px] text-slate-400 font-sans">Trigger adversarial scenario when any critical path capability drops &gt; 15%</div>
            </div>
            <div className="relative inline-flex h-5 w-9 items-center rounded-full bg-blue-600 cursor-pointer">
              <span className="inline-block h-3 w-3 translate-x-5 rounded-full bg-white transition" />
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-[#050810] border border-slate-700/50 rounded hover:border-slate-600 transition-colors">
            <div>
              <div className="font-semibold text-slate-200 mb-1">Enforce Analyst Reputation Scaling</div>
              <div className="text-[11px] text-slate-400 font-sans">Weight HUMINT overrides inversely proportional to historical Analyst ACC Score</div>
            </div>
            <div className="relative inline-flex h-5 w-9 items-center rounded-full bg-blue-600 cursor-pointer">
              <span className="inline-block h-3 w-3 translate-x-5 rounded-full bg-white transition" />
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-[#050810] border border-slate-700/50 rounded hover:border-slate-600 transition-colors">
            <div>
              <div className="font-semibold text-slate-200 mb-1">Strict POM Cycle Adherence (L5 Political Economy)</div>
              <div className="text-[11px] text-slate-400 font-sans">Reject any mitigation flagged 'Optimal' if requiring out-of-cycle supplemental &gt;$10M</div>
            </div>
            <div className="relative inline-flex h-5 w-9 items-center rounded-full bg-slate-700 cursor-pointer">
              <span className="inline-block h-3 w-3 translate-x-1 rounded-full bg-white transition" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SettingCard({ icon, title, desc, status }: any) {
  return (
    <div className="bg-[#090D17] border border-slate-800 rounded-lg p-5 flex flex-col justify-between hover:border-slate-700 transition-colors cursor-pointer">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-slate-900 rounded border border-slate-800 shrink-0">
            {icon}
          </div>
          <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 font-bold bg-slate-900 px-2 py-1 rounded border border-slate-800">
            {status}
          </span>
        </div>
        <h3 className="font-bold text-slate-200 mb-1 font-sans">{title}</h3>
        <p className="text-xs text-slate-400 font-sans">{desc}</p>
      </div>
    </div>
  );
}

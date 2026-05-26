import { LayoutDashboard, Plus, Settings, FileBox, Database, Globe, Network, ActivitySquare, Fingerprint } from 'lucide-react';
import { cn } from '@/lib/utils';
import React from 'react';

interface SidebarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

export function Sidebar({ currentView, setCurrentView }: SidebarProps) {
  const mainItems = [
    { id: 'dashboard', label: 'Command Center', icon: LayoutDashboard },
    { id: 'new_simulation', label: 'New Simulation', icon: Plus },
    { id: 'scenarios', label: 'Scenario Library', icon: FileBox },
  ];

  const dataItems = [
    { id: 'network', label: 'Dependency Graph', icon: Network },
    { id: 'threat_intel', label: 'Threat Intel Fusion', icon: Globe },
    { id: 'adjudication', label: 'Adjudication Queue', icon: ActivitySquare },
  ];

  const adminItems = [
    { id: 'audits', label: 'Override Audits', icon: Fingerprint },
    { id: 'telemetry', label: 'Model Telemetry', icon: ActivitySquare },
    { id: 'settings', label: 'Engine Settings', icon: Settings },
  ];

  return (
    <div className="w-56 bg-[#020408] h-screen border-r border-[#1e293b] flex flex-col">
      <div className="p-4 border-b border-[#1e293b] mb-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center shrink-0">
            <Database className="w-5 h-5 text-blue-500" />
          </div>
          <div>
            <div className="text-[9px] font-mono text-slate-500 uppercase tracking-widest leading-tight">
              Module Active
            </div>
            <div className="text-sm font-semibold text-slate-200 tracking-wide mt-0.5">
              MC RISK ENGINE
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto w-full px-3 py-2 space-y-6">
        <NavGroup title="OPERATIONS" items={mainItems} currentView={currentView} setCurrentView={setCurrentView} />
        <NavGroup title="DATA & INTELLIGENCE" items={dataItems} currentView={currentView} setCurrentView={setCurrentView} />
        <NavGroup title="SYSTEM" items={adminItems} currentView={currentView} setCurrentView={setCurrentView} />
      </div>

      <div className="p-4 border-t border-[#1e293b] mt-auto">
        <div className="text-[10px] font-mono text-slate-600 block w-full text-center hover:text-slate-400">
          defense.codes // v1.0
        </div>
      </div>
    </div>
  );
}

function NavGroup({title, items, currentView, setCurrentView}: any) {
  return (
    <div className="space-y-1">
      <div className="text-[10px] font-mono text-slate-500 px-3 py-1.5 uppercase tracking-widest font-semibold">{title}</div>
      {items.map((item: any) => (
        <button
          key={item.id}
          onClick={() => setCurrentView(item.id)}
          className={cn(
            "w-full flex items-center gap-3 px-3 py-2 rounded text-xs transition-colors text-left font-medium border border-transparent",
            currentView === item.id 
              ? "bg-blue-500/10 text-blue-400 border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.05)]" 
              : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
          )}
        >
          <item.icon className="w-4 h-4" />
          {item.label}
        </button>
      ))}
    </div>
  )
}

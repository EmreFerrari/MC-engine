import { Shield, Activity, Clock, Terminal } from 'lucide-react';
import React, { useState, useEffect } from 'react';

export function TopBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-10 bg-[#020408] border-b border-[#1e293b] flex items-center justify-between px-4 shrink-0 font-mono text-[10px] uppercase tracking-wider text-slate-400">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-slate-200 font-bold font-sans">
          <Terminal className="w-4 h-4 text-blue-500" />
          <span className="tracking-widest">DEFENSE.CODES // MC RISK ENGINE</span>
        </div>
        <div className="flex items-center gap-2 text-red-500 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">
          <Shield className="w-3 h-3" />
          <span>PROPRIETARY / NOFORN</span>
        </div>
        <div className="flex items-center gap-2">
           <Activity className="w-3 h-3 text-emerald-500" />
           <span className="text-emerald-500">SYSTEM: NOMINAL</span>
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-slate-400">
          <Clock className="w-3 h-3 text-slate-500" />
          <span>{time.toISOString().replace('T', ' ').substring(0, 19)} ZULU</span>
        </div>
        
        <div className="w-px h-4 bg-slate-800" />
        
        <div className="flex items-center gap-2 text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
          <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          <span>ON-PREM DEPLOYMENT (NODE: OMEGA)</span>
        </div>
        
        <div className="w-px h-4 bg-slate-800" />
        
        <div className="flex items-center gap-2">
          <span>ANALYST: J.DOE</span>
          <div className="w-5 h-5 rounded bg-blue-900 border border-blue-500 flex items-center justify-center text-blue-100 font-bold text-[9px]">
            JD
          </div>
        </div>
      </div>
    </div>
  );
}

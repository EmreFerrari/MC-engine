/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { TopBar } from '@/components/TopBar';
import { Dashboard } from '@/views/Dashboard';
import { SimulationResults } from '@/views/SimulationResults';
import { NewSimulation } from '@/views/NewSimulation';
import { ThreatIntelFusion } from '@/views/ThreatIntelFusion';
import { DependencyGraph } from '@/views/DependencyGraph';
import { AdjudicationQueue } from '@/views/AdjudicationQueue';
import { ScenarioLibrary } from '@/views/ScenarioLibrary';
import { OverrideAudits } from '@/views/OverrideAudits';
import { Settings } from '@/views/Settings';
import { ModelTelemetry } from '@/views/ModelTelemetry';
import { SovereignIntel } from '@/views/SovereignIntel';
import { AnalystReputation } from '@/views/AnalystReputation';

export default function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  return (
    <div className="flex h-screen overflow-hidden bg-[#060B14] text-slate-200 font-sans selection:bg-blue-500/30 selection:text-white">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-y-auto p-8">
          {currentView === 'dashboard' && <Dashboard setCurrentView={setCurrentView} />}
          {currentView === 'simulation_results' && <SimulationResults />}
          {currentView === 'new_simulation' && <NewSimulation />}
          {currentView === 'scenarios' && <ScenarioLibrary />}
          {currentView === 'threat_intel' && <ThreatIntelFusion />}
          {currentView === 'network' && <DependencyGraph />}
          {currentView === 'sovereign' && <SovereignIntel />}
          {currentView === 'adjudication' && <AdjudicationQueue />}
          {currentView === 'audits' && <OverrideAudits />}
          {currentView === 'reputation' && <AnalystReputation />}
          {currentView === 'telemetry' && <ModelTelemetry />}
          {currentView === 'settings' && <Settings />}
        </main>
      </div>
    </div>
  );
}

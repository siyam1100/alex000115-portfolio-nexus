import React from 'react';
import { Terminal, Database, Cpu, Shield } from 'lucide-react';

/**
 * @dev Flat UI component for displaying ecosystem statistics.
 */
export const RepoStats = () => {
  const stats = [
    { label: 'Protocols', value: '100', icon: <Database size={16}/> },
    { label: 'Total Files', value: '400+', icon: <Terminal size={16}/> },
    { label: 'AI Agents', icon: <Cpu size={16}/>, value: 'Active' },
    { label: 'Security', icon: <Shield size={16}/>, value: 'ZK-Proof' }
  ];

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {stats.map((stat, i) => (
        <div key={i} className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-lg">
          <div className="flex items-center gap-2 text-zinc-500 mb-1">
            {stat.icon}
            <span className="text-xs uppercase font-bold">{stat.label}</span>
          </div>
          <div className="text-xl font-mono text-white">{stat.value}</div>
        </div>
      ))}
    </div>
  );
};

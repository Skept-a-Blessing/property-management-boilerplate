'use client';

import { CheckCircle, Clock, AlertTriangle, Shield } from 'lucide-react';

const stats = [
  {
    name: 'Verified Today',
    value: 12,
    icon: CheckCircle,
    color: 'bg-green-500',
    change: '+3',
    changeType: 'positive' as const,
  },
  {
    name: 'Pending Verification',
    value: 8,
    icon: Clock,
    color: 'bg-yellow-500',
    change: '-2',
    changeType: 'positive' as const,
  },
  {
    name: 'Flagged Payments',
    value: 3,
    icon: AlertTriangle,
    color: 'bg-red-500',
    change: '+1',
    changeType: 'negative' as const,
  },
  {
    name: 'Auto-Verified',
    value: 25,
    icon: Shield,
    color: 'bg-blue-500',
    change: '+5',
    changeType: 'positive' as const,
  },
];

export function VerificationStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{stat.name}</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
            </div>
            <div className={`p-3 rounded-lg ${stat.color}`}>
              <stat.icon className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span
              className={`text-sm font-medium ${
                stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {stat.change}
            </span>
            <span className="text-sm text-gray-500 ml-2">from yesterday</span>
          </div>
        </div>
      ))}
    </div>
  );
}

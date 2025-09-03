'use client';

import { Building2, Users, TrendingUp, DollarSign } from 'lucide-react';
import { mockProperties, mockTenants } from '@/lib/mock-data';
import { formatCurrency } from '@/lib/utils';

export function PropertyStats() {
  const totalProperties = mockProperties.length;
  const totalUnits = mockProperties.reduce((sum, prop) => sum + prop.totalUnits, 0);
  const occupiedUnits = mockProperties.reduce((sum, prop) => sum + prop.occupiedUnits, 0);
  const occupancyRate = totalUnits > 0 ? (occupiedUnits / totalUnits) * 100 : 0;
  const totalRevenue = mockProperties.reduce((sum, prop) => sum + (prop.monthlyRent * prop.occupiedUnits), 0);

  const stats = [
    {
      name: 'Total Properties',
      value: totalProperties,
      icon: Building2,
      color: 'bg-blue-500',
      change: '+1',
      changeType: 'positive' as const,
    },
    {
      name: 'Total Units',
      value: totalUnits,
      icon: Building2,
      color: 'bg-green-500',
      change: '+5',
      changeType: 'positive' as const,
    },
    {
      name: 'Occupancy Rate',
      value: `${occupancyRate.toFixed(1)}%`,
      icon: TrendingUp,
      color: 'bg-purple-500',
      change: '+2.3%',
      changeType: 'positive' as const,
    },
    {
      name: 'Monthly Revenue',
      value: formatCurrency(totalRevenue),
      icon: DollarSign,
      color: 'bg-emerald-500',
      change: '+8.5%',
      changeType: 'positive' as const,
    },
  ];

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
            <span className="text-sm text-gray-500 ml-2">from last month</span>
          </div>
        </div>
      ))}
    </div>
  );
}

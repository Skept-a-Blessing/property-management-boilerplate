'use client';

import { Building2, Users, CreditCard, AlertTriangle, TrendingUp, DollarSign } from 'lucide-react';
import { mockDashboardMetrics } from '@/lib/mock-data';
import { formatCurrency } from '@/lib/utils';

const metrics = [
  {
    name: 'Total Properties',
    value: mockDashboardMetrics.totalProperties,
    icon: Building2,
    color: 'bg-blue-500',
    change: '+2',
    changeType: 'positive' as const,
  },
  {
    name: 'Active Tenants',
    value: mockDashboardMetrics.totalTenants,
    icon: Users,
    color: 'bg-green-500',
    change: '+5',
    changeType: 'positive' as const,
  },
  {
    name: 'Monthly Revenue',
    value: formatCurrency(mockDashboardMetrics.monthlyRevenue),
    icon: DollarSign,
    color: 'bg-emerald-500',
    change: '+12%',
    changeType: 'positive' as const,
  },
  {
    name: 'Occupancy Rate',
    value: `${mockDashboardMetrics.occupancyRate}%`,
    icon: TrendingUp,
    color: 'bg-purple-500',
    change: '+3%',
    changeType: 'positive' as const,
  },
  {
    name: 'Pending Payments',
    value: mockDashboardMetrics.pendingPayments,
    icon: CreditCard,
    color: 'bg-yellow-500',
    change: '-2',
    changeType: 'positive' as const,
  },
  {
    name: 'Overdue Payments',
    value: mockDashboardMetrics.overduePayments,
    icon: AlertTriangle,
    color: 'bg-red-500',
    change: '+1',
    changeType: 'negative' as const,
  },
];

export function DashboardOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {metrics.map((metric) => (
        <div
          key={metric.name}
          className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{metric.name}</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
            </div>
            <div className={`p-3 rounded-lg ${metric.color}`}>
              <metric.icon className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span
              className={`text-sm font-medium ${
                metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {metric.change}
            </span>
            <span className="text-sm text-gray-500 ml-2">from last month</span>
          </div>
        </div>
      ))}
    </div>
  );
}

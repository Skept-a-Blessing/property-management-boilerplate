'use client';

import { Plus, CreditCard, FileText, Users, Building2, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

const quickActions = [
  {
    title: 'Add New Tenant',
    description: 'Register a new tenant and create lease agreement',
    icon: Users,
    color: 'bg-blue-500',
    href: '/tenants/new',
  },
  {
    title: 'Record Payment',
    description: 'Record a manual payment or verify M-Pesa transaction',
    icon: CreditCard,
    color: 'bg-green-500',
    href: '/payments/new',
  },
  {
    title: 'Generate Report',
    description: 'Create financial or occupancy reports',
    icon: FileText,
    color: 'bg-purple-500',
    href: '/reports/generate',
  },
  {
    title: 'Add Property',
    description: 'Register a new property to the system',
    icon: Building2,
    color: 'bg-orange-500',
    href: '/properties/new',
  },
  {
    title: 'Send Notification',
    description: 'Send notifications to tenants or property managers',
    icon: Bell,
    color: 'bg-red-500',
    href: '/notifications/send',
  },
];

export function QuickActions() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
        <Button variant="outline" size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add New
        </Button>
      </div>
      
      <div className="grid grid-cols-1 gap-3">
        {quickActions.map((action, index) => (
          <button
            key={index}
            className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-left"
          >
            <div className={`p-2 rounded-lg ${action.color}`}>
              <action.icon className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{action.title}</p>
              <p className="text-xs text-gray-600 mt-1">{action.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

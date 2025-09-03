'use client';

import { Clock, CreditCard, User, Building2, AlertTriangle } from 'lucide-react';
import { formatDateTime, getStatusColor } from '@/lib/utils';

const recentActivities = [
  {
    id: 1,
    type: 'payment',
    title: 'Payment Received',
    description: 'Alice Wanjiku paid January rent - KSh 45,000',
    timestamp: new Date('2024-01-15T10:30:00'),
    icon: CreditCard,
    status: 'success',
  },
  {
    id: 2,
    type: 'tenant',
    title: 'New Tenant Application',
    description: 'John Mwangi applied for Unit B3 at Garden Villas',
    timestamp: new Date('2024-01-15T09:15:00'),
    icon: User,
    status: 'info',
  },
  {
    id: 3,
    type: 'maintenance',
    title: 'Maintenance Request',
    description: 'Broken window reported in Unit A1 at Sunset Apartments',
    timestamp: new Date('2024-01-14T16:45:00'),
    icon: Building2,
    status: 'warning',
  },
  {
    id: 4,
    type: 'payment',
    title: 'Overdue Payment Alert',
    description: 'Grace Akinyi has overdue payment for January rent',
    timestamp: new Date('2024-01-14T14:20:00'),
    icon: AlertTriangle,
    status: 'error',
  },
  {
    id: 5,
    type: 'payment',
    title: 'Payment Verification',
    description: 'M-Pesa payment QGH2K9L8M3 verified and processed',
    timestamp: new Date('2024-01-14T11:30:00'),
    icon: CreditCard,
    status: 'success',
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'success':
      return 'text-green-500';
    case 'warning':
      return 'text-yellow-500';
    case 'error':
      return 'text-red-500';
    default:
      return 'text-blue-500';
  }
};

export function RecentActivity() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        {recentActivities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div className={`p-2 rounded-lg bg-gray-50 ${getStatusIcon(activity.status)}`}>
              <activity.icon className="h-4 w-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{activity.title}</p>
              <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
              <div className="flex items-center mt-2 text-xs text-gray-500">
                <Clock className="h-3 w-3 mr-1" />
                {formatDateTime(activity.timestamp)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

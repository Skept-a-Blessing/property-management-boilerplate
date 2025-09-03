'use client';

import { MainLayout } from '@/components/layout/main-layout';
import { DashboardOverview } from '@/components/dashboard/dashboard-overview';
import { DashboardCharts } from '@/components/dashboard/dashboard-charts';
import { RecentActivity } from '@/components/dashboard/recent-activity';
import { QuickActions } from '@/components/dashboard/quick-actions';

export default function DashboardPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your properties.</p>
        </div>

        <DashboardOverview />
        <DashboardCharts />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentActivity />
          <QuickActions />
        </div>
      </div>
    </MainLayout>
  );
}

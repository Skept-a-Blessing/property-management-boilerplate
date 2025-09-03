'use client';

import { MainLayout } from '@/components/layout/main-layout';
import { ReportList } from '@/components/reports/report-list';
import { ReportFilters } from '@/components/reports/report-filters';
import { ReportTemplates } from '@/components/reports/report-templates';
import { Button } from '@/components/ui/button';
import { Plus, Download, Calendar, BarChart3 } from 'lucide-react';

export default function ReportsPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
            <p className="text-gray-600">Generate and manage automated reports</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Report
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Generate Report
            </Button>
          </div>
        </div>

        <ReportTemplates />
        <ReportFilters />
        <ReportList />
      </div>
    </MainLayout>
  );
}

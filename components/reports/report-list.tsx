'use client';

import { useState } from 'react';
import { 
  Download, 
  Eye, 
  Calendar, 
  Clock, 
  BarChart3, 
  DollarSign, 
  Users, 
  Building2,
  FileText,
  Settings
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mockReports, mockProperties } from '@/lib/mock-data';
import { formatDateTime, getStatusColor } from '@/lib/utils';

export function ReportList() {
  const [selectedReport, setSelectedReport] = useState<string | null>(null);

  const getPropertyName = (propertyId?: string) => {
    if (!propertyId) return 'All Properties';
    const property = mockProperties.find(p => p.id === propertyId);
    return property?.name || 'Unknown Property';
  };

  const getReportIcon = (type: string) => {
    switch (type) {
      case 'financial':
        return <DollarSign className="h-4 w-4 text-green-600" />;
      case 'occupancy':
        return <Building2 className="h-4 w-4 text-blue-600" />;
      case 'tenant':
        return <Users className="h-4 w-4 text-purple-600" />;
      case 'maintenance':
        return <BarChart3 className="h-4 w-4 text-orange-600" />;
      default:
        return <FileText className="h-4 w-4 text-gray-600" />;
    }
  };

  const getScheduleIcon = (schedule?: string) => {
    if (!schedule) return null;
    return (
      <div className="flex items-center text-xs text-gray-500">
        <Clock className="h-3 w-3 mr-1" />
        <span className="capitalize">{schedule}</span>
      </div>
    );
  };

  const handleDownload = (reportId: string) => {
    console.log('Downloading report:', reportId);
  };

  const handleView = (reportId: string) => {
    console.log('Viewing report:', reportId);
  };

  const handleSchedule = (reportId: string) => {
    console.log('Scheduling report:', reportId);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Generated Reports</h3>
        <p className="text-sm text-gray-600">View and manage all generated reports</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Report
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Property
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Period
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Generated
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Schedule
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockReports.map((report) => (
              <tr key={report.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-3">
                    {getReportIcon(report.type)}
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {report.title}
                      </div>
                      <div className="text-xs text-gray-500 capitalize">
                        {report.type} Report
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {getPropertyName(report.propertyId)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <div>
                      <div className="text-sm">
                        {formatDateTime(report.period.start)} - {formatDateTime(report.period.end)}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {formatDateTime(report.generatedAt)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getScheduleIcon(report.schedule)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      report.isAutomated ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {report.isAutomated ? 'Automated' : 'Manual'}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleView(report.id)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDownload(report.id)}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                    {report.isAutomated && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleSchedule(report.id)}
                      >
                        <Settings className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Report Summary Cards */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{mockReports.length}</div>
            <div className="text-sm text-gray-600">Total Reports</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {mockReports.filter(r => r.isAutomated).length}
            </div>
            <div className="text-sm text-gray-600">Automated Reports</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">
              {mockReports.filter(r => !r.isAutomated).length}
            </div>
            <div className="text-sm text-gray-600">Manual Reports</div>
          </div>
        </div>
      </div>
    </div>
  );
}

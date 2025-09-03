'use client';

import { useState } from 'react';
import { 
  BarChart3, 
  DollarSign, 
  Users, 
  Building2, 
  Calendar, 
  Download,
  Clock,
  TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const reportTemplates = [
  {
    id: 'financial',
    title: 'Financial Report',
    description: 'Revenue, expenses, and profit analysis',
    icon: DollarSign,
    color: 'bg-green-500',
    schedule: 'monthly',
    lastGenerated: '2 days ago',
  },
  {
    id: 'occupancy',
    title: 'Occupancy Report',
    description: 'Property occupancy rates and trends',
    icon: Building2,
    color: 'bg-blue-500',
    schedule: 'weekly',
    lastGenerated: '1 week ago',
  },
  {
    id: 'tenant',
    title: 'Tenant Report',
    description: 'Tenant demographics and payment history',
    icon: Users,
    color: 'bg-purple-500',
    schedule: 'monthly',
    lastGenerated: '3 days ago',
  },
  {
    id: 'maintenance',
    title: 'Maintenance Report',
    description: 'Maintenance requests and costs',
    icon: BarChart3,
    color: 'bg-orange-500',
    schedule: 'monthly',
    lastGenerated: '5 days ago',
  },
];

export function ReportTemplates() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  const handleGenerate = (templateId: string) => {
    console.log('Generating report:', templateId);
  };

  const handleSchedule = (templateId: string) => {
    console.log('Scheduling report:', templateId);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900">Report Templates</h3>
          <p className="text-sm text-gray-600">Quick access to commonly used reports</p>
        </div>
        <Button variant="outline">
          <Calendar className="h-4 w-4 mr-2" />
          Manage Schedules
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {reportTemplates.map((template) => (
          <div
            key={template.id}
            className={`p-4 border rounded-lg cursor-pointer transition-all ${
              selectedTemplate === template.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
            }`}
            onClick={() => setSelectedTemplate(template.id)}
          >
            <div className="flex items-start justify-between mb-3">
              <div className={`p-2 rounded-lg ${template.color}`}>
                <template.icon className="h-5 w-5 text-white" />
              </div>
              <span className="text-xs text-gray-500 capitalize">{template.schedule}</span>
            </div>
            
            <h4 className="text-sm font-medium text-gray-900 mb-1">{template.title}</h4>
            <p className="text-xs text-gray-600 mb-3">{template.description}</p>
            
            <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
              <span>Last: {template.lastGenerated}</span>
              <div className="flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                <span>Auto</span>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <Button
                size="sm"
                variant="outline"
                className="flex-1"
                onClick={(e) => {
                  e.stopPropagation();
                  handleGenerate(template.id);
                }}
              >
                <Download className="h-3 w-3 mr-1" />
                Generate
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSchedule(template.id);
                }}
              >
                <Calendar className="h-3 w-3" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

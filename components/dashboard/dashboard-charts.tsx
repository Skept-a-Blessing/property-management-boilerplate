'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 1800000, expenses: 450000 },
  { month: 'Feb', revenue: 1950000, expenses: 520000 },
  { month: 'Mar', revenue: 2100000, expenses: 480000 },
  { month: 'Apr', revenue: 2025000, expenses: 510000 },
  { month: 'May', revenue: 2250000, expenses: 550000 },
  { month: 'Jun', revenue: 2400000, expenses: 580000 },
];

const occupancyData = [
  { name: 'Sunset Apartments', occupied: 22, total: 24, percentage: 91.7 },
  { name: 'Garden Villas', occupied: 10, total: 12, percentage: 83.3 },
  { name: 'Business Plaza', occupied: 6, total: 8, percentage: 75.0 },
];

const paymentStatusData = [
  { name: 'Paid', value: 35, color: '#10B981' },
  { name: 'Pending', value: 8, color: '#F59E0B' },
  { name: 'Overdue', value: 3, color: '#EF4444' },
];

export function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Revenue Chart */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue vs Expenses</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={(value) => `KSh ${(value / 1000).toFixed(0)}K`} />
            <Tooltip 
              formatter={(value: number) => [`KSh ${value.toLocaleString()}`, '']}
              labelFormatter={(label) => `Month: ${label}`}
            />
            <Bar dataKey="revenue" fill="#3B82F6" name="Revenue" />
            <Bar dataKey="expenses" fill="#EF4444" name="Expenses" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Occupancy Chart */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Property Occupancy</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={occupancyData} layout="horizontal">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
            <YAxis dataKey="name" type="category" width={100} />
            <Tooltip 
              formatter={(value: number) => [`${value}%`, 'Occupancy']}
              labelFormatter={(label) => `Property: ${label}`}
            />
            <Bar dataKey="percentage" fill="#10B981" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Payment Status Pie Chart */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Status Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={paymentStatusData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {paymentStatusData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value: number) => [`${value} payments`, '']} />
          </PieChart>
        </ResponsiveContainer>
        <div className="mt-4 flex justify-center space-x-6">
          {paymentStatusData.map((item) => (
            <div key={item.name} className="flex items-center space-x-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-gray-600">{item.name} ({item.value})</span>
            </div>
          ))}
        </div>
      </div>

      {/* Monthly Trend */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Revenue Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={(value) => `KSh ${(value / 1000).toFixed(0)}K`} />
            <Tooltip 
              formatter={(value: number) => [`KSh ${value.toLocaleString()}`, 'Revenue']}
              labelFormatter={(label) => `Month: ${label}`}
            />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="#3B82F6" 
              strokeWidth={3}
              dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

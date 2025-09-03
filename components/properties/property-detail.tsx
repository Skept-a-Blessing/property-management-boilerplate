'use client';

import { useState } from 'react';
import { 
  ArrowLeft, 
  Edit, 
  MapPin, 
  Building2, 
  Users, 
  DollarSign, 
  Calendar,
  Star,
  TrendingUp,
  Phone,
  Mail,
  Settings
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Property } from '@/types';
import { mockTenants, getTenantsByProperty } from '@/lib/mock-data';
import { formatCurrency, formatDate } from '@/lib/utils';

interface PropertyDetailProps {
  property: Property;
}

export function PropertyDetail({ property }: PropertyDetailProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const tenants = getTenantsByProperty(property.id);

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Building2 },
    { id: 'tenants', name: 'Tenants', icon: Users },
    { id: 'financials', name: 'Financials', icon: DollarSign },
    { id: 'maintenance', name: 'Maintenance', icon: Settings },
  ];

  const occupancyRate = (property.occupiedUnits / property.totalUnits) * 100;
  const monthlyRevenue = property.monthlyRent * property.occupiedUnits;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Properties
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{property.name}</h1>
            <p className="text-gray-600">Property Details & Management</p>
          </div>
        </div>
        <Button>
          <Edit className="h-4 w-4 mr-2" />
          Edit Property
        </Button>
      </div>

      {/* Property Header Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-start space-x-6">
          <div className="flex-shrink-0">
            {property.imageUrl ? (
              <img
                className="h-32 w-48 rounded-lg object-cover"
                src={property.imageUrl}
                alt={property.name}
              />
            ) : (
              <div className="h-32 w-48 rounded-lg bg-gray-300 flex items-center justify-center">
                <Building2 className="h-12 w-12 text-gray-600" />
              </div>
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-4">
              <h2 className="text-xl font-semibold text-gray-900">{property.name}</h2>
              <span className="inline-flex px-3 py-1 text-sm font-semibold rounded-full bg-blue-100 text-blue-800 capitalize">
                {property.propertyType}
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-400" />
                <span className="text-gray-900">{property.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Building2 className="h-5 w-5 text-gray-400" />
                <span className="text-gray-900">{property.totalUnits} Units</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-gray-400" />
                <span className="text-gray-900">{property.occupiedUnits} Occupied</span>
              </div>
              <div className="flex items-center space-x-3">
                <DollarSign className="h-5 w-5 text-gray-400" />
                <span className="text-gray-900">{formatCurrency(property.monthlyRent)}/unit</span>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{occupancyRate.toFixed(1)}%</div>
                <div className="text-sm text-gray-600">Occupancy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{formatCurrency(monthlyRevenue)}</div>
                <div className="text-sm text-gray-600">Monthly Revenue</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{tenants.length}</div>
                <div className="text-sm text-gray-600">Active Tenants</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Property Information</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Property Type:</span>
                      <span className="font-medium capitalize">{property.propertyType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Units:</span>
                      <span className="font-medium">{property.totalUnits}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Occupied Units:</span>
                      <span className="font-medium">{property.occupiedUnits}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monthly Rent:</span>
                      <span className="font-medium">{formatCurrency(property.monthlyRent)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Property Manager:</span>
                      <span className="font-medium">{property.propertyManager}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Owner:</span>
                      <span className="font-medium">{property.owner}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Location Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Address:</span>
                      <span className="font-medium">{property.address}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">City:</span>
                      <span className="font-medium">{property.city}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">State:</span>
                      <span className="font-medium">{property.state}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">ZIP Code:</span>
                      <span className="font-medium">{property.zipCode}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Amenities</h3>
                <div className="flex flex-wrap gap-2">
                  {property.amenities.map((amenity, index) => (
                    <span
                      key={index}
                      className="inline-flex px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tenants' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">Current Tenants</h3>
                <Button size="sm">
                  <Users className="h-4 w-4 mr-2" />
                  Add Tenant
                </Button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tenant
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Unit
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Lease Period
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Monthly Rent
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {tenants.map((tenant) => (
                      <tr key={tenant.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {tenant.firstName} {tenant.lastName}
                          </div>
                          <div className="text-sm text-gray-500">{tenant.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          Unit {tenant.unitNumber}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {formatDate(tenant.leaseStartDate)} - {formatDate(tenant.leaseEndDate)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {formatCurrency(tenant.monthlyRent)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            tenant.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {tenant.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'financials' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{formatCurrency(monthlyRevenue)}</div>
                  <div className="text-sm text-green-700">Monthly Revenue</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{formatCurrency(property.monthlyRent * property.totalUnits)}</div>
                  <div className="text-sm text-blue-700">Potential Revenue</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{occupancyRate.toFixed(1)}%</div>
                  <div className="text-sm text-purple-700">Occupancy Rate</div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Revenue Breakdown</h3>
                <div className="space-y-3">
                  {tenants.map((tenant) => (
                    <div key={tenant.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {tenant.firstName} {tenant.lastName} - Unit {tenant.unitNumber}
                        </div>
                        <div className="text-xs text-gray-500">Active since {formatDate(tenant.leaseStartDate)}</div>
                      </div>
                      <div className="text-sm font-medium text-gray-900">
                        {formatCurrency(tenant.monthlyRent)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'maintenance' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">Maintenance Requests</h3>
                <Button size="sm">
                  <Settings className="h-4 w-4 mr-2" />
                  New Request
                </Button>
              </div>
              
              <div className="text-center py-8 text-gray-500">
                <Settings className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>No maintenance requests for this property</p>
                <p className="text-sm">Maintenance requests will appear here when submitted</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

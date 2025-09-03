'use client';

import { useState } from 'react';
import { 
  Eye, 
  Edit, 
  MapPin, 
  Users, 
  DollarSign, 
  Building2, 
  Calendar,
  Star,
  TrendingUp,
  TrendingDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mockProperties, mockTenants } from '@/lib/mock-data';
import { formatCurrency, formatDate } from '@/lib/utils';

export function PropertyList() {
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null);

  const getTenantCount = (propertyId: string) => {
    return mockTenants.filter(tenant => tenant.propertyId === propertyId).length;
  };

  const getOccupancyRate = (property: any) => {
    return (property.occupiedUnits / property.totalUnits) * 100;
  };

  const getOccupancyColor = (rate: number) => {
    if (rate >= 90) return 'text-green-600';
    if (rate >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getOccupancyIcon = (rate: number) => {
    if (rate >= 90) return <TrendingUp className="h-4 w-4 text-green-600" />;
    if (rate >= 70) return <TrendingUp className="h-4 w-4 text-yellow-600" />;
    return <TrendingDown className="h-4 w-4 text-red-600" />;
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Property
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type & Units
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Occupancy
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Monthly Rent
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Manager
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockProperties.map((property) => {
              const occupancyRate = getOccupancyRate(property);
              const tenantCount = getTenantCount(property.id);
              
              return (
                <tr key={property.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-12 w-12">
                        {property.imageUrl ? (
                          <img
                            className="h-12 w-12 rounded-lg object-cover"
                            src={property.imageUrl}
                            alt={property.name}
                          />
                        ) : (
                          <div className="h-12 w-12 rounded-lg bg-gray-300 flex items-center justify-center">
                            <Building2 className="h-6 w-6 text-gray-600" />
                          </div>
                        )}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {property.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          ID: {property.id}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <div>
                        <div className="text-sm text-gray-900">{property.address}</div>
                        <div className="text-sm text-gray-500">{property.city}, {property.state}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 capitalize">
                      {property.propertyType}
                    </div>
                    <div className="text-sm text-gray-500">
                      {property.totalUnits} units
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      {getOccupancyIcon(occupancyRate)}
                      <div>
                        <div className={`text-sm font-medium ${getOccupancyColor(occupancyRate)}`}>
                          {occupancyRate.toFixed(1)}%
                        </div>
                        <div className="text-sm text-gray-500">
                          {property.occupiedUnits}/{property.totalUnits} occupied
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {formatCurrency(property.monthlyRent)}
                    </div>
                    <div className="text-sm text-gray-500">per unit</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {property.propertyManager}
                    </div>
                    <div className="text-sm text-gray-500">
                      {tenantCount} tenants
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedProperty(property.id)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

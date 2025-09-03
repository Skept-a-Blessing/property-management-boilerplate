'use client';

import { MainLayout } from '@/components/layout/main-layout';
import { PropertyList } from '@/components/properties/property-list';
import { PropertyFilters } from '@/components/properties/property-filters';
import { PropertyStats } from '@/components/properties/property-stats';
import { Button } from '@/components/ui/button';
import { Plus, MapPin, Building2 } from 'lucide-react';

export default function PropertiesPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Properties</h1>
            <p className="text-gray-600">Manage your property portfolio</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">
              <MapPin className="h-4 w-4 mr-2" />
              View Map
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Property
            </Button>
          </div>
        </div>

        <PropertyStats />
        <PropertyFilters />
        <PropertyList />
      </div>
    </MainLayout>
  );
}

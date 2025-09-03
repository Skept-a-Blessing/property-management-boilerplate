'use client';

import { MainLayout } from '@/components/layout/main-layout';
import { TenantList } from '@/components/tenants/tenant-list';
import { TenantFilters } from '@/components/tenants/tenant-filters';
import { Button } from '@/components/ui/button';
import { Plus, Search } from 'lucide-react';

export default function TenantsPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Tenants</h1>
            <p className="text-gray-600">Manage your tenant profiles and lease information</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Tenant
          </Button>
        </div>

        <TenantFilters />
        <TenantList />
      </div>
    </MainLayout>
  );
}

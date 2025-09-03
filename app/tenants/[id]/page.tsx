'use client';

import { MainLayout } from '@/components/layout/main-layout';
import { TenantProfile } from '@/components/tenants/tenant-profile';
import { mockTenants } from '@/lib/mock-data';

interface TenantDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function TenantDetailPage({ params }: TenantDetailPageProps) {
  const { id } = await params;
  const tenant = mockTenants.find(t => t.id === id);

  if (!tenant) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Tenant Not Found</h1>
            <p className="text-gray-600">The tenant you're looking for doesn't exist.</p>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <TenantProfile tenant={tenant} />
    </MainLayout>
  );
}

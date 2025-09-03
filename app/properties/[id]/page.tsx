'use client';

import { MainLayout } from '@/components/layout/main-layout';
import { PropertyDetail } from '@/components/properties/property-detail';
import { mockProperties } from '@/lib/mock-data';

interface PropertyDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  const { id } = await params;
  const property = mockProperties.find(p => p.id === id);

  if (!property) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Property Not Found</h1>
            <p className="text-gray-600">The property you're looking for doesn't exist.</p>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <PropertyDetail property={property} />
    </MainLayout>
  );
}

'use client';

import { MainLayout } from '@/components/layout/main-layout';
import { PaymentVerificationList } from '@/components/payment-verification/payment-verification-list';
import { VerificationFilters } from '@/components/payment-verification/verification-filters';
import { VerificationStats } from '@/components/payment-verification/verification-stats';
import { Button } from '@/components/ui/button';
import { Shield, CheckCircle, AlertTriangle } from 'lucide-react';

export default function PaymentVerificationPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Payment Verification</h1>
            <p className="text-gray-600">Verify and approve payment transactions</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Flagged Payments
            </Button>
            <Button>
              <CheckCircle className="h-4 w-4 mr-2" />
              Bulk Verify
            </Button>
          </div>
        </div>

        <VerificationStats />
        <VerificationFilters />
        <PaymentVerificationList />
      </div>
    </MainLayout>
  );
}

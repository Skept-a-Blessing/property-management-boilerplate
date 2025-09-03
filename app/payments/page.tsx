'use client';

import { MainLayout } from '@/components/layout/main-layout';
import { PaymentList } from '@/components/payments/payment-list';
import { PaymentFilters } from '@/components/payments/payment-filters';
import { MpesaTransactions } from '@/components/payments/mpesa-transactions';
import { Button } from '@/components/ui/button';
import { Plus, Smartphone } from 'lucide-react';

export default function PaymentsPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Payments</h1>
            <p className="text-gray-600">Track and manage all payment transactions</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">
              <Smartphone className="h-4 w-4 mr-2" />
              M-Pesa Sync
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Record Payment
            </Button>
          </div>
        </div>

        <PaymentFilters />
        <PaymentList />
        <MpesaTransactions />
      </div>
    </MainLayout>
  );
}

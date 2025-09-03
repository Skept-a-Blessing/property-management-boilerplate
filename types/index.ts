export interface Property {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  propertyType: 'apartment' | 'house' | 'commercial' | 'condo';
  totalUnits: number;
  occupiedUnits: number;
  monthlyRent: number;
  propertyManager: string;
  owner: string;
  imageUrl?: string;
  amenities: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Tenant {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  propertyId: string;
  unitNumber: string;
  leaseStartDate: Date;
  leaseEndDate: Date;
  monthlyRent: number;
  securityDeposit: number;
  status: 'active' | 'inactive' | 'pending' | 'evicted';
  emergencyContact: {
    name: string;
    phone: string;
    relationship: string;
  };
  profileImage?: string;
  documents: TenantDocument[];
  paymentHistory: Payment[];
  createdAt: Date;
  updatedAt: Date;
}

export interface TenantDocument {
  id: string;
  name: string;
  type: 'lease' | 'id' | 'employment' | 'reference' | 'other';
  url: string;
  uploadedAt: Date;
}

export interface Payment {
  id: string;
  tenantId: string;
  propertyId: string;
  amount: number;
  dueDate: Date;
  paidDate?: Date;
  status: 'pending' | 'paid' | 'overdue' | 'partial';
  paymentMethod: 'mpesa' | 'bank_transfer' | 'cash' | 'check' | 'other';
  reference?: string;
  mpesaCode?: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface PaymentVerification {
  id: string;
  paymentId: string;
  verifiedBy: string;
  verifiedAt: Date;
  status: 'verified' | 'rejected' | 'pending';
  notes?: string;
  attachments?: string[];
}

export interface Report {
  id: string;
  title: string;
  type: 'financial' | 'occupancy' | 'maintenance' | 'tenant' | 'custom';
  propertyId?: string;
  generatedAt: Date;
  period: {
    start: Date;
    end: Date;
  };
  data: any;
  isAutomated: boolean;
  schedule?: 'daily' | 'weekly' | 'monthly' | 'quarterly';
}

export interface DashboardMetrics {
  totalProperties: number;
  totalTenants: number;
  occupancyRate: number;
  monthlyRevenue: number;
  pendingPayments: number;
  overduePayments: number;
  maintenanceRequests: number;
  averageRent: number;
}

export interface MpesaTransaction {
  id: string;
  transactionId: string;
  amount: number;
  phoneNumber: string;
  accountReference: string;
  transactionDate: Date;
  status: 'pending' | 'completed' | 'failed';
  description: string;
  tenantId?: string;
  propertyId?: string;
}

export interface MaintenanceRequest {
  id: string;
  propertyId: string;
  unitNumber?: string;
  tenantId?: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'open' | 'in_progress' | 'completed' | 'cancelled';
  assignedTo?: string;
  estimatedCost?: number;
  actualCost?: number;
  createdAt: Date;
  updatedAt: Date;
  completedAt?: Date;
}

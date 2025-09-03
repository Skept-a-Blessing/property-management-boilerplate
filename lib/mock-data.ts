import { Property, Tenant, Payment, Report, DashboardMetrics, MpesaTransaction, MaintenanceRequest } from '@/types';

// Mock Properties
export const mockProperties: Property[] = [
  {
    id: 'prop-1',
    name: 'Sunset Apartments',
    address: '123 Main Street',
    city: 'Nairobi',
    state: 'Nairobi',
    zipCode: '00100',
    propertyType: 'apartment',
    totalUnits: 24,
    occupiedUnits: 22,
    monthlyRent: 45000,
    propertyManager: 'John Mwangi',
    owner: 'Sunset Properties Ltd',
    imageUrl: '/images/sunset-apartments.jpg',
    amenities: ['Parking', 'Security', 'Gym', 'Swimming Pool'],
    createdAt: new Date('2023-01-15'),
    updatedAt: new Date('2024-01-15'),
  },
  {
    id: 'prop-2',
    name: 'Garden Villas',
    address: '456 Garden Road',
    city: 'Mombasa',
    state: 'Mombasa',
    zipCode: '80100',
    propertyType: 'house',
    totalUnits: 12,
    occupiedUnits: 10,
    monthlyRent: 75000,
    propertyManager: 'Sarah Kimani',
    owner: 'Garden Properties Ltd',
    imageUrl: '/images/garden-villas.jpg',
    amenities: ['Garden', 'Parking', 'Security', 'Playground'],
    createdAt: new Date('2023-03-20'),
    updatedAt: new Date('2024-01-15'),
  },
  {
    id: 'prop-3',
    name: 'Business Plaza',
    address: '789 Business Avenue',
    city: 'Nairobi',
    state: 'Nairobi',
    zipCode: '00200',
    propertyType: 'commercial',
    totalUnits: 8,
    occupiedUnits: 6,
    monthlyRent: 120000,
    propertyManager: 'David Ochieng',
    owner: 'Business Properties Ltd',
    imageUrl: '/images/business-plaza.jpg',
    amenities: ['Parking', 'Security', 'Conference Room', 'Elevator'],
    createdAt: new Date('2023-06-10'),
    updatedAt: new Date('2024-01-15'),
  },
];

// Mock Tenants
export const mockTenants: Tenant[] = [
  {
    id: 'tenant-1',
    firstName: 'Alice',
    lastName: 'Wanjiku',
    email: 'alice.wanjiku@email.com',
    phone: '+254712345678',
    propertyId: 'prop-1',
    unitNumber: 'A1',
    leaseStartDate: new Date('2023-02-01'),
    leaseEndDate: new Date('2024-01-31'),
    monthlyRent: 45000,
    securityDeposit: 90000,
    status: 'active',
    emergencyContact: {
      name: 'Peter Wanjiku',
      phone: '+254723456789',
      relationship: 'Brother',
    },
    profileImage: '/images/tenants/alice-wanjiku.jpg',
    documents: [
      {
        id: 'doc-1',
        name: 'Lease Agreement',
        type: 'lease',
        url: '/documents/lease-agreement-1.pdf',
        uploadedAt: new Date('2023-02-01'),
      },
      {
        id: 'doc-2',
        name: 'National ID',
        type: 'id',
        url: '/documents/id-alice-wanjiku.pdf',
        uploadedAt: new Date('2023-02-01'),
      },
    ],
    paymentHistory: [],
    createdAt: new Date('2023-02-01'),
    updatedAt: new Date('2024-01-15'),
  },
  {
    id: 'tenant-2',
    firstName: 'Brian',
    lastName: 'Kiprop',
    email: 'brian.kiprop@email.com',
    phone: '+254734567890',
    propertyId: 'prop-1',
    unitNumber: 'A2',
    leaseStartDate: new Date('2023-03-15'),
    leaseEndDate: new Date('2024-03-14'),
    monthlyRent: 45000,
    securityDeposit: 90000,
    status: 'active',
    emergencyContact: {
      name: 'Mary Kiprop',
      phone: '+254745678901',
      relationship: 'Mother',
    },
    profileImage: '/images/tenants/brian-kiprop.jpg',
    documents: [
      {
        id: 'doc-3',
        name: 'Lease Agreement',
        type: 'lease',
        url: '/documents/lease-agreement-2.pdf',
        uploadedAt: new Date('2023-03-15'),
      },
    ],
    paymentHistory: [],
    createdAt: new Date('2023-03-15'),
    updatedAt: new Date('2024-01-15'),
  },
  {
    id: 'tenant-3',
    firstName: 'Grace',
    lastName: 'Akinyi',
    email: 'grace.akinyi@email.com',
    phone: '+254756789012',
    propertyId: 'prop-2',
    unitNumber: 'B1',
    leaseStartDate: new Date('2023-04-01'),
    leaseEndDate: new Date('2024-03-31'),
    monthlyRent: 75000,
    securityDeposit: 150000,
    status: 'active',
    emergencyContact: {
      name: 'James Akinyi',
      phone: '+254767890123',
      relationship: 'Husband',
    },
    profileImage: '/images/tenants/grace-akinyi.jpg',
    documents: [
      {
        id: 'doc-4',
        name: 'Lease Agreement',
        type: 'lease',
        url: '/documents/lease-agreement-3.pdf',
        uploadedAt: new Date('2023-04-01'),
      },
    ],
    paymentHistory: [],
    createdAt: new Date('2023-04-01'),
    updatedAt: new Date('2024-01-15'),
  },
];

// Mock Payments
export const mockPayments: Payment[] = [
  {
    id: 'payment-1',
    tenantId: 'tenant-1',
    propertyId: 'prop-1',
    amount: 45000,
    dueDate: new Date('2024-01-01'),
    paidDate: new Date('2024-01-02'),
    status: 'paid',
    paymentMethod: 'mpesa',
    reference: 'RENT-JAN-2024',
    mpesaCode: 'QGH2K9L8M3',
    description: 'January 2024 Rent',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-02'),
  },
  {
    id: 'payment-2',
    tenantId: 'tenant-2',
    propertyId: 'prop-1',
    amount: 45000,
    dueDate: new Date('2024-01-01'),
    paidDate: new Date('2024-01-03'),
    status: 'paid',
    paymentMethod: 'bank_transfer',
    reference: 'RENT-JAN-2024',
    description: 'January 2024 Rent',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-03'),
  },
  {
    id: 'payment-3',
    tenantId: 'tenant-3',
    propertyId: 'prop-2',
    amount: 75000,
    dueDate: new Date('2024-01-01'),
    status: 'overdue',
    paymentMethod: 'mpesa',
    reference: 'RENT-JAN-2024',
    description: 'January 2024 Rent',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-15'),
  },
  {
    id: 'payment-4',
    tenantId: 'tenant-1',
    propertyId: 'prop-1',
    amount: 45000,
    dueDate: new Date('2024-02-01'),
    status: 'pending',
    paymentMethod: 'mpesa',
    reference: 'RENT-FEB-2024',
    description: 'February 2024 Rent',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
  },
];

// Mock M-Pesa Transactions
export const mockMpesaTransactions: MpesaTransaction[] = [
  {
    id: 'mpesa-1',
    transactionId: 'QGH2K9L8M3',
    amount: 45000,
    phoneNumber: '+254712345678',
    accountReference: 'RENT-JAN-2024',
    transactionDate: new Date('2024-01-02T10:30:00'),
    status: 'completed',
    description: 'January 2024 Rent Payment',
    tenantId: 'tenant-1',
    propertyId: 'prop-1',
  },
  {
    id: 'mpesa-2',
    transactionId: 'ABC123DEF4',
    amount: 75000,
    phoneNumber: '+254756789012',
    accountReference: 'RENT-JAN-2024',
    transactionDate: new Date('2024-01-15T14:20:00'),
    status: 'pending',
    description: 'January 2024 Rent Payment',
    tenantId: 'tenant-3',
    propertyId: 'prop-2',
  },
];

// Mock Reports
export const mockReports: Report[] = [
  {
    id: 'report-1',
    title: 'Monthly Financial Report - January 2024',
    type: 'financial',
    propertyId: 'prop-1',
    generatedAt: new Date('2024-02-01'),
    period: {
      start: new Date('2024-01-01'),
      end: new Date('2024-01-31'),
    },
    data: {
      totalRevenue: 90000,
      totalExpenses: 15000,
      netIncome: 75000,
      occupancyRate: 91.7,
    },
    isAutomated: true,
    schedule: 'monthly',
  },
  {
    id: 'report-2',
    title: 'Occupancy Report - Q1 2024',
    type: 'occupancy',
    generatedAt: new Date('2024-04-01'),
    period: {
      start: new Date('2024-01-01'),
      end: new Date('2024-03-31'),
    },
    data: {
      totalUnits: 44,
      occupiedUnits: 38,
      occupancyRate: 86.4,
      averageRent: 55000,
    },
    isAutomated: true,
    schedule: 'quarterly',
  },
];

// Mock Maintenance Requests
export const mockMaintenanceRequests: MaintenanceRequest[] = [
  {
    id: 'maintenance-1',
    propertyId: 'prop-1',
    unitNumber: 'A1',
    tenantId: 'tenant-1',
    title: 'Leaky Faucet',
    description: 'Kitchen faucet is leaking and needs repair',
    priority: 'medium',
    status: 'open',
    estimatedCost: 5000,
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10'),
  },
  {
    id: 'maintenance-2',
    propertyId: 'prop-2',
    unitNumber: 'B1',
    tenantId: 'tenant-3',
    title: 'Broken Window',
    description: 'Bedroom window glass is cracked',
    priority: 'high',
    status: 'in_progress',
    assignedTo: 'Maintenance Team',
    estimatedCost: 15000,
    createdAt: new Date('2024-01-12'),
    updatedAt: new Date('2024-01-14'),
  },
];

// Dashboard Metrics
export const mockDashboardMetrics: DashboardMetrics = {
  totalProperties: 3,
  totalTenants: 38,
  occupancyRate: 86.4,
  monthlyRevenue: 2025000,
  pendingPayments: 1,
  overduePayments: 1,
  maintenanceRequests: 2,
  averageRent: 55000,
};

// Utility functions
export const getTenantsByProperty = (propertyId: string): Tenant[] => {
  return mockTenants.filter(tenant => tenant.propertyId === propertyId);
};

export const getPaymentsByTenant = (tenantId: string): Payment[] => {
  return mockPayments.filter(payment => payment.tenantId === tenantId);
};

export const getPaymentsByProperty = (propertyId: string): Payment[] => {
  return mockPayments.filter(payment => payment.propertyId === propertyId);
};

export const getPropertyById = (id: string): Property | undefined => {
  return mockProperties.find(property => property.id === id);
};

export const getTenantById = (id: string): Tenant | undefined => {
  return mockTenants.find(tenant => tenant.id === id);
};

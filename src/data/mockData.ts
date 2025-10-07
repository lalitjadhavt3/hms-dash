import {
  Patient,
  Doctor,
  Appointment,
  Bed,
  Bill,
  Medicine,
  LabTest,
  Staff,
  DashboardStats
} from '../types/hms.types';

export const mockDashboardStats: DashboardStats = {
  totalPatients: 1250,
  activePatients: 45,
  doctorsOnDuty: 8,
  occupiedBeds: 32,
  availableBeds: 18,
  todayAppointments: 24,
  todayRevenue: 12500,
  pendingLabTests: 15
};

export const mockDoctors: Doctor[] = [
  {
    id: 'DOC001',
    name: 'Dr. John Smith',
    specialization: 'Cardiology',
    qualification: 'MD, DM',
    experience: 15,
    contact: '+1234567890',
    email: 'john.smith@hospital.com',
    availability: {
      days: ['Monday', 'Wednesday', 'Friday'],
      timeSlots: ['09:00-12:00', '15:00-18:00']
    },
    department: 'Cardiology'
  },
  {
    id: 'DOC002',
    name: 'Dr. Sarah Johnson',
    specialization: 'Pediatrics',
    qualification: 'MBBS, MD',
    experience: 10,
    contact: '+1234567891',
    email: 'sarah.johnson@hospital.com',
    availability: {
      days: ['Tuesday', 'Thursday', 'Saturday'],
      timeSlots: ['10:00-13:00', '16:00-19:00']
    },
    department: 'Pediatrics'
  }
];

export const mockPatients: Patient[] = [
  {
    id: 'PAT001',
    name: 'Michael Brown',
    age: 45,
    gender: 'male',
    contact: '+1234567892',
    email: 'michael.brown@email.com',
    address: '123 Main St, City',
    bloodGroup: 'O+',
    registrationDate: '2024-01-15',
    emergencyContact: '+1234567893'
  },
  {
    id: 'PAT002',
    name: 'Emily Davis',
    age: 28,
    gender: 'female',
    contact: '+1234567894',
    email: 'emily.davis@email.com',
    address: '456 Oak Ave, Town',
    bloodGroup: 'A+',
    registrationDate: '2024-02-20',
    emergencyContact: '+1234567895'
  }
];

export const mockAppointments: Appointment[] = [
  {
    id: 'APT001',
    patientId: 'PAT001',
    doctorId: 'DOC001',
    date: '2024-03-15',
    timeSlot: '09:00-09:30',
    status: 'scheduled',
    type: 'opd',
    notes: 'Regular checkup'
  },
  {
    id: 'APT002',
    patientId: 'PAT002',
    doctorId: 'DOC002',
    date: '2024-03-15',
    timeSlot: '10:00-10:30',
    status: 'completed',
    type: 'opd',
    notes: 'Follow-up visit'
  }
];

export const mockBeds: Bed[] = [
  {
    id: 'BED001',
    number: '101',
    type: 'private',
    status: 'occupied',
    ward: 'General Ward',
    currentPatientId: 'PAT001'
  },
  {
    id: 'BED002',
    number: '102',
    type: 'general',
    status: 'available',
    ward: 'General Ward'
  }
];

export const mockBills: Bill[] = [
  {
    id: 'BILL001',
    patientId: 'PAT001',
    date: '2024-03-15',
    items: [
      {
        description: 'Consultation',
        quantity: 1,
        unitPrice: 100,
        amount: 100,
        category: 'consultation'
      },
      {
        description: 'Blood Test',
        quantity: 1,
        unitPrice: 50,
        amount: 50,
        category: 'lab'
      }
    ],
    totalAmount: 150,
    status: 'pending'
  }
];

export const mockMedicines: Medicine[] = [
  {
    id: 'MED001',
    name: 'Paracetamol',
    genericName: 'Acetaminophen',
    category: 'Pain Relief',
    manufacturer: 'PharmaCo',
    unitPrice: 5,
    stock: 1000,
    reorderLevel: 100,
    expiryDate: '2025-03-15'
  },
  {
    id: 'MED002',
    name: 'Amoxicillin',
    genericName: 'Amoxicillin',
    category: 'Antibiotics',
    manufacturer: 'MediLab',
    unitPrice: 15,
    stock: 500,
    reorderLevel: 50,
    expiryDate: '2025-06-20'
  }
];

export const mockLabTests: LabTest[] = [
  {
    id: 'LAB001',
    name: 'Complete Blood Count',
    patientId: 'PAT001',
    doctorId: 'DOC001',
    date: '2024-03-15',
    status: 'pending',
    category: 'Hematology'
  },
  {
    id: 'LAB002',
    name: 'Blood Sugar',
    patientId: 'PAT002',
    doctorId: 'DOC002',
    date: '2024-03-15',
    status: 'completed',
    results: 'Normal',
    reportUrl: '/reports/LAB002.pdf',
    normalRange: '70-100 mg/dL',
    category: 'Biochemistry'
  }
];

export const mockStaff: Staff[] = [
  {
    id: 'STF001',
    name: 'Jane Wilson',
    role: 'nurse',
    department: 'General Ward',
    contact: '+1234567896',
    email: 'jane.wilson@hospital.com',
    shift: 'morning'
  },
  {
    id: 'STF002',
    name: 'Robert Miller',
    role: 'technician',
    department: 'Laboratory',
    contact: '+1234567897',
    email: 'robert.miller@hospital.com',
    shift: 'evening'
  }
];

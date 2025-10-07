export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  contact: string;
  email: string;
  address: string;
  bloodGroup: string;
  registrationDate: string;
  emergencyContact: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  qualification: string;
  experience: number;
  contact: string;
  email: string;
  availability: {
    days: string[];
    timeSlots: string[];
  };
  department: string;
}

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  date: string;
  timeSlot: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  type: 'opd' | 'ipd';
  notes?: string;
}

export interface Bed {
  id: string;
  number: string;
  type: 'general' | 'semi-private' | 'private' | 'icu';
  status: 'available' | 'occupied' | 'maintenance';
  ward: string;
  currentPatientId?: string;
}

export interface Bill {
  id: string;
  patientId: string;
  date: string;
  items: BillItem[];
  totalAmount: number;
  status: 'pending' | 'paid' | 'cancelled';
  paymentMethod?: string;
}

export interface BillItem {
  description: string;
  quantity: number;
  unitPrice: number;
  amount: number;
  category: 'consultation' | 'medicine' | 'lab' | 'procedure' | 'room';
}

export interface Medicine {
  id: string;
  name: string;
  genericName: string;
  category: string;
  manufacturer: string;
  unitPrice: number;
  stock: number;
  reorderLevel: number;
  expiryDate: string;
}

export interface LabTest {
  id: string;
  name: string;
  patientId: string;
  doctorId: string;
  date: string;
  status: 'pending' | 'completed' | 'cancelled';
  results?: string;
  reportUrl?: string;
  normalRange?: string;
  category: string;
}

export interface Staff {
  id: string;
  name: string;
  role: 'nurse' | 'technician' | 'receptionist' | 'pharmacist' | 'admin';
  department: string;
  contact: string;
  email: string;
  shift: 'morning' | 'evening' | 'night';
}

export interface DashboardStats {
  totalPatients: number;
  activePatients: number;
  doctorsOnDuty: number;
  occupiedBeds: number;
  availableBeds: number;
  todayAppointments: number;
  todayRevenue: number;
  pendingLabTests: number;
}

export interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
}

export interface Department {
  id: string;
  name: string;
  head: string;
  location: string;
  contact: string;
}

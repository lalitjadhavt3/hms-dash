import React from 'react';
import { Route } from 'react-router-dom';

// Lazy load components
const Dashboard = React.lazy(() => import('../modules/dashboard/pages/Dashboard'));
const PatientList = React.lazy(() => import('../modules/patients/pages/PatientList'));
const AddPatient = React.lazy(() => import('../modules/patients/pages/AddPatient'));
const DoctorDirectory = React.lazy(() => import('../modules/doctors/pages/DoctorDirectory'));
const DoctorSchedule = React.lazy(() => import('../modules/doctors/pages/DoctorSchedule'));
const Appointments = React.lazy(() => import('../modules/appointments/pages/Appointments'));
const BookAppointment = React.lazy(() => import('../modules/appointments/pages/BookAppointment'));
const OPD = React.lazy(() => import('../modules/opd/pages/OPD'));
const IPD = React.lazy(() => import('../modules/ipd/pages/IPD'));
const Pharmacy = React.lazy(() => import('../modules/pharmacy/pages/Pharmacy'));
const Laboratory = React.lazy(() => import('../modules/laboratory/pages/Laboratory'));
const Billing = React.lazy(() => import('../modules/billing/pages/Billing'));
const Reports = React.lazy(() => import('../modules/reports/pages/Reports'));

export const hmsRoutes = [
  <Route index path="/" element={<Dashboard />} key="dashboard" />,
  <Route path="/patients" element={<PatientList />} key="patients" />,
  <Route path="/patients/add" element={<AddPatient />} key="add-patient" />,
  <Route path="/doctors" element={<DoctorDirectory />} key="doctors" />,
  <Route path="/doctors/schedule" element={<DoctorSchedule />} key="doctor-schedule" />,
  <Route path="/appointments" element={<Appointments />} key="appointments" />,
  <Route path="/appointments/book" element={<BookAppointment />} key="book-appointment" />,
  <Route path="/opd" element={<OPD />} key="opd" />,
  <Route path="/ipd" element={<IPD />} key="ipd" />,
  <Route path="/pharmacy" element={<Pharmacy />} key="pharmacy" />,
  <Route path="/laboratory" element={<Laboratory />} key="laboratory" />,
  <Route path="/billing" element={<Billing />} key="billing" />,
  <Route path="/reports/daily" element={<Reports />} key="reports" />,
];

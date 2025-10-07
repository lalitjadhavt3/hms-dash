import React, { useState } from 'react';
import BedManagement from '../components/BedManagement';
import AdmissionForm from '../components/AdmissionForm';
import DischargeForm from '../components/DischargeForm';
import { Bed, Patient, Doctor } from '../../../types/hms.types';
import { mockBeds, mockDoctors, mockPatients } from '../../../data/mockData';

type View = 'beds' | 'admit' | 'discharge';

const IPD: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('beds');
  const [selectedBed, setSelectedBed] = useState<Bed | null>(null);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const availableBeds = mockBeds.filter((bed) => bed.status === 'available');
  const occupiedBeds = mockBeds.filter((bed) => bed.status === 'occupied');

  const handleBedClick = (bed: Bed) => {
    setSelectedBed(bed);
    if (bed.status === 'available') {
      setCurrentView('admit');
    } else if (bed.status === 'occupied' && bed.currentPatientId) {
      const patient = mockPatients.find((p) => p.id === bed.currentPatientId);
      if (patient) {
        setSelectedPatient(patient);
        setCurrentView('discharge');
      }
    }
  };

  const handleAdmission = (data: {
    patientId: string;
    bedId: string;
    doctorId: string;
    admissionNotes: string;
    admissionDate: string;
    expectedStayDays: number;
  }) => {
    // TODO: Implement admission logic
    console.log('Admission data:', data);
    setCurrentView('beds');
  };

  const handleDischarge = (data: {
    dischargeDate: string;
    dischargeSummary: string;
    followUpDate?: string;
    medications: string;
    instructions: string;
  }) => {
    // TODO: Implement discharge logic
    console.log('Discharge data:', data);
    setCurrentView('beds');
  };

  return (
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-title-md2 font-semibold text-black dark:text-white">
          In-Patient Department
        </h2>
        {currentView !== 'beds' && (
          <button
            onClick={() => setCurrentView('beds')}
            className="inline-flex items-center justify-center rounded-md bg-primary py-2 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
          >
            Back to Bed Management
          </button>
        )}
      </div>

      {currentView === 'beds' && (
        <>
          <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
            <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2">
                <svg
                  className="fill-primary dark:fill-white"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                >
                  <path d="M21.1063 18.0469L19.3875 3.23126C19.2157 1.71876 17.9438 0.584381 16.3969 0.584381H5.56878C4.05628 0.584381 2.78441 1.71876 2.57816 3.23126L0.859406 18.0469C0.756281 18.9063 1.03128 19.7313 1.61566 20.3844C2.20003 21.0375 2.99066 21.4157 3.85003 21.4157H18.1157C18.975 21.4157 19.8 21.0375 20.35 20.3844C20.9344 19.7313 21.2094 18.9063 21.1063 18.0469Z"/>
                </svg>
              </div>
              <div className="mt-4">
                <h4 className="text-title-md font-bold text-black dark:text-white">
                  {availableBeds.length}
                </h4>
                <span className="text-sm font-medium">Available Beds</span>
              </div>
            </div>

            <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2">
                <svg
                  className="fill-primary dark:fill-white"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                >
                  <path d="M21.1063 18.0469L19.3875 3.23126C19.2157 1.71876 17.9438 0.584381 16.3969 0.584381H5.56878C4.05628 0.584381 2.78441 1.71876 2.57816 3.23126L0.859406 18.0469C0.756281 18.9063 1.03128 19.7313 1.61566 20.3844C2.20003 21.0375 2.99066 21.4157 3.85003 21.4157H18.1157C18.975 21.4157 19.8 21.0375 20.35 20.3844C20.9344 19.7313 21.2094 18.9063 21.1063 18.0469Z"/>
                </svg>
              </div>
              <div className="mt-4">
                <h4 className="text-title-md font-bold text-black dark:text-white">
                  {occupiedBeds.length}
                </h4>
                <span className="text-sm font-medium">Occupied Beds</span>
              </div>
            </div>
          </div>

          <BedManagement
            beds={mockBeds}
            onBedClick={handleBedClick}
          />
        </>
      )}

      {currentView === 'admit' && selectedBed && (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Patient Admission Form
            </h3>
          </div>
          <AdmissionForm
            availableBeds={[selectedBed]}
            doctors={mockDoctors}
            onSubmit={handleAdmission}
            onCancel={() => setCurrentView('beds')}
          />
        </div>
      )}

      {currentView === 'discharge' && selectedPatient && selectedBed && (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Patient Discharge Form
            </h3>
          </div>
          <DischargeForm
            patient={selectedPatient}
            doctor={mockDoctors[0]} // TODO: Get actual doctor
            admissionDate="2024-03-01" // TODO: Get actual admission date
            onSubmit={handleDischarge}
            onCancel={() => setCurrentView('beds')}
          />
        </div>
      )}
    </div>
  );
};

export default IPD;

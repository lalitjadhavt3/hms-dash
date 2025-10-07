import React, { useState } from 'react';
import OPDPatientTable from '../components/OPDPatientTable';
import PatientRegistrationForm from '../components/PatientRegistrationForm';
import { Patient } from '../../../types/hms.types';
import { mockPatients } from '../../../data/mockData';

const OPD: React.FC = () => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [patients, setPatients] = useState<Patient[]>(mockPatients);

  const handleViewDetails = (patientId: string) => {
    // TODO: Implement patient details view
    console.log('View details for patient:', patientId);
  };

  const handleRegisterPatient = (patientData: Omit<Patient, 'id'>) => {
    const newPatient: Patient = {
      ...patientData,
      id: `PAT${String(patients.length + 1).padStart(3, '0')}`,
    };
    setPatients([...patients, newPatient]);
    setShowRegistrationForm(false);
  };

  return (
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-title-md2 font-semibold text-black dark:text-white">
          Out-Patient Department
        </h2>
        <button
          onClick={() => setShowRegistrationForm(!showRegistrationForm)}
          className="inline-flex items-center justify-center rounded-md bg-primary py-2 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          {showRegistrationForm ? 'View Patients' : 'Register New Patient'}
        </button>
      </div>

      {showRegistrationForm ? (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Patient Registration Form
            </h3>
          </div>
          <PatientRegistrationForm onSubmit={handleRegisterPatient} />
        </div>
      ) : (
        <OPDPatientTable
          patients={patients}
          onViewDetails={handleViewDetails}
        />
      )}
    </div>
  );
};

export default OPD;

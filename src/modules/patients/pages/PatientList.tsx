import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PatientSearch, { PatientFilters } from '../components/PatientSearch';
import PatientTable from '../components/PatientTable';
import PatientDetails from '../components/PatientDetails';
import { Patient } from '../../../types/hms.types';
import { mockPatients } from '../../../data/mockData';

const PatientList: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<PatientFilters>({});
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (newFilters: PatientFilters) => {
    setFilters(newFilters);
  };

  const handleViewDetails = (patientId: string) => {
    const patient = mockPatients.find(p => p.id === patientId);
    if (patient) {
      setSelectedPatient(patient);
    }
  };

  const filteredPatients = mockPatients.filter(patient => {
    // Search term filter
    if (searchTerm && !patient.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }

    // Gender filter
    if (filters.gender && patient.gender !== filters.gender) {
      return false;
    }

    // Age range filter
    if (filters.ageRange && filters.ageRange !== 'all') {
      const [min, max] = filters.ageRange.split('-').map(n => parseInt(n));
      if (max) {
        if (patient.age < min || patient.age > max) return false;
      } else {
        // For 60+ case
        if (patient.age < min) return false;
      }
    }

    return true;
  });

  return (
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-title-md2 font-semibold text-black dark:text-white">
          Patient List
        </h2>
        <button
          onClick={() => navigate('/patients/add')}
          className="inline-flex items-center justify-center rounded-md bg-primary py-2 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          Add New Patient
        </button>
      </div>

      <div className="flex flex-col gap-5">
        <PatientSearch
          onSearch={handleSearch}
          onFilterChange={handleFilterChange}
        />

        <PatientTable
          patients={filteredPatients}
          onViewDetails={handleViewDetails}
        />
      </div>

      {selectedPatient && (
        <div className="fixed inset-0 z-999 flex items-center justify-center bg-black bg-opacity-40">
          <div className="w-full max-w-180 rounded-lg bg-white p-8 dark:bg-boxdark">
            <PatientDetails
              patient={selectedPatient}
              onClose={() => setSelectedPatient(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientList;
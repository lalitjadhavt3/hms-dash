import React from 'react';

interface PatientSearchProps {
  onSearch: (searchTerm: string) => void;
  onFilterChange: (filters: PatientFilters) => void;
}

export interface PatientFilters {
  gender?: 'male' | 'female' | 'other';
  ageRange?: 'all' | '0-18' | '19-40' | '41-60' | '60+';
  bloodGroup?: string;
  status?: 'active' | 'inactive' | 'admitted';
}

const PatientSearch: React.FC<PatientSearchProps> = ({ onSearch, onFilterChange }) => {
  const [filters, setFilters] = React.useState<PatientFilters>({});

  const handleFilterChange = (key: keyof PatientFilters, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-1 items-center gap-3">
        <div className="w-full xl:w-125">
          <input
            type="text"
            placeholder="Search patients..."
            onChange={(e) => onSearch(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
        <div className="relative z-20 w-full md:w-40">
          <select
            onChange={(e) => handleFilterChange('gender', e.target.value)}
            className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-2 px-6 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
          >
            <option value="">All Genders</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.8">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z" fill="currentColor"></path>
              </g>
            </svg>
          </span>
        </div>
        <div className="relative z-20 w-full md:w-40">
          <select
            onChange={(e) => handleFilterChange('ageRange', e.target.value as PatientFilters['ageRange'])}
            className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-2 px-6 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
          >
            <option value="all">All Ages</option>
            <option value="0-18">0-18 years</option>
            <option value="19-40">19-40 years</option>
            <option value="41-60">41-60 years</option>
            <option value="60+">60+ years</option>
          </select>
          <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.8">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z" fill="currentColor"></path>
              </g>
            </svg>
          </span>
        </div>
        <div className="relative z-20 w-full md:w-40">
          <select
            onChange={(e) => handleFilterChange('status', e.target.value as PatientFilters['status'])}
            className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-2 px-6 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
          >
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="admitted">Admitted</option>
          </select>
          <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.8">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z" fill="currentColor"></path>
              </g>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PatientSearch;

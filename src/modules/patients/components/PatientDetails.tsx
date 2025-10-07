import React, { useState } from 'react';
import { Patient } from '../../../types/hms.types';

interface PatientDetailsProps {
  patient: Patient;
  onClose: () => void;
}

type TabType = 'profile' | 'history' | 'billing' | 'reports';

const PatientDetails: React.FC<PatientDetailsProps> = ({ patient, onClose }) => {
  const [activeTab, setActiveTab] = useState<TabType>('profile');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="p-6.5">
            <div className="mb-4.5">
              <div className="flex flex-col gap-2.5 py-3 px-5.5">
                <h4 className="text-title-sm font-medium text-black dark:text-white">
                  Personal Information
                </h4>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm font-medium text-black dark:text-white">Name</p>
                    <p className="text-sm text-body">{patient.name}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-black dark:text-white">Age</p>
                    <p className="text-sm text-body">{patient.age} years</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-black dark:text-white">Gender</p>
                    <p className="text-sm text-body">{patient.gender}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-black dark:text-white">Blood Group</p>
                    <p className="text-sm text-body">{patient.bloodGroup}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4.5">
              <div className="flex flex-col gap-2.5 py-3 px-5.5">
                <h4 className="text-title-sm font-medium text-black dark:text-white">
                  Contact Information
                </h4>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm font-medium text-black dark:text-white">Phone</p>
                    <p className="text-sm text-body">{patient.contact}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-black dark:text-white">Email</p>
                    <p className="text-sm text-body">{patient.email}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-black dark:text-white">Address</p>
                    <p className="text-sm text-body">{patient.address}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-black dark:text-white">Emergency Contact</p>
                    <p className="text-sm text-body">{patient.emergencyContact}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'history':
        return (
          <div className="p-6.5">
            <div className="mb-4.5">
              <div className="flex flex-col gap-2.5 py-3 px-5.5">
                <h4 className="text-title-sm font-medium text-black dark:text-white">
                  Medical History
                </h4>
                <p className="text-sm text-body">Medical history component coming soon...</p>
              </div>
            </div>
          </div>
        );
      case 'billing':
        return (
          <div className="p-6.5">
            <div className="mb-4.5">
              <div className="flex flex-col gap-2.5 py-3 px-5.5">
                <h4 className="text-title-sm font-medium text-black dark:text-white">
                  Billing History
                </h4>
                <p className="text-sm text-body">Billing history component coming soon...</p>
              </div>
            </div>
          </div>
        );
      case 'reports':
        return (
          <div className="p-6.5">
            <div className="mb-4.5">
              <div className="flex flex-col gap-2.5 py-3 px-5.5">
                <h4 className="text-title-sm font-medium text-black dark:text-white">
                  Medical Reports
                </h4>
                <p className="text-sm text-body">Medical reports component coming soon...</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-black dark:text-white">
              Patient Details
            </h3>
            <button
              onClick={onClose}
              className="hover:text-primary"
            >
              <svg
                className="fill-current"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0ZM13.5355 13.5355C13.1451 13.9261 12.5119 13.9261 12.1213 13.5355L10 11.4142L7.87868 13.5355C7.48815 13.9261 6.85499 13.9261 6.46447 13.5355C6.07394 13.145 6.07394 12.5118 6.46447 12.1213L8.58579 10L6.46447 7.87868C6.07394 7.48815 6.07394 6.85499 6.46447 6.46447C6.85499 6.07394 7.48815 6.07394 7.87868 6.46447L10 8.58579L12.1213 6.46447C12.5119 6.07394 13.1451 6.07394 13.5355 6.46447C13.9261 6.85499 13.9261 7.48815 13.5355 7.87868L11.4142 10L13.5355 12.1213C13.9261 12.5118 13.9261 13.145 13.5355 13.5355Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <span className="text-sm text-body">ID: {patient.id}</span>
        </div>
      </div>

      <div className="border-b border-stroke dark:border-strokedark">
        <div className="flex flex-wrap gap-4 px-6.5">
          <button
            onClick={() => setActiveTab('profile')}
            className={`py-3 border-b-2 ${
              activeTab === 'profile'
                ? 'border-primary text-primary'
                : 'border-transparent text-body hover:text-primary'
            }`}
          >
            Profile
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`py-3 border-b-2 ${
              activeTab === 'history'
                ? 'border-primary text-primary'
                : 'border-transparent text-body hover:text-primary'
            }`}
          >
            Medical History
          </button>
          <button
            onClick={() => setActiveTab('billing')}
            className={`py-3 border-b-2 ${
              activeTab === 'billing'
                ? 'border-primary text-primary'
                : 'border-transparent text-body hover:text-primary'
            }`}
          >
            Billing
          </button>
          <button
            onClick={() => setActiveTab('reports')}
            className={`py-3 border-b-2 ${
              activeTab === 'reports'
                ? 'border-primary text-primary'
                : 'border-transparent text-body hover:text-primary'
            }`}
          >
            Reports
          </button>
        </div>
      </div>

      {renderTabContent()}
    </div>
  );
};

export default PatientDetails;

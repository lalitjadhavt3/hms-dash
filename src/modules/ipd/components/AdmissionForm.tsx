import React, { useState } from 'react';
import { Patient, Doctor, Bed } from '../../../types/hms.types';

interface AdmissionFormProps {
  patient?: Patient;
  availableBeds: Bed[];
  doctors: Doctor[];
  onSubmit: (data: {
    patientId: string;
    bedId: string;
    doctorId: string;
    admissionNotes: string;
    admissionDate: string;
    expectedStayDays: number;
  }) => void;
  onCancel: () => void;
}

const AdmissionForm: React.FC<AdmissionFormProps> = ({
  patient,
  availableBeds,
  doctors,
  onSubmit,
  onCancel,
}) => {
  const [formData, setFormData] = useState({
    patientId: patient?.id || '',
    bedId: '',
    doctorId: '',
    admissionNotes: '',
    admissionDate: new Date().toISOString().split('T')[0],
    expectedStayDays: 1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-6.5">
        {patient && (
          <div className="mb-4.5">
            <div className="flex flex-col gap-2.5 py-3 px-5.5">
              <h4 className="text-title-sm font-medium text-black dark:text-white">
                Patient Details
              </h4>
              <p className="text-sm">Name: {patient.name}</p>
              <p className="text-sm">Age: {patient.age}</p>
              <p className="text-sm">Gender: {patient.gender}</p>
              <p className="text-sm">Blood Group: {patient.bloodGroup}</p>
            </div>
          </div>
        )}

        <div className="mb-4.5">
          <label className="mb-2.5 block text-black dark:text-white">
            Select Bed <span className="text-meta-1">*</span>
          </label>
          <div className="relative z-20 bg-transparent dark:bg-form-input">
            <select
              name="bedId"
              value={formData.bedId}
              onChange={handleChange}
              required
              className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            >
              <option value="">Select a bed</option>
              {availableBeds.map((bed) => (
                <option key={bed.id} value={bed.id}>
                  {bed.ward} - Bed {bed.number} ({bed.type})
                </option>
              ))}
            </select>
            <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
              <svg
                className="fill-current"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.8">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                    fill=""
                  ></path>
                </g>
              </svg>
            </span>
          </div>
        </div>

        <div className="mb-4.5">
          <label className="mb-2.5 block text-black dark:text-white">
            Assign Doctor <span className="text-meta-1">*</span>
          </label>
          <div className="relative z-20 bg-transparent dark:bg-form-input">
            <select
              name="doctorId"
              value={formData.doctorId}
              onChange={handleChange}
              required
              className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            >
              <option value="">Select a doctor</option>
              {doctors.map((doctor) => (
                <option key={doctor.id} value={doctor.id}>
                  {doctor.name} ({doctor.specialization})
                </option>
              ))}
            </select>
            <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
              <svg
                className="fill-current"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.8">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                    fill=""
                  ></path>
                </g>
              </svg>
            </span>
          </div>
        </div>

        <div className="mb-4.5">
          <label className="mb-2.5 block text-black dark:text-white">
            Admission Date <span className="text-meta-1">*</span>
          </label>
          <input
            type="date"
            name="admissionDate"
            value={formData.admissionDate}
            onChange={handleChange}
            required
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>

        <div className="mb-4.5">
          <label className="mb-2.5 block text-black dark:text-white">
            Expected Stay (Days) <span className="text-meta-1">*</span>
          </label>
          <input
            type="number"
            name="expectedStayDays"
            value={formData.expectedStayDays}
            onChange={handleChange}
            min="1"
            required
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>

        <div className="mb-6">
          <label className="mb-2.5 block text-black dark:text-white">
            Admission Notes
          </label>
          <textarea
            name="admissionNotes"
            value={formData.admissionNotes}
            onChange={handleChange}
            rows={6}
            placeholder="Enter any relevant notes about the admission..."
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          ></textarea>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="submit"
            className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
          >
            Admit Patient
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="flex w-full justify-center rounded bg-danger p-3 font-medium text-gray hover:bg-opacity-90"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default AdmissionForm;

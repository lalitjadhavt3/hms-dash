import React, { useState } from 'react';
import { Patient, Doctor } from '../../../types/hms.types';

interface DischargeFormProps {
  patient: Patient;
  doctor: Doctor;
  admissionDate: string;
  onSubmit: (data: {
    dischargeDate: string;
    dischargeSummary: string;
    followUpDate?: string;
    medications: string;
    instructions: string;
  }) => void;
  onCancel: () => void;
}

const DischargeForm: React.FC<DischargeFormProps> = ({
  patient,
  doctor,
  admissionDate,
  onSubmit,
  onCancel,
}) => {
  const [formData, setFormData] = useState({
    dischargeDate: new Date().toISOString().split('T')[0],
    dischargeSummary: '',
    followUpDate: '',
    medications: '',
    instructions: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
        <div className="mb-4.5">
          <div className="flex flex-col gap-2.5 py-3 px-5.5 dark:bg-meta-4 bg-gray-2 rounded-sm">
            <h4 className="text-title-sm font-medium text-black dark:text-white">
              Discharge Summary
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm">Patient: {patient.name}</p>
                <p className="text-sm">Age: {patient.age}</p>
                <p className="text-sm">Gender: {patient.gender}</p>
              </div>
              <div>
                <p className="text-sm">Doctor: {doctor.name}</p>
                <p className="text-sm">Specialization: {doctor.specialization}</p>
                <p className="text-sm">Admission Date: {admissionDate}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4.5">
          <label className="mb-2.5 block text-black dark:text-white">
            Discharge Date <span className="text-meta-1">*</span>
          </label>
          <input
            type="date"
            name="dischargeDate"
            value={formData.dischargeDate}
            onChange={handleChange}
            required
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>

        <div className="mb-4.5">
          <label className="mb-2.5 block text-black dark:text-white">
            Discharge Summary <span className="text-meta-1">*</span>
          </label>
          <textarea
            name="dischargeSummary"
            value={formData.dischargeSummary}
            onChange={handleChange}
            required
            rows={4}
            placeholder="Enter discharge summary..."
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          ></textarea>
        </div>

        <div className="mb-4.5">
          <label className="mb-2.5 block text-black dark:text-white">
            Follow-up Date
          </label>
          <input
            type="date"
            name="followUpDate"
            value={formData.followUpDate}
            onChange={handleChange}
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>

        <div className="mb-4.5">
          <label className="mb-2.5 block text-black dark:text-white">
            Medications <span className="text-meta-1">*</span>
          </label>
          <textarea
            name="medications"
            value={formData.medications}
            onChange={handleChange}
            required
            rows={3}
            placeholder="Enter prescribed medications..."
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="mb-2.5 block text-black dark:text-white">
            Instructions <span className="text-meta-1">*</span>
          </label>
          <textarea
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            required
            rows={4}
            placeholder="Enter post-discharge instructions..."
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          ></textarea>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="submit"
            className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
          >
            Discharge Patient
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

export default DischargeForm;

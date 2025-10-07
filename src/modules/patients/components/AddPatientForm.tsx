import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import ComponentCard from '../../../components/common/ComponentCard';
import Label from '../../../components/form/Label';
import Input from '../../../components/form/input/InputField';
import Select from '../../../components/form/Select';
import TextArea from '../../../components/form/input/TextArea';
import Radio from '../../../components/form/input/Radio';
import DatePicker from '../../../components/form/date-picker.tsx';

// Zod validation schema
const patientSchema = z.object({
  // Personal Details
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  gender: z.enum(['male', 'female', 'other'], {
    required_error: 'Please select a gender',
  }),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  
  // Contact Details
  mobileNumber: z
    .string()
    .min(10, 'Mobile number must be 10 digits')
    .max(10, 'Mobile number must be 10 digits')
    .regex(/^\d{10}$/, 'Mobile number must contain only digits'),
  alternateNumber: z
    .string()
    .optional()
    .refine((val) => !val || /^\d{10}$/.test(val), {
      message: 'Alternate number must be 10 digits',
    }),
  email: z
    .string()
    .optional()
    .refine((val) => !val || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
      message: 'Please enter a valid email address',
    }),
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  pincode: z
    .string()
    .min(6, 'Pincode must be 6 digits')
    .max(6, 'Pincode must be 6 digits')
    .regex(/^\d{6}$/, 'Pincode must contain only digits'),
  
  // Medical Details
  bloodGroup: z.string().optional(),
  knownAllergies: z.string().optional(),
  chronicConditions: z.string().optional(),
  doctorAssigned: z.string().optional(),
  department: z.string().optional(),
  admissionDate: z.string().min(1, 'Admission date is required'),
});

type PatientFormData = z.infer<typeof patientSchema>;

const AddPatientForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<PatientFormData>({
    resolver: zodResolver(patientSchema),
    defaultValues: {
      gender: 'male',
    },
  });

  const watchedGender = watch('gender');

  // Mock data for dropdowns
  const bloodGroupOptions = [
    { value: 'A+', label: 'A+' },
    { value: 'A-', label: 'A-' },
    { value: 'B+', label: 'B+' },
    { value: 'B-', label: 'B-' },
    { value: 'AB+', label: 'AB+' },
    { value: 'AB-', label: 'AB-' },
    { value: 'O+', label: 'O+' },
    { value: 'O-', label: 'O-' },
  ];

  const doctorOptions = [
    { value: 'dr1', label: 'Dr. Sarah Johnson - Cardiologist' },
    { value: 'dr2', label: 'Dr. Michael Chen - Pediatrician' },
    { value: 'dr3', label: 'Dr. Emily Davis - Emergency Medicine' },
    { value: 'dr4', label: 'Dr. Robert Wilson - Orthopedist' },
    { value: 'dr5', label: 'Dr. Lisa Brown - Neurologist' },
  ];

  const departmentOptions = [
    { value: 'cardiology', label: 'Cardiology' },
    { value: 'pediatrics', label: 'Pediatrics' },
    { value: 'emergency', label: 'Emergency Medicine' },
    { value: 'orthopedics', label: 'Orthopedics' },
    { value: 'neurology', label: 'Neurology' },
    { value: 'oncology', label: 'Oncology' },
  ];

  const onSubmit = (data: PatientFormData) => {
    console.log('Patient Form Data:', data);
    // Here you would typically send the data to your API
    alert('Patient added successfully!');
  };

  const handleReset = () => {
    reset();
  };

  return (
    <div className="space-y-6">
      <ComponentCard title="Add New Patient" desc="Fill out the form to register a new patient in the system.">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Personal Details Section */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
            <h3 className="mb-6 text-lg font-semibold text-gray-800 dark:text-white/90">
              Personal Details
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="Enter first name"
                  {...register('firstName')}
                  error={!!errors.firstName}
                  hint={errors.firstName?.message}
                />
              </div>
              
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Enter last name"
                  {...register('lastName')}
                  error={!!errors.lastName}
                  hint={errors.lastName?.message}
                />
              </div>
              
              <div>
                <Label>Gender *</Label>
                <div className="flex flex-wrap items-center gap-6 mt-2">
                  <Radio
                    id="male"
                    name="gender"
                    value="male"
                    checked={watchedGender === 'male'}
                    onChange={(value) => setValue('gender', value as 'male' | 'female' | 'other')}
                    label="Male"
                  />
                  <Radio
                    id="female"
                    name="gender"
                    value="female"
                    checked={watchedGender === 'female'}
                    onChange={(value) => setValue('gender', value as 'male' | 'female' | 'other')}
                    label="Female"
                  />
                  <Radio
                    id="other"
                    name="gender"
                    value="other"
                    checked={watchedGender === 'other'}
                    onChange={(value) => setValue('gender', value as 'male' | 'female' | 'other')}
                    label="Other"
                  />
                </div>
                {errors.gender && (
                  <p className="mt-1.5 text-xs text-error-500">{errors.gender.message}</p>
                )}
              </div>
              
              <div>
                <DatePicker
                  id="dateOfBirth"
                  label="Date of Birth *"
                  placeholder="Select date of birth"
                  onChange={(dates, currentDateString) => {
                    setValue('dateOfBirth', currentDateString);
                  }}
                />
                {errors.dateOfBirth && (
                  <p className="mt-1.5 text-xs text-error-500">{errors.dateOfBirth.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Contact Details Section */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
            <h3 className="mb-6 text-lg font-semibold text-gray-800 dark:text-white/90">
              Contact Details
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="mobileNumber">Mobile Number *</Label>
                <Input
                  id="mobileNumber"
                  type="tel"
                  placeholder="Enter 10-digit mobile number"
                  {...register('mobileNumber')}
                  error={!!errors.mobileNumber}
                  hint={errors.mobileNumber?.message}
                />
              </div>
              
              <div>
                <Label htmlFor="alternateNumber">Alternate Number</Label>
                <Input
                  id="alternateNumber"
                  type="tel"
                  placeholder="Enter alternate number"
                  {...register('alternateNumber')}
                  error={!!errors.alternateNumber}
                  hint={errors.alternateNumber?.message}
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                  {...register('email')}
                  error={!!errors.email}
                  hint={errors.email?.message}
                />
              </div>
              
              <div>
                <Label htmlFor="pincode">Pincode *</Label>
                <Input
                  id="pincode"
                  type="text"
                  placeholder="Enter 6-digit pincode"
                  {...register('pincode')}
                  error={!!errors.pincode}
                  hint={errors.pincode?.message}
                />
              </div>
              
              <div className="md:col-span-2">
                <Label htmlFor="address">Address *</Label>
                <TextArea
                  placeholder="Enter complete address"
                  rows={3}
                  {...register('address')}
                  error={!!errors.address}
                  hint={errors.address?.message}
                />
              </div>
              
              <div>
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  type="text"
                  placeholder="Enter city"
                  {...register('city')}
                  error={!!errors.city}
                  hint={errors.city?.message}
                />
              </div>
              
              <div>
                <Label htmlFor="state">State *</Label>
                <Input
                  id="state"
                  type="text"
                  placeholder="Enter state"
                  {...register('state')}
                  error={!!errors.state}
                  hint={errors.state?.message}
                />
              </div>
            </div>
          </div>

          {/* Medical Details Section */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
            <h3 className="mb-6 text-lg font-semibold text-gray-800 dark:text-white/90">
              Medical Details
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <Label>Blood Group</Label>
                <Select
                  options={bloodGroupOptions}
                  placeholder="Select blood group"
                  onChange={(value) => setValue('bloodGroup', value)}
                />
              </div>
              
              <div>
                <Label>Doctor Assigned</Label>
                <Select
                  options={doctorOptions}
                  placeholder="Select doctor"
                  onChange={(value) => setValue('doctorAssigned', value)}
                />
              </div>
              
              <div>
                <Label>Department</Label>
                <Select
                  options={departmentOptions}
                  placeholder="Select department"
                  onChange={(value) => setValue('department', value)}
                />
              </div>
              
              <div>
                <DatePicker
                  id="admissionDate"
                  label="Admission Date *"
                  placeholder="Select admission date"
                  onChange={(dates, currentDateString) => {
                    setValue('admissionDate', currentDateString);
                  }}
                />
                {errors.admissionDate && (
                  <p className="mt-1.5 text-xs text-error-500">{errors.admissionDate.message}</p>
                )}
              </div>
              
              <div className="md:col-span-2 lg:col-span-3">
                <Label>Known Allergies</Label>
                <TextArea
                  placeholder="Enter any known allergies (optional)"
                  rows={3}
                  {...register('knownAllergies')}
                />
              </div>
              
              <div className="md:col-span-2 lg:col-span-3">
                <Label>Chronic Conditions</Label>
                <TextArea
                  placeholder="Enter any chronic conditions (optional)"
                  rows={3}
                  {...register('chronicConditions')}
                />
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={handleReset}
              className="flex w-full justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 sm:w-auto"
            >
              Reset
            </button>
            <button
              type="submit"
              className="flex w-full justify-center rounded-lg bg-brand-500 px-6 py-3 text-sm font-medium text-white hover:bg-brand-600 sm:w-auto"
            >
              Save Patient
            </button>
          </div>
        </form>
      </ComponentCard>
    </div>
  );
};

export default AddPatientForm;

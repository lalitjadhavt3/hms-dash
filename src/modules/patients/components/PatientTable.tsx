import React from 'react';
import { Patient } from '../../../types/hms.types';
import { Link } from 'react-router-dom';

interface PatientTableProps {
  patients: Patient[];
  onViewDetails: (patientId: string) => void;
}

const PatientTable: React.FC<PatientTableProps> = ({ patients, onViewDetails }) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Patient Name
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Age/Gender
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Blood Group
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Contact
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Registration
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr key={patient.id}>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {patient.name}
                  </h5>
                  <p className="text-sm">{patient.id}</p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4">
                  <p className="text-black dark:text-white">
                    {patient.age} / {patient.gender.charAt(0).toUpperCase() + patient.gender.slice(1)}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4">
                  <p className="text-black dark:text-white">{patient.bloodGroup}</p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4">
                  <p className="text-black dark:text-white">{patient.contact}</p>
                  <p className="text-sm text-meta-3">{patient.email}</p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4">
                  <p className="text-black dark:text-white">
                    {new Date(patient.registrationDate).toLocaleDateString()}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4">
                  <div className="flex items-center space-x-3.5">
                    <button
                      className="hover:text-primary"
                      onClick={() => onViewDetails(patient.id)}
                    >
                      <svg
                        className="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.17812 8.99981 3.17812C14.5686 3.17812 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                          fill=""
                        />
                        <path
                          d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                          fill=""
                        />
                      </svg>
                    </button>
                    <Link
                      to={`/patients/${patient.id}/edit`}
                      className="hover:text-primary"
                    >
                      <svg
                        className="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.8754 11.6719C16.5379 11.6719 16.2285 11.9531 16.2285 12.3187V14.8219C16.2285 15.075 16.0316 15.2719 15.7785 15.2719H2.22147C1.96835 15.2719 1.77147 15.075 1.77147 14.8219V12.3187C1.77147 11.9812 1.49022 11.6719 1.12147 11.6719C0.752728 11.6719 0.471478 11.9531 0.471478 12.3187V14.8219C0.471478 15.7781 1.23772 16.5719 2.22147 16.5719H15.7785C16.7316 16.5719 17.5285 15.8062 17.5285 14.8219V12.3187C17.5285 11.9531 17.2472 11.6719 16.8754 11.6719Z"
                          fill=""
                        />
                        <path
                          d="M8.55472 12.5341L12.1547 8.93413C12.3516 8.73726 12.3516 8.42163 12.1547 8.22476L11.2266 7.29663C11.0297 7.09976 10.7141 7.09976 10.5172 7.29663L9.93416 7.87968L8.10535 6.05087C7.90847 5.854 7.59285 5.854 7.39597 6.05087L6.46785 6.979C6.27097 7.17587 6.27097 7.4915 6.46785 7.68837L8.29666 9.51718L4.45472 13.3591C4.35628 13.4576 4.29222 13.5841 4.27097 13.7247L4.00159 15.4091C3.97722 15.5919 4.03816 15.7747 4.17097 15.9075C4.28253 16.0191 4.43972 16.0747 4.59691 16.0747C4.62441 16.0747 4.65191 16.0747 4.67941 16.0747L6.36378 15.8053C6.50441 15.7841 6.63091 15.72 6.72935 15.6216L8.55472 13.7962C8.75159 13.5994 8.75159 13.2837 8.55472 13.0869L6.72935 11.2615L8.55472 9.43615L10.3801 11.2615C10.577 11.4584 10.8926 11.4584 11.0895 11.2615L11.6726 10.6784L13.498 12.5037C13.6948 12.7006 14.0105 12.7006 14.2073 12.5037L15.1355 11.5756C15.3323 11.3787 15.3323 11.0631 15.1355 10.8662L13.3072 9.03738L13.8902 8.45432C14.0871 8.25745 14.0871 7.94182 13.8902 7.74495L12.0619 5.91613C11.865 5.71926 11.5494 5.71926 11.3525 5.91613L8.55472 8.71389C8.35785 8.91076 8.35785 9.22639 8.55472 9.42326L10.3801 11.2484L8.55472 13.0737C8.35785 13.2706 8.35785 13.5862 8.55472 13.7831"
                          fill=""
                        />
                      </svg>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientTable;

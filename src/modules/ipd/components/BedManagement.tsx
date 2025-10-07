import React from 'react';
import { Bed } from '../../../types/hms.types';

interface BedManagementProps {
  beds: Bed[];
  onBedClick: (bed: Bed) => void;
}

const BedManagement: React.FC<BedManagementProps> = ({ beds, onBedClick }) => {
  const getBedStatusColor = (status: Bed['status']) => {
    switch (status) {
      case 'available':
        return 'bg-success';
      case 'occupied':
        return 'bg-danger';
      case 'maintenance':
        return 'bg-warning';
      default:
        return 'bg-gray-4';
    }
  };

  const groupedBeds = beds.reduce((acc, bed) => {
    if (!acc[bed.ward]) {
      acc[bed.ward] = [];
    }
    acc[bed.ward].push(bed);
    return acc;
  }, {} as Record<string, Bed[]>);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
      {Object.entries(groupedBeds).map(([ward, wardBeds]) => (
        <div
          key={ward}
          className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark"
        >
          <h4 className="mb-4 text-xl font-semibold text-black dark:text-white">
            {ward}
          </h4>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
            {wardBeds.map((bed) => (
              <button
                key={bed.id}
                onClick={() => onBedClick(bed)}
                className={`flex flex-col items-center justify-center rounded-sm border border-stroke bg-white p-4 transition hover:bg-gray-2 dark:border-strokedark dark:bg-boxdark dark:hover:bg-meta-4 ${
                  bed.status === 'maintenance' ? 'cursor-not-allowed opacity-60' : ''
                }`}
                disabled={bed.status === 'maintenance'}
              >
                <div className="relative mb-3">
                  <svg
                    className="fill-current"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28 26V24C28 20.687 25.313 18 22 18H10C6.687 18 4 20.687 4 24V26"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 14C19.3137 14 22 11.3137 22 8C22 4.68629 19.3137 2 16 2C12.6863 2 10 4.68629 10 8C10 11.3137 12.6863 14 16 14Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    className={`absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white ${getBedStatusColor(
                      bed.status
                    )}`}
                  ></span>
                </div>
                <span className="block text-sm font-medium">
                  Bed {bed.number}
                </span>
                <span
                  className={`mt-1 block text-xs ${
                    bed.status === 'available'
                      ? 'text-success'
                      : bed.status === 'occupied'
                      ? 'text-danger'
                      : 'text-warning'
                  }`}
                >
                  {bed.status.charAt(0).toUpperCase() + bed.status.slice(1)}
                </span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BedManagement;

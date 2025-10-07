import React from 'react';
import Badge from '../../../components/ui/badge/Badge';

const DepartmentOverview: React.FC = () => {
  const departments = [
    {
      name: 'Cardiology',
      patients: 45,
      doctors: 8,
      occupancy: 85,
      status: 'high'
    },
    {
      name: 'Pediatrics',
      patients: 32,
      doctors: 6,
      occupancy: 70,
      status: 'medium'
    },
    {
      name: 'Emergency',
      patients: 28,
      doctors: 12,
      occupancy: 90,
      status: 'high'
    },
    {
      name: 'Orthopedics',
      patients: 25,
      doctors: 5,
      occupancy: 60,
      status: 'low'
    },
    {
      name: 'Neurology',
      patients: 18,
      doctors: 4,
      occupancy: 45,
      status: 'low'
    },
    {
      name: 'Oncology',
      patients: 22,
      doctors: 3,
      occupancy: 55,
      status: 'medium'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'high':
        return 'error';
      case 'medium':
        return 'warning';
      case 'low':
        return 'success';
      default:
        return 'light';
    }
  };

  const getOccupancyColor = (occupancy: number) => {
    if (occupancy >= 80) return 'text-error';
    if (occupancy >= 60) return 'text-warning';
    return 'text-success';
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Department Overview
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Current status of all hospital departments
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="rounded-2xl border border-gray-200 p-4 hover:shadow-md dark:border-gray-700 dark:hover:bg-gray-800/50"
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-gray-800 dark:text-white/90">
                {dept.name}
              </h4>
              <Badge size="sm" color={getStatusColor(dept.status)}>
                {dept.status.charAt(0).toUpperCase() + dept.status.slice(1)}
              </Badge>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">Patients</span>
                <span className="font-medium text-gray-800 dark:text-white">
                  {dept.patients}
                </span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">Doctors</span>
                <span className="font-medium text-gray-800 dark:text-white">
                  {dept.doctors}
                </span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">Occupancy</span>
                <span className={`font-medium ${getOccupancyColor(dept.occupancy)}`}>
                  {dept.occupancy}%
                </span>
              </div>

              <div className="mt-3">
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                  <span>Occupancy Rate</span>
                  <span>{dept.occupancy}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div
                    className={`h-2 rounded-full ${
                      dept.occupancy >= 80
                        ? 'bg-error'
                        : dept.occupancy >= 60
                        ? 'bg-warning'
                        : 'bg-success'
                    }`}
                    style={{ width: `${dept.occupancy}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentOverview;

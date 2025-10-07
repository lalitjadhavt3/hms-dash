import React from 'react';
import Badge from '../../../components/ui/badge/Badge';

const StaffSchedule: React.FC = () => {
  const staffSchedule = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Cardiologist',
      shift: 'Morning',
      status: 'on-duty',
      patients: 8
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Pediatrician',
      shift: 'Evening',
      status: 'on-duty',
      patients: 5
    },
    {
      name: 'Dr. Emily Davis',
      role: 'Emergency',
      shift: 'Night',
      status: 'on-duty',
      patients: 12
    },
    {
      name: 'Dr. Robert Wilson',
      role: 'Orthopedist',
      shift: 'Morning',
      status: 'off-duty',
      patients: 0
    },
    {
      name: 'Dr. Lisa Brown',
      role: 'Neurologist',
      shift: 'Evening',
      status: 'on-duty',
      patients: 3
    }
  ];

  const getStatusColor = (status: string) => {
    return status === 'on-duty' ? 'success' : 'light';
  };

  const getShiftColor = (shift: string) => {
    switch (shift) {
      case 'Morning':
        return 'text-warning';
      case 'Evening':
        return 'text-info';
      case 'Night':
        return 'text-primary';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Staff Schedule
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Current shift status and patient load
        </p>
      </div>

      <div className="space-y-4">
        {staffSchedule.map((staff, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-2xl border border-gray-200 p-3 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800/50"
          >
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <span className="text-sm font-semibold text-primary">
                  {staff.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  {staff.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {staff.role}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="text-right">
                <p className={`text-xs font-medium ${getShiftColor(staff.shift)}`}>
                  {staff.shift}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {staff.patients} patients
                </p>
              </div>
              <Badge size="sm" color={getStatusColor(staff.status)}>
                {staff.status === 'on-duty' ? 'On Duty' : 'Off Duty'}
              </Badge>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4 text-center">
        <div className="rounded-lg bg-success/10 p-3">
          <p className="text-lg font-semibold text-success">
            {staffSchedule.filter(s => s.status === 'on-duty').length}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">On Duty</p>
        </div>
        <div className="rounded-lg bg-warning/10 p-3">
          <p className="text-lg font-semibold text-warning">
            {staffSchedule.reduce((sum, s) => sum + s.patients, 0)}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">Total Patients</p>
        </div>
        <div className="rounded-lg bg-info/10 p-3">
          <p className="text-lg font-semibold text-info">
            {Math.round(staffSchedule.reduce((sum, s) => sum + s.patients, 0) / staffSchedule.filter(s => s.status === 'on-duty').length)}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">Avg/Doctor</p>
        </div>
      </div>
    </div>
  );
};

export default StaffSchedule;

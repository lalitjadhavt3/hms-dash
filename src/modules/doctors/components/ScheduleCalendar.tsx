import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import Badge from "../../../components/ui/badge/Badge";
import { Doctor } from '../../../types/hms.types';

interface ScheduleCalendarProps {
  doctors: Doctor[];
}

const ScheduleCalendar: React.FC<ScheduleCalendarProps> = ({ doctors }) => {
  const [selectedDoctor, setSelectedDoctor] = useState<string>('all');

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const timeSlots = ['09:00-12:00', '12:00-15:00', '15:00-18:00', '18:00-21:00'];

  const filteredDoctors = selectedDoctor === 'all' 
    ? doctors 
    : doctors.filter(doctor => doctor.id === selectedDoctor);

  return (
    <div className="space-y-6">
      {/* Doctor Filter */}
      <div className="flex items-center gap-4">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Filter by Doctor:
        </label>
        <select
          value={selectedDoctor}
          onChange={(e) => setSelectedDoctor(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        >
          <option value="all">All Doctors</option>
          {doctors.map((doctor) => (
            <option key={doctor.id} value={doctor.id}>
              {doctor.name}
            </option>
          ))}
        </select>
      </div>

      {/* Schedule Table */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Doctor
                </TableCell>
                {days.map((day) => (
                  <TableCell
                    key={day}
                    isHeader
                    className="px-3 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                  >
                    {day}
                  </TableCell>
                ))}
              </TableRow>
            </TableHeader>

            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {filteredDoctors.map((doctor) => (
                <TableRow key={doctor.id}>
                  <TableCell className="px-5 py-4 sm:px-6 text-start">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 overflow-hidden rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-semibold text-sm">
                          {doctor.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                          {doctor.name}
                        </span>
                        <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                          {doctor.specialization}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  {days.map((day) => {
                    const isAvailable = doctor.availability.days.includes(day);
                    return (
                      <TableCell key={day} className="px-3 py-4 text-center">
                        {isAvailable ? (
                          <div className="space-y-1">
                            <Badge size="sm" color="success">
                              Available
                            </Badge>
                            <div className="text-xs text-gray-500">
                              {doctor.availability.timeSlots.join(', ')}
                            </div>
                          </div>
                        ) : (
                          <Badge size="sm" color="error">
                            Unavailable
                          </Badge>
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-success-500"></div>
          <span className="text-gray-600 dark:text-gray-400">Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-error-500"></div>
          <span className="text-gray-600 dark:text-gray-400">Unavailable</span>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCalendar;

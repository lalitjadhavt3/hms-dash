import React from 'react';
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import ComponentCard from "../../../components/common/ComponentCard";
import PageMeta from "../../../components/common/PageMeta";
import ScheduleCalendar from "../components/ScheduleCalendar";
import { mockDoctors } from '../../../data/mockData';

export default function DoctorSchedule() {
  return (
    <>
      <PageMeta
        title="Doctor Schedule | HMS Dashboard"
        description="Doctor schedule management page for Hospital Management System"
      />
      <PageBreadcrumb pageTitle="Doctor Schedule" />
      <div className="space-y-6">
        <ComponentCard title="Schedule Management" desc="View and manage doctor schedules and availability">
          <ScheduleCalendar doctors={mockDoctors} />
        </ComponentCard>
      </div>
    </>
  );
}

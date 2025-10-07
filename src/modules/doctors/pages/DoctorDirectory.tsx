import React from 'react';
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import ComponentCard from "../../../components/common/ComponentCard";
import PageMeta from "../../../components/common/PageMeta";
import DoctorTable from "../components/DoctorTable";
import { mockDoctors } from '../../../data/mockData';

export default function DoctorDirectory() {
  return (
    <>
      <PageMeta
        title="Doctor Directory | HMS Dashboard"
        description="Doctor directory page for Hospital Management System"
      />
      <PageBreadcrumb pageTitle="Doctor Directory" />
      <div className="space-y-6">
        <ComponentCard title="Doctor Directory" desc="Manage and view all doctors in the hospital">
          <DoctorTable doctors={mockDoctors} />
        </ComponentCard>
      </div>
    </>
  );
}

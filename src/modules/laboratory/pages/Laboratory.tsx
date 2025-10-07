import React from 'react';
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import ComponentCard from "../../../components/common/ComponentCard";
import PageMeta from "../../../components/common/PageMeta";
import LabTestTable from "../components/LabTestTable";
import { mockLabTests } from '../../../data/mockData';

export default function Laboratory() {
  return (
    <>
      <PageMeta
        title="Laboratory Management | HMS Dashboard"
        description="Laboratory test management page for Hospital Management System"
      />
      <PageBreadcrumb pageTitle="Laboratory Management" />
      <div className="space-y-6">
        <ComponentCard title="Lab Tests" desc="Manage laboratory tests and results">
          <LabTestTable tests={mockLabTests} />
        </ComponentCard>
      </div>
    </>
  );
}

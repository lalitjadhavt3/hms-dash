import React from 'react';
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import ComponentCard from "../../../components/common/ComponentCard";
import PageMeta from "../../../components/common/PageMeta";
import MedicineTable from "../components/MedicineTable";
import { mockMedicines } from '../../../data/mockData';

export default function Pharmacy() {
  return (
    <>
      <PageMeta
        title="Pharmacy Management | HMS Dashboard"
        description="Pharmacy and medicine inventory management page for Hospital Management System"
      />
      <PageBreadcrumb pageTitle="Pharmacy Management" />
      <div className="space-y-6">
        <ComponentCard title="Medicine Inventory" desc="Manage medicine stock and inventory">
          <MedicineTable medicines={mockMedicines} />
        </ComponentCard>
      </div>
    </>
  );
}

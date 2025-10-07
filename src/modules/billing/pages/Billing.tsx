import React from 'react';
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import ComponentCard from "../../../components/common/ComponentCard";
import PageMeta from "../../../components/common/PageMeta";
import BillingTable from "../components/BillingTable";
import { mockBills } from '../../../data/mockData';

export default function Billing() {
  return (
    <>
      <PageMeta
        title="Billing Management | HMS Dashboard"
        description="Billing and invoice management page for Hospital Management System"
      />
      <PageBreadcrumb pageTitle="Billing Management" />
      <div className="space-y-6">
        <ComponentCard title="Bills & Invoices" desc="Manage patient bills and invoices">
          <BillingTable bills={mockBills} />
        </ComponentCard>
      </div>
    </>
  );
}

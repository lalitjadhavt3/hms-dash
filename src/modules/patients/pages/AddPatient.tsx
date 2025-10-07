import React from 'react';
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import PageMeta from "../../../components/common/PageMeta";
import AddPatientForm from '../components/AddPatientForm';

const AddPatient: React.FC = () => {
  return (
    <>
      <PageMeta
        title="Add Patient | HMS Dashboard"
        description="Add new patient page for Hospital Management System"
      />
      <PageBreadcrumb pageTitle="Add New Patient" />
      <AddPatientForm />
    </>
  );
};

export default AddPatient;
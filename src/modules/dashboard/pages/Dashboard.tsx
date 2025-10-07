import React from 'react';
import PageMeta from "../../../components/common/PageMeta";
import DashboardStats from '../components/DashboardStats';
import AdmissionTrendChart from '../components/AdmissionTrendChart';
import RevenueTrendChart from '../components/RevenueTrendChart';
import RecentActivity from '../components/RecentActivity';
import PatientDemographics from '../components/PatientDemographics';
import DepartmentOverview from '../components/DepartmentOverview';
import EmergencyAlerts from '../components/EmergencyAlerts';
import StaffSchedule from '../components/StaffSchedule';
import { mockDashboardStats } from '../../../data/mockData';

const Dashboard: React.FC = () => {
  return (
    <>
      <PageMeta
        title="Hospital Management Dashboard | HMS"
        description="Comprehensive hospital management dashboard for administrators and hospital owners"
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {/* Main Content Area */}
        <div className="col-span-12 space-y-6 xl:col-span-8">
          {/* Key Metrics Cards */}
          <DashboardStats stats={mockDashboardStats} />

          {/* Charts Section */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <AdmissionTrendChart />
            <RevenueTrendChart />
          </div>

          {/* Department Overview */}
          <DepartmentOverview />
        </div>

        {/* Sidebar Content */}
        <div className="col-span-12 xl:col-span-4">
          <div className="space-y-6">
            {/* Emergency Alerts */}
            <EmergencyAlerts />
            
            {/* Staff Schedule */}
            <StaffSchedule />
          </div>
        </div>

        {/* Full Width Components */}
        <div className="col-span-12">
          <PatientDemographics />
        </div>

        <div className="col-span-12 xl:col-span-7">
          <RecentActivity />
        </div>

        <div className="col-span-12 xl:col-span-5">
          {/* Quick Actions Card */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
            <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white/90">
              Quick Actions
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex flex-col items-center rounded-2xl border border-gray-200 p-4 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">
                <div className="mb-2 rounded-full bg-primary/10 p-3">
                  <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Add Patient</span>
              </button>
              
              <button className="flex flex-col items-center rounded-2xl border border-gray-200 p-4 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">
                <div className="mb-2 rounded-full bg-success/10 p-3">
                  <svg className="h-6 w-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Book Appointment</span>
              </button>
              
              <button className="flex flex-col items-center rounded-2xl border border-gray-200 p-4 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">
                <div className="mb-2 rounded-full bg-warning/10 p-3">
                  <svg className="h-6 w-6 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Generate Report</span>
              </button>
              
              <button className="flex flex-col items-center rounded-2xl border border-gray-200 p-4 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">
                <div className="mb-2 rounded-full bg-info/10 p-3">
                  <svg className="h-6 w-6 text-info" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Bed Management</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

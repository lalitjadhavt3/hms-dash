import React from 'react';
import ReactApexChart from 'react-apexcharts';

const PatientDemographics: React.FC = () => {
  const options = {
    chart: {
      type: 'donut',
      height: 350,
    },
    colors: ['#3C50E0', '#80CAEE', '#8FD0EF', '#F7DC6F', '#BB8FCE'],
    labels: ['Pediatrics (0-18)', 'Young Adults (19-35)', 'Middle Age (36-55)', 'Senior (56-75)', 'Elderly (75+)'],
    legend: {
      position: 'bottom',
    },
    plotOptions: {
      pie: {
        donut: {
          size: '65%',
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Total Patients',
              formatter: function (w: any) {
                return '1,250';
              }
            }
          }
        }
      }
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  const series = [320, 280, 250, 200, 200];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Patient Demographics
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Age distribution of current patients
        </p>
      </div>
      
      <div className="h-80">
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          height={320}
        />
      </div>
    </div>
  );
};

export default PatientDemographics;

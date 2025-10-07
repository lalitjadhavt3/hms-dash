import React from 'react';
import ReactApexChart from 'react-apexcharts';

const RevenueTrendChart: React.FC = () => {
  const options = {
    chart: {
      type: 'area',
      height: 335,
      toolbar: {
        show: false,
      },
    },
    colors: ['#3C50E0'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        text: 'Revenue ($)',
      },
    },
    grid: {
      show: true,
      strokeDashArray: 7,
    },
    markers: {
      size: 5,
      colors: ['#3C50E0'],
      strokeColors: '#ffffff',
      strokeWidth: 3,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      shape: 'circle',
      radius: 5,
      hover: {
        size: 8,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.3,
        stops: [0, 90, 100],
      },
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return '$' + val.toLocaleString();
        },
      },
    },
  };

  const series = [
    {
      name: 'Revenue',
      data: [
        23000,
        35000,
        28000,
        42000,
        38000,
        45000,
        35000,
        46000,
        38000,
        52000,
        45000,
        55000,
      ],
    },
  ];

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full">
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Revenue Trend
          </h4>
        </div>
      </div>

      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default RevenueTrendChart;

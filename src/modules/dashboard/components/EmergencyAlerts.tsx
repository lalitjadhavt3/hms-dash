import React from 'react';
import Badge from '../../../components/ui/badge/Badge';

const EmergencyAlerts: React.FC = () => {
  const alerts = [
    {
      id: 1,
      type: 'critical',
      message: 'ICU Bed #3 requires immediate attention',
      time: '2 min ago',
      priority: 'high'
    },
    {
      id: 2,
      type: 'warning',
      message: 'Emergency department at 90% capacity',
      time: '5 min ago',
      priority: 'medium'
    },
    {
      id: 3,
      type: 'info',
      message: 'Lab results for Patient #1234 ready',
      time: '10 min ago',
      priority: 'low'
    },
    {
      id: 4,
      type: 'critical',
      message: 'Power backup activated in Ward A',
      time: '15 min ago',
      priority: 'high'
    }
  ];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'critical':
        return (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-error/10">
            <svg className="h-4 w-4 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
        );
      case 'warning':
        return (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-warning/10">
            <svg className="h-4 w-4 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        );
      case 'info':
        return (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-info/10">
            <svg className="h-4 w-4 text-info" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'error';
      case 'medium':
        return 'warning';
      case 'low':
        return 'info';
      default:
        return 'light';
    }
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Emergency Alerts
        </h3>
        <Badge size="sm" color="error">
          {alerts.filter(alert => alert.priority === 'high').length} Critical
        </Badge>
      </div>

      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="flex items-start space-x-3 rounded-2xl border border-gray-200 p-3 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800/50"
          >
            {getAlertIcon(alert.type)}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                {alert.message}
              </p>
              <div className="mt-1 flex items-center space-x-2">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {alert.time}
                </span>
                <Badge size="sm" color={getPriorityColor(alert.priority)}>
                  {alert.priority.charAt(0).toUpperCase() + alert.priority.slice(1)}
                </Badge>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <button className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
          View All Alerts
        </button>
      </div>
    </div>
  );
};

export default EmergencyAlerts;

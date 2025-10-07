import React from 'react';

interface Activity {
  id: string;
  type: 'admission' | 'discharge' | 'appointment' | 'payment' | 'test';
  description: string;
  time: string;
  status?: 'pending' | 'completed' | 'cancelled';
}

const mockActivities: Activity[] = [
  {
    id: '1',
    type: 'admission',
    description: 'New patient admitted to General Ward',
    time: '10 minutes ago',
    status: 'completed'
  },
  {
    id: '2',
    type: 'appointment',
    description: 'Dr. Smith completed consultation with Patient #1234',
    time: '25 minutes ago',
    status: 'completed'
  },
  {
    id: '3',
    type: 'test',
    description: 'Lab results ready for Patient #5678',
    time: '1 hour ago',
    status: 'completed'
  },
  {
    id: '4',
    type: 'payment',
    description: 'Payment received for Invoice #INV-001',
    time: '2 hours ago',
    status: 'completed'
  },
  {
    id: '5',
    type: 'discharge',
    description: 'Patient #9012 discharged from ICU',
    time: '3 hours ago',
    status: 'completed'
  }
];

const getActivityIcon = (type: Activity['type']) => {
  switch (type) {
    case 'admission':
      return (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/5">
          <svg className="fill-primary" width="22" height="22" viewBox="0 0 22 22">
            <path d="M11 9.62499C14.0375 9.62499 16.5 7.16249 16.5 4.12499C16.5 1.08749 14.0375 -1.37501 11 -1.37501C7.9625 -1.37501 5.5 1.08749 5.5 4.12499C5.5 7.16249 7.9625 9.62499 11 9.62499Z"/>
            <path d="M11 12.375C7.32875 12.375 0 14.2175 0 17.875V20.625H22V17.875C22 14.2175 14.6713 12.375 11 12.375Z"/>
          </svg>
        </div>
      );
    case 'discharge':
      return (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-success/5">
          <svg className="fill-success" width="22" height="22" viewBox="0 0 22 22">
            <path d="M21.1063 18.0469L19.3875 3.23126C19.2157 1.71876 17.9438 0.584381 16.3969 0.584381H5.56878C4.05628 0.584381 2.78441 1.71876 2.57816 3.23126L0.859406 18.0469C0.756281 18.9063 1.03128 19.7313 1.61566 20.3844C2.20003 21.0375 2.99066 21.4157 3.85003 21.4157H18.1157C18.975 21.4157 19.8 21.0375 20.35 20.3844C20.9344 19.7313 21.2094 18.9063 21.1063 18.0469ZM19.2157 19.3531C18.9407 19.6625 18.5625 19.8344 18.1157 19.8344H3.85003C3.40315 19.8344 2.99066 19.6625 2.75003 19.3531C2.50941 19.0438 2.37503 18.6313 2.44066 18.1844L4.15941 3.36876C4.29378 2.33751 4.81253 1.99688 5.60315 1.99688H16.4313C17.1875 1.99688 17.7407 2.33751 17.875 3.36876L19.5938 18.1844C19.625 18.6313 19.4907 19.0438 19.2157 19.3531Z"/>
          </svg>
        </div>
      );
    case 'appointment':
      return (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-meta-2/5">
          <svg className="fill-meta-2" width="22" height="22" viewBox="0 0 22 22">
            <path d="M16.5 2.75H15.4V2.0625C15.4 1.57187 15.0281 1.2 14.5375 1.2C14.0469 1.2 13.675 1.57187 13.675 2.0625V2.75H8.32502V2.0625C8.32502 1.57187 7.95315 1.2 7.46252 1.2C6.97189 1.2 6.60002 1.57187 6.60002 2.0625V2.75H5.50002C3.74064 2.75 2.75002 3.74062 2.75002 5.5V16.5C2.75002 18.2594 3.74064 19.25 5.50002 19.25H16.5C18.2594 19.25 19.25 18.2594 19.25 16.5V5.5C19.25 3.74062 18.2594 2.75 16.5 2.75ZM5.50002 4.3H6.60002V4.98752C6.60002 5.47815 6.97189 5.85002 7.46252 5.85002C7.95315 5.85002 8.32502 5.47815 8.32502 4.98752V4.3H13.675V4.98752C13.675 5.47815 14.0469 5.85002 14.5375 5.85002C15.0281 5.85002 15.4 5.47815 15.4 4.98752V4.3H16.5C17.4031 4.3 17.7 4.59687 17.7 5.5V7.7H4.30002V5.5C4.30002 4.59687 4.59689 4.3 5.50002 4.3ZM16.5 17.7H5.50002C4.59689 17.7 4.30002 17.4031 4.30002 16.5V9.25H17.7V16.5C17.7 17.4031 17.4031 17.7 16.5 17.7Z"/>
          </svg>
        </div>
      );
    case 'payment':
      return (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-warning/5">
          <svg className="fill-warning" width="22" height="22" viewBox="0 0 22 22">
            <path d="M21.1063 18.0469L19.3875 3.23126C19.2157 1.71876 17.9438 0.584381 16.3969 0.584381H5.56878C4.05628 0.584381 2.78441 1.71876 2.57816 3.23126L0.859406 18.0469C0.756281 18.9063 1.03128 19.7313 1.61566 20.3844C2.20003 21.0375 2.99066 21.4157 3.85003 21.4157H18.1157C18.975 21.4157 19.8 21.0375 20.35 20.3844C20.9344 19.7313 21.2094 18.9063 21.1063 18.0469ZM19.2157 19.3531C18.9407 19.6625 18.5625 19.8344 18.1157 19.8344H3.85003C3.40315 19.8344 2.99066 19.6625 2.75003 19.3531C2.50941 19.0438 2.37503 18.6313 2.44066 18.1844L4.15941 3.36876C4.29378 2.33751 4.81253 1.99688 5.60315 1.99688H16.4313C17.1875 1.99688 17.7407 2.33751 17.875 3.36876L19.5938 18.1844C19.625 18.6313 19.4907 19.0438 19.2157 19.3531Z"/>
          </svg>
        </div>
      );
    case 'test':
      return (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-meta-3/5">
          <svg className="fill-meta-3" width="22" height="22" viewBox="0 0 22 22">
            <path d="M16.5 2.75H15.4V2.0625C15.4 1.57187 15.0281 1.2 14.5375 1.2C14.0469 1.2 13.675 1.57187 13.675 2.0625V2.75H8.32502V2.0625C8.32502 1.57187 7.95315 1.2 7.46252 1.2C6.97189 1.2 6.60002 1.57187 6.60002 2.0625V2.75H5.50002C3.74064 2.75 2.75002 3.74062 2.75002 5.5V16.5C2.75002 18.2594 3.74064 19.25 5.50002 19.25H16.5C18.2594 19.25 19.25 18.2594 19.25 16.5V5.5C19.25 3.74062 18.2594 2.75 16.5 2.75Z"/>
          </svg>
        </div>
      );
    default:
      return null;
  }
};

const RecentActivity: React.FC = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-6">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Recent Activity
      </h4>

      <div className="flex flex-col gap-4">
        {mockActivities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
          >
            {getActivityIcon(activity.type)}

            <div className="flex flex-1 items-center justify-between">
              <div>
                <h5 className="font-medium text-black dark:text-white">
                  {activity.description}
                </h5>
                <p className="text-sm font-medium text-meta-3">{activity.time}</p>
              </div>
              {activity.status && (
                <div className={`text-sm font-medium text-${activity.status === 'completed' ? 'success' : activity.status === 'pending' ? 'warning' : 'danger'}`}>
                  {activity.status.charAt(0).toUpperCase() + activity.status.slice(1)}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;

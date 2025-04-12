import { recentAlerts } from "./mock-data";
export const Alerts = () => {
  return (
    <div className="lg:col-span-1 bg-white rounded-lg shadow">
      <div className="p-6 border-b flex justify-between items-center">
        <h3 className="text-lg font-semibold">Recent Alerts</h3>
        <span className="text-blue-500 text-sm cursor-pointer">View All</span>
      </div>
      <div className="p-4">
        {recentAlerts.map((alert) => (
          <div
            key={alert.id}
            className="mb-4 p-3 rounded-lg bg-gray-50 last:mb-0 border-l-4 
                    ${alert.type === 'critical' ? 'border-red-500' : 
                    alert.type === 'warning' ? 'border-yellow-500' : 
                    alert.type === 'info' ? 'border-blue-500' : 'border-green-500'}"
          >
            <p className="text-sm">{alert.message}</p>
            <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

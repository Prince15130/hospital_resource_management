import { departments } from "./mock-data";
export const DepartmentStatus = () => {
  return (
    <div className="lg:col-span-2 bg-white rounded-lg shadow">
      <div className="p-6 border-b">
        <h3 className="text-lg font-semibold">Department Status</h3>
      </div>
      <div className="p-6">
        {departments.map((dept, index) => (
          <div key={index} className="mb-4 last:mb-0">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">{dept.name}</span>
              <span className="text-sm font-medium">
                {dept.available}/{dept.total} available
              </span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div
                className={`h-full rounded-full ${dept.color}`}
                style={{
                  width: `${(dept.available / dept.total) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

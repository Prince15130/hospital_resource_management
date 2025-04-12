import { Alerts } from "./Alerts";
import { DepartmentStatus } from "./DepartmentStatus";
import { Status } from "./Status";

export const Home = () => {
  return (
    <div>
      {/* Stats Row */}
      <Status />
      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Department Status */}
        <DepartmentStatus />

        {/* Recent Alerts */}
        <Alerts />
      </div>
    </div>
  );
};

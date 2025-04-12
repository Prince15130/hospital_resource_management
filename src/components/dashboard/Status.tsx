import { Bed } from "lucide-react";
import { stats } from "./mock-data";

export const Status = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">{stat.title}</p>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
            </div>
            <div
              className={`h-12 w-12 rounded-full ${stat.color} flex items-center justify-center text-white`}
            >
              {index === 0 ? (
                <Bed size={24} />
              ) : (
                <div className="text-lg font-bold">{stat.initial}</div>
              )}
            </div>
          </div>
          <p
            className={`text-sm mt-2 ${
              stat.change.includes("+") ? "text-green-500" : "text-red-500"
            }`}
          >
            {stat.change} from last week
          </p>
        </div>
      ))}
    </div>
  );
};

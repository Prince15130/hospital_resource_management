import { useState } from "react";
import {
  Filter,
  Search,
  Map,
  List,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Clock,
  Plus,
  RefreshCw,
} from "lucide-react";
import {
  beds,
  BedStatus,
  departments,
  statuses,
  Bed,
  StatusType,
} from "./mock-data";

export const BedManagement = () => {
  const [viewMode, setViewMode] = useState<"map" | "list">("map");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedBed, setSelectedBed] = useState<Bed | null>(null);

  const filteredBeds = beds.filter((bed) => {
    const matchesDepartment =
      selectedDepartment === "all" || bed.department === selectedDepartment;
    const matchesStatus =
      selectedStatus === "all" || bed.status === selectedStatus;
    const matchesSearch =
      searchTerm === "" ||
      bed.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (bed.patient &&
        bed.patient.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesDepartment && matchesStatus && matchesSearch;
  });
  const getStatusObject = (statusId: BedStatus): StatusType => {
    return (
      statuses.find((status) => status.id === statusId) || {
        id: "available",
        name: "Unknown",
        color: "bg-gray-100 text-gray-800",
      }
    );
  };

  const getDepartmentName = (departmentId: string) => {
    const dept = departments.find((d) => d.id === departmentId);
    return dept ? dept.name : "Unknown";
  };

  const handleBedSelect = (bed: Bed) => {
    setSelectedBed(bed);
  };

  const getStatusIcon = (status: BedStatus) => {
    switch (status) {
      case "available":
        return <CheckCircle size={16} className="text-green-500" />;
      case "occupied":
        return <XCircle size={16} className="text-blue-500" />;
      case "cleaning":
        return <RefreshCw size={16} className="text-yellow-500" />;
      case "maintenance":
        return <AlertTriangle size={16} className="text-red-500" />;
      case "reserved":
        return <Clock size={16} className="text-purple-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Bed Management</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center cursor-pointer">
          <Plus size={18} className="mr-2" />
          Assign New Bed
        </button>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center">
            <Filter size={18} className="text-gray-400 mr-2" />
            <span className="text-sm font-medium mr-2">Department:</span>
            <select
              className="border rounded-md px-3 py-1.5 text-sm"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              <option value="all">All Departments</option>
              {departments.map((dept) => (
                <option key={dept.id} value={dept.id}>
                  {dept.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center">
            <span className="text-sm font-medium mr-2">Status:</span>
            <select
              className="border rounded-md px-3 py-1.5 text-sm"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="all">All Statuses</option>
              {statuses.map((status) => (
                <option key={status.id} value={status.id}>
                  {status.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center flex-1 ml-auto max-w-xs">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search bed or patient..."
                className="border rounded-md pl-9 pr-4 py-1.5 w-full text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search
                size={16}
                className="absolute left-3 top-2 text-gray-400"
              />
            </div>
          </div>

          <div className="flex border rounded-md overflow-hidden">
            <button
              className={`px-3 py-1.5 flex items-center text-sm ${
                viewMode === "map"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700"
              }`}
              onClick={() => setViewMode("map")}
            >
              <Map size={16} className="mr-1" />
              Map
            </button>
            <button
              className={`px-3 py-1.5 flex items-center text-sm ${
                viewMode === "list"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700"
              }`}
              onClick={() => setViewMode("list")}
            >
              <List size={16} className="mr-1" />
              List
            </button>
          </div>
        </div>
      </div>

      {/* View Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Bed Display (Map or List) */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          {viewMode === "map" ? (
            <div>
              <h2 className="text-lg font-semibold mb-4">Hospital Bed Map</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {departments.map((dept) => (
                  <div
                    key={dept.id}
                    className="border rounded-lg overflow-hidden"
                  >
                    <div className="bg-gray-100 px-4 py-2 font-medium">
                      {dept.name}
                    </div>
                    <div className="p-4 grid grid-cols-2 gap-2">
                      {filteredBeds
                        .filter((bed) => bed.department === dept.id)
                        .map((bed) => {
                          const statusObj = getStatusObject(bed.status);
                          return (
                            <div
                              key={bed.id}
                              className={`border p-2 rounded-md cursor-pointer transition-all ${
                                selectedBed?.id === bed.id
                                  ? "ring-2 ring-blue-500"
                                  : ""
                              }`}
                              onClick={() => handleBedSelect(bed)}
                            >
                              <div className="flex justify-between items-center">
                                <span className="font-medium">
                                  Bed {bed.number}
                                </span>
                                {getStatusIcon(bed.status)}
                              </div>
                              <div
                                className={`text-xs mt-1 px-1.5 py-0.5 rounded-full inline-block ${statusObj.color}`}
                              >
                                {statusObj.name}
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-lg font-semibold mb-4">Bed List</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Bed
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Department
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Floor
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Patient
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredBeds.map((bed) => {
                      const statusObj = getStatusObject(bed.status);
                      return (
                        <tr
                          key={bed.id}
                          className={`hover:bg-gray-50 cursor-pointer ${
                            selectedBed?.id === bed.id ? "bg-blue-50" : ""
                          }`}
                          onClick={() => handleBedSelect(bed)}
                        >
                          <td className="px-6 py-4 whitespace-nowrap font-medium">
                            #{bed.number}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {getDepartmentName(bed.department)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {bed.floor} Floor
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`px-2 py-1 text-xs rounded-full ${statusObj.color}`}
                            >
                              {getStatusIcon(bed.status)}
                              <span className="ml-1">{statusObj.name}</span>
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {bed.patient ? bed.patient.name : "—"}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:underline">
                            View Details
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Bed Details Panel */}
        <div className="lg:col-span-1 bg-white rounded-lg shadow overflow-hidden">
          {selectedBed ? (
            <div>
              <div className="bg-gray-100 px-6 py-4 border-b">
                <h3 className="text-lg font-semibold">
                  Bed #{selectedBed.number} Details
                </h3>
                <p className="text-sm text-gray-600">
                  {getDepartmentName(selectedBed.department)} •{" "}
                  {selectedBed.floor} Floor
                </p>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-500 mb-2">
                    Status
                  </h4>
                  <div className="flex items-center">
                    {getStatusIcon(selectedBed.status)}
                    <span
                      className={`ml-2 px-2 py-1 text-sm rounded-md ${
                        getStatusObject(selectedBed.status).color
                      }`}
                    >
                      {getStatusObject(selectedBed.status).name}
                    </span>
                  </div>
                </div>

                {selectedBed.patient ? (
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-500 mb-2">
                      Patient Information
                    </h4>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="font-medium text-gray-800">
                        {selectedBed.patient.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        Age: {selectedBed.patient.age}
                      </p>
                      <p className="text-sm text-gray-600">
                        Admission: {selectedBed.patient.admissionDate}
                      </p>
                      <p className="text-sm text-gray-600">
                        Diagnosis: {selectedBed.patient.diagnosis}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-500 mb-2">
                      Patient Information
                    </h4>
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <p className="text-gray-500">No patient assigned</p>
                    </div>
                  </div>
                )}

                <div className="flex flex-col space-y-3">
                  {selectedBed.status === "available" && (
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                      Assign Patient
                    </button>
                  )}

                  {selectedBed.status === "occupied" && (
                    <>
                      <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
                        Discharge Patient
                      </button>
                      <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors">
                        Transfer Patient
                      </button>
                    </>
                  )}

                  <button
                    className={`px-4 py-2 rounded-md border ${
                      selectedBed.status === "available"
                        ? "border-yellow-500 text-yellow-500 hover:bg-yellow-50"
                        : selectedBed.status === "occupied"
                        ? "border-red-500 text-red-500 hover:bg-red-50"
                        : selectedBed.status === "cleaning"
                        ? "border-green-500 text-green-500 hover:bg-green-50"
                        : selectedBed.status === "maintenance"
                        ? "border-green-500 text-green-500 hover:bg-green-50"
                        : "border-blue-500 text-blue-500 hover:bg-blue-50"
                    }`}
                  >
                    {selectedBed.status === "available"
                      ? "Mark as Cleaning"
                      : selectedBed.status === "occupied"
                      ? "Mark for Cleaning"
                      : selectedBed.status === "cleaning"
                      ? "Mark as Available"
                      : selectedBed.status === "maintenance"
                      ? "Mark as Available"
                      : "Cancel Reservation"}
                  </button>

                  <button className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
                    View Bed History
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full p-6 text-center">
              <div className="text-gray-500">
                <div className="mb-2">Select a bed to view details</div>
                <div className="text-sm">
                  You can view and manage bed information, assign patients, and
                  change bed status
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

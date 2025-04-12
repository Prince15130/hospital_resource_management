export type BedStatus =
  | "available"
  | "occupied"
  | "cleaning"
  | "maintenance"
  | "reserved";

export type Department = {
  id: string;
  name: string;
};

export type StatusType = {
  id: BedStatus;
  name: string;
  color: string;
};

export type Patient = {
  name: string;
  age: number;
  admissionDate: string;
  diagnosis: string;
};

export type Bed = {
  id: string;
  number: string;
  department: string;
  status: BedStatus;
  floor: string;
  patient: Patient | null;
};

// Mock departments
export const departments: Department[] = [
  { id: "er", name: "Emergency Room" },
  { id: "icu", name: "Intensive Care Unit" },
  { id: "peds", name: "Pediatrics" },
  { id: "surg", name: "Surgery" },
  { id: "gen", name: "General" },
  { id: "mat", name: "Maternity" },
];

// Mock statuses
export const statuses: StatusType[] = [
  {
    id: "available",
    name: "Available",
    color: "bg-green-100 text-green-800",
  },
  { id: "occupied", name: "Occupied", color: "bg-blue-100 text-blue-800" },
  {
    id: "cleaning",
    name: "Cleaning",
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    id: "maintenance",
    name: "Maintenance",
    color: "bg-red-100 text-red-800",
  },
  {
    id: "reserved",
    name: "Reserved",
    color: "bg-purple-100 text-purple-800",
  },
];

// Mock bed data
export const beds: Bed[] = [
  {
    id: "bed1",
    number: "101",
    department: "er",
    status: "available",
    floor: "1st",
    patient: null,
  },
  {
    id: "bed2",
    number: "102",
    department: "er",
    status: "occupied",
    floor: "1st",
    patient: {
      name: "John Doe",
      age: 45,
      admissionDate: "2025-04-09",
      diagnosis: "Chest Pain",
    },
  },
  {
    id: "bed3",
    number: "103",
    department: "er",
    status: "cleaning",
    floor: "1st",
    patient: null,
  },
  {
    id: "bed4",
    number: "201",
    department: "icu",
    status: "occupied",
    floor: "2nd",
    patient: {
      name: "Jane Smith",
      age: 62,
      admissionDate: "2025-04-10",
      diagnosis: "Respiratory Failure",
    },
  },
  {
    id: "bed5",
    number: "202",
    department: "icu",
    status: "occupied",
    floor: "2nd",
    patient: {
      name: "Robert Johnson",
      age: 55,
      admissionDate: "2025-04-08",
      diagnosis: "Post-Surgery Recovery",
    },
  },
  {
    id: "bed6",
    number: "301",
    department: "peds",
    status: "available",
    floor: "3rd",
    patient: null,
  },
  {
    id: "bed7",
    number: "302",
    department: "peds",
    status: "maintenance",
    floor: "3rd",
    patient: null,
  },
  {
    id: "bed8",
    number: "401",
    department: "surg",
    status: "reserved",
    floor: "4th",
    patient: null,
  },
  {
    id: "bed9",
    number: "501",
    department: "gen",
    status: "available",
    floor: "5th",
    patient: null,
  },
  {
    id: "bed10",
    number: "502",
    department: "gen",
    status: "available",
    floor: "5th",
    patient: null,
  },
  {
    id: "bed11",
    number: "601",
    department: "mat",
    status: "occupied",
    floor: "6th",
    patient: {
      name: "Emily Carter",
      age: 28,
      admissionDate: "2025-04-11",
      diagnosis: "Labor",
    },
  },
  {
    id: "bed12",
    number: "602",
    department: "mat",
    status: "available",
    floor: "6th",
    patient: null,
  },
];

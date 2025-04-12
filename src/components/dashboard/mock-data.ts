// Mock data for the dashboard
export const stats = [
  {
    title: "Total Beds",
    value: 250,
    change: "+2%",
    color: "bg-blue-500",
    initial: "B",
  },
  {
    title: "Available",
    value: 64,
    change: "-5%",
    color: "bg-green-500",
    initial: "A",
  },
  {
    title: "Occupied",
    value: 186,
    change: "+5%",
    color: "bg-red-500",
    initial: "O",
  },
  {
    title: "Cleaning",
    value: 12,
    change: "+1%",
    color: "bg-purple-500",
    initial: "C",
  },
  {
    title: "Reserved",
    value: 2,
    change: "+1%",
    color: "bg-yellow-500",
    initial: "R",
  },
];

export const departments = [
  { name: "Emergency", available: 4, total: 20, color: "bg-red-500" },
  { name: "ICU", available: 3, total: 30, color: "bg-yellow-500" },
  { name: "Pediatrics", available: 15, total: 40, color: "bg-green-500" },
  { name: "Surgery", available: 7, total: 35, color: "bg-blue-500" },
  { name: "General", available: 35, total: 125, color: "bg-purple-500" },
];

export const recentAlerts = [
  {
    id: 1,
    message: "ICU bed #12 needs maintenance",
    time: "10 min ago",
    type: "warning",
  },
  {
    id: 2,
    message: "Emergency dept at 90% capacity",
    time: "25 min ago",
    type: "critical",
  },
  {
    id: 3,
    message: "New patient assigned to bed #45",
    time: "40 min ago",
    type: "info",
  },
  {
    id: 4,
    message: "Scheduled cleaning completed",
    time: "1 hour ago",
    type: "success",
  },
];

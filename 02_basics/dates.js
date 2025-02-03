// Dates in JavaScript

// Creating Dates
console.log("\n=== Creating Dates ===");
const now = new Date();

console.log(typeof now);

console.log("Current date:", now);

const specificDate = new Date(2023, 0, 15); // Year, Month (0-11), Day
console.log("Specific date:", specificDate);

const dateString = new Date("2023-01-15");
console.log("From string:", dateString);

const timestamp = new Date(1684736400000);
console.log("From timestamp:", timestamp);

// Getting Date Components
console.log("\n=== Date Components ===");
console.log("Year:", now.getFullYear());
console.log("Month:", now.getMonth() + 1); // Months are 0-based
console.log("Day:", now.getDate());
console.log("Day of week:", now.getDay()); // 0 (Sunday) to 6 (Saturday)
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());
console.log("Milliseconds:", now.getMilliseconds());
console.log("Timestamp:", now.getTime());

// Formatting Dates
console.log("\n=== Date Formatting ===");
console.log("toString:", now.toString());
console.log("toDateString:", now.toDateString());
console.log("toTimeString:", now.toTimeString());
console.log("toLocaleString:", now.toLocaleString());
console.log("toLocaleDateString:", now.toLocaleDateString());
console.log("toLocaleTimeString:", now.toLocaleTimeString());
console.log("toISOString:", now.toISOString());

// Custom Formatting with Intl
console.log("\n=== Custom Formatting ===");
const dateFormatter = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  timeZoneName: "short",
});
console.log("Formatted:", dateFormatter.format(now));

// Date Manipulation
console.log("\n=== Date Manipulation ===");
const tomorrow = new Date(now);
tomorrow.setDate(now.getDate() + 1);
console.log("Tomorrow:", tomorrow.toDateString());

const nextMonth = new Date(now);
nextMonth.setMonth(now.getMonth() + 1);
console.log("Next month:", nextMonth.toDateString());

// Date Comparison
console.log("\n=== Date Comparison ===");
const date1 = new Date(2023, 0, 1);
const date2 = new Date(2023, 11, 31);
console.log("date1 < date2:", date1 < date2);
console.log("Difference in days:", (date2 - date1) / (1000 * 60 * 60 * 24));

// Practical Examples
console.log("\n=== Practical Examples ===");

// 1. Format relative time
const formatRelativeTime = (date) => {
  const diff = new Date() - date;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days} days ago`;
  if (hours > 0) return `${hours} hours ago`;
  if (minutes > 0) return `${minutes} minutes ago`;
  return "Just now";
};

const pastDate = new Date(Date.now() - 3600000); // 1 hour ago
console.log("Relative time:", formatRelativeTime(pastDate));

// 2. Check if date is weekend
const isWeekend = (date) => {
  const day = date.getDay();
  return day === 0 || day === 6;
};
console.log("Is weekend:", isWeekend(now));

// 3. Add business days
const addBusinessDays = (date, days) => {
  const result = new Date(date);
  let addedDays = 0;
  while (addedDays < days) {
    result.setDate(result.getDate() + 1);
    if (!isWeekend(result)) addedDays++;
  }
  return result;
};
console.log(
  "5 business days from now:",
  addBusinessDays(now, 5).toDateString()
);

// 4. Format duration
const formatDuration = (milliseconds) => {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
};
console.log("Duration:", formatDuration(3661000)); // 1h 1m 1s

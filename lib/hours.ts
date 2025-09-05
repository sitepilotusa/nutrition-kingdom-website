export const weeklyHours: Record<string, string> = {
  Monday: "8 AM–4 PM",
  Tuesday: "8 AM–4 PM",
  Wednesday: "8 AM–4 PM",
  Thursday: "8 AM–4 PM",
  Friday: "8 AM–4 PM",
  Saturday: "9 AM–2 PM",
  Sunday: "9 AM–2 PM",
};

type HoursSpec = { open: number; close: number };

// 0=Sunday ... 6=Saturday
const schedule: Record<number, HoursSpec> = {
  0: { open: 9, close: 14 }, // Sunday
  1: { open: 8, close: 16 },
  2: { open: 8, close: 16 },
  3: { open: 8, close: 16 },
  4: { open: 8, close: 16 },
  5: { open: 8, close: 16 }, // Friday
  6: { open: 9, close: 14 }, // Saturday
};

function getTodaySpec(d: Date): HoursSpec {
  const dow = d.getDay(); // 0..6
  return schedule[dow];
}

function formatHour(h24: number): string {
  const suffix = h24 >= 12 ? "PM" : "AM";
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return `${h12} ${suffix}`;
}

export function getOpenStatusMessage(now: Date): string {
  // Convert to Mountain Time (Colorado timezone)
  const mountainTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Denver"}));
  
  const today = getTodaySpec(mountainTime);
  if (!today) return "";

  const hour = mountainTime.getHours() + mountainTime.getMinutes() / 60;
  if (hour < today.open) {
    // Before open today
    return `Opens today at ${formatHour(today.open)}`;
  }
  if (hour >= today.open && hour < today.close) {
    // Open now
    return `Closes today at ${formatHour(today.close)}`;
  }

  // After close today → next day
  const tomorrow = new Date(mountainTime);
  tomorrow.setDate(mountainTime.getDate() + 1);
  const next = getTodaySpec(tomorrow);
  if (!next) return "";
  return `Opens tomorrow at ${formatHour(next.open)}`;
}



import { weeklyHours } from "@/lib/hours";

export default function StoreHours() {
  return (
    <div className="rounded-xl border p-6">
      <h2 className="font-lemon text-2xl text-red-700">Store Hours</h2>
      <dl className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2 text-sm">
        {Object.entries(weeklyHours).map(([day, hours]) => (
          <div key={day} className="flex items-center justify-between">
            <dt className="text-neutral-600">{day}</dt>
            <dd className="font-medium">{hours}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}



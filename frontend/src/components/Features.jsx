import {
  Users,
  CreditCard,
  ScanLine,
  Bell,
  BarChart3,
  Wrench,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Resident Management",
    description:
      "Manage residents, flats, owners, and tenants with an organized digital directory.",
  },
  {
    icon: CreditCard,
    title: "Maintenance Billing",
    description:
      "Generate, track, and manage maintenance bills with payment history.",
  },
  {
    icon: ScanLine,
    title: "AI Bill Scanner",
    description:
      "Upload invoices and let AI automatically extract important information.",
  },
  {
    icon: Bell,
    title: "Notice Board",
    description:
      "Share announcements and important updates instantly with all residents.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "View society income, expenses, collections, and reports in one place.",
  },
  {
    icon: Wrench,
    title: "Complaint Management",
    description:
      "Residents can submit complaints while admins track and resolve them efficiently.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Features
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Everything Your Society Needs
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Gharkul simplifies society management by combining
            automation, AI, communication, and financial tracking
            into one modern platform.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">
                  <Icon className="h-7 w-7 text-emerald-600" />
                </div>

                <h3 className="mb-3 text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
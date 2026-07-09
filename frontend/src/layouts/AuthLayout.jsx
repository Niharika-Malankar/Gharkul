import { Building2, ShieldCheck, ScanText } from "lucide-react";

export default function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">

      {/* Left Side */}
      <div className="hidden lg:flex flex-col justify-center bg-emerald-600 text-white p-16">

        <div className="flex items-center gap-3 mb-10">
          <Building2 size={40} />
          <h1 className="text-4xl font-bold">Gharkul</h1>
        </div>

        <h2 className="text-5xl font-bold leading-tight">
          Smart Society
          <br />
          Management System
        </h2>

        <p className="mt-6 text-lg text-emerald-100">
          Manage residents, maintenance, complaints, AI bill scanning
          and society communication — all in one platform.
        </p>

        <div className="mt-12 space-y-5">

          <div className="flex items-center gap-3">
            <ShieldCheck />
            <span>Secure Role Based Access</span>
          </div>

          <div className="flex items-center gap-3">
            <ScanText />
            <span>AI Powered Bill Scanner</span>
          </div>

          <div className="flex items-center gap-3">
            <Building2 />
            <span>Smart Society Dashboard</span>
          </div>

        </div>

      </div>

      {/* Right Side */}

      <div className="flex items-center justify-center bg-gray-50 p-8">

        <div className="w-full max-w-md rounded-3xl bg-white shadow-xl p-8">

          <h2 className="text-3xl font-bold">{title}</h2>

          <p className="mt-2 text-gray-500">
            {subtitle}
          </p>

          <div className="mt-8">
            {children}
          </div>

        </div>

      </div>

    </div>
  );
}
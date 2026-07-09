import {
  ArrowRight,
  PlayCircle,
  Building2,
} from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-emerald-50 to-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 py-24 lg:flex-row">

        {/* LEFT CONTENT */}
        <div className="flex-1">

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            🚀 AI Powered Society Management
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 lg:text-7xl">
            Smart Society
            <span className="block text-emerald-600">
              Management Made Simple
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Manage residents, maintenance bills, complaints,
            notices, expenses and AI-powered bill scanning —
            all from one beautiful dashboard.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button variant="outline" size="lg">
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>

          </div>

          {/* Statistics */}
          <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">

            <div>
              <h2 className="text-3xl font-bold text-emerald-600">25+</h2>
              <p className="mt-2 text-sm text-gray-500">
                Societies Managed
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-emerald-600">1,200+</h2>
              <p className="mt-2 text-sm text-gray-500">
                Residents
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-emerald-600">15K+</h2>
              <p className="mt-2 text-sm text-gray-500">
                Bills Processed
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-emerald-600">99.8%</h2>
              <p className="mt-2 text-sm text-gray-500">
                AI Accuracy
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-1 items-center justify-center">

          <div className="w-full max-w-md rounded-3xl border bg-white p-8 shadow-2xl">

            <div className="mb-8 flex items-center gap-4">

              <div className="rounded-xl bg-emerald-100 p-3">
                <Building2 className="h-7 w-7 text-emerald-600" />
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Gharkul Dashboard
                </h3>

                <p className="text-sm text-gray-500">
                  Society Overview
                </p>
              </div>

            </div>

            <div className="space-y-5">

              <div className="rounded-xl bg-gray-50 p-4">
                <div className="mb-2 flex justify-between">
                  <span>Total Residents</span>
                  <span className="font-bold text-emerald-600">
                    240
                  </span>
                </div>

                <div className="h-2 rounded-full bg-gray-200">
                  <div className="h-2 w-[90%] rounded-full bg-emerald-500"></div>
                </div>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <div className="mb-2 flex justify-between">
                  <span>Pending Bills</span>
                  <span className="font-bold text-red-500">
                    18
                  </span>
                </div>

                <div className="h-2 rounded-full bg-gray-200">
                  <div className="h-2 w-[30%] rounded-full bg-red-400"></div>
                </div>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <div className="mb-2 flex justify-between">
                  <span>Maintenance Collection</span>
                  <span className="font-bold text-emerald-600">
                    ₹3.2L
                  </span>
                </div>

                <div className="h-2 rounded-full bg-gray-200">
                  <div className="h-2 w-[80%] rounded-full bg-emerald-500"></div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
export default function About() {
  return (
    <div className="min-h-screen bg-white px-6 py-20">

      <div className="mx-auto max-w-4xl text-center">

        <h1 className="text-5xl font-bold text-gray-900">
          About Gharkul
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          Gharkul is an AI-powered society management platform designed
          to simplify residential community operations.
        </p>

        <p className="mt-4 text-lg leading-8 text-gray-600">
          From automated maintenance bill scanning and resident management
          to smart notifications, Gharkul helps societies save time,
          reduce paperwork, and improve communication.
        </p>


        <div className="mt-12 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl bg-emerald-50 p-6">
            <h3 className="text-xl font-bold text-emerald-700">
              AI Powered
            </h3>
            <p className="mt-2 text-gray-600">
              Intelligent bill extraction using AI technology.
            </p>
          </div>


          <div className="rounded-2xl bg-emerald-50 p-6">
            <h3 className="text-xl font-bold text-emerald-700">
              Digital Management
            </h3>
            <p className="mt-2 text-gray-600">
              Manage residents, bills and communication in one place.
            </p>
          </div>


          <div className="rounded-2xl bg-emerald-50 p-6">
            <h3 className="text-xl font-bold text-emerald-700">
              Better Communities
            </h3>
            <p className="mt-2 text-gray-600">
              Making society operations simple and transparent.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
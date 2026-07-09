export default function Contact() {
  return (
    <div className="min-h-screen bg-white px-6 py-20">

      <div className="mx-auto max-w-3xl">

        <h1 className="text-center text-5xl font-bold text-gray-900">
          Contact Us
        </h1>


        <div className="mt-10 rounded-3xl bg-emerald-50 p-8">

          <h2 className="text-2xl font-bold">
            Get in Touch
          </h2>

          <p className="mt-4 text-gray-600">
            Have questions about Gharkul or want to bring smart
            management to your society?
          </p>


          <div className="mt-6 space-y-3">

            <p>
              📧 Email:
              <span className="ml-2 font-semibold">
                support@gharkul.com
              </span>
            </p>


            <p>
              📞 Phone:
              <span className="ml-2 font-semibold">
                +91 98765 43210
              </span>
            </p>


            <p>
              📍 Location:
              <span className="ml-2 font-semibold">
                Mumbai, India
              </span>
            </p>

          </div>

        </div>


      </div>

    </div>
  );
}
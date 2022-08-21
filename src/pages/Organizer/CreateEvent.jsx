import React from "react";

function CreateEvent() {
  return (
    <div className="bg-gray-100">
      <div className="pt-12 sm:pt-16 lg:pt-20 background-new-ticket">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="mt-6">
              <button
                href="#"
                className="items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800"
              >
                Add event hero image
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-100" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto overflow-hidden lg:max-w-none lg:flex">
              <div className="flex-1 px-6 py-8 lg:p-12 head-container">
                <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
                  <input className="bg-gray-100" placeholder="Event Name" />
                </h3>
                <div className="ticket-details-main-container">
                  <div className="ticket-details-container">
                    <p className="mt-6 text-base text-black-500 ticket-detail-1">
                      0
                    </p>
                    <p className="mt-6 text-base text-black-500 ticket-detail-2">
                      Tickets
                    </p>
                  </div>
                  <div className="ticket-details-container">
                    <p className="mt-6 text-base text-black-500 ticket-detail-1">
                      0
                    </p>
                    <p className="mt-6 text-base text-black-500 ticket-detail-2">
                      Owners
                    </p>
                  </div>
                  <div className="ticket-details-container">
                    <p className="mt-6 text-base text-black-500 ticket-detail-1">
                      Set Date
                    </p>
                    <p className="mt-6 text-base text-black-500 ticket-detail-2">
                      Days left
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
              <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
                  Ticket group #1
                </h3>
                <p className="mt-6 text-base text-gray-500">
                  Add detail about your event
                </p>
                <div className="mt-8">
                  <div>
                    <label>
                      Price
                    </label>
                    <input />
                  </div>
                </div>
              </div>
              <div className="py-8 px-6 text-center bg-gray-100 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                <div className="mt-6">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800"
                    >
                      Add event artwork
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-4">
              <button
                href="#"
                className="items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800"
              >
                Add event hero image
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateEvent;

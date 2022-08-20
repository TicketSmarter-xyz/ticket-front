import React from "react";
import "./modal-signup.styles.css";

export default function ModalSignUp() {
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight">
            <span className="block">Your all access pass to the world’s best artists and events</span>
            <span className="block instructions">Create an account to buy tickets from your favorite artists and be the first to know when there’s a new drop. </span>
            {/* <span className="block">Start your free trial today.</span> */}
          </h2>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                WalletConnect
              </a>
            </div>
            <div className="ml-3 inline-flex">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
              >
                Google
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
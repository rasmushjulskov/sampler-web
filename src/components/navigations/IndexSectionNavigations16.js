import React from 'react';

export default function IndexSectionNavigations16() {
    return (
        <React.Fragment>
            <>
                <section>
  <nav className="bg-gray-900">
    <div className="container mx-auto px-4">
    </div>
  </nav>
  <div className="hidden fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50">
    <div className="fixed inset-0 bg-teal-800 opacity-70" />
    <nav className="relative flex flex-col py-6 px-10 w-full h-full bg-white overflow-y-auto">
      <div className="flex mb-auto items-center">
        <a className="inline-block mr-auto" href="#">
          <img className="h-10" src="aurora-assets/logos/aurora-logo.svg" alt />
        </a>
        <button>
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18L18 6M6 6L18 18" stroke="#111827" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <div className="py-12 mb-auto">
        <ul className="flex-col">
          <li className="mb-6"><a className="inline-block text-black" href="#">Product</a></li>
          <li className="mb-6"><a className="inline-block text-black" href="#">Features</a></li>
          <li className="mb-6"><a className="inline-block text-black" href="#">Pricing</a></li>
          <li><a className="inline-block text-black" href="#">Resources</a></li>
        </ul>
      </div>
      <div><a className="flex items-center justify-center h-12 mb-4 px-4 text-center text-base text-gray-700 font-semibold border border-gray-200 hover:bg-gray-100 shadow-lg rounded-lg transition duration-200" href="#">Login</a><a className="flex items-center justify-center h-12 px-4 text-center text-base text-white font-semibold bg-gradient-to-b from-cyanGreen-800 to-cyan-800 rounded-lg transition duration-200" href="#">Get Started</a></div>
    </nav>
  </div>
</section>


            </>
        </React.Fragment>
    );
}


import React from 'react';

export default function IndexSectionHeadersDark1() {
    return (
        <React.Fragment>
            <>
                <section className="relative bg-gray-900 pb-12 md:pb-24">
  <nav className="relative">
    <div className="container mx-auto px-4">
      <div className="relative flex h-24 items-center">
        <a className="inline-block" href="#">
          <img className="h-10" src="aurora-assets/logos/aurora-logo-white.svg" alt />
        </a>
        <button className="lg:hidden flex items-center justify-center h-10 w-10 ml-auto border border-teal-900 bg-teal-200 bg-opacity-30 hover:bg-teal-700 rounded-lg">
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 12H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 19H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center">
          <a className="inline-block text-white hover:text-teal-400 mr-10" href="#">
            <div className="flex items-center">
              <span className="mr-3">Product</span>
              <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </a>
          <a className="inline-block text-white hover:text-teal-400 mr-10" href="#">Features</a><a className="inline-block text-white hover:text-teal-400 mr-10" href="#">Pricing</a><a className="inline-block text-white hover:text-teal-400" href="#">Resources</a>
        </div>
        <div className="hidden lg:block ml-auto">
          <a className="inline-flex items-center justify-center h-10 mr-4 px-4 text-center text-sm text-white hover:text-teal-400 font-semibold transition duration-200" href="#">Login</a>
          <a className="group inline-block justify-center p-1 text-center text-sm text-white font-semibold rounded-lg" href="#">
            <div className="inline-flex items-stretch h-10 p-0.5 rounded-lg bg-gradient-to-b from-gray-500 via-gray-700 to-gray-700 hover:to-gray-800">
              <div className="flex items-center px-4 bg-gray-700 group-hover:bg-opacity-40 rounded-md transition duration-300">
                <span>Get Started</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </nav>
  <div className="container px-4 mx-auto">
    <div className="relative py-16 pb-20 xs:pb-40 md:pb-72 px-2 xs:px-8 bg-gray-800 rounded-3xl overflow-hidden">
      <div className="relative max-w-lg lg:max-w-3xl mb-14 mx-auto text-center">
        <div className="max-w-lg md:max-w-2xl px-4 mx-auto">
          <h1 className="font-heading tracking-tight text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Your marketing assets, at your fingertips.</h1>
          <p className="max-w-lg mx-auto text-lg text-gray-300 mb-10">Empowers marketing team to easily store, organize, and access valuable assets from anywhere.</p>
          <a className="group relative flex xs:inline-flex items-center justify-center h-12 px-5 text-center text-base text-teal-800 font-bold bg-white rounded-lg transition duration-300" href="#">
            <div className="absolute top-0 left-0 w-full h-full rounded-lg ring ring-teal-700 animate-pulse group-hover:ring-0 transition duration-300" />
            <span>Get Started</span>
          </a>
        </div>
      </div>
    </div>
    <img className="relative block mx-auto px-12 lg:px-8 -mt-20 xs:-mt-40 md:-mt-64" src="aurora-assets/headers/header-2-center.png" alt />
  </div>
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


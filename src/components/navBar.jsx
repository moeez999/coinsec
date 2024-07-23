import React, { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full z-10">
      <div className="max-w-7xl mx-auto">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <img
                  src="menu.png"
                  alt="Close"
                  className="block h-6 w-6"
                  aria-hidden="true"
                />
              ) : (
                <img
                  src="menu.png"
                  alt="Menu"
                  className="block h-6 w-6"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-between sm:items-center">
            <div className="flex-shrink-0">
              <img className="h-auto w-auto" src="logo.png" alt="Logo" />
            </div>
            <div className="hidden sm:flex sm:gap-x-4">
              <a
                href="#"
                className="text-primary-light px-3 py-2 rounded-md text-base font-medium"
              >
                Blockchain Explorer
              </a>
              <a
                href="#"
                className="text-primary-light px-3 py-2 rounded-md text-base font-medium"
              >
                Our Network
              </a>
              <a
                href="#"
                className="text-primary-light px-3 py-2 rounded-md text-base font-medium"
              >
                Status
              </a>
              <a
                href="#"
                className="text-primary-light px-3 py-2 rounded-md text-base font-medium"
              >
                Mining Pool
              </a>
              <a
                href="#"
                className="text-primary-light px-3 py-2 rounded-md text-base font-medium"
              >
                Whitepaper
              </a>
            </div>
            <div className="hidden sm:flex sm:items-center gap-x-16">
              <img src="language.png" alt="Language" className="h-6 w-6" />
              <img src="search.png" alt="Search" className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="flex flex-col px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="text-primary-light px-3 py-2 rounded-md text-base font-medium"
            >
              Blockchain Explorer
            </a>
            <a
              href="#"
              className="text-primary-light px-3 py-2 rounded-md text-base font-medium"
            >
              Our Network
            </a>
            <a
              href="#"
              className="text-primary-light px-3 py-2 rounded-md text-base font-medium"
            >
              Status
            </a>
            <a
              href="#"
              className="text-primary-light px-3 py-2 rounded-md text-base font-medium"
            >
              Mining Pool
            </a>
            <a
              href="#"
              className="text-primary-light px-3 py-2 rounded-md text-base font-medium"
            >
              Whitepaper
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

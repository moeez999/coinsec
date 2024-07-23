import React from "react";

export default function Footer() {
  return (
    <footer className="mt-16 px-4 md:px-6 lg:px-10  ">
      <div className="flex flex-col md:flex-row justify-between ">
        <div className="flex justify-center md:block">
          <img src="logo.png" alt="" />
        </div>
        <div className="block md:hidden">
          <ul className="text-primary-light flex justify-center gap-4">
            <li className="text-start mt-2">Terms of Use</li>
            <li className="text-start mt-2">Legal Disclaimer</li>
            <li className="text-start mt-2">Privacy Policy</li>
          </ul>
        </div>
        <div className="hidden md:block">
          <ul className="text-primary-light">
            <li className="text-start mt-2">Explorer</li>
            <li className="text-start mt-2">Our Network</li>
            <li className="text-start mt-2">Status</li>
            <li className="text-start mt-2">Mining Pool</li>
          </ul>
        </div>
        <div className="hidden md:block">
          <ul className="text-primary-light">
            <li className="text-start mt-2">GitHub</li>
            <li className="text-start mt-2">Documentation</li>
            <li className="text-start mt-2"> Research </li>
            <li className="text-start mt-2">Ecosystem</li>
          </ul>
        </div>
        <div className="hidden md:block">
          <ul className="text-primary-light">
            <li className="text-start mt-2">Terms & Conditions</li>
            <li className="text-start mt-2">Terms of Use </li>
            <li className="text-start mt-2">Privacy Policy </li>
            <li className="text-start mt-2">Legal Disclaimer</li>
          </ul>
        </div>
        <div>
          <p className="text-primary-light mt-4 md:mt-0">Connect with us on</p>
          <ul className="flex justify-center gap-4">
            <li className="text-start mt-2">
              <img src="linkedin.png" alt="" />
            </li>
            <li className="text-start mt-2">
              <img src="x-logo.png" alt="" />
            </li>
            <li className="text-start mt-2">
              <img src="vector.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
      <p className="text-primary-light text-center mt-12 mb-4 text-xs">
        2024 COINSEC Foundation. All rights reserved.
      </p>
    </footer>
  );
}

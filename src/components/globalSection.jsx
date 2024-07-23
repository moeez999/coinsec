import React from "react";

export default function GlobalSection() {
  return (
    <div className="px-4 md:px-6 lg:px-10 mt-16">
      <h1 className="text-primary-light text-start text-2xl md:text-3xl mt-6">
        A Geographically Distributed Mining Network
      </h1>
      <p className="text-primary-light text-base md:text-lg text-start mt-8">
        The COINSEC Network features a robust, geographically distributed global
        network of miners and block validators, strategically designed to
        enhance security and resilience across its operations. Supported
        exclusively by 100% renewable energy sources—solar, wind, hydroelectric,
        geothermal, and biomass—the network's digital infrastructure ensures not
        only sustainability but also a high level of energy efficiency. This
        setup not only secures transactions but also mitigates environmental
        impact, aligning with our commitment to eco-friendly practices and
        reducing the carbon footprint in blockchain operations.
      </p>
      <p className="text-primary-light text-base md:text-lg text-start mt-2">
        Moreover, the COINSEC Network actively supports renewable energy
        projects, incentivizing and rewarding investments that further improve
        energy efficiencies and promote sustainable development worldwide. By
        integrating cutting-edge technology with a focus on security,
        scalability, and sustainability, the COINSEC Network establishes itself
        as a leading platform for enterprise and financial applications.
      </p>
      <div className="flex justify-center my-8">
        <img className="w-full" src="global.png" alt="" />
      </div>
    </div>
  );
}

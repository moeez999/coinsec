import React from "react";

export default function TokenmicsSection() {
  return (
    <div className="mt-16 px-4 md:px-6 lg:px-10">
      <h1 className="text-primary-light text-start text-2xl md:text-3xl mt-6">
        Tokenomics
      </h1>
      <div className="flex justify-center my-8">
        <img className="w-full md:w-[75%]" src="tokenomics.png" alt="" />
      </div>

      <h1 className="text-primary-light text-start text-2xl md:text-3xl mt-6">
        RoadMap
      </h1>

      <ul className="list-decimal ml-8 text-start text-primary-light">
        <li className="mt-2">
          Concept Development and Planning (Q3 2023 - Q4 2023)
        </li>
        <li className="mt-2">
          Core Settlement Layer Development (Q3 2024 - Q4 2024)
        </li>
        <li className="mt-2">
          Token Generation Event (TGE) and Presale (Q3 2024 - Q4 2024)
        </li>
        <li className="mt-2">Smart Contract Integration (Q1 2025 - Q2 2025)</li>
        <li className="mt-2">
          Renewable Energy Mining Initiative (Q2 2025 - Q3 2025)
        </li>
        <li className="mt-2">
          Network Launch and Initial Use Case Deployment (Q2 2025 - Q3 2025)
        </li>
        <li className="mt-2">
          Ecosystem Development and Expansion (Q3 2025 - Q4 2025)
        </li>
        <li className="mt-2">
          Enhanced Compliance and Security Measures (Q3 2025 - Q4 2025)
        </li>
        <li className="mt-2">
          Global Expansion and Adoption (Q3 2025 - Q4 2025)
        </li>
        <li className="mt-2">
          Continuous Innovation and Improvement (Ongoing from Q1 2026)
        </li>
      </ul>
    </div>
  );
}

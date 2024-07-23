import React from "react";

export default function EmissionSection() {
  return (
    <div className="mt-16 px-4 md:px-6 lg:px-10">
      <h1 className="text-primary-light text-start text-2xl md:text-3xl mt-6">
        Emission Schedule
      </h1>

      <h3 className="text-primary-light text-start text-xl mt-6 font-semibold">
        Pre-deflationary Phase
      </h3>
      <p className="text-primary-light text-base md:text-lg text-start mt-4">
        Our blockchain begins with a dynamic phase designed to establish a
        robust foundation for sustainable growth and distribution. During the
        initial 6-month period, starting from the genesis block, miners will
        earn rewards at a competitive rate per block. This phase aims to
        incentivize early adoption and network security, ensuring a fair
        distribution of tokens.
      </p>
      <h3 className="text-primary-light text-start text-xl mt-6 font-semibold">
        Chromatic Phase
      </h3>
      <p className="text-primary-light text-base md:text-lg text-start mt-4">
        Chromatic Phase Following the Pre-deflationary Phase, the emission model
        transitions into a structured Chromatic Phase. This phase is
        characterized by a gradual reduction in block rewards over time,
        aligning with our commitment to controlled supply and economic
        sustainability. Starting with an initial block reward that decreases
        monthly according to a geometrically decreasing formula, this approach
        ensures a steady reduction in token issuance as the network matures.
      </p>

      <h3 className="text-primary-light text-start text-xl mt-6 font-semibold">
        Emission Milestones
      </h3>
      <ul className="list-disc ml-8 text-start text-primary-light">
        <li className="mt-2">
          <strong>Year 1:</strong> Significant tokens will be emitted during the
          initial year of the Chromatic Phase.
        </li>
        <li className="mt-2">
          <strong>Year 5:</strong> By the fifth year, a substantial portion of
          the emission rewards will have been distributed, supporting continued
          network development and adoption.
        </li>
        <li className="mt-2">
          <strong>Year 10:</strong> Nearly all emission rewards will have been
          distributed, marking a significant milestone in our emission schedule
          and economic model.
        </li>
      </ul>

      <h3 className="text-primary-light text-start text-xl md:text-2xl mt-6 font-semibold">
        Adjustment Mechanisms
      </h3>
      <p className="text-primary-light text-base md:text-lg text-start mt-4">
        Our emission schedule is designed to be adaptive. We maintain
        flexibility to adjust emission parameters based on network performance,
        market conditions, and community feedback. Regular reviews ensure
        alignment with our goal of sustainable growth and ecosystem development.
      </p>

      <h3 className="text-primary-light text-start text-xl md:text-2xl mt-6 font-semibold">
        Governance and Transparency
      </h3>
      <p className="text-primary-light text-base md:text-lg text-start mt-4">
        Transparency and governance are integral to our emission policy.
        Decisions regarding emission adjustments are made transparently, with
        community and stakeholder input playing a crucial role in shaping the
        future of our blockchain's economic model.
      </p>

      <h3 className="text-primary-light text-start text-xl md:text-2xl mt-6 font-semibold">
        Conclusion
      </h3>
      <p className="text-primary-light text-base md:text-lg text-start mt-4">
        The COINSEC Network's emission schedule is designed to balance fair
        distribution, incentivize network participants, and support long-term
        sustainability. By implementing a phased approach to emission reduction
        and incorporating feedback mechanisms, we aim to build a resilient
        blockchain ecosystem that serves the needs of our community and
        stakeholders.
      </p>
    </div>
  );
}

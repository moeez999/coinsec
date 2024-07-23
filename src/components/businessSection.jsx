import React from "react";

export default function BusinessSection() {
  return (
    <div className="px-4 md:px-6 lg:px-10 mt-16">
      <h1 className="text-primary-light text-start text-2xl md:text-3xl mt-6">
        The COINSEC Network: Pioneering Blockchain Innovation for Real Business
        Use Cases
      </h1>
      <p className="text-primary-light text-base md:text-lg text-start mt-8">
        The COINSEC Network represents a groundbreaking advancement in
        blockchain technology, purpose-built to meet the escalating demands of
        modern businesses, financial institutions, and governments. At its core
        is a decentralized, smart contract-enabled settlement layer, powered by
        a state-of-the-art Proof-of-Work (PoW) engine using BlockDAG technology.
        This setup enables swift, parallel block processing and instantaneous
        transaction confirmations. Complementing this core infrastructure is a
        robust network of Layer 2 ZK Hyperchains tailored to the needs of
        enterprises, financial institutions, and governments.
      </p>
      <p className="text-primary-light text-base md:text-lg text-start mt-2">
        This architecture not only delivers efficient transaction processing and
        enhanced scalability but also drives significant cost reductions for its
        users. By integrating cutting-edge technology with a focus on security,
        scalability, and sustainability, the COINSEC Network establishes itself
        as a leading platform for enterprise and financial applications.
      </p>
      <div className="flex justify-center my-8">
        <img className="w-full md:w-[75%]" src="business.png" alt="" />
      </div>
    </div>
  );
}

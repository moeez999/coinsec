import React from "react";

export default function PaymentNetwrok() {
  return (
    <div className="mt-16 px-4 md:px-6 lg:px-10">
      <div>
        <h1 className="text-primary-light text-start text-2xl md:text-3xl mt-6">
          A Global Real-Time Payments Network
        </h1>
        <p className="text-primary-light text-base md:text-lg text-start mt-8">
          The COINSEC Network stands as a cutting-edge real-time payments
          network, designed to facilitate seamless global real-time transactions
          for a range of use cases.
        </p>
        <p className="text-primary-light text-base md:text-lg text-start mt-2">
          <strong>Transaction Speed:</strong> Capable of processing up to 32
          blocks per second, providing almost instant transaction confirmations.
        </p>
        <p className="text-primary-light text-base md:text-lg text-start mt-2">
          <strong>Payment Functions/Applications:</strong> Supports a wide range
          of functions including:
        </p>
        <ul className="list-disc ml-8 text-start text-primary-light">
          <li className="mt-2">
            Merchant Payments: Facilitates swift and secure payments for
            merchants.
          </li>
          <li className="mt-2">
            Cross-Border Transactions: Enables seamless payments across borders,
            reducing costs and limitations.
          </li>
          <li className="mt-2">
            Peer-to-Peer Transfers: Supports fast and secure transactions
            between individuals.
          </li>
        </ul>
        <p className="text-primary-light text-base md:text-lg text-start mt-2">
          <strong>Integration:</strong> Integrates seamlessly with existing
          global real-time banking payment systems—Faster Payments Service (FPS)
          (UK), SEPA Instant Credit Transfer (SCT Inst) (EU), Real-Time Payments
          (RTP) (US), FedNow (US), UPI (Unified Payments Interface) (India), New
          Payments Platform (NPP) (AU), Fast and Secure Transfers (FAST) -
          Singapore etc.
        </p>
        <p className="text-primary-light text-base md:text-lg text-start mt-2">
          <strong>Target Audience:</strong> Tailored to meet the stringent
          demands of modern businesses, financial institutions, and governments.
        </p>
      </div>
      <div className="mt-16">
        <img src="paymentnetwork.png" alt="" />
      </div>
      <div className="mt-16">
        <h1 className="text-primary-light text-start text-2xl md:text-3xl mt-6">
          The COINSEC Network Architecture
        </h1>
        <h1 className="text-primary-light text-start text-xl md:text-2xl mt-6">
          The Fastest Layer 1 Blockchain
        </h1>
        <p className="text-primary-light text-base md:text-lg text-start mt-2">
          The COINSEC Network leverages the fastest and most advanced blockchain
          technology, meeting the rigorous demands of modern businesses,
          financial institutions, and governments for a secure, scalable, and
          sustainable digital infrastructure. At its core is a decentralized,
          smart contract-enabled settlement layer powered by an advanced
          Proof-of-Work (PoW) consensus mechanism. This foundation is
          strengthened by BlockDAG technology, which enables parallel block
          processing and ensures sub-second transaction confirmations.
        </p>
        <h1 className="text-primary-light text-start text-xl md:text-2xl mt-6">
          Interconnected ZK Hyperchain Network
        </h1>
        <p className="text-primary-light text-base md:text-lg text-start mt-2">
          Complementing this robust settlement layer are a network of
          interconnected Layer 2 ZK Hyperchains. These chains significantly
          enhance scalability and transaction throughput, integrating advanced
          Zero-Knowledge (ZK) technology to ensure heightened privacy and
          security. By leveraging zk-SNARKs (Zero-Knowledge Succinct
          Non-Interactive Arguments of Knowledge) and zk-STARKs (Zero-Knowledge
          Scalable Transparent Arguments of Knowledge), the COINSEC Network
          caters to the diverse and stringent requirements of enterprise and
          government applications. This ensures that transactions remain private
          and secure while also providing the scalability and transparency
          necessary for high-volume, high-stakes use cases.
        </p>
        <div className="mt-16 flex justify-center">
          <img src="payment2.png" alt="" />
        </div>
      </div>
    </div>
  );
}

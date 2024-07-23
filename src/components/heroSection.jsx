import React from "react";

export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row gap-6 px-6 py-10">
      <div className="border-2 border-primary-light flex flex-col justify-center items-center rounded-sm md:hidden">
        <h2 className="text-primary-light font-semibold text-center text-2xl md:text-3xl mt-6">
          SEC Token Presale Ends in
        </h2>

        <div className="flex flex-row gap-4 justify-center px-8 mt-4 w-full">
          <p className="bg-primary-light rounded-md px-4 lg:px-6 xl:px-14 py-1 text-primary-dark flex flex-col items-center font-medium">
            25
            <span className="text-[10px]">Days</span>
          </p>
          <p className="bg-primary-light rounded-md px-4 lg:px-6  xl:px-14 py-1 text-primary-dark flex flex-col items-center font-medium">
            8<span className="text-[10px]">Hours</span>
          </p>
          <p className="bg-primary-light rounded-md px-4 lg:px-6  xl:px-14 py-1 text-primary-dark flex flex-col items-center font-medium">
            40
            <span className="text-[10px]">Minutes</span>
          </p>
          <p className="bg-primary-light rounded-md px-4 lg:px-6  xl:px-14 py-1 text-primary-dark flex flex-col items-center font-medium">
            55
            <span className="text-[10px]">Seconds</span>
          </p>
        </div>

        <div className="flex justify-center text-center mt-6 w-full px-1">
          <p className="  py-2 lg:px-2  xl:px-10 text-primary-light lg:text-xs text-[10px] xl:text-sm text-center border-2 border-primary-light rounded-l-sm">
            Presale Price: $1.00
          </p>
          <p className=" px-1 py-2 lg:px-2  xl:px-10 text-primary-light lg:text-xs text-[10px] xl:text-sm text-center border-y-2 border-primary-light">
            Tokens: 10 Million
          </p>
          <p className=" px-1 py-2 lg:px-2  xl:px-10 text-primary-light lg:text-xs text-[10px] xl:text-sm text-center border-2 border-primary-light rounded-r-sm">
            End Date: 31/07/2024
          </p>
        </div>

        <div className="mt-6">
          <div className="flex flex-row gap-4 justify-center">
            <p className="text-primary-light flex items-center gap-2  lg:text-xs text-[10px] xl:text-sm border-2 border-primary-light rounded-md px-2 md:px-4 py-1">
              <img src="3.png" alt="" />
              ETH
            </p>
            <p className="text-primary-light flex items-center gap-2  lg:text-xs text-[10px] xl:text-sm border-2 border-primary-light rounded-md px-2 md:px-4 py-1">
              <img src="1.png" alt="" />
              USDT
            </p>
            <p className="text-primary-light flex items-center gap-2  lg:text-xs text-[10px] xl:text-sm border-2 border-primary-light rounded-md px-2 md:px-4 py-1">
              <img src="2.png" alt="" />
              USDC
            </p>
          </div>
          <p className="text-primary-light text-[10px] text-center mt-2">
            Accepted Digital Currencies
            <span className="font-medium">
              (Supported Networks (Ethereum/Solana))
            </span>
          </p>
        </div>
        <div className="flex flex-row gap-4 justify-center mt-6 px-2 w-full">
          <div className="w-full">
            <label
              className="text-start text-primary-light text-xs"
              htmlFor="send"
            >
              Amount to Send
            </label>
            <div className="flex gap-3 items-center border-2 border-primary-light rounded-md px-4 py-2 w-full text-primary-light">
              <input
                id="send"
                type="number"
                className="bg-transparent outline-none w-full"
              />
              <span className="text-primary-light text-xs">USDT</span>
              <div className="flex flex-col justify-center items-center">
                <span className="text-xs">▲</span>
                <span className="text-xs"> ▼</span>
              </div>
            </div>
          </div>
          <div className="w-full">
            <label
              className="text-start text-primary-light text-xs"
              htmlFor="receive"
            >
              Amount to Receive
            </label>
            <div className=" flex gap-3 items-center border-2 border-primary-light rounded-md px-4 py-2 w-full text-primary-light">
              <input
                id="receive"
                type="number"
                className="bg-transparent outline-none w-full"
              />
              <span className="text-primary-light text-xs">SEC</span>
              <div className="flex flex-col justify-center items-center">
                <span className="text-xs">▲</span>
                <span className="text-xs"> ▼</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6 w-full px-2">
          <button className="border-2 border-primary-light rounded-md px-4 py-3 text-primary-light w-full">
            Buy Now
          </button>
        </div>
        <div className="flex justify-center mt-6 w-full px-2">
          <button className="border-2 bg-primary-light font-semibold border-primary-light rounded-md px-4 py-3 text-primary-dark w-full">
            Connect Wallet
          </button>
        </div>
        <div className="flex justify-center mt-6 w-full px-2 gap-4">
          <p className="text-primary-light text-[10px]">Terms & Conditions </p>
          <p className="text-primary-light text-[10px]">Legal Disclaimer</p>
          <p className="text-primary-light text-[10px]">Privacy policy</p>
        </div>
        <div className=" mt-6 w-full px-2 ">
          <h4 className="text-start text-xs font-bold text-primary-light">
            {" "}
            Disclaimer
          </h4>
          <p className="text-start text-primary-light text-xs my-2 ">
            By proceeding, you agree to our Terms and Conditions, acknowledge
            the risks associated with cryptocurrency investments, and confirm
            that you have read and understood our whitepaper and the associated
            risks. Please ensure you comply with local regulations and seek
            independent financial advice if necessary.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl font-medium text-primary-light text-start">
          The COINSEC Network: A Convergence of Leading Blockchain Technologies
        </h1>
        <h3 className="text-primary-light text-lg text-start font-bold mt-8">
          Key Features
        </h3>
        <ul className="list-disc pl-5">
          <li className="mb-1 text-base text-primary-light text-start">
            <strong>Unified Framework:</strong> Integrates the strengths of
            Bitcoin, Ethereum, Solana, and zkEVM in a single cohesive
            architecture.
          </li>
          <li className="mb-1 text-base text-primary-light text-start">
            <strong>100% Renewable Energy:</strong> Powered entirely by solar,
            wind, hydroelectric, geothermal, and biomass energy sources through
            Proof of Renewable Energy (PoRE), ensuring complete sustainability.
          </li>
          <li className="mb-1 text-base text-primary-light text-start">
            <strong>Advanced BlockDAG Technology:</strong> Employs the latest in
            BlockDAG tech with parallel block processing.
          </li>
          <li className="mb-1 text-base text-primary-light text-start">
            <strong>Sub-Second Block Times:</strong> Achieves sub-second block
            times and up to 32 blocks per second for rapid transaction
            processing.
          </li>
          <li className="mb-1 text-base text-primary-light text-start">
            <strong>Instantaneous Transaction Confirmations:</strong> Provides
            near-instant transaction settlement confirmations to support global
            real-time payments.
          </li>
          <li className="mb-1 text-base text-primary-light text-start">
            <strong>Base Settlement Layer:</strong> Serves as the primary
            settlement layer for COINSEC’s Business and Financial Network
            including the Real-Time Payments Network.
          </li>
          <li className="mb-1 text-base text-primary-light text-start">
            <strong>Smart Contracts Integration:</strong> Facilitates the use of
            smart contracts through pioneering SEC-20, SEC-721, and SEC-1400
            token standards aimed at addressing key issues with existing smart
            contract standards.
          </li>
          <li className="mb-1 text-base text-primary-light text-start">
            <strong>Exchange Utility Token:</strong> Designed to integrate with
            the COINSEC International Exchange and Global Institutional Custody
            business, serving as its native utility token. It offers users
            trading fee discounts and exclusive benefits.
          </li>
          <li className="mb-1 text-base text-primary-light text-start">
            <strong>SEC Digital Currency:</strong> A secure electronic and
            settlement currency for global, real-time borderless transactions.
          </li>
          <li className="mb-1 text-base text-primary-light text-start">
            <strong>Store of Value:</strong> A store of value for businesses,
            financial institutions, and governments.
          </li>
          <li className="mb-1 text-base text-primary-light text-start">
            <strong>Medium of Exchange:</strong> Fast transaction finality makes
            SEC an effective medium of exchange.
          </li>
          <li className="mb-1 text-base text-primary-light text-start">
            <strong>Purpose-Built:</strong> Specifically designed to meet the
            needs of businesses, financial institutions, and governments.
          </li>
          <li className="mb-1 text-base text-primary-light text-start">
            <strong>Global Miner Network:</strong> A geographically-distributed
            network of miners and block validators ensures robust security and
            resilience.
          </li>
          <li className="mb-1 text-base text-primary-light text-start">
            <strong>Artificial Intelligence:</strong> The COINSEC Network
            leverages cutting-edge artificial intelligence (AI) to optimize and
            enhance overall network performance.
          </li>
          <li className="mb-1 text-base text-primary-light text-start">
            <strong>Supports Renewable Projects:</strong> Incentivizes and
            rewards investments in renewable energy and improvements in
            efficiency.
          </li>
          <li className="mb-1 text-base text-primary-light text-start">
            <strong>Enhanced Security:</strong> Utilizes advanced cryptographic
            techniques and consensus algorithms to ensure data integrity and
            network security.
          </li>
          <li className="mb-1 text-base text-primary-light text-start">
            <strong>Governance Structure:</strong> Operated by a not-for-profit
            organization (NGO) to maintain transparency, compliance, and ethical
            standards.
          </li>
          <li className="mb-1 text-base text-primary-light text-start">
            <strong>Interoperability:</strong> Seamless integration with
            existing blockchain networks and financial systems, enabling smooth
            atomic cross-chain transactions and communications.
          </li>
          <li className="mb-1 text-base text-primary-light text-start">
            <strong>Compliance and Privacy:</strong> Features a network of Layer
            2 ZK Rollups to meet the stringent demands of enterprise and
            government applications.
          </li>
          <li className="mb-1 text-base text-primary-light text-start">
            <strong>Real Business Use Case:</strong> Strong business use case
            with the potential for millions of transactions daily akin to
            Visa/Mastercard and not just a speculative technology or asset.
          </li>
        </ul>
      </div>
      <div className="w-full md:w-1/2">
        <div className="border-2 border-primary-light md:flex flex-col justify-center items-center rounded-sm hidden">
          <h2 className="text-primary-light font-semibold text-center text-2xl md:text-3xl mt-6">
            SEC Token Presale Ends in
          </h2>

          <div className="flex flex-row gap-4 justify-center px-8 mt-4 w-full">
            <p className="bg-primary-light rounded-md px-4 lg:px-6 xl:px-14 py-1 text-primary-dark flex flex-col items-center font-medium">
              25
              <span className="text-xs">Days</span>
            </p>
            <p className="bg-primary-light rounded-md px-4 lg:px-6  xl:px-14 py-1 text-primary-dark flex flex-col items-center font-medium">
              8<span className="text-xs">Hours</span>
            </p>
            <p className="bg-primary-light rounded-md px-4 lg:px-6  xl:px-14 py-1 text-primary-dark flex flex-col items-center font-medium">
              40
              <span className="text-xs">Minutes</span>
            </p>
            <p className="bg-primary-light rounded-md px-4 lg:px-6  xl:px-14 py-1 text-primary-dark flex flex-col items-center font-medium">
              55
              <span className="text-xs">Seconds</span>
            </p>
          </div>

          <div className="flex justify-center text-center mt-6 w-full">
            <p className=" px-2 py-2 lg:px-2  xl:px-10 text-primary-light lg:text-xs text-[10px] xl:text-sm text-center border-2 border-primary-light rounded-l-sm">
              Presale Price: $1.00
            </p>
            <p className=" px-2 py-2 lg:px-2  xl:px-10 text-primary-light lg:text-xs text-[10px] xl:text-sm text-center border-y-2 border-primary-light">
              Tokens: 10 Million
            </p>
            <p className=" px-2 py-2 lg:px-2  xl:px-10 text-primary-light lg:text-xs text-[10px] xl:text-sm text-center border-2 border-primary-light rounded-r-sm">
              End Date: 31/07/2024
            </p>
          </div>

          <div className="mt-6">
            <div className="flex flex-row gap-8 justify-center">
              <p className="text-primary-light flex items-center gap-2  lg:text-xs text-[10px] xl:text-sm border-2 border-primary-light rounded-md px-2 md:px-4 py-1">
                <img src="3.png" alt="" />
                ETH
              </p>
              <p className="text-primary-light flex items-center gap-2  lg:text-xs text-[10px] xl:text-sm border-2 border-primary-light rounded-md px-2 md:px-4 py-1">
                <img src="1.png" alt="" />
                USDT
              </p>
              <p className="text-primary-light flex items-center gap-2  lg:text-xs text-[10px] xl:text-sm border-2 border-primary-light rounded-md px-2 md:px-4 py-1">
                <img src="2.png" alt="" />
                USDC
              </p>
            </div>
            <p className="text-primary-light text-[10px] text-center mt-2">
              Accepted Digital Currencies
              <span className="font-medium">
                (Supported Networks (Ethereum/Solana))
              </span>
            </p>
          </div>
          <div className="flex flex-row gap-4 justify-center mt-6 px-10 w-full">
            <div className="w-full">
              <label
                className="text-start text-primary-light text-xs"
                htmlFor="send"
              >
                Amount to Send
              </label>
              <div className="flex gap-3 items-center border-2 border-primary-light rounded-md px-4 py-3 w-full text-primary-light">
                <input
                  id="send"
                  type="number"
                  className="bg-transparent outline-none w-full"
                />
                <span className="text-primary-light text-base">USDT</span>
                <div className="flex flex-col justify-center items-center">
                  <span className="text-xs">▲</span>
                  <span className="text-xs"> ▼</span>
                </div>
              </div>
            </div>
            <div className="w-full">
              <label
                className="text-start text-primary-light text-xs"
                htmlFor="receive"
              >
                Amount to Receive
              </label>
              <div className=" flex gap-3 items-center border-2 border-primary-light rounded-md px-4 py-3 w-full text-primary-light">
                <input
                  id="receive"
                  type="number"
                  className="bg-transparent outline-none w-full"
                />
                <span className="text-primary-light text-base">SEC</span>
                <div className="flex flex-col justify-center items-center">
                  <span className="text-xs">▲</span>
                  <span className="text-xs"> ▼</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6 w-full px-10">
            <button className="border-2 border-primary-light rounded-md px-4 py-3 text-primary-light w-full">
              Buy Now
            </button>
          </div>
          <div className="flex justify-center mt-6 w-full px-10">
            <button className="border-2 bg-primary-light font-semibold border-primary-light rounded-md px-4 py-3 text-primary-dark w-full">
              Connect Wallet
            </button>
          </div>
          <div className="flex justify-center mt-6 w-full px-10 gap-8">
            <p className="text-primary-light text-xs">Terms & Conditions </p>
            <p className="text-primary-light text-xs">Legal Disclaimer</p>
            <p className="text-primary-light text-xs">Privacy policy</p>
          </div>
          <div className=" mt-6 w-full px-10 ">
            <h4 className="text-start text-xs font-bold text-primary-light">
              {" "}
              Disclaimer
            </h4>
            <p className="text-start text-primary-light text-xs my-2 ">
              By proceeding, you agree to our Terms and Conditions, acknowledge
              the risks associated with cryptocurrency investments, and confirm
              that you have read and understood our whitepaper and the
              associated risks. Please ensure you comply with local regulations
              and seek independent financial advice if necessary.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <img src="sec.png" alt="" />
        </div>
      </div>
    </div>
  );
}

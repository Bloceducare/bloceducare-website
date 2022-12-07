import Image from "next/image";
import React from "react";


function Services() {
  return (
    <section id="services" className="services mb-48">
      <h2 className="text-[#fff] text-center my-4 font-bold text-xl md:text-3xl lg:text-big-x lg:leading-medium-x">Our Services</h2>

      <p className="text-[#5454D4] text-center text-base lg:text-x-small lg:leading-small my-12">
        We are dedicated to providing our clients with the best possible
        solutions for their blockchain development needs. We are
        <br /> confident that our team has the expertise and experience to
        deliver high-quality results that meet our clients' specific
        <br /> requirements.
      </p>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="border-2 border-[#5454D4] h-big  rounded-lg p-12">
            <div className="flex justify-center my-4">
                <Image width={69} height={69} src="/dapp.png" alt="dapp"  />
            </div>
            <h3 className="text-center text-[#fff] text-small leading-small my-4">Dapp Development</h3>
            <p className="text-center text-[#fff] opacity-70 text-small leading-small">Smart Contracts, Dapps and DAOs, Token Engineering, Payment Solution</p>
        </div>
        <div className="border-2 border-[#5454D4] h-big rounded-lg p-12">
            <div className="flex justify-center my-4">
                <Image width={69} height={69} src="/design.png" alt="dapp"  />
            </div>
            <h3 className="text-center text-[#fff] my-4 text-small leading-small">Design Services</h3>
            <p className="text-center text-[#fff] opacity-70 text-small leading-small">Ui/UX, Branding, Web3 Design, Graphics and NFT Design</p>
        </div>
        <div  className="border-2 border-[#5454D4] h-big  rounded-lg p-12">
            <div className="flex justify-center my-4" >
                <Image width={69} height={69} src="/consult.png" alt="dapp"  />
            </div>
            <h3 className="text-center text-[#fff] my-4 text-small leading-small">Consultant Service</h3>
            <p className="text-center text-[#fff] opacity-70 text-small leading-small">User Research |  Blockchain Training,and Payment solutions</p>
        </div>
      </div>
    </section>
  );
}

export default Services;

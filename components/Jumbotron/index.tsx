import Image from "next/image";
import Link from "next/link";
import React from "react";


function Jumbotron() {
  return (
    <section className="container mx-auto hero">
      <div className="flex items-center space-x-4">
        <div className="w-[50%]">
          <h3 className="text-[#fff] text-sm md:text-2xl lg:text-big lg:leading-medium">
            Top Rated <span className="text-[#5454D4]">Blockchain</span>{" "}
            Development <span className="text-[#5454D4]">Agency</span>
          </h3>
          <p className="text-[#fff] text-xs font-bold my-6 md:text-base lg:text-small-x lg:leading-small">
            Blockchain Education | Community Support <br />
            Dapp and Product Development
          </p>
            <button className="bg-[#5454D4] rounded-md text-[#fff] flex items-center p-2"><Link href="#services">Our Services</Link><span className="ml-4"><img src="/Icon.png" alt="icon" /></span></button>{" "}
        </div>
        <div className="w-[50%]">
          <Image width={908} height={813} src="/hero.png" alt="hero" />
        </div>
      </div>
    </section>
  );
}

export default Jumbotron;

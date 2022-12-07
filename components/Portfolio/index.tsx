import Image from "next/image";
import Link from "next/link";
import React from "react";


function Portfolio() {
  return (
    <section id="projects">
      <h3 className="text-[#fff] md:text-2xl lg:text-big-xx lg:leading-medium-xl my-12 font-bold">
        Our Awesome Portfolio
      </h3>

      <div className="grid grid-cols-2 justify-end gap-8">
        <div>
          <div className="w-[90%]">
            <Image width={600} height={300} src="/hydroswap.png" className="w-full" alt="hydroswap" />
          </div>
          <h2 className="text-[#fff] my-2 text-center font-bold text-small-x leading-small-x">
            <Link
              href="https://www.hydroswap.org/"
              rel="noopener noreferrer"
              target="_blank"
            >
              HydroSwap
            </Link>
          </h2>
        </div>
        <div>
          <div className="w-[90%]">
            <Image width={600} height={300} src="/wakandaswap.png" className="w-full" alt="hydroswap" />
          </div>
          <h2 className="text-[#fff] my-2 text-center font-bold text-small-x leading-small-x">
            <Link
              href="https://dex.wakandainu.com/swap"
              rel="noopener noreferrer"
              target="_blank"
            >
              WKD DEX
            </Link>
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

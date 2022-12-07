import Image from "next/image";
import React from "react";

function Partners() {
  return (
    <section className="brands mb-32">
      <h3 className="text-white text-2xl lg:text-big-xx font-bold lg:medium-xl mb-6">Brands that Trust us</h3>

      <div className="grid grid-cols-4 gap-8 justify-center items-center">
        <div>
            <Image width={200} height={150} src="/hydro.png"  alt="hydro-logo"/>
        </div>
        <div>
            <Image width={289} height={217} src="/web3bridge.png"  alt="web3bridge-logo"/>
        </div>
        <div>
            <Image width={212} height={158} src="/nahmii.png"  alt="nahmii-logo"/>
        </div>
        <div>
            <Image width={208} height={156} src="/wakanda.png"  alt="wakanda-logo"/>
        </div>
      </div>
    </section>
  );
}

export default Partners;

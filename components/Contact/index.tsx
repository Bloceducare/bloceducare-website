import React from "react";
import Link from "next/link";

function Contact() {
  return (
    <section className="my-48">
        <div className="flex items-center space-x-32 justify-between">
            <h2 className="text-[#fff] text-xs md:text-2xl lg:text-big-x lg:leading-medium font-bold">Get in touch with us about<br/> your projects</h2>

            <button className="bg-[#5454D4] rounded-md text-[#fff] font-bold pt-2 pb-2 pl-4 pr-4 md:pt-4 md:pb-4 md:pl-12 md:pr-12 lg:pt-4 lg:pb-4 lg:pl-12 lg:pr-12"><Link href="mailto:Ayodeji@web3bridge.com?subject =Feedback&body=Message">Contact us</Link></button>
        </div>
    </section>
  )
}

export default Contact;

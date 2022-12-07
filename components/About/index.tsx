import React from "react";

function About() {
  return (
    <section id="about" className="mt-32">
      <h3 className="font-bold text-xl md:text-3xl lg:text-big-x text-center lg:leading-medium-x text-[#fff]">
        Launch <span className="text-[#5454D4]">Faster</span> with{" "}
        <span className="text-[#5454D4]">Bloceducare</span>
      </h3>
      <div className="lg:grid lg:grid-cols-2 gap-12 my-12 items-center">
        <p className="text-gray-300 text-base lg:text-x-small my-4  font-normal lg:leading-medium-xx md:my-12 lg:my-0">
          We are a team of experienced professionals specializing in the
          development of blockchain technology solutions for businesses and
          organizations. Our expertise lies in creating custom blockchain
          applications that are secure, scalable, and efficient. With our
          advanced knowledge and expertise in blockchain development, we can
          help you leverage this innovative technology to improve your business
          operations and achieve your desired goals. From developing
          decentralized applications to implementing smart contracts and
          building custom blockchain platforms, we have the skills and expertise
          to deliver high-quality solutions that meet your specific needs and
          requirements.
        </p>

        <div>
          <img src="/chain.png" className="w-full" alt="chain" />
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-2 gap-12 my-12 items-center">

      <div className="hidden md:hidden lg:block">
          <img src="/connect.png" className="w-full" alt="chain" />
        </div>

        <p className="text-gray-300 text-base lg:text-x-small my-4  font-normal lg:leading-medium-xx md:my-12 lg:my-0">
          We are a team of experienced professionals specializing in the
          development of blockchain technology solutions for businesses and
          organizations. Our expertise lies in creating custom blockchain
          applications that are secure, scalable, and efficient. With our
          advanced knowledge and expertise in blockchain development, we can
          help you leverage this innovative technology to improve your business
          operations and achieve your desired goals. From developing
          decentralized applications to implementing smart contracts and
          building custom blockchain platforms, we have the skills and expertise
          to deliver high-quality solutions that meet your specific needs and
          requirements.
        </p>

        <div className=" md:block lg:hidden">
          <img src="/connect.png" className="w-full" alt="chain" />
        </div>
      </div>
    </section>
  );
}

export default About;

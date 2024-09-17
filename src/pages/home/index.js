import React from "react";
import Image from "next/image";
import data from "../../../public/corcesData.json";
import FAQ from "../../components/Faq.jsx";
import Footer from "@/components/Footer";
import ContactSection from "@/components/Contactsection";
const index = () => {
  return (
    <>
      <div className="flex bg-[rgba(41,41,95,1)] w-full h-full  justify-center">
        <div className="w-3/5 my-20 sm:my-48 ">
          <h1 className="text-white  text-4xl font-poppins font-bold mt-0 mb-5">
            Launch your tech career at GWING!
          </h1>
          <p className="text-white font-poppins text-xs">
            Our virtual training and internships equip you with the skills
            towards innovation.
          </p>
          <h1 className="text-white font-poppins font-bold mt-5 ">
            | Strategy | Knowledge | Innovation | Learning | Leadership |
          </h1>
          <p className="text-white font-poppins mt-3 text-xs">
            They are the real essense of the skills.
          </p>

          <div className="flex  bg-[rgba(130,86,255,1)] w-8/12 sm:w-1/3  p-0 sm:p-3 gap-5 font-poppins mt-11 rounded cursor-pointer shadow-[0_0_15px_rgba(130,86,255,0.5)] ">
            <Image src="/images/icon.svg" width={25} height={25}></Image>
            <div className="text-white">
              <p className="text-sm">Are You Ready?</p>
              <h3 className="font-bold">Click Here To Apply</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center bg-[rgba(247,249,252,1)] h-full pb-10  px-2 sm:px-36 font-poppins ">
        <div className="">
          <h1 className="text-[rgba(88,96,130,1)] font-bold text-2xl text-center p-12">
            About <span className="text-[rgba(130,86,255,1)]">US</span>
          </h1>
          <div className="flex flex-col gap-28 md:flex-row ">
            <div className="">
              <h2 className="text-[rgba(130,86,255,1)] mb-6">
                What We do at GWING?
              </h2>
              <p className="text-[rgba(77,85,125,1)] text-sm ">
                At GWING, we fuel extraordinary possibilities through
                technology. We believe innovation empowers individuals and
                organizations to achieve remarkable things. We craft technology
                with a purpose, not just for today, but to build a brighter
                future, together. Our culture is a vibrant tapestry of curiosity
                and unique perspectives. We learn from each other, celebrating
                individual triumphs while knowing our collective strength is
                what truly unlocks potential. We embrace continuous learning,
                acknowledging and working to overcome biases, fostering an
                inclusive environment where everyone thrives.
              </p>
              <p className="text-[rgba(77,85,125,1)] text-sm mt-3 ">
                Beyond the front-end, we delve into blockchain technology,
                offering development and consulting services to harness its
                transformative power. Additionally, we leverage data analytics,
                visualization, NLP, deep learning, and AI/ML to unlock valuable
                insights and drive intelligent solutions.
              </p>
              <div className="flex p-4 max-w-[fit-content] cursor-pointer gap-5 border-2 border-solid border-[rgba(130,86,255,1)] rounded mt-8">
                <Image
                  src="/images/glog-svg.svg"
                  width={25}
                  height={25}
                ></Image>
                <div className="text-[rgba(130,86,255,1)]">
                  <p className="text-sm ">Visit Our</p>
                  <h3 className="font-bold">Company Website</h3>
                </div>
              </div>
            </div>
            <Image
              src="/images/about-us.jpg.svg"
              width={472}
              height={332}
            ></Image>
          </div>
        </div>
      </div>

      <div className="bg-[rgba(255,255,255,1)] w-screen h-auto p-6 md:p-16 lg:p-28">
        <div className="text-center">
          <h1 className="text-[rgba(88,96,130,1)] font-bold text-2xl md:text-3xl mb-4 md:mb-6">
            Our <span className="text-[rgba(130,86,255,1)]">Internship's</span>
          </h1>
          <p className="text-[rgba(77,85,125,1)] text-sm md:text-base w-full md:w-3/4 lg:w-1/2 mx-auto mb-12 md:mb-24">
            Welcome to the thrilling software frontier! Here, code becomes your
            weapon of choice, crafting digital experiences that reshape the
            world. Dive into the diverse domains and unleash your inner
            innovator.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 sm:p-8">
          {data.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded transition-transform duration-300 ease-in-out overflow-hidden hover:scale-105"
            >
              <img
                src={course.image}
                alt={course.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  {course.name}
                </h3>
                <p className="text-gray-600 mt-2 text-sm md:text-base">
                  {course.description}
                </p>
                <button
                  className={`mt-4 px-4 py-2 text-sm font-semibold rounded-lg border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white`}
                >
                  {course.name === "Mobile Development" ||
                  course.name === "Blockchain Development" ||
                  course.name === "Cloud Computing & DevOps"
                    ? "Launching Soon!"
                    : "Register Now!"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <FAQ />
      </div>
      <ContactSection />
      <Footer />
    </>
  );
};

export default index;

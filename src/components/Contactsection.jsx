import React from "react";

const Contactsection = () => {
  return (
    <>
      <div className="bg-[rgba(247,249,252,1)] font-poppins w-screen h-screen flex justify-center">
        <div className="main">
          <form
            action=""
            className="flex flex-col gap-5 p-8 bg-white shadow-lg shadow-[rgba(130,86,255,0.3)] mt-24 mb-0"
          >
            <h1 className="text-[rgba(88,96,130,1)] font-bold font-poppins text-center p-3 pb-4">
              Get In Touch
            </h1>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Name"
                className="border border-solid border-[rgba(202,207,218,1)] rounded-sm p-1"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-solid border-[rgba(202,207,218,1)] rounded-sm p-1"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="border border-solid border-[rgba(202,207,218,1)] rounded-sm p-1"
            />
            <textarea
              placeholder="Massege here..."
              className="border border-solid border-[rgba(202,207,218,1)] rounded-sm p-1"
            />
            <button
              type="submit"
              className="border-2 border-solid ml-auto mr-auto  border-[rgba(130,86,255,1)] text-[rgba(130,86,255,1)] rounded font max-w-fit text-xs font-poppins font-bold p-3"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
      <div className="bg-[rgba(247,249,252,1)] w-full  flex gap-16 justify-center -mt-16">
        <div className="ml-24">
          <img
            src="/images/icons/contact-icon.svg"
            className="text-center ml-auto mr-auto mb-5 size-12"
          ></img>
          <p className="text-xs">+91 8074512642</p>
        </div>
        <div className="">
          <img
            src="/images/icons/location.svg"
            className="text-center ml-auto mr-auto mb-5 size-12"
          ></img>
          <p className="text-xs">Kukkatpally Balanagar, Hyderabad</p>
        </div>
        <div className="">
          <img
            src="/images/icons/message.svg"
            className="text-center ml-auto mr-auto mb-5 size-12"
          ></img>
          <p className="text-xs">gwingsoftwaretechnologies@gmail.com</p>
        </div>
      </div>
      <div className="bg-[rgba(247,249,252,1)] flex-col gap-24 p-4 justify-center text-center">
        <>
          <h1 className="font-poppins text-2xl font-bold text-[rgba(88,96,130,1)] p-16 ">
            Approved & Registered With
          </h1>
          <div className="flex gap-24 ml-96 pl-48">
            <img src="/images/icons/mem-icon.svg" alt="" />
            <img src="/images/icons/aict.svg" alt="" />
          </div>
        </>
      </div>
    </>
  );
};

export default Contactsection;

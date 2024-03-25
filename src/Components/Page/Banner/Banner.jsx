import { Parallax } from "react-parallax";
import { FaAngleRight } from "react-icons/fa";
import "./banner.css";
import img from "../../../assets/download.jpeg";

export const Banner = () => {
  return (
    <div className="  ">
      <Parallax
        className="h-[100vh]   "
        blur={0}
        bgImage={img}
        bgImageAlt="the cat"
        strength={800}
      >
        <div className="md:grid md:grid-cols-2 md:items-center absolute mt-0 md:mt-[6%] md:ml-[10%] md:gap-10">
          <div className=" banner left md:w-[550px] bg-slate-600 px-4">
            <p className=" w-[400px] mx-auto mt-10 text-center text-white text-[17px] leading-[28px] font-[400] my-5">
              Appeal Your Amazon, Walmart or eBay Suspension & Get Your Seller Account or Product
              Listing Reinstated in as Little as (24) Hours with Mari Marketing!{" "}
            </p>
            <ul className="ml-10">
              <li className="my-4 text-yellow-500 font-medium text-xl flex items-center gap-5">
                <FaAngleRight /> 100% Money-Back Guarantee if Not Reinstated{" "}
              </li>
              <li className="my-4 text-yellow-500 font-medium text-xl flex items-center gap-5">
                <FaAngleRight /> FREE & FULL Case Evaluation Before You Pay Anything{" "}
              </li>
              <li className="my-4 text-yellow-500 font-medium text-xl flex items-center gap-5">
                <FaAngleRight /> Repeat Phone Calls into Amazon (for the same case) = FREE{" "}
              </li>
              <li className="my-4 text-yellow-500 font-medium text-xl flex items-center gap-5">
                <FaAngleRight /> Repeat Phone Calls into Amazon (for the same case) = FREE{" "}
              </li>
              <li className="my-4 text-yellow-500 font-medium text-xl flex items-center gap-5">
                <FaAngleRight /> Repeat Phone Calls into Amazon (for the same case) = FREE{" "}
              </li>
            </ul>
            <div className="flex justify-evenly">
              <a className="btn btn-accent my-3 leading-5 w-[170px]" href="#">
                call toll free <br /> +0012345
              </a>
              <a className="btn btn-accent my-3 leading-5 w-[170px]" href="#">
                call to free now <br /> +0012345{" "}
              </a>
            </div>
          </div>
          <div className=" banner right hidden md:block md:w-[550px] h-[550px]  bg-slate-500">
            <h2 className="text-center text-white text-3xl my-5">Submit your information</h2>
            <div className="my-4 flex justify-evenly">
              <input
                className="px-7 rounded h-[50px] outline-none"
                type="text"
                name="Name"
                id="name"
                placeholder="Name"
              />

              <input
                className="px-7 rounded h-[50px] outline-none"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <input
              className=" mb-4 ml-[25px] h-[50px] px-7 w-[450px] outline-none rounded"
              type="number"
              name="number"
              id="number"
              placeholder="Phone"
            />
            <h4 className="text-white text-xl font-[400] ml-5">Contact Preference *</h4>
            <div className=" flex gap-5 ms-5">
              <label htmlFor="email" className="text-white px-2 ">
                  <input type="checkbox" name="email" id="email" /> Email
              </label>
              <label htmlFor="call" className="text-white px-2 ">
                <input type="checkbox" name="call" id="call" />Call
              </label>

              <label htmlFor="Whatsapp" className="text-white px-2 ">
                 <input type="checkbox" name="whatsapp" id="whatsapp" />Whatsapp
              </label>
            </div>
            <h4 className="text-xl text-white ms-5 my-2">What is the suspension for? </h4>
            <div className=" grid  grid-cols-3 gap-5 ms-5">
              <label htmlFor="email" className="text-white px-2 ">
                  <input type="checkbox" name="email" id="email" /> Email
              </label>
              <label htmlFor="call" className="text-white px-2 ">
                <input type="checkbox" name="call" id="call" />Call
              </label>

              <label htmlFor="Whatsapp" className="text-white px-2 ">
                 <input type="checkbox" name="whatsapp" id="whatsapp" />Whatsapp
              </label>
              <label htmlFor="email" className="text-white px-2 ">
                  <input type="checkbox" name="email" id="email" /> Email
              </label>
              <label htmlFor="call" className="text-white px-2 ">
                <input type="checkbox" name="call" id="call" />Call
              </label>

              <label htmlFor="Whatsapp" className="text-white px-2 ">
                 <input type="checkbox" name="whatsapp" id="whatsapp" />Whatsapp
              </label>
              <label htmlFor="email" className="text-white px-2 ">
                  <input type="checkbox" name="email" id="email" /> Email
              </label>
              <label htmlFor="call" className="text-white px-2 ">
                <input type="checkbox" name="call" id="call" />Call
              </label>

              <label htmlFor="Whatsapp" className="text-white px-2 ">
                 <input type="checkbox" name="whatsapp" id="whatsapp" />Whatsapp
              </label>
             
            </div>
           
            <input type="submit" value="Submit" className="text-white btn btn-accent my-10 ms-5" />
          </div>

        </div>
      </Parallax>
    </div>
  );
};

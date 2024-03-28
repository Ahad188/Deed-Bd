import { Parallax } from "react-parallax";
import img from "../../../assets/download.jpeg";

export default function WhychosseUs() {
  return (
    <div className="   my-10 mt-[110px]">
      <Parallax className="md:h-[90vh]   " blur={10} bgImage={img} bgImageAlt="the cat" >
        <div className=" my-10 px-5 md:px-0 bg-white  md:max-w-[800px] py-12 mx-auto rounded-xl shadow-xl" data-aos="zoom-in-up">
          <h2 className="text-5xl text-center text-yellow-500 font-bold leading-[30px] mb-5">
            Why choose us
          </h2>
          <p className="text-xl font-semibold my-4 text-center max-w-[700px] mx-auto text-[#000]">
            I succeed where others have failed, and this is what separates me from the competition!
            No cheap sales talk; just proven results that matter!
          </p>
          <h3 className="text-xl text-[#000] text-center">
            You also obtain the following benefits when using my services:
          </h3>
          <ul className="mt-5 grid md:grid-cols-2 gap-4 my-3 ms-10 px-2">
            <li className="text-[18px] list-disc">
              {" "}
              Fair and Reasonable Prices - Plans Starting at Only 299£!{" "}
            </li>
            <li className="text-[18px] list-disc">
              Free & Full Case Evaluation Before You Pay for Anything!
            </li>
            <li className="text-[18px] list-disc">
              Experienced, Transparent & Reliable Communication!
            </li>
            <li className="text-[18px] list-disc"> Free Plan Revisions if Needed! </li>
            <li className="text-[18px] list-disc">
              {" "}
              Free Calls into Amazon, eBay, or Walmart if Needed!{" "}
            </li>
            <li className="text-[18px] list-disc"> Fast Turn-Around Times! </li>
            <li className="text-[18px] list-disc">
              {" "}
              Appeals Written Directly by Me - NOT Third Parties!{" "}
            </li>
            <li className="text-[18px] list-disc"> 100% Success Rate to Date! </li>
          </ul>
          <h4 className="text-[14px] ms-10 text-[#000]">
            {" "}
            My Goal is to Get You Selling Again Quickly & Efficiently!{" "}
            <a href="#" className="underline text-yellow-500">
              Lets Start
            </a>
          </h4>
        </div>
      </Parallax>
    </div>
  );
}

import { FaMobileAlt ,FaCreditCard,FaUserEdit,FaCloud   } from "react-icons/fa";
export default function PorchesWork() {
  return (
    <div className="mt-[100px] my-10">
      <h2 className="text-center my-4 text-[30px] font-bold" data-aos="fade-down">How The porches Work</h2>
      <ul className="md:flex md:justify-evenly gap-5 my-5 text-center">
        <li className=" text-[16px] font-[500] py-5 text-yellow-500"data-aos="zoom-in-up">
        <FaMobileAlt className="text-[30px] w-[50px]  mx-auto my-2"/>
          Call or Email me</li>
        <li className=" text-[16px] font-[500] py-5 text-yellow-500"data-aos="zoom-in-up">
        <FaCreditCard className="text-[30px] w-[50px]  mx-auto my-2"/>
          FREE Consultation About Case
        </li>
        <li className=" text-[16px] font-[500] py-5 text-yellow-500"data-aos="zoom-in-up">
        <FaUserEdit className="text-[30px] w-[50px]  mx-auto my-2"/>
          Receive & Submit Plan of Action
        </li>
        <li className=" text-[16px] font-[500] py-5 text-yellow-500"data-aos="zoom-in-up">
        <FaCloud className="text-[30px] w-[50px]  mx-auto my-2"/>
          Start Selling Again</li>
      </ul>
    </div>
  );
}

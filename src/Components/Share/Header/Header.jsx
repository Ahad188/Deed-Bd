import { Link } from "react-router-dom";

export const Header = () => {

     const navOptions = <>
     <li className="hover:border-b Hover:border-orange-600"><a className="hover:text-[#ffc600]" href="/">Home</a></li>
     <li className="hover:border-b Hover:border-orange-600"><a className="hover:text-[#ffc600]" href="#">About</a></li>
     <li className="hover:border-b Hover:border-orange-600"><a className="hover:text-[#ffc600]" href="#">Service</a></li>
     <li className="hover:border-b Hover:border-orange-600"><a className="hover:text-[#ffc600]" href="#">Contact</a></li>
     </>

  return (
    <div className="bg-[#2d3647] px-3">
       <div className="navbar font-bold text-[#e8ecef]">
     <div className="navbar-start gap-5">
         <div className="dropdown">
             <label tabIndex={0} className="btn btn-ghost lg:hidden">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
             </label>
             <ul tabIndex={0} className="menu menu-compact dropdown-content mt-1 p-2 shadow  bg-[#2d3647] rounded-box w-52">
                 {navOptions}
             </ul>
         </div>
         <a className="    text-xl"> 
         <img src='https://deedbangladesh.com/dbImages/dbl/deed_logo_500.png' className="w-[120px]" alt="logo" />
          
         </a>
     </div>
     <div className="navbar-center   hidden lg:flex">
         <ul className="menu menu-horizontal px-1  ">
             {navOptions}
             
         </ul>
     </div>
     <div className="navbar-end">
         <Link to='#' className="w-[100px] h-[40px] px-8 py-2 rounded hover:bg-transparent hover:text-[#fff] hover:border-b Hover:border-orange-600 ease-in-out duration-300 transition bg-[#ffc600] text-[#2d3647]"> Blog</Link>
     </div>
 </div>
    </div>
  );
};

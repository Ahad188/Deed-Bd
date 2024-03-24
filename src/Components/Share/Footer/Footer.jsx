 

export const Footer = () => {
  return (
     <footer className="footer p-10 bg-[#2d3647] text-base-content h-[300px] ">
     <aside>
      <img src='https://deedbangladesh.com/dbImages/dbl/deed_logo_500.png' className='w-40  ' alt="logo" />
       <p className="text-[#fff]">ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
     </aside> 
     <nav>
       <h2 className="footer-title text-[#fff]">Services</h2> 
       <a className="link hover:text-[#ffc600] text-[#fff]">Branding</a> 
       <a className="link hover:text-[#ffc600] text-[#fff]">Design</a> 
       <a className="link hover:text-[#ffc600] text-[#fff]">Marketing</a> 
       <a className="link hover:text-[#ffc600] text-[#fff]">Advertisement</a>
     </nav> 
     <nav>
       <h2 className="footer-title text-[#fff]">Company</h2> 
       <a className="link hover:text-[#ffc600] text-[#fff]">About us</a> 
       <a className="link hover:text-[#ffc600] text-[#fff]">Contact</a> 
       <a className="link hover:text-[#ffc600] text-[#fff]">Jobs</a> 
       <a className="link hover:text-[#ffc600] text-[#fff]">Press kit</a>
     </nav> 
     <nav>
       <h2 className="footer-title text-[#fff]">Legal</h2> 
       <a className="link hover:text-[#ffc600] text-[#fff]">Terms of use</a> 
       <a className="link hover:text-[#ffc600] text-[#fff]">Privacy policy</a> 
       <a className="link hover:text-[#ffc600] text-[#fff]">Cookie policy</a>
     </nav>
   </footer>
  )
}

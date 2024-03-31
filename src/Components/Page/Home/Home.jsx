import { Banner } from "../Banner/Banner"
import Brand from "../Brand/Brand"
import ClientSay from "../ClientSay/ClientSay"
import FreeConsultation from "../FrerConstant/FreeConsultation"
import OurSuccess from "../OurSuccess/OurSuccess"
import PorchesWork from "../PorchesWork/PorchesWork"
import Services from "../Service/Services"
import WhychosseUs from "../WhyUs/WhychosseUs"
 

 

export const Home = () => {
  return (
    <div> 
     <Banner></Banner>
     <FreeConsultation></FreeConsultation>
     <Brand></Brand>
     <Services></Services>
     <PorchesWork></PorchesWork>
     <WhychosseUs></WhychosseUs>
     <OurSuccess></OurSuccess>
     <ClientSay></ClientSay>
      
    </div>
  )
}

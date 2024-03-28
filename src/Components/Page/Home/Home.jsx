import { Banner } from "../Banner/Banner"
import FreeConsultation from "../FrerConstant/FreeConsultation"
import OurSuccess from "../OurSuccess/OurSuccess"
import PorchesWork from "../PorchesWork/PorchesWork"
import WhychosseUs from "../WhyUs/WhychosseUs"
 

 

export const Home = () => {
  return (
    <div> 
     <Banner></Banner>
     <FreeConsultation></FreeConsultation>
     <PorchesWork></PorchesWork>
     <WhychosseUs></WhychosseUs>
     <OurSuccess></OurSuccess>
    </div>
  )
}

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function ClientSay() {
      
  return (
    <div className=" px-10 my-10 mt-[100px]">
 
 <h3 className='text-center font-bold text-3xl my-4'>Our client say to us</h3>

 <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide className='my-10'>
          <div className='max-w-[600px] mx-auto border px-3 rounded-xl my-2 shadow-lg'>
               <p className='text-xl text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae totam nesciunt cupiditate tempora in, deserunt veniam ad minus placeat quisquam?</p>
               <h3 className='text-orange-500 text-center font-bold my-4'>Jon De</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className='my-10'>
          <div className='max-w-[600px] mx-auto border px-3 rounded-xl my-2 shadow-lg'>
               <p className='text-xl text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae totam nesciunt cupiditate tempora in, deserunt veniam ad minus placeat quisquam?</p>
               <h3 className='text-orange-500 text-center font-bold my-4'>Jon De</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className='my-10'>
          <div className='max-w-[600px] mx-auto border px-3 rounded-xl my-2 shadow-lg'>
               <p className='text-xl text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae totam nesciunt cupiditate tempora in, deserunt veniam ad minus placeat quisquam?</p>
               <h3 className='text-orange-500 text-center font-bold my-4'>Jon De</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className='my-10'>
          <div className='max-w-[600px] mx-auto border px-3 rounded-xl my-2 shadow-lg'>
               <p className='text-xl text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae totam nesciunt cupiditate tempora in, deserunt veniam ad minus placeat quisquam?</p>
               <h3 className='text-orange-500 text-center font-bold my-4'>Jon De</h3>
          </div>
        </SwiperSlide>
        
         
         
      </Swiper>

     </div>
  )
}

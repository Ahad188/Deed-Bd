import { useForm } from "react-hook-form";

 

 

export default function Contact() {
     const { register, handleSubmit,  } = useForm();
     const onSubmit = (data) =>{
        
         console.log(data);
   
   
   };
     
  return (
    <section className=" my-10 px-10">
     <h3 className="text-center text-3xl">Contact us</h3>

     <div className="grid grid-cols-2 gap-4 my-10 ">
          <div className="h-[500px] rounded-2xl my-20">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.2992968800904!2d88.54366937862056!3d24.544317301485194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fb95c270abd431%3A0xc37784d2cd049a6f!2sDeed%20Bangladesh!5e0!3m2!1sen!2sbd!4v1711961708310!5m2!1sen!2sbd" className="w-full h-full"   ></iframe>
          </div>
          {/* right */}
           <div className=" text-center"  >
           <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-[450px] mx-auto border border-accent border-r-8 border-b-8 p-10 my-20">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Name :</span>
              </label>
              <input
                type="text"
                {...register("Name", { required: true })}
                placeholder="Name"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-xl">Email :</span>
              </label>
              <input
                type="email"
                {...register("Email", { required: true })}
                placeholder="email"
                className="input input-bordered  max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-xl">Phone :</span>
              </label>
              <input
                type="number"
                {...register("phone", { required: true })}
                placeholder="Phone Number"
                className="input input-bordered  max-w-xs"
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-xl">Message:</span>
              </label>
              <textarea
                placeholder="Message"
                className="input input-bordered py-3 max-w-xs"
                {...register("Message", { required: true })}
              />
            </div>
            <div className="form-control mt-6">
              <input type="submit" className="btn bg-accent w-[340px]" value=" Send" />
            </div>
          </div>
        </form>
           </div>
     </div>
     <p className="text-center w-[400px] mx-auto my-5 font-semibold ">
     101 Deed Avenue, Rajshahi 6230
     </p>
    </section>
  )
}

import {Image} from "@nextui-org/react";
import banner from '../assets/davy.jpg'

const Testimonials = () => {
  return (
    <div className='w-full px-10 py-5'>
        <p className='text-2xl text-primary font-semibold text-center   '>What They Say About Us</p>
        <div className="flex justify-center py-5 ">
          <div className="bg-slate-200 rounded-xl md:w-1/2  w-full flex justify-center items-center gap-10  md:flex-row flex-col-reverse">
            <div className="md:basis-1/2 flex basis-10" >
                <Image
                      isBlurred
                                  
                      src={banner}
                      alt="NextUI Album Cover"
                      className="m-4  md:max-h-full rounded-full hidden md:flex"
                  />
            </div>
            <div className="p-4 ">
              <p className="font-semibold py-3 text-secondary">Prescom Limited</p>
              <span className="font-extralight italic py-3 ">Juahub has been a great partner. Their service delivery is impeccable. Not to forget their customer Centricity. We at prescom will forever talk of this.</span>
              <p className="italic py-3 font-extralight text-primary ">David Kamau- Director,Prescom Ltd</p>
    
            </div>

          </div>
        </div>

    </div>
  )
}

export default Testimonials
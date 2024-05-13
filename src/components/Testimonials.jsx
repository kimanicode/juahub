import {Image} from "@nextui-org/react";
import banner from '../assets/davy.jpg'
import wangui from '../assets/wangui.jpg'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  const testimonials = [
    {
      id: 1,
      text: "Juahub Technologies exceeded our expectations with their website development services. Their team took the time to understand our business needs and delivered a website that perfectly reflects our brand identity.",
      name: "David Kamau",
      position: "MD, PRESCOM LTD",
      image: banner
    },
    {
      id: 2,
      text: "Working with Juahub Technologies was a breeze from start to finish. Their expertise and attention to detail were evident throughout the development process, resulting in a website that not only looks great but also performs exceptionally well.",
      name: "Wangui Muthua",
      position: "FOUNDER, INTEGRITET LTD",
      image: wangui // Image file name or URL
    },
    // {
    //   id: 3,
    //   text: "The team was fantastic to work with. They delivered exceptional results on time and within budget.",
    //   name: "David Lee",
    //   position: "Founder, Acme Co.",
    //   image: banner // Image file name or URL
    // },
    // Add more testimonials as needed
  ];
  


  return (
    <div className='w-full px-10 py-5'>
        <p className='text-2xl text-primary font-semibold text-center   '>What They Say About Us</p>
        <div className="flex justify-center py-5  gap-3 md:flex-row flex-col">
        {/* <Slider {...settings}> */}
          

            {testimonials.map((testimonial)=>(
             <div key={testimonial.id} className="flex w-full gap-2">
              <div className="bg-slate-200 rounded-xl  w-full flex justify-center items-center   md:flex-row  flex-col gap-5" >
                <div className="md:basis-1/2 flex basis-10 justify-center items-center" >
                  <Image
                        isBlurred
                                    
                        src={testimonial.image}
                        alt="NextUI Album Cover"
                        className="m-4  md:max-h-full rounded-full  flex justify-center items-center w-1/2 md:w-full"
                    />
              </div>

              <div className="p-4 ">
               
                <span className="font-extralight  py-3 ">{testimonial.text}</span>
                
                <div className=" py-2">
                  <p className="  text-primary font-semibold ">{testimonial.name}</p>
                  <span className="font-extralight italic ">{testimonial.position}</span>

                </div>
      
              </div>

              </div>
             </div>



            ))
            }
          {/* </Slider> */}
          
        </div>

    </div>
  )
}

export default Testimonials
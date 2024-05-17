import React from 'react';
  import { Image } from "@nextui-org/react";
import banner from '../assets/davy.jpg';
import wangui from '../assets/wangui.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,  // Adjusted to show one testimonial at a time for better readability
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
      image: wangui
    },
    // Add more testimonials as needed
  ];

  return (
    <div className='w-full px-10 py-5 bg-gray-100'>
      <p className='text-2xl text-primary font-semibold text-center'>What They Say About Us</p>
      <div className="mt-10 py-6">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex justify-center">
              <div className="bg-slate-200 rounded-xl flex flex-col md:flex-row items-center p-6 w-full md:w-3/5 mx-auto">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                  <Image
                    isBlurred
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full w-24 h-24 md:w-48 md:h-48"
                  />
                </div>
                <div className=" text-gray-700 md:text-left">
                  <p className="text-lg font-light mb-4">{testimonial.text}</p>
                  <div className="mt-4">
                    <p className="text-primary font-semibold">{testimonial.name}</p>
                    <span className="text-gray-500 italic">{testimonial.position}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;

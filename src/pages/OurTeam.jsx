import React from 'react';
import kim from '../assets/kim.jpeg';
import bernard from '../assets/bernard.jpg';
import { Image } from "@nextui-org/react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"



const OurTeam = () => {
  const teamMembers = [
    { name: 'Kimani Karaba', role: 'CEO & Lead Frontend Engineer', image: kim },
    { name: 'Bernard Kariuki', role: 'CTO & Lead Backend Engineer', image: bernard },
    
    // Add more team members as needed
  ];

  return (
    <div className="px-10 bg-gradient-to-r from-green-400 to-blue-500    00 py-5 w-full">
      <div className='text-center'> 
         <h3 className='text-white font-semibold text-2xl'>Meet Our Team</h3>

         <p className='py-5 text-white'> 
         We are a dedicated team of tech enthusiasts committed to solving your business challenges with innovative solutions. <br />
         Our team of skilled professionals is passionate about delivering exceptional results tailored to your unique needs. <br /><br />

         Let us be your partner in success and take your business to new heights.
         </p>

      </div>
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center">
        <h2 className="text-3xl font-semibold text-center mb-8 w-full text-white">Our Team</h2>
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center justify-center mb-8 mx-4  shadow-2xl p-5 rounded-xl text-center bg-white">
            <Image src={member.image} alt={member.name} isBlurred className="w-28 h-28 md:w-48 md:h-48 rounded-full mb-4 bg-gray-100" />
            <h3 className="text-lg font-semibold text-primary py-2">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.role}</p>
            <div className='w-full h-[1px] bg-primary my-2'></div>
            <div className='flex gap-2 py-2'>
              <Instagram size={18} />
              <Facebook size={18} />
              <Twitter size={18} />
              <Linkedin size={18}/>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;

import { Image } from "@nextui-org/image"
import aboutImg from '../assets/us-min.jpg'
import { Button } from "@nextui-org/button"
import { Link } from "@nextui-org/react"
import { Check } from "lucide-react"
import { useNavigate } from "react-router-dom"



const About = () => {
    const navigate = useNavigate();
    const handleLearnMore = () =>{
        navigate('/about-us')
      }
  
    
  return (
    <div className="w-full px-10 py-5  bg-slate-300">
        <div className=' flex gap-8 md:flex-row  flex-col-reverse'>
            
            <div className='basis-1/2  '>
                <Image
                    isBlurred
                                
                    src={aboutImg}
                    alt="NextUI Album Cover"
                    className="m-5 w-screen max-h-full shadow-sm"
                />

            </div>
            
            <div className="basis-1/2">
                
                <p className="text-4xl text-danger font-semibold"> Powered By</p>
                <span className="text-3xl font-semibold text-secondary">Dedicated Expertise</span>
                <p className="font-extralight py-3  ">We are seasoned IT experts who understand that the landscape is changing  <br /> and we believe it's for the better.</p>

                <div className="w-full h-[1px] bg-primary"></div>

                <div className="">
                    <div className="flex gap-2 font-extralight py-2 items-center">
                        <span className="p-3 bg-danger rounded-full text-white"><Check/></span>
                        <p><span className="font-bold text-secondary">Excellence:</span> we are committed to delivering excellence in everything we do, from quality of our solutions to the level of service we provide to our clients.</p>
                    </div>

                    <div className="flex gap-2 font-extralight py-2 items-center">
                    <span className="p-3 bg-danger rounded-full text-white"><Check/></span>
                        <p><span className="font-bold text-secondary">Innovation:</span> we embrace innovation as a cornerstone of our business,constantly seeking new ways to leverage technology to solve complex business challenge.</p>
                    </div>

                    <div className="flex gap-2 font-extralight py-2 items-center ">
                        <span className="p-3 bg-danger rounded-full text-white"><Check/></span>
                        <p><span className="font-bold text-secondary">Customer-Centricity:</span>Our clients are at the heart of everything we do.We priotize understanding their needs and providing solutions that exceed their expectations. </p>
                    </div>

                </div>

            <div className="py-2 flex justify-center">
                    <Button onClick={handleLearnMore} color="danger" href="#" variant="flat" radius='full' className="px-9">
                        Learn More
                    </Button>
            </div>
            </div>
            


        </div>
        
    </div>
  )
}

export default About
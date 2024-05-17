import {Image,Button} from "@nextui-org/react";
import banner from '../assets/banner.jpg'
import { useNavigate} from 'react-router-dom'


const Hero = () => {
    const navigate = useNavigate(); // Initialize useHistory hook

    const handleGetStartedClick = () => {
      // Navigate to the page where users can request a consultation or fill out a contact form
      navigate('/consultation');
    };
  
    const handleLearnMoreClick = () => {
      // Navigate to the page where users can learn more about your services
      navigate('/services');
    };
  return (
    <div className='w-full flex md:flex-row flex-col justify-between px-10 py-5 bg-slate-300'>
        <div className='basis-1/2 flex flex-col  md:py-10'>
            <h1 className='font-semibold text-5xl py-2 text-primary'>We Solve <span className="text-secondary">Business</span> Problems with <span className="text-secondary">Technology</span></h1>
            <p className='font-light py-4'>We empower your business with innovative solutions and transform your business with Cutting-Edge Technology </p>
            <div className='flex gap-4 py-5'>
                <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg px-9" onClick={handleGetStartedClick}>
                    Get Started
                </Button>

                <Button color="primary" variant="ghost" radius='full' onClick={handleLearnMoreClick}>
                    Learn More
                </Button>  
                
            </div>
        </div>
        <div className='basis-1/2  '>
            <Image
                isBlurred
                             
                src={banner}
                alt="NextUI Album Cover"
                className="md:m-5 w-screen max-h-full m-1"
            />

        </div>
        

    </div>
  )
}

export default Hero
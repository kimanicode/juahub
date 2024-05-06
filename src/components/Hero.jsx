import {Image,Button} from "@nextui-org/react";
import banner from '../assets/banner.jpg'

const Hero = () => {
  return (
    <div className='w-full flex md:flex-row flex-col justify-between px-10 py-5 bg-slate-300'>
        <div className='basis-1/2 flex flex-col  md:py-10'>
            <h1 className='font-semibold text-5xl py-2 text-primary'>We solve business problems with technology.</h1>
            <p className='font-light py-4'>We empower your business with innovative solutions and transform your business with Cutting-Edge Technology. </p>
            <div className='flex gap-4 py-5'>
                <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg px-9">
                    Get Started
                </Button>

                <Button color="primary" variant="ghost" radius='full'>
                    Learn More
                </Button>  
                
            </div>
        </div>
        <div className='basis-1/2  '>
            <Image
                isBlurred
                             
                src={banner}
                alt="NextUI Album Cover"
                className="m-5 w-screen max-h-full"
            />

        </div>
        

    </div>
  )
}

export default Hero
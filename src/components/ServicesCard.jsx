import { Button } from "@nextui-org/button"
import { Code, QrCode, Speech, } from "lucide-react"

const ServicesCard = () => {
  return (
   <div className=" w-full px-10 py-5  ">
              <p className="text-center text-primary text-2xl font-semibold py-4">What We Do</p>

      <div className='flex md:flex-row flex-col justify-center py-4  gap-5'>

        <div className="p-5 basis-1/3 flex flex-col justify-center items-center  rounded-xl shadow-xl hover:bg-slate-100 bg-slate-200">
            <p className="text-sky-500"> <Code /></p>
            <p className="font-semibold py-2 text-danger text-center ">Software Development</p>
            <span className="font-extralight py-2 "> Our team of experienced developers specializes in creating tailored software solutions that address the unique needs and challenges of our clients.</span>
            <Button radius="none" color="primary">
                Learn More
            </Button>  
                

        </div>


        <div className="p-5 basis-1/3 flex flex-col justify-center items-center  rounded-xl shadow-xl hover:bg-slate-100 bg-slate-200">
            <p className="text-sky-500"> <QrCode /></p>
            <p className="font-semibold py-2 text-danger text-center ">Digital Transformation solutions</p>
            <span className="font-extralight py-2 "> We offer comprehensive digital transformation services, helping businesses modernize their operations and adapt to the demands of the digital age.</span>
            <Button radius="none" color="primary">
                Learn More
            </Button>  
                

        </div>



        <div className="p-5 basis-1/3 flex flex-col gap-2 justify-center items-center  rounded-xl shadow-xl hover:bg-slate-100 bg-slate-200">
            <p className="text-sky-500"> <Speech /></p>
            <p className="font-semibold py-2 text-danger text-center ">IT Consulting</p>
            <span className="font-extralight py-2">We provide strategic IT consulting services, guiding businesses through technology decisions and helping them leverage IT to achieve their business objectives.</span>
            <Button radius="none" color="primary" >
                Learn More
            </Button>  
                

        </div>


       

    </div>
   </div>
  )
}

export default ServicesCard
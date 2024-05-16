import {Accordion, AccordionItem} from "@nextui-org/react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">About Us</h2>
          <p className="mt-4 text-lg text-gray-500">Empowering businesses with innovative technology solutions.</p>
        </div>
        <div className="mt-20">
          <div className="max-w-4xl mx-auto">
            <Accordion variant="splitted" className="grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
              <AccordionItem key="1" aria-label="Our Story" title="Our Story" className="col-span-1">
                
                <p className="mt-2 text-base text-gray-500">Founded in 2024, Juahub Technologies was born out of a passion for leveraging technology to address real-world challenges. <br /> <br />Our journey began with a vision to bridge the gap between businesses and technology, helping companies harness the power of digital transformation to achieve their goals. <br /><br />Since then, we've grown into a leading technology solutions provider, serving clients across industries with tailored solutions and exceptional service.</p>
              </AccordionItem>
              <AccordionItem key="2" aria-label="Our Values" title="Our Values" className="col-span-1">
                
                <ul className="mt-2 text-base text-danger p-2">
                  <li className="mb-2">Innovation</li>
                  <li className="mb-2">Integrity</li>
                  <li className="mb-2">Customer-Centricity</li>
                  <li className="mb-2">Collaboration</li>
                  <li>Excellence</li>
                </ul>
              </AccordionItem>
              <AccordionItem key="3" aria-label="Our Approach" title="Our Approach" className="col-span-1">
                
                <p className="mt-2 text-base text-gray-500">At Juahub Technologies, our approach is centered around understanding our clients' unique challenges and goals, and developing tailored solutions that address their specific needs. <br /> <br />We combine industry knowledge, technical expertise, and best practices to deliver results-driven solutions that drive business growth and success.</p>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

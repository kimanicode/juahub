import { Card, } from '@nextui-org/react';
import { Globe, Smartphone, CreditCard, Cloud, Code, Settings,  PieChart,  Book, Heart,  User } from 'lucide-react';

const services = [
  { title: 'Web Development', description: 'Custom Website Design, E-commerce Solutions, CMS, PWA, Maintenance and Support' , icon:Globe},
  { title: 'Mobile App Development', description: 'Native and Cross-Platform Apps, UI/UX Design, Testing and QA, Maintenance', icon :Smartphone },
  { title: 'Fintech Solutions', description: 'Mobile Money Integration, Digital Wallets, Payment Gateways, Blockchain Solutions',icon:CreditCard },
  { title: 'Cloud Services', description: 'Infrastructure Setup, Cloud Migration, Security Solutions, Storage Solutions' ,icon:Cloud },
  { title: 'Software Development', description: 'Custom Software, Enterprise Solutions, Testing and QA, API Development',icon:Code },
  { title: 'IT Consulting and Strategy', description: 'IT Strategy, Digital Transformation, Risk Management, Infrastructure Consulting',icon:Settings },
  { title: 'Data Analytics and AI', description: 'Data Management, Business Intelligence, Machine Learning, Data Visualization',icon:PieChart },
  { title: 'E-Learning Solutions', description: 'Platform Development, Learning Management Systems, Online Courses, Virtual Classrooms',icon:Book },
  { title: 'HealthTech Solutions', description: 'Telemedicine Platforms, Electronic Health Records, Health Information Systems, Patient Management',icon:Heart },
  { title: 'Tech Training and Workshops', description: 'Digital Skills Training,Corporate IT Training',icon:User },
  {title: 'Hosting Services',  description: 'Web Hosting, Cloud Hosting, VPS Hosting, Dedicated Servers, Managed Hosting, Domain Registration',  icon: Cloud,}
];

const Services = () => {
  return (
    <div className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8 text-primary">Our Services</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {services.map((service, index) => (
            
            <Card key={index} className="shadow-lg p-5 text-center hover:bg-slate-100 bg-slate-200">
              <div className='flex justify-center'>
               <service.icon className="h-9 w-9 text-secondary mb-2" />
              </div>
              <p className="text-primary font-semibold py-2" >{service.title}</p>
              
              <p className='text-gray-500'>{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

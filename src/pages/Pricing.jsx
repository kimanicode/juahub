import { Card, Button, } from '@nextui-org/react';
import { CheckSquare, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    title: 'Starter',
    price: 'KES 65,000', // Around $200 USD
    features: [
      { name: 'Basic Website Design', icon: <CheckSquare color="green" /> },
      { name: 'Mobile Responsive Design', icon: <CheckSquare  color="green"/> },
      { name: 'Content Management System (CMS)', icon: <CheckSquare color="green" /> },
      { name: 'Limited Support (1 month)', icon: <CheckSquare color="green" /> },
      { name: 'No E-commerce Functionality', icon: <X color="red" /> },
    ],
    buttonText: 'Get Started',
    buttonColor: 'success',
  },
  {
    title: 'Standard',
    price: 'KES 90,000', // Around $400 USD
    features: [
      { name: 'Custom Website Design', icon: <CheckSquare  color="green"/> },
      { name: 'Mobile Responsive Design', icon: <CheckSquare color="green" /> },
      { name: 'Advanced CMS Features', icon: <CheckSquare color="green" /> },
      { name: 'SEO Optimization', icon: <CheckSquare color="green" /> },
      { name: 'Standard Support (6 months)', icon: <CheckSquare  color="green"/> },
      { name: 'Optional E-commerce Functionality (additional cost)', icon: <X color="red" /> },
    ],
    buttonText: 'Choose Standard',
    buttonColor: 'primary',
  },
  {
    title: 'Enterprise',
    price: 'KES 150,000', // Around $800+ USD (custom quote)
    features: [
      { name: 'Complex Web Application Development', icon: <CheckSquare color="green" /> },
      { name: 'Custom CMS Development', icon: <CheckSquare  color="green"/> },
      { name: 'Advanced Security Features', icon: <CheckSquare color="green" /> },
      { name: 'Dedicated Project Manager', icon: <CheckSquare color="green" /> },
      { name: 'Priority Support (ongoing)', icon: <CheckSquare color="green" /> },
      { name: 'E-commerce Functionality Included', icon: <CheckSquare  color="green"/> },
    ],
    buttonText: 'Get a Quote',
    buttonColor: 'secondary',
  },
];

const Pricing = () => {
    const navigate = useNavigate(); // Initialize useHistory hook

    const handleGetStartedClick = () => {
      // Navigate to the page where users can request a consultation or fill out a contact form
      navigate('/consultation');
    }
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl text-primary font-semibold text-center mb-8">Our Pricing Plans</h2>
        
          <div className='flex gap-2 justify-center md:flex-row flex-col md:w-full' >
          {plans.map((plan, index) => (
            <div key={index} className='basis-1/4'>
              <Card className="shadow-lg p-6 rounded-lg bg-slate-300 hover:bg-slate-200">
                <p className="text-center mb-4">{plan.title}</p>
                <p className="text-primary text-center mb-4">
                  {plan.price}
                </p>
                <ul className="list-none space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      {feature.icon}
                      <p>{feature.name}</p>
                    </li>
                  ))}
                </ul>
                <Button
                  color={plan.buttonColor}
                  css={{ width: '100%' }}
                  className="mt-4"
                  onClick ={handleGetStartedClick}
                >
                  {plan.buttonText}
                </Button>
              </Card>
            </div>
          ))}
          </div>
    
      </div>
    </div>
  );
};

export default Pricing;

import  { useState } from 'react';
import { Input, Button, Card } from '@nextui-org/react';

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend, trigger email notification)
    console.log(formData);
    // Clear form fields after submission
    setFormData({
      name: '',
      email: '',
      role: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-5">
      <Card className="w-full max-w-md p-5 shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-4 text-primary">Careers at JuaHub</h1>
        <p className="text-center mb-8 text-lg font-thin">Currently, there are no open roles <br />Please leave your details to be notified when new roles are available.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            name="name"
            label="Name"
            placeholder="Kimani "
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            label="Email"
            placeholder="kimani.dev@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="role"
            label="Preferred Role"
            placeholder="Software Developer"
            value={formData.role}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            className="w-full bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
            auto
          >
            Notify Me
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Careers;

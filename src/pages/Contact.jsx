import React, { useState } from 'react';
import { Input, Textarea } from "@nextui-org/input";
import { Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import axios from "axios";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://your-api-endpoint/contact', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Message sent successfully:', response.data);
      setIsSuccess(true);
      setModalMessage("Your message was sent successfully!");
    } catch (error) {
      console.error('Error sending message:', error.message);
      setIsSuccess(false);
      setModalMessage("There was an error sending your message. Please try again.");
    }

    onOpen(); // Open the modal

    // Clear form fields after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-5">
      <div className="bg-white rounded-lg shadow-lg p-10 max-w-xl w-full">
        <h1 className="text-3xl font-semibold text-center mb-5 text-primary">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            type="text"
            id="name"
            label="Name"
            placeholder="Your Name"
            name="name"
            isRequired
            value={formData.name}
            onChange={handleChange}
            className="w-full"
          />
          <Input
            type="email"
            id="email"
            label="Email"
            placeholder="Your Email"
            name="email"
            isRequired
            value={formData.email}
            onChange={handleChange}
            className="w-full"
          />
          <Textarea
            id="message"
            name="message"
            label="Message"
            placeholder="Your Message"
            isRequired
            value={formData.message}
            onChange={handleChange}
            className="w-full"
          />
          <div className="flex justify-center">
            <Button type="submit" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg px-9 py-3">
              Send Message
            </Button>
          </div>
        </form>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className={`flex flex-col gap-1 ${isSuccess ? 'text-green-500' : 'text-red-500'}`}>
                {isSuccess ? 'Success' : 'Error'}
              </ModalHeader>
              <ModalBody>
                <p className={isSuccess ? 'text-green-500' : 'text-red-500'}>
                  {modalMessage}
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* Contact Information */}
      <div className="mt-10 max-w-xl w-full text-center text-gray-500">
        <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
        <div className="flex justify-around md:flex-row flex-col gap-3">
          <div className='bg-white rounded-lg shadow-lg p-3'>
            <p className="font-medium text-primary">Email</p>
            <p>info@juahub.com</p>
          </div>


          <div className='bg-white rounded-lg shadow-lg p-3   '>
            <p className="font-medium text-primary">Phone</p>
            <p>Kimani Karaba: +254-710-712-393</p>
            <p>Bernard Kariuki: +254-724-505-428</p>
          </div>

          <div className=' bg-white rounded-lg shadow-lg p-3'>
            <p className="font-medium text-primary">Social Media</p>
            <div className="flex gap-2 justify-center py-3 ">
              <Instagram size={24} />
              <Facebook size={24} />
              <Twitter size={24} />
              <Linkedin size={24}/>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;

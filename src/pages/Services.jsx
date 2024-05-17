import React from 'react';

const Services = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-gray-500">Empowering businesses with cutting-edge technology solutions.</p>
        </div>
        <div className="mt-20 flex flex-wrap justify-center gap-6">
          <div className="bg-white rounded-lg shadow p-6 w-80">
            <h3 className="text-xl font-medium text-danger">Digital Transformation Solutions</h3>
            <p className="mt-2 text-base text-gray-500">Comprehensive solutions to modernize your operations, streamline processes, and enhance efficiency.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 w-80">
            <h3 className="text-xl font-medium text-danger">Custom Software Development</h3>
            <p className="mt-2 text-base text-gray-500">Tailored software solutions to meet your unique business needs, from web and mobile applications to enterprise software.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 w-80">
            <h3 className="text-xl font-medium text-danger">Strategic IT Consulting</h3>
            <p className="mt-2 text-base text-gray-500">Expert guidance and advisory support to navigate the complex landscape of technology and optimize your IT infrastructure.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

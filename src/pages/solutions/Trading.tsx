import React from 'react';
import Image from '../../assets/images/Trading-Solutions.jpg'
import Layout from '../Layout';

const Trading = () => {
  return (
    <Layout>
    <div className="flex flex-col items-center text-center py-12 bg-white">
      <h2 className="text-2xl font-semibold mb-6">Trading Solutions</h2>
      <div className="relative w-full">
        <img
          src={Image} // Replace with the actual path
          alt="Trading Solutions Map"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
      <p className="text-xl font-semibold mt-12 text-gray-600 max-w-2xl">
        Step into a portal that opens doors to a global market spanning over 20
        countries. Browse, request a quote, and move forward with your
        selection, all in just a matter of minutes.
      </p>
    </div>
    </Layout>
  );
};

export default Trading;


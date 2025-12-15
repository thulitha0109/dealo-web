import React from 'react';
import Image from '../../assets/images/RacingSolutions.jpg';
import Layout from '../Layout';

const RacingSolutions = () => (
    <Layout>
    <div className="flex flex-col items-center py-12 bg-white">
      <h1 className="text-2xl font-semibold mb-6 text-left">Fueling the Future of Racing: Where Talent Meets Precision</h1>
        <div className="relative w-full">
          <img
            src={Image}  
            alt="Trading Solutions Map"
            className="w-full rounded-lg shadow-lg"
          />
        </div>


        {/* <div className="flex flex-col py-12 bg-white"> */}
          <p className="text-center text-xl font-semibold mt-12 text-gray-600 max-w-2xl">
            Powering the spirit of true racing, Dealo Racing is driven by precision and skill. We are 
            committed to nurturing young talent across the island and the region, helping them reach their 
            fullest potential. Whether you're a budding racer or a seasoned pro, Dealo Racing is your 
            powerhouse to accelerate your journey to the next level.
            </p>
                {/* <div className="flex flex-col py-12 bg-white">
                <iframe
                id="freight-form"
                src="http://173.212.195.167:8080/freight-request-form"
                style={{ border: "none", width: "100%", height: "500px", overflow: "hidden" }}
                title="Freight Request Form"
                ></iframe>
            </div> */}
        {/* </div> */}
    </div>
    </Layout>
);

export default RacingSolutions;

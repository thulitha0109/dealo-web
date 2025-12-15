import React from 'react';
import Image from '../../assets/images/ClearanceSolutions.jpg';
import Layout from '../Layout';

const Clearence = () => (
    <Layout>

    <div className="flex flex-col items-center py-12 bg-white">
      <h1 className="text-2xl font-semibold mb-6 text-left">Hassle-free custom clearances</h1>
        <div className="relative w-full">
          <img
            src={Image}  
            alt="Trading Solutions Map"
            className="w-full rounded-lg shadow-lg"
          />
        </div>


        {/* <div className="flex flex-col py-12 bg-white"> */}
          <p className="text-center text-xl font-semibold mt-12 text-gray-600 max-w-2xl">
            We ensure a smooth, hassle-free process for your freight. Whether it’s import or export, our 
            experts guide you through every step, making customs clearance secure and effortless. 
            While we offer global import and export services, we specialize in key regions including Sri Lanka, 
            India, Pakistan, China, Japan, the Middle East, Europe, the Americas, Canada, and the UK. 
            Trust us to handle your customs needs with precision and care.
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

export default Clearence;

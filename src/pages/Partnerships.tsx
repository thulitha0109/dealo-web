import Image from '../assets/images/Partnership.jpg';
import Layout from './Layout';
import CycloneScroll from '../components/CycloneScroll';

const Partnerships = () => (
  <Layout>
    <div className="flex flex-col items-center py-12 bg-white">
      {/* Banner Section */}
      <h1 className="text-2xl font-semibold mb-6 text-left w-full">Partnerships</h1>
      <div className="relative w-full mb-12">
        <img
          src={Image}
          alt="Trading Solutions Map"
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      {/* 2 Column Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-start">
        {/* Left Column: Info + Form */}
        <div className="md:col-span-1 flex flex-col px-4 gap-4">
          <h2 className="text-xl font-semibold">Our Partners</h2>
          <p className="text-gray-700 leading-relaxed">
            We collaborate with trusted partners across industries to deliver 
            innovative solutions, expand opportunities, and provide lasting value 
            for businesses worldwide.
          </p>
        </div>

        {/* Right Column: Partners Carousel */}
        <div className="md:col-span-2 px-4">
          <CycloneScroll />
        </div>
      </div>
    </div>
  </Layout>
);

export default Partnerships;

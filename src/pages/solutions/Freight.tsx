import Image from "../../assets/images/Freightforwardingsolutions.jpg";
import Layout from "../Layout";
import FreightForm from "../../components/FreightForm";

const Freight = () => {

  return (
    <Layout>
      <div className="flex flex-col items-center py-12 bg-white">
        <h1 className="text-2xl font-semibold mb-6 text-left">
          Freight Forwarding Solutions
        </h1>
        <h2 className="text-left text-xl font-semibold mb-6">
          Your one-stop freight forward solutions company!
        </h2>
        <div className="relative w-full">
          <img
            src={Image}
            alt="Trading Solutions Map"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div className="flex flex-col py-12 bg-white">
          <h3 className="text-left text-xl font-semibold">Sea Freight</h3>
          <p className="text-left text-sm font-semibold mt-2 text-gray-600 max-w-2xl">
            We handle all types of shipping contracts (Incoterms) and take care
            of your customs clearance with ease. With Smart Freight, our online
            platform, you can instantly compare, book, and track freight
            quotes, as well as manage your shipments and transactions
            effortlessly...
          </p>

          <h3 className="text-left text-xl font-semibold mt-6">Air Freight</h3>
          <p className="text-left text-sm font-semibold mt-2 text-gray-600 max-w-2xl">
            We offer international air freight services designed for
            time-sensitive shipments...
          </p>

          <h3 className="text-left text-xl font-semibold mt-6">Land Freight</h3>
          <p className="text-left text-sm font-semibold mt-2 text-gray-600 max-w-2xl">
            A steadfast fleet of trucks and trailers, offering part or full load
            services...
          </p>

        </div>
          <div className="w-full max-w-2xl px-4">
           <FreightForm /> 
          </div>
      </div>
    </Layout>
  );
};

export default Freight;
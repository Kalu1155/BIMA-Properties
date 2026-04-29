import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className="text-[#374151] mt-14 bg-[#F8F9FA]">

      {/* HERO SECTION */}
      <section className="bg-[#2C3E50] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Find Your Dream Property
        </h1>
        <p className="text-lg mb-6 text-gray-300">
          Buy, Rent, or Sell properties with ease and confidence.
        </p>

        {/* SEARCH BAR */}
        <div className="bg-white rounded-lg p-4 max-w-3xl mx-auto flex flex-col md:flex-row gap-3">
          <input
            type="text"
            placeholder="Location..."
            className="flex-1 p-3 rounded-md outline-none text-black not-visited:"
          />
          <select className="p-3 border rounded-md">
            <option>Buy</option>
            <option>Rent</option>
          </select>
          <button className="bg-[#2C3E50] text-white px-6 py-3 rounded-md hover:bg-[#1a252f]">
            Search
          </button>
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">
          Featured Properties
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD */}
          {[1,2,3].map((item) => (
            <div key={item} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
              
              <div className="h-48 bg-gray-200"></div>

              <div className="p-4">
                <h3 className="font-semibold text-lg">
                  Luxury Apartment
                </h3>
                <p className="text-sm text-gray-500">
                  Abuja, Nigeria
                </p>
                <p className="mt-2 font-bold text-[#2C3E50]">
                  ₦120,000,000
                </p>

                <button className="mt-4 w-full bg-[#E3F2FD] text-[#2C3E50] py-2 rounded-md hover:bg-blue-200">
                  View Details
                </button>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#E3F2FD] py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-10">
          Why Choose Bima Properties
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <h3 className="font-semibold text-lg mb-2">Trusted Listings</h3>
            <p className="text-sm">
              Verified properties with accurate information.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Expert Agents</h3>
            <p className="text-sm">
              Work with professionals who understand the market.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Easy Process</h3>
            <p className="text-sm">
              Seamless buying, renting, and selling experience.
            </p>
          </div>

        </div>
      </section>

    </div>
    <Footer/>
    </>
  );
}

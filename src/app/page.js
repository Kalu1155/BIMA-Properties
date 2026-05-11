import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="text-[#374151] mt-14 bg-[#F8F9FA]">

        {/* HERO SECTION */}
        <section className="bg-[linear-gradient(to_right,#2C3E50,rgba(0,0,0,0.7)),url('/hauz.jpg')] bg-cover bg-center text-white py-20 px-6 text-center h-[70vh] flex items-center justify-center flex-col">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Dream Property
          </h1>
          <p className="text-lg mb-6 text-gray-300">
            Buy, Rent, or Sell properties with ease and confidence.
          </p>

          {/* SEARCH BAR */}
          <div className="bg-white rounded-lg p-4 max-w-3xl mx-auto flex flex-col md:flex-row gap-3 w-full">
            <input
              type="text"
              placeholder="Location..."
              className="flex-1 p-3 rounded-md outline-none text-black"
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

        {/* CATEGORIES */}
        <section className="py-16 px-6 text-center">
          <h2 className="text-2xl font-bold mb-10">Browse By Category</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {["Buy Property", "Rent Property", "Lease Property"].map((item) => (
              <div
                key={item}
                className="bg-white p-6 rounded-xl  hover:shadow-sm transition"
              >
                <h3 className="font-semibold text-lg">{item}</h3>
                <p className="text-sm mt-2 text-gray-500">
                  Explore the best {item.toLowerCase()} options available.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURED PROPERTIES */}
        <section className="py-16 px-6">
          <h2 className="text-2xl font-bold text-center mb-10">
            Featured Properties
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className=" rounded-lg overflow-hidden  hover:shadow-sm transition"
              >
                {/* IMAGE */}
                <Image
                  src="/luxe.jpg"
                  alt="Property"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4">
                  <h3 className="font-semibold text-lg">Luxury Apartment</h3>
                  <p className="text-sm text-gray-500">Abuja, Nigeria</p>
                  <p className="mt-2 font-bold text-[#2C3E50]">
                    ₦120,000,000
                  </p>
                  <Link href={`/properties/${item}`}>
                  <button className="mt-4 w-full bg-[#E3F2FD] bg-lime-200 text-[#2C3E50] font-semibold py-2 rounded-md hover:bg-lime-100 cursor-pointer">
                    View Details
                  </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROPERTIES */}
        <section className="py-16 px-6">
          <div className="bg-[#2C3E50] py-16 px-6 rounded-md flex flex-col md:flex-row items-center gap-10">

            {/* TEXT */}
            <div className="md:w-1/2">
              <p className="text-gray-300 font-medium text-[16px]">
                Properties
              </p>
              <h3 className="text-[32px] md:text-[40px] text-gray-100 font-bold">
                Welcome To Our Luxurious Properties With All The Conveniences.
              </h3>
              <button className="mt-4 text-[#2C3E50] px-5 py-3 font-semibold cursor-pointer rounded-md bg-lime-200">
                View Properties
              </button>
            </div>

            {/* IMAGE */}
            <div className="md:w-1/2">
              <Image
                src="/luxe.jpg"
                alt="Luxury Apartment"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </div>

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

        {/* TESTIMONIALS */}
<section className="py-16 px-6 bg-[#F8F9FA]">
  <h2 className="text-2xl font-bold text-center mb-10">
    What Our Clients Say
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    {/* CARD */}
    {[1, 2, 3].map((item) => (
      <div
        key={item}
        className="bg-white p-6 rounded-xl  hover:shadow-sm transition"
      >
        {/* USER INFO */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-[#E3F2FD] flex items-center justify-center font-bold text-[#2C3E50]">
            AM
          </div>
          <div>
            <h4 className="font-semibold">Abdul Malik</h4>
            <p className="text-sm text-gray-500">Property Buyer</p>
          </div>
        </div>

        {/* REVIEW */}
        <p className="text-sm text-gray-600 leading-relaxed">
          Bima Properties made my house search incredibly easy. Their listings
          are accurate, and the process was smooth from start to finish.
        </p>

        {/* RATING */}
        <div className="flex mt-4 text-[#2C3E50]">
          {"★★★★★"}
        </div>
      </div>
    ))}

  </div>
</section>

      </div>

      <Footer />
    </>
  );
}
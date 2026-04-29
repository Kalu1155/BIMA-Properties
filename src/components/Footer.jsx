import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-[#E3F2FD] mt-10">
      <div className="px-6 py-10 grid md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
           <Image
        src="/tslogo1.png"
        alt="logo"
        className=''
        height={400}
        width={200} />
          {/* <h2 className="text-xl font-bold mb-2">Bima Properties</h2> */}
          <p className="text-sm text-gray-300">
            Find your dream home with ease. Trusted listings, real agents, real value.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Properties</li>
            <li>Agents</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-sm">Email: info@bima.com</p>
          <p className="text-sm">Phone: +234 000 000 0000</p>
        </div>
      </div>

      <div className="text-center text-sm py-4 border-t border-gray-600">
        © {new Date().getFullYear()} Bima Properties. All rights reserved.
      </div>
    </footer>
  );
}
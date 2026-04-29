import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bima Properties | Smart Real Estate Platform",
  description: "Bima Properties is a modern real estate platform connecting users with trusted agents to discover, buy, rent, and manage properties بسهولة and securely.",
  //  icons: {
  //   icon: "/icon.png",
  // },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Loader>
        {children}
        </Loader>
        </body>
    </html>
  );
}

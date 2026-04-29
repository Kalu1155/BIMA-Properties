import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function UserLayout({ children }) {
    return (
        <>
        <Navbar/>
        <main className="flex flex-col items-center justify-center min-h-screen">
            {children}
        </main>
            <Footer/>
        </>
    )
}
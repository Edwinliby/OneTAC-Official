import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ScrollEffect from "@/components/ScrollAnimation/Scroll";

export default function Clientlayout({ children }) {
    return (
        <main>
            <ScrollEffect />
            <Navbar />
            {children}
            <Footer />
        </main>
    )
}
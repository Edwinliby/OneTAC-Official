import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import ScrollEffect from "@/Components/ScrollAnimation/Scroll";

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
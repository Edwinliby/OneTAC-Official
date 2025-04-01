import Img from '../../../../public/assets/34.webp'
import Head from "@/Components/Head/Head";
import BeginSection from './_sections/BeginSection/BeginSection';
import CollabSection from './_sections/CollabSection/CollabSection';
import JoinSection from './_sections/JoinSection/JoinSection';
import InfoSection from './_sections/InfoSection/InfoSection';

export default function page() {
    return (
        <>
            <Head
                img={Img}
                title={"The OneTAC Community"}
                subTitle={"It takes a collective to build a movement. ONE TAC is anchored by visionary institutions, driven by passionate individuals, and supported by a growing ecosystem of changemakers committed to shaping the future of India's Experience Economy."}
            />
            <BeginSection />
            <CollabSection />
            <JoinSection />
            <InfoSection />
        </>
    )
}
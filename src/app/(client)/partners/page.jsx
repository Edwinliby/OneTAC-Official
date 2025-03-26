import Img from '../../../../public/assets/34.webp'
import Head from "@/Components/Head/Head";
import P1Section from './_sections/P1Section/P1Section';
import P2Section from './_sections/P2Section/P2Section';
import JoinSection from './_sections/JoinSection/JoinSection';
import InfoSection from './_sections/InfoSection/InfoSection';

export default function page() {
    return (
        <>
            <Head
                img={Img}
                title={"People and Partnerships"}
                subTitle={"It takes a collective to build a movement. ONE TAC is anchored by visionary institutions, driven by passionate individuals, and supported by a growing ecosystem of changemakers committed to shaping the future of India's Experience Economy."}
            />
            <P1Section />
            <P2Section />
            <JoinSection />
            <InfoSection />
        </>
    )
}
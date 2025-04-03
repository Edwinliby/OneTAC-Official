import Img from '../../../../public/assets/32.webp'
import Head from "@/components/Head/Head";
import HowSection from './_sections/HowSection/HowSection';
import ThriveSection from './_sections/ThriveSection/ThriveSection';
import ScaleSection from './_sections/ScaleSection/ScaleSection';
import ProtoSection from './_sections/ProtoSection/ProtoSection';

export const metadata = {
    title: "Impact | Reimagining India's Stories",
    description: "OneTAC is a catalyst for travelers, creators, entrepreneurs, and policymakers—unlocking seamless connections, digital growth, and new opportunities in tourism, arts, and culture.",
    url: 'https://onetac.org/impact',

    ogTitle: "Impact | Reimagining India's Stories",
    ogDescription: "OneTAC is a catalyst for travelers, creators, entrepreneurs, and policymakers—unlocking seamless connections, digital growth, and new opportunities in tourism, arts, and culture.",
    ogUrl: 'https://onetac.org/impact',
}

export default function page() {
    return (
        <>
            <Head
                img={Img}
                title={"Reimagining India's Stories"}
                subTitle={"OneTAC is a catalyst for travelers, creators, entrepreneurs, and policymakers—unlocking seamless connections, digital growth, and new opportunities in tourism, arts, and culture."}
                className={"-scale-x-[1]"}
            />
            <HowSection />
            <ThriveSection />
            <ScaleSection />
            <ProtoSection />
        </>
    )
}
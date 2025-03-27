import Img from '../../../../public/assets/26.webp'
import Head from "@/Components/Head/Head";
import BentoSection from './Sections/BentoSection/BentoSection';
import DownloadSection from './Sections/DownloadS/DownloadSection';

export default function page() {
    return (
        <>
            <Head
                img={Img}
                title={"OneTAC: Digital Backbone For India's Tourism, Arts, and Culture."}
                subTitle={"Built on open protocols, powered by innovation, designed for scale."}
            />
            <BentoSection />
            <DownloadSection />
        </>
    )
}
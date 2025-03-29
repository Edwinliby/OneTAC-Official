import Img from '../../../../public/assets/26.webp'
import Head from "@/Components/Head/Head";
import WhatSection from './Sections/WhatSection/WhatSection';
import GridSection from './Sections/GridSection/GridSection';
import BentoSection from './Sections/BentoSection/BentoSection';
import ActionSection from './Sections/ActionSection/ActionSection';
import DownloadSection from './Sections/DownloadSection/DownloadSection';

export default function page() {
    return (
        <>
            <Head
                img={Img}
                title={"OneTAC: Digital Backbone For India's Tourism, Arts, and Culture."}
                subTitle={"Built on open protocols, powered by innovation, designed for scale."}
            />
            <WhatSection />
            <GridSection />
            <BentoSection />
            <ActionSection />
            <DownloadSection />
        </>
    )
}
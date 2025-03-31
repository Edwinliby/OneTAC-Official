import Img from '../../../../public/assets/26.webp'
import Head from "@/Components/Head/Head";
import WhatSection from './_Sections/WhatSection/WhatSection';
import GridSection from './_Sections/GridSection/GridSection';
import BentoSection from './_Sections/BentoSection/BentoSection';
import ActionSection from './_Sections/ActionSection/ActionSection';
import DownloadSection from './_Sections/DownloadSection/DownloadSection';

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
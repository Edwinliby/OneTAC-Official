import Img from '../../../../public/assets/26.webp'
import Head from "@/Components/Head/Head";
import WhatSection from './_sections/WhatSection/WhatSection';
import GridSection from './_sections/GridSection/GridSection';
import BentoSection from './_sections/BentoSection/BentoSection';
import ActionSection from './_sections/ActionSection/ActionSection';
import DownloadSection from './_sections/DownloadSection/DownloadSection';

export default function page() {
    return (
        <>
            <Head
                img={Img}
                title={"OneTAC : Digital Backbone For India’s Tourism, Arts & Culture with"}
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
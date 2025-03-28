import Marquee from "react-fast-marquee";
import Image from "next/image";
import p1 from '../../../../../../public/partners/p1.webp';
import p2 from '../../../../../../public/partners/p2.webp';
import p3 from '../../../../../../public/partners/p3.webp';
import p4 from '../../../../../../public/partners/p4.webp';
import p5 from '../../../../../../public/partners/p5.webp';
import p6 from '../../../../../../public/partners/p6.webp';
import p7 from '../../../../../../public/partners/p7.webp';
import p8 from '../../../../../../public/partners/fp2.webp';

const partnersList = [p1, p2, p3, p4, p5, p6, p7,p8];

export default function PartnerSection() {
    return (
        <Marquee gradient={true} gradientColor="#F7F8F2" speed={50}>
            <div className="flex items-center gap-6 py-14 md:pb-24">
                {
                    partnersList.map((item, index) => (
                        <Image
                            key={`partner-${index}`}
                            src={item}
                            draggable={false}
                            alt={`partner-${index}`}
                            className="h-14 w-fit md:h-20 px-4 mix-blend-color-burn object-contain"
                        />
                    ))
                }
            </div>
        </Marquee>
    )
}
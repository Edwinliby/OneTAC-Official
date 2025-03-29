import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/../public/assets/logo_color.webp';
import Brochure from '@/../public/assets/brochure.webp';

const brochureUrl = "https://onetac.org/wp-content/uploads/2024/11/OneTAC-Concept-Note-Opt.pdf";

export default function DownloadSection() {
    return (
        <div className="px-4 py-8 sm:p-8 lg:p-16">
            <div className='flex flex-col-reverse md:flex-row justify-between gap-10 sm:gap-0 items-center border border-[var(--brown)]/20 bg-white rounded-2xl sm:rounded-3xl p-6 py-8 md:p-10'>
                <div className='w-full flex flex-col gap-6 sm:gap-8'>
                    <Image
                        src={Logo}
                        alt="Logo"
                        width={100}
                        height={100}
                    />
                    <h2 className='font-semibold text-2xl md:text-2xl lg:text-4xl xl:text-5xl md:leading-10 xl:leading-16'>
                        Want to know more? Dive <br />
                        deeper into <span className='text-[var(--orange)]'>OneTAC</span>
                    </h2>
                    <Link href={brochureUrl} rel='noopener noreferrer' className='font-semibold border-2 border-[var(--brown)]/40 px-6 py-2 w-fit rounded-full text-[var(--brown)] transition duration-300 hover:shadow-lg'>Download Now</Link>
                </div>
                <div className='sm:w-3/4 flex justify-center group'>
                    <Link href={brochureUrl} rel='noopener noreferrer' className='p-4 sm:p-0'>
                        <Image
                            src={Brochure}
                            alt="Brochure Image"
                            width={400}
                            height={400}
                            className='sm:w-fit sm:h-[18rem] group-active:-rotate-6 hover:-rotate-6 transition duration-300'
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}
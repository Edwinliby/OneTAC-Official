'use client'

import { useState, useEffect } from "react";
import WhiteLogo from '@/../public/assets/logo_white.webp';
import ColorLogo from '@/../public/assets/logo_color.webp';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: "About", link: "/about" },
    { name: "Partners", link: "/partners" },
    { name: "Impact", link: "/impact" },
    { name: "Engage with us", link: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isHidden, setIsHidden] = useState(false);
    const [isOutsideHero, setIsOutsideHero] = useState(pathname === '/privacy-policy');
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        // If on privacy-policy page, set isOutsideHero to true
        if (pathname === '/privacy-policy') {
            setIsOutsideHero(true);
            return; 
        }

        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const heroSection = document.getElementById("hero");
            const heroHeight = heroSection ? heroSection.offsetHeight : 0;

            setIsHidden(currentScrollY > lastScrollY && currentScrollY > 200);
            setIsOutsideHero(currentScrollY > heroHeight);

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    return (
        <nav className={`fixed w-full px-4 md:px-8 lg:px-16 py-4 z-50 transition-all duration-300 flex items-center justify-between
        ${isOutsideHero ? 'bg-white shadow-xl shadow-[rgba(0,0,0,0.025)]' : 'bg-gradient-to-b from-[rgba(255,255,255,0.2)] to-transparent'} 
        ${isHidden && !isOpen ? '-translate-y-full' : 'translate-y-0'}`}>
            <Link href="/">
                <Image
                    src={WhiteLogo}
                    alt="logo"
                    draggable={false}
                    width={100}
                    height={100}
                    className={`w-fit h-[2.5rem] md:h-[3.5rem] ${isOutsideHero ? 'hidden' : 'block'}`}
                />
                <Image
                    src={ColorLogo}
                    alt="logo"
                    draggable={false}
                    width={100}
                    height={100}
                    className={`w-fit h-[2.5rem] md:h-[3.5rem] ${isOutsideHero ? 'block' : 'hidden'}`}
                />
            </Link>

            <div className="flex items-center gap-6">
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((item) => (
                        <Link
                            href={item.link}
                            key={item.name}
                            className={`font-medium hover:text-[var(--orange)]
                                ${isOutsideHero ? "text-black" : "text-white"}`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center justify-start relative z-50">
                    <button
                        onClick={toggleNavbar}
                        className={`
                            ${"flex flex-col w-12 h-12 items-center justify-center space-y-1.5 group focus:outline-none relative z-50"}
                            ${isOpen ? "md:translate-x-8 rounded-4xl shadow" : ""}
                            `}
                    >
                        <span
                            className={`block h-0.5 w-6 transition-all duration-300 ease-in-out 
                            ${isOutsideHero || isOpen ? "bg-black" : "bg-white"}
                            ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
                        />
                        <span
                            className={`block h-0.5 w-4 transition-all duration-300 ease-in-out self-start translate-x-5
                            ${isOutsideHero || isOpen ? "bg-black" : "bg-white"}
                            ${isOpen ? 'opacity-0' : ''}`}
                        />
                        <span
                            className={`block h-0.5 w-6 transition-all duration-300 ease-in-out 
                            ${isOutsideHero || isOpen ? "bg-black" : "bg-white"}
                            ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
                        />
                    </button>
                </div>

                <div
                    className={`fixed top-0 right-0 h-screen w-full md:w-[35%] bg-white shadow-lg transform transition-transform duration-300 ease-in-out 
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-40`}
                >
                    <div className="flex flex-col gap-4 p-4">
                        {navLinks.map((item) => (
                            <Link
                                href={item.link}
                                key={item.name}
                                onClick={() => setIsOpen(false)}
                                className={`text-black w-fit font-medium hover:text-[var(--orange)]`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {isOpen && (
                    <div
                        onClick={toggleNavbar}
                        className="fixed h-screen inset-0 bg-[rgba(0,0,0,0.2)] backdrop-blur-xs bg-opacity-50 z-30"
                    />
                )}
            </div>
        </nav>
    );
}

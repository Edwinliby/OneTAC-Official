'use client'

import { useState } from "react";
import { Mail } from "lucide-react";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="flex flex-col gap-4 md:items-end w-full md:w-fit">
            <b className="text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl font-semibold">Subscribe to Our Newsletter</b>
            <div className="flex gap-2 font-medium w-full ">
                <span className="relative w-full">
                    {!isFocused && email.trim() === "" && (
                        <label
                            htmlFor="email"
                            className="absolute top-1/2 left-4 -translate-y-1/2 z-10 flex gap-1 items-center text-xs 2xl:text-sm text-gray-400/80 transition-all duration-200"
                        >
                            <Mail size={15} /> Enter your mail address
                        </label>
                    )}
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 2xl:py-4 text-sm 2xl:text-base rounded-md bg-white text-gray-800 border-none focus:outline-none focus:ring-0"
                    />
                </span>
                <button className="bg-[var(--light-Orange)] hover:bg-[var(--orange)] hover:shadow-md transition-all duration-200 text-[var(--brown)] text-xs md:text-base lg:text-lg 2xl:text-xl px-5 py-2 rounded-md">
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default Newsletter;
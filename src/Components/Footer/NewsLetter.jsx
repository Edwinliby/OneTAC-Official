'use client'

import { useState } from "react";
import { Mail } from "lucide-react";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="flex flex-col gap-4 md:items-end w-full md:w-fit">
            <h4 className="text-lg font-semibold">Subscribe to Our Newsletter</h4>
            <div className="flex gap-2 font-medium w-full md:w-fit">
                <span className="relative w-full md:w-fit">
                    {!isFocused && email.trim() === "" && (
                        <label
                            htmlFor="email"
                            className="absolute top-1/2 left-4 -translate-y-1/2 z-10 flex gap-1 items-center text-xs text-gray-300 transition-all duration-200"
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
                        className="w-full md:w-fit px-4 py-3 text-sm rounded-md bg-white text-gray-800 border-none focus:outline-none focus:ring-0"
                    />
                </span>
                <button className="bg-[var(--orange)] hover:bg-orange-300 hover:shadow-md transition-all duration-200 text-[var(--brown)] text-xs lg:text-base px-4 py-2 rounded-md">
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default Newsletter;
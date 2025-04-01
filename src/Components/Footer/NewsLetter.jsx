'use client'

import { useState } from "react";
import { useForm } from 'react-hook-form';

const Newsletter = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        const email = data.email;

        const existingEmails = JSON.parse(localStorage.getItem("subscribedEmails")) || [];

        if (existingEmails.includes(email)) {
            alert("This email has already been subscribed.");
            return;
        }

        setIsSubmitting(true);

        const googleFormURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfS3mr5RJKy51KQs9ox_-DkOiTlBeWWkAmYfbaNdLdgqiQmPA/formResponse";

        const formData = new FormData();
        formData.append("entry.1999558872", data.email);

        try {
            await fetch(googleFormURL, {
                method: "POST",
                body: formData,
                mode: "no-cors",
            });

            existingEmails.push(email);
            localStorage.setItem("subscribedEmails", JSON.stringify(existingEmails));

            reset();
            alert("Subscription successful!");
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex flex-col gap-4 md:items-end w-full md:w-fit">
            <b className="text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl font-semibold whitespace-nowrap">Subscribe to Our Newsletter</b>
            <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 font-medium w-full">
                <span className="relative w-full">
                    <input
                        type="email"
                        id="email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                        })}
                        placeholder="Enter your mail address"
                        className="w-full lg:px-4 py-3 2xl:py-4 text-sm 2xl:text-base rounded-md bg-white text-gray-800 border-none focus:outline-none focus:ring-0"

                    />
                    {errors.email && (
                        <p className="text-red-500 text-xs mt-1 absolute -bottom-5 left-1">{errors.email.message}</p>
                    )}
                </span>
                <button
                    aria-label="Newsletter Subscribe"
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[var(--light-Orange)] hover:bg-[var(--orange)] hover:shadow-md transition-all duration-200 text-[var(--brown)] text-xs md:text-base 2xl:text-xl px-5 py-2 rounded-md">
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
            </form>
        </div>
    );
};

export default Newsletter;
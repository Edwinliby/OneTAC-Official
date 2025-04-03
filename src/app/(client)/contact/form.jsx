'use client'

import { useState } from 'react';
import Link from 'next/link';
import { useForm } from "react-hook-form";

const countryCodes = [
    { code: '+91', country: 'India', abbr: 'IN' },
    { code: '+1', country: 'United States', abbr: 'US' },
    { code: '+44', country: 'United Kingdom', abbr: 'UK' },
    { code: '+86', country: 'China', abbr: 'CN' },
    { code: '+81', country: 'Japan', abbr: 'JP' },
    { code: '+49', country: 'Germany', abbr: 'DE' },
    { code: '+33', country: 'France', abbr: 'FR' },
    { code: '+61', country: 'Australia', abbr: 'AU' },
    { code: '+55', country: 'Brazil', abbr: 'BR' },
    { code: '+7', country: 'Russia', abbr: 'RU' }
];

export default function Form() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        setIsSubmitting(true);

        const googleFormURL =
            "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfyPUfQrU6BXW40DqIhKrbaa8xkbPYGUdmMs_jhN3fXCm5VYw/formResponse";

        const formBody = new FormData();
        formBody.append("entry.2038392584", data.fullName);
        formBody.append("entry.2057909691", data.email);
        formBody.append("entry.158658841", data.phoneNumber);
        formBody.append("entry.99168859", data.message);
        formBody.append("entry.1690124663", data.organisationName);
        formBody.append("entry.422563962", data.location);
        if (data.typeOfEngagement === "Other") {
            const value = "__other_option__"
            formBody.append("entry.550696973", value);
            formBody.append("entry.550696973.other_option_response", data.otherTypeOfEngagement);
        } else {
            formBody.append("entry.550696973", data.typeOfEngagement);
        }

        try {
            await fetch(googleFormURL, {
                method: "POST",
                body: formBody,
                mode: "no-cors",
            });

            reset();
            alert("Form submitted successfully!");
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="py-16 flex flex-col justify-center relative px-4 md:px-8 lg:px-16">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
                {/* Full Name */}
                <div className="mb-4">
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name*</label>
                    <input
                        type="text"
                        id="fullName"
                        {...register('fullName', {
                            required: 'Full Name is required'
                        })}
                        className={`mt-1 block w-full px-3 py-3 placeholder:text-sm bg-white border ${errors.fullName ? 'border-red-500' : 'border-amber-200'
                            } rounded-md shadow-xs focus:outline-none focus:ring-yellow-500 focus:border-yellow-500`}
                        placeholder="Enter your name"
                    />
                    {errors.fullName && (
                        <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
                    )}
                </div>

                {/* Email and Phone Number */}
                <div className="grid md:grid-cols-2 md:gap-6">
                    {/* Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email*</label>
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
                            className={`mt-1 block w-full px-3 py-3 placeholder:text-sm bg-white border ${errors.email ? 'border-red-500' : 'border-amber-200'
                                } rounded-md shadow-xs focus:outline-none focus:ring-yellow-500 focus:border-yellow-500`}
                            placeholder="Enter your email"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Phone Number with Country Code */}
                    <div className="mb-4">
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <div className="flex mt-1.5">
                            <select
                                id="phoneNumber"
                                defaultValue="+91"
                                className="block px-3 py-3 bg-white border border-amber-200 rounded-l-md focus:ring-yellow-500 focus:border-yellow-500"
                            >
                                {countryCodes.map((country) => (
                                    <option key={country.code} value={country.code}>{country.code}</option>
                                ))}
                            </select>
                            <input
                                type="tel"
                                id="phoneNumber"
                                {...register('phoneNumber', {
                                    required: 'Phone number is required',
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: "Invalid phone number (10 digits required)"
                                    }
                                })}
                                className={`flex-grow block px-3 py-3 placeholder:text-sm bg-white border 
                                                    ${errors.phoneNumber ? 'border-red-500' : 'border-amber-200'} 
                                                    shadow-xs rounded-r-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500`}
                                placeholder="Phone number"
                            />
                        </div>
                        {errors.phoneNumber && (
                            <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>
                        )}
                    </div>
                </div>

                {/* Organisation Name */}
                <div className="mb-4">
                    <label htmlFor="organisationName" className="block text-sm font-medium text-gray-700">Organisation Name</label>
                    <input
                        type="text"
                        id="organisationName"
                        {...register('organisationName', {
                            required: 'Organisation Name is required'
                        })}
                        className={`mt-1 block w-full px-3 py-3 text-sm text-gray-700 bg-white border ${errors.organisationName ? 'border-red-500' : 'border-amber-200'
                            } rounded-md shadow-xs focus:outline-none focus:ring-yellow-500 focus:border-yellow-500`}
                        placeholder="Enter your organisation name"
                    />
                    {errors.organisationName && (
                        <p className="text-red-500 text-xs mt-1">{errors.organisationName.message}</p>
                    )}
                </div>

                {/* Location and Type of Engagement */}
                <div className="grid md:grid-cols-2 md:gap-6">
                    {/* Location */}
                    <div className="mb-4">
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                        <input
                            type="text"
                            id="location"
                            placeholder='Enter your location'
                            {...register('location', {
                                required: 'Location is required'
                            })}
                            className={`mt-1 block w-full px-3 py-3 text-sm text-gray-700 bg-white border ${errors.location ? 'border-red-500' : 'border-amber-200'
                                } rounded-md shadow-xs focus:outline-none focus:ring-yellow-500 focus:border-yellow-500`}
                        />
                        {errors.location && (
                            <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>
                        )}
                    </div>

                    {/* Type of Engagement */}
                    <div className="mb-4">
                        <label htmlFor="typeOfEngagement" className="block text-sm font-medium text-gray-700">Type of Engagement*</label>
                        <select
                            id="typeOfEngagement"
                            {...register('typeOfEngagement', {
                                required: 'Type of Engagement is required'
                            })}
                            className={`mt-1 block w-full px-3 py-3 text-sm text-gray-700 bg-white border ${errors.typeOfEngagement ? 'border-red-500' : 'border-amber-200'
                                } rounded-md shadow-xs focus:outline-none focus:ring-yellow-500 focus:border-yellow-500`}
                        >
                            <option value="">Select your category</option>
                            <option value="TAC Practitioner">TAC Practitioner</option>
                            <option value="Travel Aggregator / Platform">Travel Aggregator / Platform</option>
                            <option value="Startup">Startup</option>
                            <option value="Investor">Investor</option>
                            <option value="Volunteer">Volunteer</option>
                            <option value="Other">Other</option>
                        </select>
                        {errors.typeOfEngagement && (
                            <p className="text-red-500 text-xs mt-1">{errors.typeOfEngagement.message}</p>
                        )}
                    </div>
                </div>

                {/* Other Type of Engagement */}
                {
                    watch('typeOfEngagement') === 'Other' && (
                        <div className="mb-4">
                            <label htmlFor="otherTypeOfEngagement" className="block text-sm font-medium text-gray-700">Custom Engagement</label>
                            <input
                                type="text"
                                id="otherTypeOfEngagement"
                                {...register('otherTypeOfEngagement', {
                                    required: 'Type of Engagement is required'
                                })}
                                className={`mt-1 block w-full px-3 py-3 text-sm text-gray-700 bg-white border ${errors.otherTypeOfEngagement ? 'border-red-500' : 'border-amber-200'
                                    } rounded-md shadow-xs focus:outline-none focus:ring-yellow-500 focus:border-yellow-500`}
                                placeholder="Enter your type of engagement"
                            />
                            {errors.otherTypeOfEngagement && (
                                <p className="text-red-500 text-xs mt-1">{errors.otherTypeOfEngagement.message}</p>
                            )}
                        </div>
                    )
                }

                {/* Message */}
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                        id="message"
                        {...register('message', {
                            required: 'Message is required'
                        })}
                        rows={4}
                        className={`mt-1 block w-full px-3 py-3 placeholder:text-sm bg-white border border-amber-200 ${errors.message ? 'border-red-500' : ''}  rounded-md shadow-xs focus:outline-none focus:ring-yellow-500 focus:border-yellow-500`}
                        placeholder="Leave us a message..."
                    ></textarea>
                    {
                        errors.message && (
                            <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                        )
                    }
                </div>

                {/* Privacy Policy Checkbox */}
                <div className="flex items-start mb-4">
                    <div className="flex items-center h-5">
                        <input
                            id="privacy-policy"
                            type="checkbox"
                            {...register('privacyPolicy', {
                                required: 'You must agree to the privacy policy'
                            })}
                            className={`focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-amber-200 rounded ${errors.privacyPolicy ? 'border-red-500' : ''
                                }`}
                        />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="privacy-policy" className="font-medium text-gray-700">
                            You agree to our friendly {" "}
                            <Link href="/privacy-policy" target='_blank' aria-label='privacy policy' className="underline hover:text-[var(--brown)]">privacy policy</Link>
                        </label>
                        {errors.privacyPolicy && (
                            <p className="text-red-500 text-xs mt-1">{errors.privacyPolicy.message}</p>
                        )}
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    aria-label='submit button'
                    disabled={isSubmitting}
                    className={`w-full md:w-fit flex justify-center px-10 p-4 border border-transparent rounded-md shadow-xs font-semibold transition-all duration-200 text-[var(--brown)] 
                                    ${isSubmitting
                            ? 'bg-gray-300 cursor-not-allowed'
                            : 'bg-[var(--light-Orange)] hover:bg-[var(--orange)]'
                        } 
                                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500`}
                >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    );
}
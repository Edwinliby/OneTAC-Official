'use client'

import { useState } from 'react';
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import Logo from '@/../public/assets/logo_color.webp';

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

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        reset
    } = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange'
    });

    const onSubmit = (data) => {
        setIsSubmitting(true);
        console.log('Form submitted:', data);

        setTimeout(() => {
            reset();
            setIsSubmitting(false);
            alert('Form submitted successfully!');
        }, 1500);
    };

    return (
        <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3">
                <div className="relative px-4 md:px-8 lg:px-16 lg:my-6">
                    <div className="flex flex-col gap-6 mb-8">
                        <Image
                            src={Logo}
                            alt="logo"
                            width={120}
                            height={120}
                        />
                        <div>
                            <h1 className="text-[2rem] md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">Get in Touch with Us</h1>
                            <p className="text-gray-600 sm:text-lg">We offer expert services tailored to your needs. We'll get back to you within 24 hours!</p>
                        </div>
                    </div>

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
                                className={`mt-1 block w-full px-3 py-3 placeholder:text-sm bg-white border ${errors.fullName ? 'border-red-500' : 'border-gray-300'
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
                                    className={`mt-1 block w-full px-3 py-3 placeholder:text-sm bg-white border ${errors.email ? 'border-red-500' : 'border-gray-300'
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
                                        id="countryCode"
                                        defaultValue="+91"
                                        className="block px-3 py-3 bg-white border border-gray-300 rounded-l-md focus:ring-yellow-500 focus:border-yellow-500"
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
                                                    ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} 
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
                                className={`mt-1 block w-full px-3 py-3 text-sm text-gray-700 bg-white border ${errors.typeOfEngagement ? 'border-red-500' : 'border-gray-300'
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
                                <select
                                    id="location"
                                    defaultValue=""
                                    {...register('location', {
                                        required: 'Location is required'
                                    })}
                                    className={`mt-1 block w-full px-3 py-3 text-sm text-gray-700 bg-white border ${errors.typeOfEngagement ? 'border-red-500' : 'border-gray-300'
                                        } rounded-md shadow-xs focus:outline-none focus:ring-yellow-500 focus:border-yellow-500`}
                                >
                                    <option value="">Select your State</option>
                                    <option value="US">US</option>
                                    <option value="CA">Canada</option>
                                    <option value="UK">United Kingdom</option>
                                </select>
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
                                    className={`mt-1 block w-full px-3 py-3 text-sm text-gray-700 bg-white border ${errors.typeOfEngagement ? 'border-red-500' : 'border-gray-300'
                                        } rounded-md shadow-xs focus:outline-none focus:ring-yellow-500 focus:border-yellow-500`}
                                >
                                    <option value="">Select your category</option>
                                    <option value="consultation">Consultation</option>
                                    <option value="support">Support</option>
                                    <option value="partnership">Partnership</option>
                                </select>
                                {errors.typeOfEngagement && (
                                    <p className="text-red-500 text-xs mt-1">{errors.typeOfEngagement.message}</p>
                                )}
                            </div>
                        </div>

                        {/* Message */}
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                id="message"
                                {...register('message')}
                                rows={4}
                                className="mt-1 block w-full px-3 py-3 placeholder:text-sm bg-white border border-gray-300 rounded-md shadow-xs focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                                placeholder="Leave us a message..."
                            ></textarea>
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
                                    className={`focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300 rounded ${errors.privacyPolicy ? 'border-red-500' : ''
                                        }`}
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="privacy-policy" className="font-medium text-gray-700">
                                    You agree to our friendly privacy policy
                                </label>
                                {errors.privacyPolicy && (
                                    <p className="text-red-500 text-xs mt-1">{errors.privacyPolicy.message}</p>
                                )}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full flex justify-center p-4 border border-transparent rounded-md shadow-xs font-semibold transition-all duration-200 text-[var(--brown)] 
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
            </div>

            {/* Select custom arrow */}
            <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                <svg
                    className="w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
        </div>
    );
}
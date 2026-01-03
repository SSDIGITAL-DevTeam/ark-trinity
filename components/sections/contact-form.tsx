"use client";

import { useState } from "react";
import CountrySelect from "@/components/ui/country-select";

export default function ContactForm() {
    const [countryCode, setCountryCode] = useState("+65");

    return (
        <form className="space-y-6">
            <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="input input-bordered w-full focus:input-error"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder="your@emailaddress.com"
                    className="input input-bordered w-full focus:input-error"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">Contact Number</label>
                <div className="flex gap-3">
                    <CountrySelect
                        value={countryCode}
                        onChange={setCountryCode}
                    />
                    <input
                        type="tel"
                        id="phone"
                        placeholder="0000 0000"
                        className="input input-bordered w-full focus:input-error"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700">How Can We Help?</label>
                <textarea
                    id="message"
                    rows={4}
                    placeholder="Let us know we can help with your project"
                    className="textarea textarea-bordered w-full focus:textarea-error resize-none text-base"
                ></textarea>
            </div>

            <button
                type="submit"
                className="btn btn-error w-full text-white text-lg font-bold"
            >
                Submit
            </button>
        </form>
    );
}

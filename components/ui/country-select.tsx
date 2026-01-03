"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search, Check } from "lucide-react";
import { countries } from "@/data/countries";

interface CountrySelectProps {
    value: string;
    onChange: (value: string) => void;
}

export default function CountrySelect({ value, onChange }: CountrySelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    // Get selected country object
    const selectedCountry = countries.find((c) => c.dial_code === value) || countries.find((c) => c.dial_code === "+65");

    // Filter countries based on search
    const filteredCountries = countries.filter(
        (c) =>
            c.name.toLowerCase().includes(search.toLowerCase()) ||
            c.dial_code.includes(search) ||
            c.code.toLowerCase().includes(search.toLowerCase())
    );

    // Click outside to close
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Focus search input when opened
    useEffect(() => {
        if (isOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isOpen]);

    return (
        <div className="relative z-50" ref={dropdownRef}>
            {/* Trigger Button */}
            <div
                tabIndex={0}
                role="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center justify-between w-32 input input-bordered bg-white px-3 cursor-pointer ${isOpen ? 'input-error' : ''}`}
            >
                <div className="flex items-center gap-2 overflow-hidden">
                    <span className="text-xl leading-none shrink-0">{selectedCountry?.flag}</span>
                    <span className="text-sm font-medium text-gray-700 truncate">{selectedCountry?.dial_code}</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
            </div>

            {/* Dropdown Menu - Manually positioned and toggled */}
            <div
                className="dropdown-content menu p-2 shadow-xl bg-base-100 rounded-box w-80 mt-1 border border-base-200"
                style={{
                    display: isOpen ? 'block' : 'none',
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    zIndex: 1000
                }}
            >
                {/* Search Header */}
                <div className="px-2 pb-2">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            ref={searchInputRef}
                            type="text"
                            placeholder="Search country..."
                            className="input input-sm input-bordered w-full pl-9 focus:input-error"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>

                {/* Scrollable List */}
                <ul className="max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-200 block">
                    {filteredCountries.length > 0 ? (
                        filteredCountries.map((country) => (
                            <li key={country.code}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        onChange(country.dial_code);
                                        setIsOpen(false);
                                        setSearch("");
                                    }}
                                    className={`flex items-center gap-3 px-4 py-2 hover:bg-base-200 rounded-lg w-full text-left ${value === country.dial_code ? 'bg-error/10 text-error' : 'text-gray-700'}`}
                                >
                                    <span className="text-2xl leading-none">{country.flag}</span>
                                    <div className="flex flex-col min-w-0">
                                        <span className={`text-sm truncate ${value === country.dial_code ? 'font-bold' : 'font-medium'}`}>
                                            {country.name}
                                        </span>
                                        <span className="text-xs opacity-70">
                                            {country.code} • {country.dial_code}
                                        </span>
                                    </div>
                                    {value === country.dial_code && (
                                        <Check className="w-4 h-4 ml-auto shrink-0" />
                                    )}
                                </button>
                            </li>
                        ))
                    ) : (
                        <li className="text-center py-4 text-sm text-gray-500 disabled cursor-default">
                            No countries found
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

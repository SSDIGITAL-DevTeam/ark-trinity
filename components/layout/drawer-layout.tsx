"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useRef } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import LegalNotesSection from "@/components/sections/legal-notes-section";
import Logo from "@/components/ui/logo";

interface DrawerLayoutProps {
    children: ReactNode;
}

export default function DrawerLayout({ children }: DrawerLayoutProps) {
    const pathname = usePathname();
    const drawerRef = useRef<HTMLInputElement>(null);

    const closeDrawer = () => {
        if (drawerRef.current) {
            drawerRef.current.checked = false;
        }
    };

    return (
        <div className="drawer">
            <input id="main-drawer" type="checkbox" className="drawer-toggle" ref={drawerRef} />
            <div className="drawer-content flex flex-col min-h-screen">
                <Navbar />
                <main className="grow">
                    {children}
                </main>
                <LegalNotesSection />
                <Footer />
            </div>
            <div className="drawer-side z-9999">
                <label htmlFor="main-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-black text-white pt-10">
                    <li className="mb-8">
                        <Link href="/" onClick={closeDrawer} className="px-2">
                            <Logo />
                        </Link>
                    </li>
                    {[
                        { label: "Home", href: "/" },
                        { label: "About", href: "/about" },
                        { label: "Market Potential", href: "/market-potential" },
                        { label: "MIF", href: "/mif" },
                        { label: "Founding", href: "/foundings" },
                    ].map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={`text-lg py-3 ${pathname === item.href ? 'text-error font-bold' : ''}`}
                                onClick={closeDrawer}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}

                    <div className="my-6 border-b border-gray-800"></div>

                    <li>
                        <Link href="/contact" className={`btn btn-error text-white btn-block rounded-full ${pathname === '/contact' ? 'brightness-110' : ''}`} onClick={closeDrawer}>
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

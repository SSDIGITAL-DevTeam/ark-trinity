"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/ui/logo";

interface MenuItem {
    label: string;
    href?: string;
    children?: MenuItem[];
}

export default function Navbar() {
    const pathname = usePathname();
    const menus: MenuItem[] = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Market Potential", href: "/market-potential" },
        { label: "Strategic Model", href: "/mif" },
        { label: "Board", href: "/foundings" },
    ];

    const renderMenuItems = (items: MenuItem[], isMobile: boolean) => {
        return items.map((item, index) => {
            const isActive = item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href || "");

            return (
                <li key={index}>
                    {item.children ? (
                        isMobile ? (
                            <>
                                <summary className={isActive ? "text-error font-semibold" : ""}>{item.label}</summary>
                                <ul>{renderMenuItems(item.children, isMobile)}</ul>
                            </>
                        ) : (
                            <details>
                                <summary className={isActive ? "text-error font-semibold" : ""}>{item.label}</summary>
                                <ul className="p-2 bg-black w-40 z-1">
                                    {renderMenuItems(item.children, isMobile)}
                                </ul>
                            </details>
                        )
                    ) : (
                        <Link
                            href={item.href!}
                            className={isActive ? "text-error font-semibold" : ""}
                        >
                            {item.label}
                        </Link>
                    )}
                </li>
            );
        });
    };

    return (
        <div className="bg-black sticky top-0 z-50">
            <div className="navbar text-white shadow-sm container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-3 md:py-4">
                {/* Mobile Layout */}
                <div className="flex xl:hidden w-full items-center justify-between">
                    {/* Hamburger Menu - Left */}
                    <label htmlFor="main-drawer" className="btn btn-ghost btn-sm p-0 min-h-0 h-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>

                    {/* Logo - Center */}
                    <Link href="/" className="flex-shrink-0">
                        <Logo />
                    </Link>

                    {/* Spacer for balance - Right */}
                    <div className="w-6"></div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden xl:grid xl:grid-cols-3 w-full items-center">
                    {/* Logo - Left */}
                    <div className="flex justify-start">
                        <Link href="/">
                            <Logo />
                        </Link>
                    </div>

                    {/* Menu - Center */}
                    <div className="flex justify-center">
                        <ul className="menu menu-horizontal px-1 gap-1 flex-nowrap">
                            {renderMenuItems(menus, false)}
                        </ul>
                    </div>

                    {/* CTA Button - Right */}
                    <div className="flex justify-end">
                        <Link
                            href="/contact"
                            className={`btn rounded-3xl btn-error text-white ${pathname === '/contact' ? 'brightness-110' : ''}`}
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
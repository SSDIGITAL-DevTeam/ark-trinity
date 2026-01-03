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
        { label: "MIF", href: "/mif" },
        { label: "Founding", href: "/foundings" },
    ];

    const renderMenuItems = (items: MenuItem[], isMobile: boolean) => {
        return items.map((item, index) => {
            const isActive = pathname === item.href;

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
            <div className="navbar text-white shadow-sm container mx-auto px-6 md:px-12 lg:px-16 py-4 lg:grid lg:grid-cols-3">
                <div className="lg:justify-start flex-1 lg:flex-none flex items-center">
                    <label htmlFor="main-drawer" className="btn btn-ghost lg:hidden mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <Link href="/">
                        <Logo />
                    </Link>
                </div>

                <div className="hidden lg:flex justify-center">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        {renderMenuItems(menus, false)}
                    </ul>
                </div>

                <div className="hidden lg:flex justify-end">
                    <Link
                        href="/contact"
                        className={`btn rounded-3xl btn-error text-white ${pathname === '/contact' ? 'brightness-110' : ''}`}
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
}
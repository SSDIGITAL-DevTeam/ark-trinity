import Link from "next/link";
import Logo from "@/components/ui/logo";

interface MenuItem {
    label: string;
    href?: string;
    children?: MenuItem[];
}

export default function Navbar() {
    const menus: MenuItem[] = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "MIF", href: "/mif" },
        { label: "Founding", href: "/foundings" },
        // {
        //     label: "Services",
        //     children: [
        //         { label: "Design", href: "/services/design" },
        //         {
        //             label: "Development",
        //             children: [
        //                 { label: "Web", href: "/services/dev/web" },
        //                 { label: "Mobile", href: "/services/dev/mobile" },
        //             ]
        //         },
        //     ]
        // },
    ];

    const renderMenuItems = (items: MenuItem[], isMobile: boolean) => {
        return items.map((item, index) => (
            <li key={index}>
                {item.children ? (
                    isMobile ? (
                        <>
                            <summary>{item.label}</summary>
                            <ul>{renderMenuItems(item.children, isMobile)}</ul>
                        </>
                    ) : (
                        <details>
                            <summary>{item.label}</summary>
                            <ul className="p-2 bg-black w-40 z-1">
                                {renderMenuItems(item.children, isMobile)}
                            </ul>
                        </details>
                    )
                ) : (
                    <Link href={item.href!}>{item.label}</Link>
                )}
            </li>
        ));
    };

    return (
        <div className="bg-black sticky top-0 z-50">
            <div className="navbar text-white shadow-sm max-w-7xl mx-auto px-6 md:px-12 py-4">
                <div className="lg:navbar-start navbar-center">
                    <label htmlFor="main-drawer" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <Link href="/">
                        <Logo />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {renderMenuItems(menus, false)}
                    </ul>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <Link href="/contact" className="btn rounded-3xl btn-error text-white">Contact Us</Link>
                </div>
            </div>
        </div>
    );
}
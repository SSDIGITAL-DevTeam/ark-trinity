import Link from "next/link";
import Logo from "@/components/ui/logo";

const Footer = () => {
    // const currentYear = new Date().getFullYear();

    const quickNavLinks = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "MIF", href: "/mif" },
        { label: "Board", href: "/foundings" },
        // { label: "Insight", href: "/insight" },
        { label: "Contact", href: "/contact" },
    ];

    const contactInfo = [
        "Singapore (HQ) - One Marina Boulevard",
        "investors@arktrinity.com.sg",
        "partnership@arktrinity.com.sg",
        "media@arktrinity.com.sg",
    ];

    return (
        <footer className="bg-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

                    {/* Left Column: Logo & CTA */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center">
                            <Logo variant="light" />
                        </Link>
                        <p className="text-gray-800 font-semibold leading-relaxed text-pretty">
                            Market Invasion Fund<sup>TM</sup> (MIF) — Making Every $300K Investment into $1M ARR AI Revenue Pods
                        </p>
                    </div>

                    {/* Middle Column: Quick Navigation */}
                    <div>
                        <h4 className="text-lg font-bold text-black mb-6">Quick Navigation</h4>
                        <nav className="space-y-3">
                            {quickNavLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="block text-gray-700 hover:text-[#FF4D4D] transition-colors text-sm"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Right Column: Contact */}
                    <div>
                        <h4 className="text-lg font-bold text-black mb-6">Contact</h4>
                        <div className="space-y-3">
                            {contactInfo.map((info, index) => (
                                <p
                                    key={index}
                                    className={`text-sm ${info.includes('@') ? 'text-gray-700 hover:text-[#FF4D4D] cursor-pointer transition-colors' : 'text-gray-700'}`}
                                >
                                    {info}
                                </p>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <p className="text-center text-gray-800 font-bold tracking-wide mb-3 text-pretty">
                Legal Notice | All Rights Reserved 2026
            </p>
            <p className="text-center text-gray-500 text-sm font-medium tracking-wide mb-20 text-pretty max-w-[600px] mx-auto">
                ARK Trinity is a private holding and operating institution and is not a licensed fund manager
                or regulated financial institution under MAS. All participation is private and non-public.
                Agreements are governed by Singapore law. Forward-looking statements are indicative only.
            </p>
        </footer>
    );
};

export default Footer;

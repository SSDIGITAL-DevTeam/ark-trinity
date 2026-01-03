import Link from "next/link";
import Logo from "@/components/ui/logo";

const Footer = () => {
    // const currentYear = new Date().getFullYear();

    const quickNavLinks = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "MIF", href: "/mif" },
        { label: "Founding", href: "/founding" },
        { label: "Insight", href: "/insight" },
        { label: "Contact", href: "/contact" },
    ];

    const contactInfo = [
        "Singapore (HQ) - One Marina Boulevard",
        "Jakarta (Hub) - ARK Indonesia Capital Partners",
        "investors@arktrinity.com",
        "partnership@arktrinity.com",
        "media@arktrinity.com",
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
                        <p className="text-gray-800 font-semibold leading-relaxed">
                            Join MIF — Turn 300K into $1M ARR AI Revenue Pods.
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

            <p className="text-center text-black text-base font-semibold tracking-wide mb-20">
                © 2026 ARK Trinity Holdings Pte. Ltd. | All Rights Reserved | Privacy & Governance Policy
            </p>
        </footer>
    );
};

export default Footer;

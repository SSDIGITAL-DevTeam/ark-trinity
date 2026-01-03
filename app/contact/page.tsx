import Image from "next/image";
import { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";
import { Mail, Building2 } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact Us - ARK Trinity",
    description: "Connect with ARK Trinity. Enter the Ark.",
    openGraph: {
        title: "Contact ARK Trinity | Enter the Ark",
        description: "Engaging with intelligence, integrity, and intention for AI-powered business growth.",
        images: ["/images/contact-hero.png"],
    }
};

export default function ContactPage() {
    return (
        <main>
            <PageHero
                title="CONTACT US"
                image="/images/contact-hero.png"
            />

            <section className="bg-white py-16 md:py-24">
                <div className="container mx-auto px-6 md:px-12 lg:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-error mb-6">
                                Enter the Ark.
                            </h2>
                            <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                                ARK Trinity engages only with those who share our values — intelligence,
                                integrity, and intention.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-sm text-gray-700">
                                        <Mail className="w-4 h-4 text-error shrink-0" />
                                        <span>investors@arktrinity.com</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-700">
                                        <Mail className="w-4 h-4 text-error shrink-0" />
                                        <span>partnerships@arktrinity.com</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-700">
                                        <Mail className="w-4 h-4 text-error shrink-0" />
                                        <span>media@arktrinity.com</span>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3 text-sm text-gray-700">
                                        <Building2 className="w-4 h-4 text-error shrink-0 mt-0.5" />
                                        <div>
                                            <span className="font-bold text-error block">Singapore (HQ)</span>
                                            <span>One Marina Boulevard</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 text-sm text-gray-700">
                                        <Building2 className="w-4 h-4 text-error shrink-0 mt-0.5" />
                                        <div>
                                            <span className="font-bold text-error block">Jakarta (Hub)</span>
                                            <span>ARK Indonesia Capital Partners</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="text-black font-semibold italic">
                                “Every great empire begins with a conversation — let this
                                be the first.” <span className="text-error not-italic font-bold"> — CKH</span>
                            </p>
                        </div>

                        <div className="rounded-xl overflow-hidden shadow-lg h-full max-h-[400px]">
                            <Image
                                src="/images/contact-working.png"
                                alt="Team collaborating on contact page"
                                width={600}
                                height={400}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#F5F5F5] py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-error text-center mb-10">
                        Contact Us Now
                    </h2>

                    <div className="bg-white rounded-xl shadow-sm p-8 md:p-10">
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
                                    <select className="select select-bordered focus:select-error w-24 shrink-0 bg-white">
                                        <option>+65</option>
                                        <option>+62</option>
                                        <option>+1</option>
                                    </select>
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
                    </div>
                </div>
            </section>
        </main>
    );
}

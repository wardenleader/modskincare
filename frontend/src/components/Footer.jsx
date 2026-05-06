import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";
import { SOCIAL, PHONE, PHONE_TEL, EMAIL, ADDRESS, POLICIES, TAGLINE } from "../data/site";

const links = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Team", href: "#team" },
    { label: "Gift Cards", href: "#gift-cards" },
    { label: "Contact", href: "#contact" },
];

const XIcon = ({ size = 18 }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
        <path d="M18.244 2H21l-6.52 7.451L22 22h-6.823l-5.34-6.99L3.6 22H1l7-7.997L1.5 2h6.99l4.83 6.39L18.244 2zm-1.196 18h1.83L7.05 4H5.107l11.94 16z" />
    </svg>
);

const social = [
    { icon: Instagram, href: SOCIAL.instagram, label: "Instagram" },
    { icon: Facebook, href: SOCIAL.facebook, label: "Facebook" },
    { icon: XIcon, href: SOCIAL.twitter, label: "X (Twitter)" },
    { icon: Youtube, href: SOCIAL.youtube, label: "YouTube" },
    { icon: Linkedin, href: SOCIAL.linkedin, label: "LinkedIn" },
];

export default function Footer() {
    return (
        <footer
            className="relative bg-ink text-cream py-20 overflow-hidden"
            data-testid="footer"
        >
            <div className="absolute inset-0 grain pointer-events-none opacity-40" />
            <div className="relative max-w-7xl mx-auto px-6 md:px-10">
                <div className="grid lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-5">
                        <div className="font-cursive text-cream text-6xl sm:text-7xl leading-none">
                            Marlinda's
                        </div>
                        <p className="mt-3 text-champagne text-sm tracking-[0.3em] uppercase">
                            Mod Skincare
                        </p>
                        <p className="mt-6 max-w-md text-cream/80 leading-relaxed font-light italic font-serif text-lg">
                            {TAGLINE}
                        </p>

                        <div className="mt-7 flex items-center gap-3">
                            {social.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    data-testid={`social-${label.toLowerCase().split(" ")[0]}`}
                                    className="w-11 h-11 rounded-full border border-champagne/30 hover:bg-champagne hover:text-ink hover:border-champagne hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-cream"
                                >
                                    <Icon size={18} strokeWidth={1.5} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <p className="text-champagne text-xs tracking-[0.3em] uppercase mb-5">
                            Explore
                        </p>
                        <ul className="space-y-3">
                            {links.map((l) => (
                                <li key={l.label}>
                                    <a
                                        href={l.href}
                                        className="text-cream/85 hover:text-rose-light transition-colors font-light"
                                        data-testid={`footer-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                                    >
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-4">
                        <p className="text-champagne text-xs tracking-[0.3em] uppercase mb-5">
                            Visit
                        </p>
                        <p className="font-serif text-cream text-xl leading-snug">
                            {ADDRESS}
                        </p>
                        <a
                            href={PHONE_TEL}
                            className="block mt-4 text-cream/85 hover:text-rose-light transition-colors text-lg"
                        >
                            {PHONE}
                        </a>
                        <a
                            href={`mailto:${EMAIL}`}
                            className="block mt-1 text-cream/85 hover:text-rose-light transition-colors"
                        >
                            {EMAIL}
                        </a>
                    </div>
                </div>

                <div className="mt-16 pt-10 border-t border-champagne/20">
                    <p className="text-champagne text-xs tracking-[0.3em] uppercase mb-5">
                        Spa Policies
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3 text-cream/80 text-sm leading-relaxed font-light max-w-5xl">
                        {POLICIES.map((p, i) => (
                            <li
                                key={i}
                                className="flex gap-3"
                                data-testid={`footer-policy-${i}`}
                            >
                                <span className="text-champagne shrink-0">•</span>
                                <span>{p}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-10 pt-8 border-t border-champagne/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-cream/60 text-sm">
                        © 2026 Marlinda's Mod Skincare. All rights reserved.
                    </p>
                    <p className="text-champagne/80 text-xs tracking-[0.25em] uppercase">
                        Crafted with care
                    </p>
                </div>
            </div>
        </footer>
    );
}

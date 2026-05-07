import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { BOOKER_URL, TAGLINE } from "../data/site";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-[100svh] w-full overflow-hidden grain"
            data-testid="hero-section"
        >
            {/* Background image with Ken Burns */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 animate-ken-burns will-change-transform">
                    <img
                        src="https://customer-assets.emergentagent.com/job_luxury-skincare-spa-1/artifacts/arri75af_image.png"
                        alt="Glowing radiant skin with white orchid and golden palm accents"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        loading="eager"
                    />
                </div>
                {/* Soft cream warm overlay — keep image bright */}
                <div className="absolute inset-0 bg-gradient-to-r from-cream/60 via-cream/10 to-transparent" />
            </div>

            {/* Floating shimmer particles */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {Array.from({ length: 14 }).map((_, i) => (
                    <motion.span
                        key={i}
                        className="absolute block rounded-full bg-champagne/60"
                        style={{
                            left: `${(i * 7.3) % 100}%`,
                            top: `${(i * 13) % 90 + 5}%`,
                            width: `${4 + (i % 4) * 2}px`,
                            height: `${4 + (i % 4) * 2}px`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.6, 0.2],
                        }}
                        transition={{
                            duration: 6 + (i % 5),
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: (i * 0.3) % 3,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 min-h-[100svh] flex flex-col justify-center pt-28 pb-24">
                {/* Marlinda's cursive — charcoal, refined Allura script */}
                <motion.h1
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.1, delay: 1.9, ease: [0.22, 1, 0.36, 1] }}
                    className="font-cursive text-ink leading-[0.95] tracking-tight max-w-[60vw]"
                    style={{
                        fontSize: "clamp(3.5rem, 9vw, 8rem)",
                        textRendering: "optimizeLegibility",
                        WebkitFontSmoothing: "antialiased",
                    }}
                    data-testid="hero-headline"
                >
                    Marlinda's
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 2.5 }}
                    className="mt-6 max-w-xl text-ink/85 text-lg sm:text-xl md:text-2xl font-serif font-light italic leading-snug"
                    data-testid="hero-subheading"
                >
                    {TAGLINE}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 2.8 }}
                    className="mt-10 flex flex-wrap gap-4"
                >
                    <a
                        href={BOOKER_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ripple bg-rose hover:bg-rose-dark text-white rounded-full px-8 py-4 text-sm font-medium tracking-[0.15em] uppercase transition-all duration-300 hover:scale-[1.04] shadow-xl"
                        data-testid="hero-book-cta"
                    >
                        Book an Appointment
                    </a>
                    <a
                        href="#services"
                        className="btn-ripple bg-cream/70 backdrop-blur border border-ink/20 text-ink hover:bg-ink hover:border-ink hover:text-cream rounded-full px-8 py-4 text-sm font-medium tracking-[0.15em] uppercase transition-all duration-300 hover:scale-[1.04]"
                        data-testid="hero-services-cta"
                    >
                        Explore Services
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.a
                href="#book-experience"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.4, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-ink/70 hover:text-ink transition-colors"
                aria-label="Scroll down"
                data-testid="hero-scroll-indicator"
            >
                <span className="text-[10px] tracking-[0.4em] uppercase mb-2">
                    Scroll
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown size={22} strokeWidth={1.5} />
                </motion.div>
            </motion.a>
        </section>
    );
}

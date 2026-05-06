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
                        src="https://customer-assets.emergentagent.com/job_luxury-skincare-spa-1/artifacts/rjlocen2_image.png"
                        alt="Glowing radiant skin with botanical accents"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        loading="eager"
                    />
                </div>
                {/* Soft cream + blush overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cream/50 via-rose/15 to-ink/55" />
            </div>

            {/* Floating shimmer particles */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {Array.from({ length: 14 }).map((_, i) => (
                    <motion.span
                        key={i}
                        className="absolute block rounded-full bg-cream/60"
                        style={{
                            left: `${(i * 7.3) % 100}%`,
                            top: `${(i * 13) % 90 + 5}%`,
                            width: `${4 + (i % 4) * 2}px`,
                            height: `${4 + (i % 4) * 2}px`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.7, 0.2],
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
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.9 }}
                    className="text-cream/95 text-xs tracking-[0.5em] uppercase mb-6 drop-shadow"
                    data-testid="hero-eyebrow"
                >
                    Burlingame · Since 1996
                </motion.p>

                {/* Marlinda's cursive — front and center */}
                <motion.h1
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.1, delay: 2.0, ease: [0.22, 1, 0.36, 1] }}
                    className="font-cursive text-cream leading-[0.85] tracking-tight drop-shadow-2xl"
                    style={{
                        fontSize: "clamp(5rem, 14vw, 12rem)",
                    }}
                    data-testid="hero-headline"
                >
                    Marlinda's
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 2.7 }}
                    className="mt-6 max-w-2xl text-cream text-lg sm:text-xl md:text-2xl font-serif font-light italic leading-snug drop-shadow"
                    data-testid="hero-subheading"
                >
                    {TAGLINE}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 2.95 }}
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
                        className="btn-ripple bg-transparent border border-cream/70 text-cream hover:bg-cream hover:text-ink rounded-full px-8 py-4 text-sm font-medium tracking-[0.15em] uppercase transition-all duration-300 hover:scale-[1.04]"
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
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-cream/90 hover:text-cream transition-colors"
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

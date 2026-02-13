"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Container from "../ui/Container";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Roadmaps", href: "/roadmaps" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Close menu when resizing to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
                setIsMobile(false);
            } else {
                setIsMobile(true);
            }
        };
        
        // Initial check
        handleResize();
        
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMenuOpen]);

    const handleNavClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="py-6 fixed top-0 left-0 w-full z-50 transition-all border-none">
            <Container className="flex justify-between items-center">
                <Link href="/" className="text-2xl font-extrabold tracking-tight">
                    <span className="text-primary">Coding</span>
                    <span className="ml-1" style={{ color: 'hsl(var(--foreground))' }}>Wallah</span>
                </Link>

                {/* Desktop Navigation - Hidden on mobile */}
                <nav className="nav-desktop flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.href} 
                            href={link.href} 
                            className="nav-link text-sm font-bold uppercase tracking-wide hover-text-primary transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <ThemeToggle />
                </nav>

                {/* Mobile Menu & Theme Toggle - Hidden on desktop */}
                <div className="mobile-controls flex items-center gap-2">
                    <ThemeToggle />
                    <button
                        className="menu-toggle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X size={24} color="hsl(var(--primary))" />
                        ) : (
                            <Menu size={24} color="hsl(var(--foreground))" />
                        )}
                    </button>
                </div>
            </Container>

            {/* Mobile Dropdown Menu - Only visible on mobile when open */}
            {isMenuOpen && (
                <div className="mobile-menu">
                    <Container className="py-4">
                        <nav className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="mobile-nav-link text-sm font-bold uppercase tracking-wide py-2 px-4 rounded transition-colors"
                                    onClick={handleNavClick}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </Container>
                </div>
            )}
        </header>
    );
}

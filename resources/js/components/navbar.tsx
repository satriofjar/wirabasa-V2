
import { useEffect, useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import IconNav from "@/../assets/LogoNav.png"
import { Auth } from "@/types";
import { show } from "@/routes/user";

const navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { url } = usePage(); // Ambil URL aktif dari inertia


    const { auth } = usePage<{ auth: Auth }>().props;

    const navLinks = [
        { to: "/", label: "Beranda" },
        { to: "/layanan", label: "Layanan" },
        { to: "/about", label: "Tentang Kami" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 5);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Dynamic style navbar
    const navbarClasses = scrolled
        ? "bg-white shadow-md h-16 transition-all duration-300"
        : url === "/"
            ? "bg-[rgba(0,123,255,0.3)] h-24 transition-all duration-300"
            : "bg-white h-24 transition-all duration-300";

    // Dynamic link classes
    const linkClasses = (href: string) =>
        `px-3 py-2 font-medium text-sm transition-colors duration-200 hover:text-blue-600 hover:border-b hover:border-b-2 hover:border-[#007bff] hover:border-solid text-xl ${url === href
            ? "text-blue-600 border-b-2 border-blue-600"
            : scrolled || url !== "/"
                ? "text-gray-800 hover:text-blue-600"
                : "text-gray-500 hover:text-blue-200"
        }`;

    return (
        <nav className={`sticky top-0 left-0 w-full z-50 ${navbarClasses}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <img src={IconNav} alt="Logo" className="h-12 w-auto" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link, i) => (
                        <Link key={i} href={link.to} className={linkClasses(link.to)}>
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Tombol Login & Sign Up */}
                {url.split('/')[1] != 'user' && (
                    auth.user ?
                        <div className="hidden md:flex items-center gap-4">
                            <Link
                                href={show(auth.user.id)}
                                className={`px-5 py-1 rounded-sm text-xl font-medium transition-colors duration-200 hover:border-[#007bff70] hover:bg-[#007bff70] hover:text-white ${scrolled || url !== "/"
                                    ? "text-blue-600 hover:text-blue-800"
                                    : "text-white hover:text-blue-200"
                                    }`}
                            >
                                {auth?.user.name}
                            </Link>
                        </div> :
                        <div className="hidden md:flex items-center gap-4">
                            <Link
                                href="/login"
                                className={`px-5 py-1 rounded-sm text-xl font-medium transition-colors duration-200 hover:border-[#007bff70] hover:bg-[#007bff70] hover:text-white ${scrolled || url !== "/"
                                    ? "text-blue-600 hover:text-blue-800"
                                    : "text-white hover:text-blue-200"
                                    }`}
                            >
                                Login
                            </Link>
                            <Link
                                href="/register"
                                className={`px-4 py-1 rounded-sm text-xl font-medium border transition-colors duration-200 ${scrolled || url !== "/"
                                    ? "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                                    : "border-white text-white hover:bg-white hover:text-blue-600"
                                    }`}
                            >
                                Sign Up
                            </Link>
                        </div>
                )}

                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="focus:outline-none"
                    >
                        <svg
                            className={`w-6 h-6 ${scrolled || url !== "/" ? "text-gray-800" : "text-white"
                                }`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {menuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <div className="px-4 py-3 flex flex-col gap-3">
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.to}
                                className="text-gray-800 hover:text-blue-600"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}

                        {auth.user ?
                            <div className="border-t border-gray-200 pt-3 mt-3 flex flex-col gap-3">
                                <Link
                                    href={show(auth.user.id)}
                                    className="text-blue-600 hover:text-blue-800"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {auth.user.name}
                                </Link>
                            </div> :

                            <div className="border-t border-gray-200 pt-3 mt-3 flex flex-col gap-3">
                                <Link
                                    href="/login"
                                    className="text-blue-600 hover:text-blue-800"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/register"
                                    className="px-4 py-2 border border-blue-600 rounded-lg text-blue-600 hover:bg-blue-600 hover:text-white text-center"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Sign Up
                                </Link>
                            </div>
                        }
                    </div>
                </div>
            )}
        </nav>
    );
};

export default navbar;


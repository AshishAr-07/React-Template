"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const headerRef = useRef<HTMLElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="backdrop-blur-md border-b border-[#888888] sticky top-0 z-50 bg-white/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14">
              <Image
                src="/road.png"
                alt="Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold ml-2 text-[var(--main-custom)]">
              Road<span className="text-gray-800">Master</span>
            </span>
          </Link>

          {/* Hamburger menu for mobile */}
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/products">Products</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>
        </div>
      </div>

      {/* Mobile navigation */}
      <nav
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-56 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-100">
          <MobileNavLink href="/" onClick={closeMenu}>
            Home
          </MobileNavLink>
          <MobileNavLink href="/about" onClick={closeMenu}>
            About
          </MobileNavLink>
          <MobileNavLink href="/products" onClick={closeMenu}>
            Products
          </MobileNavLink>
          <MobileNavLink href="/contact" onClick={closeMenu}>
            Contact
          </MobileNavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;

// Desktop navigation
function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group relative inline-flex items-center transition-colors duration-300 ease-in-out hover:text-[var(--custom-500)]"
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute bottom-0 left-0 h-[0.1rem] w-0 bg-[var(--custom-500)] transition-all duration-300 ease-in-out group-hover:w-full"></span>
    </Link>
  );
}

// Mobile navigation

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-500 hover:text-white"
    >
      {children}
    </Link>
  );
}
"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  onScrollIndicatorChange?: (hidden: boolean) => void;
}

export default function Header({ onScrollIndicatorChange }: HeaderProps) {
  const [headerHidden, setHeaderHidden] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Header scroll behavior
  useEffect(() => {
    let lastScrollY = 0;
    const scrollThreshold = 100;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setHeaderScrolled(currentScrollY > 50);

      if (onScrollIndicatorChange) {
        onScrollIndicatorChange(currentScrollY > 100);
      }

      if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
        setHeaderHidden(true);
      } else {
        setHeaderHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onScrollIndicatorChange]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Smooth scroll for anchor links (only on home page)
  const handleAnchorClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
      if (targetId === "#") return;

      // If on home page, do smooth scroll
      if (isHomePage) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const headerOffset = 100;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
      // If not on home page, navigate to home page with hash (default link behavior)
    },
    [isHomePage]
  );

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = mobileMenuOpen ? "" : "hidden";
  };

  return (
    <header
      className={`header ${headerHidden ? "hidden" : ""} ${headerScrolled ? "scrolled" : ""}`}
    >
      <nav className="nav-container">
        <Link href="/" className="logo">
          SOLVERE
        </Link>
        <ul className={`nav-menu ${mobileMenuOpen ? "active" : ""}`}>
          <li className="nav-item-disabled">
            <span className="nav-link-disabled">Products</span>
          </li>
          <li className="nav-item-disabled">
            <span className="nav-link-disabled">Resources</span>
          </li>
          <li className="nav-dropdown">
            <a href="#" className="nav-dropdown-toggle">
              Company
            </a>
            <div className="nav-dropdown-menu">
              <a
                href={isHomePage ? "#philosophy" : "/#philosophy"}
                onClick={(e) => handleAnchorClick(e, "#philosophy")}
                className="nav-dropdown-item"
              >
                Our Philosophy
              </a>
              <a
                href={isHomePage ? "#who-we-are" : "/#who-we-are"}
                onClick={(e) => handleAnchorClick(e, "#who-we-are")}
                className="nav-dropdown-item"
              >
                Who We Are
              </a>
              <a
                href={isHomePage ? "#corporate" : "/#corporate"}
                onClick={(e) => handleAnchorClick(e, "#corporate")}
                className="nav-dropdown-item"
              >
                Overview
              </a>
            </div>
          </li>
        </ul>
        <div className={`nav-buttons ${mobileMenuOpen ? "active" : ""}`}>
          <span className="btn btn-disabled">
            ログイン
          </span>
          <span className="btn btn-disabled">
            新規登録
          </span>
        </div>
        <button
          className="mobile-menu-toggle"
          aria-label="メニュー"
          aria-expanded={mobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
}

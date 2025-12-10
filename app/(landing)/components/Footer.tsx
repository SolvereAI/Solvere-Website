"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-logo">SOLVERE</h3>
            <p className="footer-tagline">Solve, Evolve, Solvere</p>
            <div className="footer-contact-info">
              <address className="footer-address">
                〒141-0022 東京都品川区東五反田5-22-33 TK池田山ビル2F
              </address>
              <a href="mailto:information@solvere.jp" className="footer-email">
                information@solvere.jp
              </a>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><Link href="/#philosophy">Our Philosophy</Link></li>
                <li><Link href="/#who-we-are">Who We Are</Link></li>
                <li><Link href="/#corporate">Overview</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Products</h4>
              <ul>
                <li><span className="footer-link-disabled">Upskill</span></li>
                <li><span className="footer-link-disabled">Bridge</span></li>
                <li><span className="footer-link-disabled">Assess</span></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li><span className="footer-link-disabled">最新情報</span></li>
                <li><span className="footer-link-disabled">イベント</span></li>
                <li><span className="footer-link-disabled">ヘルプ</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-legal">
            <Link href="/privacy" className="footer-legal-link">プライバシーポリシー</Link>
            <span className="separator">•</span>
            <Link href="/security" className="footer-legal-link">情報セキュリティ方針</Link>
          </div>
          <p className="footer-copyright">
            &copy; 2025 Solvere Corporation
          </p>
        </div>
      </div>
    </footer>
  );
}

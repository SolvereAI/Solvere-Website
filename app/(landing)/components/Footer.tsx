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
              <h4>会社情報</h4>
              <ul>
                <li><span className="footer-link-disabled">会社概要</span></li>
                <li><span className="footer-link-disabled">採用情報</span></li>
                <li><span className="footer-link-disabled">お問い合わせ</span></li>
                <li><span className="footer-link-disabled">プレス</span></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>製品</h4>
              <ul>
                <li><Link href="/upskill">Upskill</Link></li>
                <li><Link href="/bridge">Bridge</Link></li>
                <li><Link href="/assess">Assess</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>ソリューション</h4>
              <ul>
                <li><span className="footer-link-disabled">学生向け</span></li>
                <li><span className="footer-link-disabled">求職者向け</span></li>
                <li><span className="footer-link-disabled">企業向け</span></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>リソース</h4>
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
            <span className="footer-link-disabled">プライバシーポリシー</span>
            <span className="separator">•</span>
            <span className="footer-link-disabled">利用規約</span>
            <span className="separator">•</span>
            <span className="footer-link-disabled">Cookieポリシー</span>
          </div>
          <p className="footer-copyright">
            &copy; 2025 Solvere Corporation Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}

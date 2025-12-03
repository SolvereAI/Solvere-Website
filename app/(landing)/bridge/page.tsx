"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "../lp-styles.css";

export default function BridgePage() {
  const [headerHidden, setHeaderHidden] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [signupDropdownOpen, setSignupDropdownOpen] = useState(false);

  // Header scroll behavior
  useEffect(() => {
    let lastScrollY = 0;
    const scrollThreshold = 100;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setHeaderScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
        setHeaderHidden(true);
      } else {
        setHeaderHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close signup dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".signup-dropdown")) {
        setSignupDropdownOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSignupDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = mobileMenuOpen ? "" : "hidden";
  };

  return (
    <div className="lp-wrapper">
      {/* Header */}
      <header
        className={`header ${headerHidden ? "hidden" : ""} ${headerScrolled ? "scrolled" : ""}`}
      >
        <nav className="nav-container">
          <Link href="/" className="logo">
            SOLVERE
          </Link>
          <ul className={`nav-menu ${mobileMenuOpen ? "active" : ""}`}>
            <li className="nav-dropdown">
              <a href="#" className="nav-dropdown-toggle">
                Products
              </a>
              <div className="nav-dropdown-menu">
                <Link href="/upskill" className="nav-dropdown-item">
                  Upskill
                </Link>
                <Link href="/bridge" className="nav-dropdown-item">
                  Bridge
                </Link>
                <Link href="/assess" className="nav-dropdown-item">
                  Assess
                </Link>
              </div>
            </li>
            <li className="nav-item-disabled">
              <span className="nav-link-disabled">Solution</span>
            </li>
            <li className="nav-item-disabled">
              <span className="nav-link-disabled">Resources</span>
            </li>
            <li className="nav-item-disabled">
              <span className="nav-link-disabled">Company</span>
            </li>
          </ul>
          <div className={`nav-buttons ${mobileMenuOpen ? "active" : ""}`}>
            <Link
              href="/coming-soon"
              className="btn btn-secondary"
            >
              ログイン
            </Link>
            <div
              className={`signup-dropdown ${signupDropdownOpen ? "open" : ""}`}
            >
              <button
                className="btn btn-secondary signup-toggle"
                onClick={(e) => {
                  e.stopPropagation();
                  setSignupDropdownOpen(!signupDropdownOpen);
                }}
              >
                新規登録
              </button>
              <div className="signup-menu">
                <Link
                  href="/coming-soon"
                  className="signup-item"
                >
                  <span>候補者</span>
                  <span className="signup-arrow">→</span>
                </Link>
                <Link
                  href="/coming-soon"
                  className="signup-item"
                >
                  <span>企業担当者</span>
                  <span className="signup-arrow">→</span>
                </Link>
                <Link
                  href="/coming-soon"
                  className="signup-item"
                >
                  <span>エージェント</span>
                  <span className="signup-arrow">→</span>
                </Link>
              </div>
            </div>
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

      {/* Product Hero Section */}
      <section className="product-hero">
        <div className="container">
          <div className="product-hero-content">
            <p className="product-label">Solvere Product</p>
            <h1 className="product-title">Bridge</h1>
            <p className="product-tagline">問題解決力で才能と機会をつなぐ</p>
            <p className="product-description">
              共通試験で問題解決力を&quot;はかり&quot;、そのスコアを基に候補者と企業を&quot;つなげる&quot;マッチングプラットフォーム。
              <br />
              学歴や経歴ではなく、本質的な能力で評価される新しい採用の形を実現します。
              <br />
              極端な仲介手数料負担と、プッシュ型採用に要する工数を大幅に軽減します。
            </p>
            <div className="product-cta">
              <Link href="/coming-soon" className="btn btn-primary-dark">
                無料で始める
              </Link>
              <p className="product-release">*リリース予定：2026年7月</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Section for Candidates */}
      <section className="product-target-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-accent"></span>求職者の方へ
          </h2>
          <div className="target-grid">
            <div className="target-card">
              <div className="target-icon">01</div>
              <h3 className="target-title">実力で勝負したい方</h3>
              <p className="target-description">
                学歴や職歴ではなく、自分の問題解決力や思考力で評価されたい方。Upskillで鍛えた実力を、スコアとして企業にアピールできます。
              </p>
            </div>
            <div className="target-card">
              <div className="target-icon">02</div>
              <h3 className="target-title">効率的に転職活動を進めたい方</h3>
              <p className="target-description">
                一度の受験で複数企業へアピール可能。問題解決力を重視する企業からスカウトが届き、選考プロセスを大幅に効率化できます。
              </p>
            </div>
            <div className="target-card">
              <div className="target-icon">03</div>
              <h3 className="target-title">ハイクラス転職を目指す方</h3>
              <p className="target-description">
                コンサルティングファームや日経300企業、成長スタートアップなど、問題解決力を強く求める企業との特別な選考機会を得られます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Section for Companies */}
      <section className="product-target-section" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <h2 className="section-title">
            <span className="title-accent"></span>企業の方へ
          </h2>
          <div className="target-grid">
            <div className="target-card">
              <div className="target-icon">01</div>
              <h3 className="target-title">思考力の高い人材を求める企業</h3>
              <p className="target-description">
                問題解決力スコアで候補者を事前にスクリーニング。書類や筆記試験では見極められないポテンシャルを持つ人材にアクセスできます。
              </p>
            </div>
            <div className="target-card">
              <div className="target-icon">02</div>
              <h3 className="target-title">採用コストを最適化したい企業</h3>
              <p className="target-description">
                成果報酬型のマッチングで、極端な仲介手数料負担を軽減。採用が成功した時のみ費用が発生します。
              </p>
            </div>
            <div className="target-card">
              <div className="target-icon">03</div>
              <h3 className="target-title">プッシュ型採用の工数を減らしたい企業</h3>
              <p className="target-description">
                候補者ごとに1by1で面接設定する手間を省き、問題解決力スコアで事前にスクリーニング。ROIの高い採用活動を実現します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="product-features-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-accent"></span>Bridgeの特長
          </h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-number">01</div>
              <h3 className="feature-title">問題解決力スコアによるマッチング</h3>
              <p className="feature-description">
                Upskillで測定した問題解決力スコアを活用し、企業が求めるスキルレベルと候補者の能力を精密にマッチング。学歴・経歴に依存しない採用を実現します。
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-number">02</div>
              <h3 className="feature-title">仲介手数料の大幅削減</h3>
              <p className="feature-description">
                既存のエージェント・プラットフォームに比べ、合理的な成果報酬型の料金体系を提供。採用コストを大幅に最適化します。
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-number">03</div>
              <h3 className="feature-title">選考工数の削減</h3>
              <p className="feature-description">
                スコアによる事前スクリーニングで、有望な候補者に絞って選考を進められます。面接設定の手間を大幅に削減し、採用担当者の負担を軽減します。
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-number">04</div>
              <h3 className="feature-title">埋もれた才能の発掘</h3>
              <p className="feature-description">
                学歴・経歴スクリーニングでは見つからないハイポテンシャル人材を発掘。能力を正当に評価されたい候補者と、真の実力者を求める企業を結びつけます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two-way Value Section */}
      <section className="bridge-value-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-accent"></span>双方にとっての価値
          </h2>

          <div className="value-split">
            <div className="value-panel candidate-panel">
              <div className="panel-header">
                <span className="panel-icon">
                  <svg viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="16" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 44c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </span>
                <h3>候補者の方へ</h3>
              </div>
              <ul className="value-list">
                <li>
                  <span className="value-number">01</span>
                  <div className="value-content">
                    <strong>実力で勝負できる</strong>
                    <p>学歴・経歴ではなく、問題解決力スコアで企業にアピール</p>
                  </div>
                </li>
                <li>
                  <span className="value-number">02</span>
                  <div className="value-content">
                    <strong>効率的な転職活動</strong>
                    <p>一度の受験で複数企業へ。スコアを見た企業からスカウトも</p>
                  </div>
                </li>
                <li>
                  <span className="value-number">03</span>
                  <div className="value-content">
                    <strong>ハイクラス求人へのアクセス</strong>
                    <p>コンサルファーム・日経300・スタートアップの求人に出会える</p>
                  </div>
                </li>
              </ul>
              <Link href="/coming-soon" className="panel-cta">
                候補者として登録
                <span className="cta-arrow">→</span>
              </Link>
            </div>

            <div className="value-divider">
              <div className="divider-line"></div>
              <div className="divider-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="divider-line"></div>
            </div>

            <div className="value-panel company-panel">
              <div className="panel-header">
                <span className="panel-icon">
                  <svg viewBox="0 0 48 48" fill="none">
                    <rect x="8" y="16" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M16 16V12a8 8 0 0116 0v4" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="24" cy="28" r="4" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </span>
                <h3>企業の方へ</h3>
              </div>
              <ul className="value-list">
                <li>
                  <span className="value-number">01</span>
                  <div className="value-content">
                    <strong>採用コストの最適化</strong>
                    <p>成果報酬型で、極端な仲介手数料負担を軽減</p>
                  </div>
                </li>
                <li>
                  <span className="value-number">02</span>
                  <div className="value-content">
                    <strong>選考工数の削減</strong>
                    <p>スコアで事前スクリーニング。1by1の面接設定工数を削減</p>
                  </div>
                </li>
                <li>
                  <span className="value-number">03</span>
                  <div className="value-content">
                    <strong>埋もれた才能の発掘</strong>
                    <p>学歴スクリーニングでは見つからないハイポテンシャル人材</p>
                  </div>
                </li>
              </ul>
              <Link href="/coming-soon" className="panel-cta">
                企業として登録
                <span className="cta-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="product-how-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-accent"></span>ご利用の流れ
          </h2>
          <div className="how-steps">
            <div className="how-step">
              <div className="step-number">Step 1</div>
              <h3 className="step-title">スコアを取得</h3>
              <p className="step-description">Upskillで問題解決力を測定し、スコアを取得。企業は求める人材像を登録します。</p>
            </div>
            <div className="how-step">
              <div className="step-number">Step 2</div>
              <h3 className="step-title">プロファイル登録</h3>
              <p className="step-description">スコアと希望条件をプラットフォームに登録。スカウトを受けやすくなります。</p>
            </div>
            <div className="how-step">
              <div className="step-number">Step 3</div>
              <h3 className="step-title">マッチング</h3>
              <p className="step-description">AIがスコアと条件を分析し、最適なマッチング候補を双方に提案します。</p>
            </div>
            <div className="how-step">
              <div className="step-number">Step 4</div>
              <h3 className="step-title">選考・内定</h3>
              <p className="step-description">マッチング成立後、企業の選考へ。能力が証明済みだから、選考もスムーズに。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Types Section */}
      <section className="bridge-companies-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-accent"></span>参画予定企業
          </h2>
          <p className="companies-intro">問題解決力を重視する、日本を代表する企業群が参画予定</p>

          <div className="company-types">
            <div className="company-type">
              <div className="company-type-icon">
                <svg viewBox="0 0 64 64" fill="none">
                  <rect x="12" y="8" width="40" height="48" rx="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M20 20h24M20 28h24M20 36h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>戦略コンサルティングファーム</h3>
              <p>問題解決のプロフェッショナル集団。高い思考力を持つ人材を求めています。</p>
            </div>
            <div className="company-type">
              <div className="company-type-icon">
                <svg viewBox="0 0 64 64" fill="none">
                  <rect x="8" y="24" width="48" height="32" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M20 24V16a12 12 0 0124 0v8" stroke="currentColor" strokeWidth="2"/>
                  <path d="M32 36v8M28 44h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>日経300企業</h3>
              <p>日本を代表する大手企業。次世代リーダー候補を積極採用中。</p>
            </div>
            <div className="company-type">
              <div className="company-type-icon">
                <svg viewBox="0 0 64 64" fill="none">
                  <path d="M32 8l24 48H8L32 8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M32 24v16M32 44v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>成長スタートアップ</h3>
              <p>急成長中の注目企業。即戦力として活躍できるポジションが多数。</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="product-cta-section">
        <div className="container">
          <h2 className="product-cta-title">
            能力で評価される、
            <br />
            新しい採用の形を
          </h2>
          <p className="product-cta-description">Solvere Bridgeで、本質的な能力と機会をつなげませんか？</p>
          <div className="bridge-cta-buttons">
            <Link href="/coming-soon" className="btn btn-primary-dark btn-large">
              候補者として始める
            </Link>
            <Link href="/coming-soon" className="btn btn-outline-light btn-large">
              企業として導入
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                  <li><a href="#">会社概要</a></li>
                  <li><a href="#">採用情報</a></li>
                  <li><a href="#">お問い合わせ</a></li>
                  <li><a href="#">プレス</a></li>
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
                  <li><a href="#">学生向け</a></li>
                  <li><a href="#">求職者向け</a></li>
                  <li><a href="#">企業向け</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>リソース</h4>
                <ul>
                  <li><a href="#">最新情報</a></li>
                  <li><a href="#">イベント</a></li>
                  <li><a href="#">ヘルプ</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-legal">
              <a href="#">プライバシーポリシー</a>
              <span className="separator">•</span>
              <a href="#">利用規約</a>
              <span className="separator">•</span>
              <a href="#">Cookieポリシー</a>
            </div>
            <p className="footer-copyright">
              &copy; 2025 Solvere Corporation Inc.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

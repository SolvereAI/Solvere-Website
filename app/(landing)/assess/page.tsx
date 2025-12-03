"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "../lp-styles.css";

export default function AssessPage() {
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
            <h1 className="product-title">Assess</h1>
            <p className="product-tagline">問題解決力の的確な見極め</p>
            <p className="product-description">
              外資系戦略コンサルファームのケース面接をAIで再現。
              <br />
              入念な準備やAIの活用だけでは対応できない双方向型の対話を通じて、
              <br />
              候補者の本質的な能力を正しく測り、既存のAI面接の課題を解消します。
            </p>
            <div className="product-cta">
              <Link href="/coming-soon" className="btn btn-primary-dark">
                お問い合わせ
              </Link>
              <p className="product-release">*リリース予定：2026年4月</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Challenge Section */}
      <section className="product-target-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-accent"></span>採用・選考における課題
          </h2>
          <div className="target-grid">
            <div className="target-card">
              <div className="target-icon">01</div>
              <h3 className="target-title">面接官のリソース不足による選考枠の制限</h3>
              <p className="target-description">
                大企業の新卒求人倍率は0.3付近の「買い手市場」。募集過多の状況下、面接官の数の制約から選考枠に制限を設けざるを得ません。
              </p>
            </div>
            <div className="target-card">
              <div className="target-icon">02</div>
              <h3 className="target-title">AIの浸透による回答の「均質化」</h3>
              <p className="target-description">
                ChatGPTを活用した志望動機・ガクチカの磨きこみが一般化し、候補者の回答が均質化。「実力」ではなく「準備」が差分になっています。
              </p>
            </div>
            <div className="target-card">
              <div className="target-icon">03</div>
              <h3 className="target-title">ポテンシャルを見極める人材の不足</h3>
              <p className="target-description">
                問題解決力を見極めることは難しく、将来のエース候補が「磨けば光るA級人材」を落とすリスクが一定存在します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Solving Framework Section */}
      <section className="product-framework-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-accent"></span>評価する「問題解決力」
          </h2>
          <p className="section-subtitle">Solvere Assessは、社会人として活躍するために極めて重要な「問題解決力」を多面的に評価します</p>
          <div className="framework-grid">
            <div className="framework-item framework-cognition">
              <h3 className="framework-title">Cognition</h3>
              <p className="framework-label">&quot;考える力&quot;</p>
              <ul className="framework-list">
                <li>論点設定力</li>
                <li>論理思考力</li>
                <li>構造化・抽象化力</li>
                <li>批判的思考力</li>
                <li>仮説思考力</li>
              </ul>
            </div>
            <div className="framework-item framework-influence">
              <h3 className="framework-title">Influence</h3>
              <p className="framework-label">&quot;人を動かす力&quot;</p>
              <ul className="framework-list">
                <li>コミュニケーション力</li>
                <li>傾聴力</li>
                <li>リーダーシップ</li>
                <li>チーム連携/協働力</li>
                <li>対人折衝力/交渉力</li>
              </ul>
            </div>
            <div className="framework-item framework-delivery">
              <h3 className="framework-title">Delivery</h3>
              <p className="framework-label">&quot;やり抜く力&quot;</p>
              <ul className="framework-list">
                <li>決断力</li>
                <li>判断力</li>
                <li>実行力/行動力</li>
                <li>忍耐力</li>
              </ul>
            </div>
            <div className="framework-item framework-coachability">
              <h3 className="framework-title">Coachability</h3>
              <p className="framework-label">&quot;学び、変わり続ける力&quot;</p>
              <ul className="framework-list">
                <li>柔軟性・受容性</li>
                <li>素直さ/謙虚さ</li>
                <li>学ぶ姿勢</li>
                <li>行動を変えられる力</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage Section */}
      <section className="product-features-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-accent"></span>Assessの競争優位性
          </h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-number">01</div>
              <h3 className="feature-title">「問題解決力を見極める」ノウハウ</h3>
              <p className="feature-description">
                問題解決力についてグローバル最高レベルの要求水準を持つBain&Companyにて採用責任者を務めた経験・ノウハウを言語化し、AI面接で再現。
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-number">02</div>
              <h3 className="feature-title">高品質なAI対話機能</h3>
              <p className="feature-description">
                3次元アバターやAI音声制御技術を活用し、対話の自然さに拘った対話機能を構築。難易度の高いケース面接を高品質な双方向対話で提供。
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-number">03</div>
              <h3 className="feature-title">トップ層の見極めに強み</h3>
              <p className="feature-description">
                「最低限求めたい水準」の見極めだけでなく、高いポテンシャルを有するトップ層を見抜くことに強み。選考活動の高度化が可能に。
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-number">04</div>
              <h3 className="feature-title">筆記試験・1次面接を代替</h3>
              <p className="feature-description">
                30分の面接で従来の筆記試験・1次面接をまとめて代替可能。コストの低減と効率化を実現し、受験者目線でもプロセスが簡素化。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="product-comparison-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-accent"></span>従来プロセスとの比較
          </h2>
          <div className="comparison-wrapper">
            <div className="comparison-item comparison-before">
              <h3 className="comparison-title">従来型の選考プロセス</h3>
              <div className="comparison-flow">
                <div className="flow-step">
                  <span className="flow-label">筆記試験</span>
                  <p className="flow-issue">対策用教材が出回り、高スコア＝欲しい人材という相関が出ない</p>
                </div>
                <div className="flow-arrow">→</div>
                <div className="flow-step">
                  <span className="flow-label">1次面接</span>
                  <p className="flow-issue">膨大な人数を面接するための工数確保・調整が困難</p>
                </div>
                <div className="flow-arrow">→</div>
                <div className="flow-step">
                  <span className="flow-label">2次面接以降</span>
                  <p className="flow-issue">要求水準を満たさない受験者との面接に管理職の工数が割かれる</p>
                </div>
              </div>
            </div>
            <div className="comparison-item comparison-after">
              <h3 className="comparison-title">Solvere Assess導入後</h3>
              <div className="comparison-flow">
                <div className="flow-step flow-step-highlight">
                  <span className="flow-label">Solvere Assess</span>
                  <p className="flow-benefit">30分の面接で筆記試験・1次面接をまとめて代替</p>
                </div>
                <div className="flow-arrow">→</div>
                <div className="flow-step">
                  <span className="flow-label">2次面接以降</span>
                  <p className="flow-benefit">適切に見極めがなされ、管理職のリソースを有望人材に投下可能</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="product-benefits-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-accent"></span>導入メリット
          </h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3 className="benefit-title">選考の&quot;品質向上&quot;</h3>
              <p className="benefit-description">業務効率化だけでなく、トップ層の見極めにより選考の品質そのものを向上させます。</p>
            </div>
            <div className="benefit-item">
              <h3 className="benefit-title">コストの低減と効率化</h3>
              <p className="benefit-description">従来のテストベンダーへの手数料＋1次面接に伴う人件費を大幅に削減。</p>
            </div>
            <div className="benefit-item">
              <h3 className="benefit-title">管理職リソースの最適配分</h3>
              <p className="benefit-description">AI面接後に経営陣・幹部との面接を設定し、特別な魅力付けをするなど選考活動の高度化が可能。</p>
            </div>
            <div className="benefit-item">
              <h3 className="benefit-title">辞退率の低減</h3>
              <p className="benefit-description">受験者目線でもプロセスが簡素化され、選考への参加ハードルが下がります。</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="product-how-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-accent"></span>導入の流れ
          </h2>
          <div className="how-steps">
            <div className="how-step">
              <div className="step-number">Step 1</div>
              <h3 className="step-title">お問い合わせ</h3>
              <p className="step-description">まずはお気軽にお問い合わせください。ご要望をヒアリングします。</p>
            </div>
            <div className="how-step">
              <div className="step-number">Step 2</div>
              <h3 className="step-title">カスタマイズ設定</h3>
              <p className="step-description">貴社の採用基準に合わせて、評価項目や合格基準を設定します。</p>
            </div>
            <div className="how-step">
              <div className="step-number">Step 3</div>
              <h3 className="step-title">候補者への案内</h3>
              <p className="step-description">候補者に専用URLを送付。好きな時間にAI面接を受けてもらいます。</p>
            </div>
            <div className="how-step">
              <div className="step-number">Step 4</div>
              <h3 className="step-title">評価レポート確認</h3>
              <p className="step-description">詳細な評価レポートを確認し、次の選考ステップに進む候補者を決定。</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="product-cta-section">
        <div className="container">
          <h2 className="product-cta-title">
            業務効率化だけでなく
            <br />
            選考の&quot;品質向上&quot;を実現
          </h2>
          <p className="product-cta-description">
            外資系戦略コンサルファームのノウハウをAI面接で再現。
            <br />
            Solvere Assessで、候補者の本質的なポテンシャルを見極めましょう。
          </p>
          <Link href="/coming-soon" className="btn btn-primary-dark btn-large">
            お問い合わせ
          </Link>
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

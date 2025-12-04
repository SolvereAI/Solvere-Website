"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import "./lp-styles.css";
import Footer from "./components/Footer";

export default function LandingPage() {
  const [headerHidden, setHeaderHidden] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [signupDropdownOpen, setSignupDropdownOpen] = useState(false);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);

  // Header scroll behavior
  useEffect(() => {
    let lastScrollY = 0;
    const scrollThreshold = 100;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setHeaderScrolled(currentScrollY > 50);
      setScrollIndicatorHidden(currentScrollY > 100);

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

  // Scroll animations
  useEffect(() => {
    const animatedElements = document.querySelectorAll(
      ".philosophy-card, .service-card, .feature-card, .section-title"
    );

    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -50px 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animatedElements.forEach((element) => {
      (element as HTMLElement).style.opacity = "0";
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // CTA animation
  useEffect(() => {
    const ctaLines = document.querySelectorAll(".cta-line");

    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -100px 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    ctaLines.forEach((line) => {
      observer.observe(line);
    });

    return () => observer.disconnect();
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

  // Smooth scroll for anchor links
  const handleAnchorClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
      if (targetId === "#") return;

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
    },
    []
  );

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

      {/* Hero Section */}
      <section className="hero hero-minimal">
        <div className="hero-content">
          <p className="hero-label">Our Mission</p>
          <h1 className="hero-headline">
            <span className="hero-headline-main">Advancing</span>
            <span className="hero-headline-main">Problem Solving</span>
            <span className="hero-headline-accent">to unleash potential</span>
          </h1>
          <p className="hero-tagline-jp">問題解決の力で未来を切り拓く</p>
        </div>
        <div className={`hero-scroll-indicator ${scrollIndicatorHidden ? "hidden" : ""}`}>
          <span></span>
        </div>
      </section>

      {/* Changing Context Section */}
      <section className="changing-context-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-accent"></span>The Game Has Changed
          </h2>
          <div className="context-content">
            <p>
              日本の教育システムは長く、基礎知識と努力を測る重要な役割を果たしてきました。
              <br />
              学歴は学習と勤勉さのシグナルとして機能し、社会で広く認知されてきました。
            </p>
            <p>
              実際、学歴を重視する就職活動には合理性がありました。
              <br />
              なぜなら、知識や専門性、着実に定められたタスクを実行する個人が社会で価値を創造できたからです。
            </p>
            <p>
              しかし、社会とビジネスは劇的に変化しました。
              <br />
              複雑で曖昧な課題が増加し、答えのない問いがあふれるようになりました。
              <br />
              また、現在進行形で生成AIが知識と定型業務を急激に代替しつつあります。
            </p>
            <p className="highlight-text">
              これからの社会では、これまでとは異なる力が強く求められていきます。
            </p>
            <div className="context-highlight">
              <p>
                何が解くべき問いなのかを見抜き、その問題の本質を見極め、
                <br />
                解決策を導き出し、それを行動に移す能力。
              </p>
            </div>
            <p>
              戦略コンサルティングファームは、長い間この強さを最も体系的に育成してきた組織です。
              <br />
              彼らは高度な問題解決スキルを発揮し、磨き上げ、そのポテンシャルを評価し、育成するシステムを構築してきました。
            </p>
            <p>
              コンサルティングファームはこの力を活用し、クライアントの企業価値向上を支援してきました。
              <br />
              本来この問題解決力は、コンサルティングファームに閉じたスキルセットではなく、すべての人が鍛えるべき力です。
              <br />
              一方、この力を鍛える方法は特定の領域と人々に限定されており、
              <br />
              結果、高いポテンシャルを持つ多くの個人がこれらの本質的なスキルをどのように伸ばすかを知らずに社会に出ています。
            </p>
            <p>
              我々Solvereは、この問題解決力を鍛える、ポテンシャルを見極めるノウハウをAIで再現することで、
              <br />
              世の中の多くのProfessionalsに、この本質的な力を高める機会を提供したいと考えています。
            </p>
            <p>
              問題解決の力を高めることで、人・組織・企業の真のポテンシャルを解き放ち、日本の生産性を世界最高水準まで引き上げる。
              <br />
              この志をもって、まずは選考･採用領域から変革に取り組んで参ります。
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy & Problem Solving Combined Section */}
      <section className="philosophy-skill-wrapper">
        <div className="philosophy-skill-box">
          {/* Philosophy Section */}
          <div className="philosophy-section" id="philosophy">
            <div className="container">
              <h2 className="section-title">
                <span className="title-accent"></span>Our Philosophy
              </h2>
              <div className="philosophy-grid">
                <div className="philosophy-card">
                  <div className="philosophy-tagline">
                    <h3 className="philosophy-heading">Future Potential</h3>
                    <span className="philosophy-subheading">
                      未来の可能性を大切にする
                    </span>
                  </div>
                  <p className="philosophy-text">
                    学歴や職歴といった過去の実績は、あくまでシグナルに過ぎません。
                    <br />
                    確かに、明確に答えがあるゲームの中で、努力し、結果を積み重ねてきたことは素晴らしいことです。
                    <br />
                    一方で、今重要性が高まるのは、「答えがない問いに取り組む力です」
                    <br />
                    私たちは、未来の成功を左右する本質的な能力を見極め、育成していくことで人や組織のポテンシャルを最大化すると信じています。
                  </p>
                </div>
                <div className="philosophy-card">
                  <div className="philosophy-tagline">
                    <h3 className="philosophy-heading">
                      Problem Solving Capability
                    </h3>
                    <span className="philosophy-subheading">
                      その可能性を示すのは問題解決力
                    </span>
                  </div>
                  <p className="philosophy-text">
                    では、将来のポテンシャルはどのように高めるのか、評価するのか。
                    <br />
                    我々は、「問題を特定し、その本質を見抜き、解決策を導き出し、行動に移す力」
                    <br />
                    つまり、問題解決力こそがポテンシャルを定める因子であると考えています。
                  </p>
                  <p className="philosophy-text">
                    問題解決力は、4つの柱で形成されます
                    <br />
                    <strong>Cognition:</strong> 考える力
                    <br />
                    <strong>Influence:</strong> 人を動かす力
                    <br />
                    <strong>Delivery:</strong> やり抜く力
                    <br />
                    <strong>Coachability:</strong> 学び、変わり続ける力
                  </p>
                  <p className="philosophy-text">
                    これらの強みが、将来のポテンシャルを示すフレームワークの基礎であると考えています。
                  </p>
                </div>
                <div className="philosophy-card">
                  <div className="philosophy-tagline">
                    <h3 className="philosophy-heading">Standardization</h3>
                    <span className="philosophy-subheading">
                      標準化による公平な社会の実現
                    </span>
                  </div>
                  <p className="philosophy-text">
                    Solvereは、これらの4つの柱を見極め、強化するシステムを構築することで、
                    <br />
                    人の選考や育成における新たな社会基準として確立し、バックグラウンドに関係なく、誰もが世界水準の評価にアクセスできる社会の実現を目指します。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Problem Solving Skill Section */}
          <div className="problem-solving-section">
            <div className="container">
              <h2 className="section-title">
                <span className="title-accent"></span>Problem Solving Skill
              </h2>
              <p className="section-intro">
                Solvereは、最先端のAI技術を駆使し、多くの人の&quot;Problem
                Solving－問題を解決する力&quot;を高めることで、
                <br />
                人・組織・企業の真のポテンシャルを引き出し、世の中に価値を創造してまいります。
              </p>

              <div className="skill-matrix">
                <div className="skill-label-left">
                  <div className="skill-circle">
                    <span>
                      Problem
                      <br />
                      Solving
                    </span>
                  </div>
                </div>
                <div className="skill-right">
                  <div className="skill-grid">
                    <div className="skill-column">
                      <p className="skill-japanese">&quot;考える力&quot;</p>
                      <div className="skill-header">Cognition</div>
                      <div
                        className="skill-item"
                        data-tooltip="何を解くべきかを見極める力"
                      >
                        論点設定力
                      </div>
                      <div
                        className="skill-item"
                        data-tooltip="筋道を立てて考える力"
                      >
                        論理思考力
                      </div>
                      <div
                        className="skill-item"
                        data-tooltip="複雑な情報を整理する力"
                      >
                        構造化・抽象化力
                      </div>
                      <div
                        className="skill-item"
                        data-tooltip="前提を疑い本質を問う力"
                      >
                        批判的思考力
                      </div>
                      <div
                        className="skill-item"
                        data-tooltip="重要な点に焦点を当てる力"
                      >
                        論点集中力
                      </div>
                      <div
                        className="skill-item"
                        data-tooltip="仮の答えから逆算する力"
                      >
                        仮説思考力
                      </div>
                    </div>
                    <div className="skill-column">
                      <p className="skill-japanese">
                        &quot;人を動かす力&quot;
                      </p>
                      <div className="skill-header">Influence</div>
                      <div
                        className="skill-item"
                        data-tooltip="考えを明確に伝える力"
                      >
                        コミュニケーション力
                      </div>
                      <div
                        className="skill-item"
                        data-tooltip="相手の意図を深く理解する力"
                      >
                        傾聴力
                      </div>
                      <div
                        className="skill-item"
                        data-tooltip="方向性を示し導く力"
                      >
                        リーダーシップ
                      </div>
                      <div
                        className="skill-item"
                        data-tooltip="他者と協力して成果を出す力"
                      >
                        チーム連携・協働力
                      </div>
                      <div
                        className="skill-item"
                        data-tooltip="相手の立場で考える力"
                      >
                        共感力
                      </div>
                      <div
                        className="skill-item"
                        data-tooltip="合意を形成する力"
                      >
                        対人折衝力・交渉力
                      </div>
                    </div>
                    <div className="skill-column">
                      <p className="skill-japanese">&quot;やり抜く力&quot;</p>
                      <div className="skill-header">Delivery</div>
                      <div className="skill-item" data-tooltip="迷わず選択する力">
                        決断力
                      </div>
                      <div className="skill-item" data-tooltip="状況を見極める力">
                        判断力
                      </div>
                      <div
                        className="skill-item"
                        data-tooltip="考えを行動に移す力"
                      >
                        実行力・行動力
                      </div>
                      <div className="skill-item" data-tooltip="困難に耐え続ける力">
                        忍耐力
                      </div>
                    </div>
                  </div>
                  <div className="skill-bottom">
                    <p className="skill-japanese">
                      &quot;学び、変わり続ける力&quot;
                    </p>
                    <div className="skill-header">Coachability</div>
                    <div className="skill-bottom-items">
                      <div
                        className="skill-item"
                        data-tooltip="変化を受け入れる力"
                      >
                        柔軟性・受容性
                      </div>
                      <div
                        className="skill-item"
                        data-tooltip="フィードバックを活かす力"
                      >
                        素直さ・謙虚さ・学ぶ姿勢
                      </div>
                      <div
                        className="skill-item"
                        data-tooltip="学びを実践に変える力"
                      >
                        行動を変えられる力
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" id="services">
        <div className="container">
          <h2 className="section-title">
            <span className="title-accent"></span>Our Services
          </h2>
          <p className="section-description">
            Solvereは「問題解決力」を的確に評価するエンジンをコアに、企業と求職者双方の未解決な課題に対し、
            <br />
            3つのサービスラインを通じてアプローチし、採用と選考の在り方を変革することを目指します
          </p>

          {/* Services Hero Image */}
          <div className="services-hero-image">
            <img src="/lp-images/hero-main.jpg" alt="Solvere AI面接システム" />
          </div>

          <div className="service-card">
            <div className="service-content">
              <h3 className="service-name">Solvere Upskill</h3>
              <div className="service-divider"></div>
              <h4 className="service-tagline">問題解決力を鍛える</h4>
              <p className="service-target">
                自分自身の能力を高め、自分自身の将来を切り拓きたい求職者の方へ
              </p>
              <p className="service-description-text">
                AIを活用した問題解決型面接を通じて、問題解決力を育成するサービス。
                <br />
                戦略コンサルティングファームの育成・評価のノウハウを凝縮したシステムが、
                <br />
                パーソナライズされたフィードバックを提供し、あなたの本質的なスキルを実践的に伸ばします。
              </p>
              <p className="service-release">*リリース予定：2026年1月</p>
            </div>
            <div className="service-cta">
              <Link
                href="/upskill"
                className="btn btn-dark"
                aria-label="Upskillのサービスサイトへ"
              >
                →
              </Link>
            </div>
          </div>

          <div className="service-card">
            <div className="service-content">
              <h3 className="service-name">Solvere Bridge</h3>
              <div className="service-divider"></div>
              <h4 className="service-tagline">才能と機会をつなぐ</h4>
              <p className="service-target">
                高いポテンシャルを持つ人材を求める企業へ
              </p>
              <p className="service-description-text">
                問題解決力を定量的に評価する仕組みを通じて、候補者のポテンシャルを可視化。
                <br />
                学歴・経歴よりも、的確に候補者の入社後パフォーマンスを評価する指標を重視することで、
                <br />
                問題解決力を発揮したい人と、問題解決力を有する人材を求める企業をつなぐサービス。
                <br />
                あなたのスコアが、新たな機会への架け橋になります。
              </p>
              <p className="service-release">*リリース予定：2026年4月</p>
            </div>
            <div className="service-cta">
              <Link
                href="/bridge"
                className="btn btn-dark"
                aria-label="Bridgeのサービスサイトへ"
              >
                →
              </Link>
            </div>
          </div>

          <div className="service-card">
            <div className="service-content">
              <h3 className="service-name">Solvere Assess</h3>
              <div className="service-divider"></div>
              <h4 className="service-tagline">候補者のポテンシャルを見極める</h4>
              <p className="service-target">
                候補者の問題解決力を評価に織り込みたい企業へ
              </p>
              <p className="service-description-text">
                問題解決型の面接、ケース面接を活用し、候補者のポテンシャルを評価する高度な選考サービス。
                <br />
                面接官のキャパシティ不足によって面接できない候補者を減らし、機会損失を最小化します。
                <br />
                AIによって対策されやすい志望動機やガクチカ（学生時代に力を入れたこと）とは異なり、
                <br />
                双方向型の自然な対話による面接で、候補者のポテンシャルを的確に評価します。
              </p>
              <p className="service-release">*リリース予定：2026年4月</p>
            </div>
            <div className="service-cta">
              <Link
                href="/assess"
                className="btn btn-dark"
                aria-label="Assessのサービスサイトへ"
              >
                →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="who-we-are-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-accent"></span>Who we are
          </h2>
          <div className="who-content">
            <p>
              会社名である Solvere は &quot;Solve－解決する&quot;
              のラテン語となり、この言葉には、&quot;解放する&quot;という意味も含まれます。
            </p>
            <p>
              私たちはテクノロジーの力で、誰もが公平に自分自身の可能性を最大化する機会が与えられる未来をつくります。
              <br />
              問題解決の力を限られてものとせず、その力を高めるための手法・技術を世に広めることで、
              <br />
              多くのプロフェッショナルの問題解決力を高めることで、真のポテンシャルを解放する──それが
              Solvere のミッションです。
            </p>
          </div>
          <div className="solvere-logo-large">
            <img src="/lp-images/Logo.png" alt="SOLVERE" />
          </div>
          <div className="who-content">
            <p>
              当社の経営陣は、外資系戦略コンサルティングファームの出身であり、多くの大企業の変革にかかわってきました。
              <br />
              20代の経験も少ないジュニアコンサルタントが、経験・実績豊富なお客様に付加価値を出すには、高い問題解決の力が必要です。
            </p>
            <p>
              戦略コンサルティングファームでは、既にこれらの学びが体系化された形で整備されており、一連の問題解決技術として形式知化されています。当社の経営陣は、数多くのコンサルタントの採用・育成にかかわってきたメンバーであり、コンサルティングファームで培った経験・ノウハウをAIで再現することで、この&quot;一部の人しかアクセスできていなかった&quot;貴重な学びを、世の中に広めていくことで、多くのProfessionalsを生み出していくことが当社のミッションとなります。
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Overview Section */}
      <section className="corporate-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-accent"></span>Overview
          </h2>
          <div className="corporate-layout-vertical">
            <div className="corporate-info-wide">
              <div className="corporate-card">
                <div className="corporate-row">
                  <div className="corporate-label">会社名</div>
                  <div className="corporate-value">
                    株式会社Solvere（ソルウェレ）
                  </div>
                </div>
                <div className="corporate-row">
                  <div className="corporate-label">設立日</div>
                  <div className="corporate-value">2025年8月1日</div>
                </div>
                <div className="corporate-row">
                  <div className="corporate-label">所在地</div>
                  <div className="corporate-value">
                    東京都品川区東五反田5-22-33 TK池田山ビル 2F
                  </div>
                </div>
                <div className="corporate-row">
                  <div className="corporate-label">役員</div>
                  <div className="corporate-value">
                    代表取締役CEO 岸谷祥平 / 取締役COO 宮内直輝
                  </div>
                </div>
                <div className="corporate-row">
                  <div className="corporate-label">事業内容</div>
                  <div className="corporate-value">
                    AI対話機能をコアとした各種サービスの開発・運営
                  </div>
                </div>
              </div>
            </div>
            <div className="corporate-map-below">
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d810.6962366478395!2d139.72298!3d35.62713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188afcb669beaf%3A0xad158513c30b0fc4!2zVEvmsaDnlLDlsbHjg5Pjg6s!5e0!3m2!1sja!2sjp!4v1701600000000!5m2!1sja!2sjp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title-animated">
            <span className="cta-line cta-line-1">
              あなたのポテンシャルを解き放ち
            </span>
            <span className="cta-line cta-line-2">未来を切り拓こう</span>
          </h2>
        </div>
      </section>

      <Footer />
    </div>
  );
}

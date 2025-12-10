"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./lp-styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function LandingPage() {
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);

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

  return (
    <div className="lp-wrapper">
      <Header onScrollIndicatorChange={setScrollIndicatorHidden} />

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
                    一方で、今重要性が高まるのは、「答えがない問いに取り組む力」です
                    <br />
                    私たちは、未来の成功を左右する本質的な能力を見極め、育成していくことで人や組織のポテンシャルを最大化できると信じています。
                  </p>
                </div>
                <div className="philosophy-card philosophy-card-wide">
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
                  </p>

                  {/* Problem Solving Skill Matrix - embedded */}
                  <div className="skill-matrix-embedded">
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
              <p className="service-release">*リリース予定：2026年春</p>
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
              <p className="service-release">*リリース予定：2026年春</p>
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
              <p className="service-release">*リリース予定：2026年夏</p>
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
      <section className="who-we-are-section" id="who-we-are">
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
              問題解決の力を限られたものとせず、その力を高めるための手法・技術を世に広めることで、
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
              業界知見や経験が不足するコンサルタントが、経験･実績豊富なお客様に付加価値を出すには、高い問題解決の力が必要です。
            </p>
            <p>
              戦略コンサルティングファームでは、既にこれらの学びが体系化された形で整備されており、一連の問題解決技術として形式知化されています。当社の経営陣は、数多くのコンサルタントの採用・育成にかかわってきたメンバーであり、コンサルティングファームで培った経験・ノウハウをAIで再現することで、この&quot;一部の人しかアクセスできていなかった&quot;貴重な学びを、世の中に広めていくことで、多くのProfessionalsを生み出していくことが当社のミッションとなります。
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Overview Section */}
      <section className="corporate-section" id="corporate">
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

"use client";

import Link from "next/link";
import "../lp-styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BridgePage() {
  return (
    <div className="lp-wrapper">
      <Header />

      {/* Product Hero Section */}
      <section className="product-hero">
        <div className="container">
          <div className="product-hero-content">
            <p className="product-label">Solvere Product</p>
            <h1 className="product-title">Bridge</h1>
            <p className="product-tagline">候補者の問題解決力が見えるプラットフォーム</p>
            <p className="product-description">
              問題解決力を定量化したスコアで候補者をスクリーニング。
              <br />
              学歴・経歴だけでは見出せない優秀な人材を発掘しつつ、採用コストと工数を大幅に削減。
              <br />
              企業の人事担当者・エージェントのための、新しい採用プラットフォームです。
            </p>
            <div className="product-cta">
              <Link href="/coming-soon" className="btn btn-primary-dark">
                資料請求・お問い合わせ
              </Link>
              <p className="product-release">*リリース予定：2026年4月</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Section */}
      <section className="product-target-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-accent"></span>こんな課題をお持ちの方へ
          </h2>
        </div>
        <div className="product-target-box">
          <div className="target-grid">
            <div className="target-card target-card-minimal">
              <span className="target-number">01</span>
              <h3 className="target-title">採用コストを<br />削減したい人事担当者</h3>
              <p className="target-description">
                エージェント手数料が年々増加<br />成果報酬型で、合理的なコストを実現したい方に最適です。
              </p>
            </div>
            <div className="target-card target-card-minimal">
              <span className="target-number">02</span>
              <h3 className="target-title">選考工数を<br />減らしたい人事担当者</h3>
              <p className="target-description">
                書類選考・筆記試験・一次面接に膨大な工数がかかる。<br />事前スクリーニングで工数を<br />大幅に削減できます。
              </p>
            </div>
            <div className="target-card target-card-minimal">
              <span className="target-number">03</span>
              <h3 className="target-title">優秀人材の母集団を<br />拡大したいエージェント</h3>
              <p className="target-description">
                学歴･経歴からでは見抜けない<br />優秀層にアクセスしたい方。<br />問題解決力スコアで新たな<br />人材プールを開拓できます。
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
          <div className="features-showcase">
            <div className="feature-block">
              <span className="feature-block-number">Feature 01</span>
              <div className="feature-accent-line"></div>
              <div className="feature-content">
                <h3 className="feature-headline">問題解決力スコアで事前スクリーニング</h3>
                <p className="feature-body">
                  Solvere Upskillで公式に測定された問題解決力スコアを活用し、候補者を事前にスクリーニング。<br />
                  書類選考・筆記試験の工数を大幅に削減し、面接に集中できます。
                </p>
              </div>
              <a href="#feature-screening" className="feature-link-btn">
                <span>詳しく見る</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </a>
            </div>
            <div className="feature-block">
              <span className="feature-block-number">Feature 02</span>
              <div className="feature-accent-line"></div>
              <div className="feature-content">
                <h3 className="feature-headline">採用コストの大幅削減</h3>
                <p className="feature-body">
                  従来のエージェント手数料に比べ、成果報酬型で合理的な料金体系を提供。<br />
                  採用が成功した時のみ費用が発生し、採用予算を最適化できます。
                </p>
              </div>
              <a href="#feature-cost" className="feature-link-btn">
                <span>詳しく見る</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </a>
            </div>
            <div className="feature-block">
              <span className="feature-block-number">Feature 03</span>
              <div className="feature-accent-line"></div>
              <div className="feature-content">
                <h3 className="feature-headline">学歴や経歴だけでは見抜けない優秀層を発掘</h3>
                <p className="feature-body">
                  学歴・経歴スクリーニングでは見過ごされていた、真に問題解決力の高い人材を発掘。<br />
                  多様なバックグラウンドを持つハイポテンシャル人材にアクセスできます。
                </p>
              </div>
              <a href="#feature-talent" className="feature-link-btn">
                <span>詳しく見る</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </a>
            </div>
            <div className="feature-block">
              <span className="feature-block-number">Feature 04</span>
              <div className="feature-accent-line"></div>
              <div className="feature-content">
                <h3 className="feature-headline">スカウト機能で効率的なアプローチ</h3>
                <p className="feature-body">
                  スコアと希望条件を登録した候補者に、直接スカウトを送信可能。<br />
                  ターゲット人材に効率的にアプローチでき、採用成功率を向上させます。
                </p>
              </div>
              <a href="#feature-scout" className="feature-link-btn">
                <span>詳しく見る</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Detail 1: 事前スクリーニング */}
      <section id="feature-screening" className="feedback-preview-section">
        <div className="container">
          <div className="feature-detail-header">
            <span className="feature-detail-number">FEATURE 01</span>
            <h2 className="feature-detail-title">問題解決力スコアで事前スクリーニング</h2>
            <p className="feature-detail-subtitle">
              候補者の問題解決力を定量化したスコアで、書類選考・筆記試験の工数を削減。
              有望な候補者に絞って面接を実施できます。
            </p>
          </div>

          <div className="feedback-row">
            <div className="feedback-mock">
              <div className="pc-mockup">
                <div className="pc-screen">
                  <svg viewBox="0 0 560 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
                    {/* Background */}
                    <rect width="560" height="340" fill="#0d0d0d"/>

                    {/* Header */}
                    <rect x="20" y="20" width="520" height="44" rx="8" fill="#1a1a1a"/>
                    <text x="40" y="48" fill="#FFFFFF" fontSize="16" fontWeight="bold">Candidate Pipeline</text>
                    <text x="480" y="48" fill="#6B7280" fontSize="12" textAnchor="end">Filter: Score 4.0+</text>

                    {/* Pipeline stages */}
                    <rect x="20" y="74" width="85" height="50" rx="6" fill="#1a1a1a"/>
                    <text x="62" y="95" fill="#6B7280" fontSize="10" textAnchor="middle">応募</text>
                    <text x="62" y="115" fill="#FFFFFF" fontSize="16" fontWeight="bold" textAnchor="middle">248</text>

                    <path d="M105 99 L125 99" stroke="#4B5563" strokeWidth="2"/>
                    <polygon points="125,94 135,99 125,104" fill="#4B5563"/>

                    <rect x="135" y="74" width="85" height="50" rx="6" fill="#1a1a1a"/>
                    <text x="177" y="95" fill="#6B7280" fontSize="10" textAnchor="middle">スコア確認</text>
                    <text x="177" y="115" fill="#FFFFFF" fontSize="16" fontWeight="bold" textAnchor="middle">186</text>

                    <path d="M220 99 L240 99" stroke="#4B5563" strokeWidth="2"/>
                    <polygon points="240,94 250,99 240,104" fill="#4B5563"/>

                    <rect x="250" y="74" width="85" height="50" rx="6" fill="#FFFFFF" opacity="0.1"/>
                    <rect x="250" y="74" width="85" height="50" rx="6" fill="transparent" stroke="#FFFFFF" strokeWidth="1"/>
                    <text x="292" y="95" fill="#FFFFFF" fontSize="10" textAnchor="middle">4.0+フィルタ</text>
                    <text x="292" y="115" fill="#FFFFFF" fontSize="16" fontWeight="bold" textAnchor="middle">42</text>

                    <path d="M335 99 L355 99" stroke="#4B5563" strokeWidth="2"/>
                    <polygon points="355,94 365,99 355,104" fill="#4B5563"/>

                    <rect x="365" y="74" width="85" height="50" rx="6" fill="#1a1a1a"/>
                    <text x="407" y="95" fill="#6B7280" fontSize="10" textAnchor="middle">面接</text>
                    <text x="407" y="115" fill="#FFFFFF" fontSize="16" fontWeight="bold" textAnchor="middle">28</text>

                    <path d="M450 99 L470 99" stroke="#4B5563" strokeWidth="2"/>
                    <polygon points="470,94 480,99 470,104" fill="#4B5563"/>

                    <rect x="480" y="74" width="60" height="50" rx="6" fill="#22c55e" opacity="0.15"/>
                    <text x="510" y="95" fill="#22c55e" fontSize="10" textAnchor="middle">内定</text>
                    <text x="510" y="115" fill="#22c55e" fontSize="16" fontWeight="bold" textAnchor="middle">5</text>

                    {/* Efficiency metrics */}
                    <rect x="20" y="144" width="255" height="176" rx="8" fill="#1a1a1a"/>
                    <text x="40" y="172" fill="#FFFFFF" fontSize="14" fontWeight="bold">従来の選考フロー</text>

                    <text x="40" y="200" fill="#6B7280" fontSize="11">書類選考対象</text>
                    <text x="240" y="200" fill="#FFFFFF" fontSize="14" fontWeight="bold" textAnchor="end">248名</text>

                    <text x="40" y="225" fill="#6B7280" fontSize="11">一次面接実施</text>
                    <text x="240" y="225" fill="#FFFFFF" fontSize="14" fontWeight="bold" textAnchor="end">80名</text>

                    <text x="40" y="250" fill="#6B7280" fontSize="11">選考工数</text>
                    <text x="240" y="250" fill="#FFFFFF" fontSize="14" fontWeight="bold" textAnchor="end">120時間</text>

                    <line x1="40" y1="270" x2="240" y2="270" stroke="#2B2B2B" strokeWidth="1"/>

                    <text x="40" y="295" fill="#6B7280" fontSize="11">内定者1名あたり工数</text>
                    <text x="240" y="295" fill="#FFFFFF" fontSize="14" fontWeight="bold" textAnchor="end">24時間</text>

                    {/* Bridge metrics */}
                    <rect x="285" y="144" width="255" height="176" rx="8" fill="#FFFFFF" opacity="0.05"/>
                    <rect x="285" y="144" width="255" height="176" rx="8" fill="transparent" stroke="#FFFFFF" strokeWidth="1"/>
                    <text x="305" y="172" fill="#FFFFFF" fontSize="14" fontWeight="bold">Solvere Bridge利用時</text>

                    <text x="305" y="200" fill="#6B7280" fontSize="11">スコア選考対象</text>
                    <text x="505" y="200" fill="#FFFFFF" fontSize="14" fontWeight="bold" textAnchor="end">42名</text>

                    <text x="305" y="225" fill="#6B7280" fontSize="11">一次面接実施</text>
                    <text x="505" y="225" fill="#FFFFFF" fontSize="14" fontWeight="bold" textAnchor="end">28名</text>

                    <text x="305" y="250" fill="#6B7280" fontSize="11">選考工数</text>
                    <text x="505" y="250" fill="#FFFFFF" fontSize="14" fontWeight="bold" textAnchor="end">35時間</text>

                    <line x1="305" y1="270" x2="505" y2="270" stroke="#FFFFFF" strokeWidth="1" opacity="0.3"/>

                    <text x="305" y="295" fill="#6B7280" fontSize="11">内定者1名あたり工数</text>
                    <rect x="440" y="280" width="70" height="24" rx="4" fill="#22c55e" opacity="0.15"/>
                    <text x="475" y="298" fill="#22c55e" fontSize="14" fontWeight="bold" textAnchor="middle">7時間</text>
                  </svg>
                </div>
                <div className="pc-base">
                  <div className="pc-base-top"></div>
                  <div className="pc-base-bottom"></div>
                </div>
              </div>
            </div>
            <div className="feedback-text">
              <h3>内定者1名あたりの工数を大幅に削減</h3>
              <p>問題解決力スコアで事前にスクリーニングすることで、<br />書類選考や一次面接の工数を大幅に削減。<br />有望な候補者に集中して選考を進められます。</p>
              <ul className="feedback-points">
                <li>スコアフィルタで対象者を事前に絞り込み</li>
                <li>書類選考・筆記試験の工数を削減</li>
                <li>面接に集中できる効率的な選考フロー</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Detail 2: 採用コストの大幅削減 */}
      <section id="feature-cost" className="feedback-preview-section feedback-preview-light">
        <div className="container">
          <div className="feature-detail-header">
            <span className="feature-detail-number">FEATURE 02</span>
            <h2 className="feature-detail-title">採用コストの低減</h2>
            <p className="feature-detail-subtitle">
              問題解決力の定量化により事前スクリーニング可能なプラットフォームを低水準の料金体系で提供。<br />成果報酬ベースで、採用が成功した時に主な費用は発生します。
            </p>
          </div>

          <div className="feedback-row">
            <div className="feedback-mock">
              <div className="pc-mockup">
                <div className="pc-screen">
                  <svg viewBox="0 0 560 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
                    {/* Background */}
                    <rect width="560" height="340" fill="#0d0d0d"/>

                    {/* Header */}
                    <rect x="20" y="20" width="520" height="44" rx="8" fill="#1a1a1a"/>
                    <text x="40" y="48" fill="#FFFFFF" fontSize="16" fontWeight="bold">Cost Comparison</text>

                    {/* Chart area */}
                    <rect x="40" y="80" width="480" height="200" fill="transparent"/>

                    {/* Y-axis labels */}
                    <text x="35" y="95" fill="#6B7280" fontSize="10" textAnchor="end">35%</text>
                    <text x="35" y="145" fill="#6B7280" fontSize="10" textAnchor="end">25%</text>
                    <text x="35" y="195" fill="#6B7280" fontSize="10" textAnchor="end">15%</text>
                    <text x="35" y="245" fill="#6B7280" fontSize="10" textAnchor="end">5%</text>

                    {/* Grid lines */}
                    <line x1="40" y1="90" x2="520" y2="90" stroke="#2B2B2B" strokeWidth="1"/>
                    <line x1="40" y1="140" x2="520" y2="140" stroke="#2B2B2B" strokeWidth="1"/>
                    <line x1="40" y1="190" x2="520" y2="190" stroke="#2B2B2B" strokeWidth="1"/>
                    <line x1="40" y1="240" x2="520" y2="240" stroke="#2B2B2B" strokeWidth="1"/>

                    {/* Bars */}
                    {/* Traditional Agent */}
                    <rect x="80" y="100" width="100" height="140" rx="4" fill="#4B5563"/>
                    <text x="130" y="135" fill="#FFFFFF" fontSize="18" fontWeight="bold" textAnchor="middle">35%</text>
                    <text x="130" y="260" fill="#6B7280" fontSize="11" textAnchor="middle">従来エージェント</text>

                    {/* Job Boards */}
                    <rect x="230" y="145" width="100" height="95" rx="4" fill="#6B7280"/>
                    <text x="280" y="175" fill="#FFFFFF" fontSize="18" fontWeight="bold" textAnchor="middle">20%</text>
                    <text x="280" y="260" fill="#6B7280" fontSize="11" textAnchor="middle">求人媒体</text>

                    {/* Solvere Bridge */}
                    <rect x="380" y="200" width="100" height="40" rx="4" fill="#FFFFFF"/>
                    <text x="430" y="225" fill="#0d0d0d" fontSize="18" fontWeight="bold" textAnchor="middle">10%</text>
                    <text x="430" y="260" fill="#FFFFFF" fontSize="11" textAnchor="middle">Solvere Bridge</text>

                    {/* Savings indicator */}
                    <rect x="360" y="295" width="160" height="28" rx="6" fill="#22c55e" opacity="0.15"/>
                    <text x="440" y="314" fill="#22c55e" fontSize="12" fontWeight="bold" textAnchor="middle">最大70%のコスト削減</text>
                  </svg>
                </div>
                <div className="pc-base">
                  <div className="pc-base-top"></div>
                  <div className="pc-base-bottom"></div>
                </div>
              </div>
            </div>
            <div className="feedback-text">
              <h3>採用コストの適正化</h3>
              <p>問題解決力の高い人材の需要は急激に拡大。<br />伴って手数料水準が高止まりし、採用コストが上昇。<br />Solvere BridgeではAIを活用したオペレーションにより<br />他社水準より手数料を抑えられ、予算を最適化できます。</p>
              <ul className="feedback-points">
                <li>成果報酬型：採用成功時のみ費用が発生</li>
                <li>年収の15-20%程度の合理的な手数料設定</li>
                <li>スクリーニングコストの削減で総採用コストを最適化</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Detail 3: 埋もれた才能の発掘 */}
      <section id="feature-talent" className="feedback-preview-section">
        <div className="container">
          <div className="feature-detail-header">
            <span className="feature-detail-number">FEATURE 03</span>
            <h2 className="feature-detail-title">学歴や経歴だけでは見抜けない優秀層を発掘</h2>
            <p className="feature-detail-subtitle">
              学歴・経歴スクリーニングでは見過ごされていた、真のハイポテンシャル人材を発掘。<br />多様なバックグラウンドを持つ優秀人材へのアクセスを実現します。
            </p>
          </div>

          <div className="feedback-row feedback-row-reverse">
            <div className="feedback-mock">
              <div className="pc-mockup">
                <div className="pc-screen">
                  <svg viewBox="0 0 560 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
                    {/* Background */}
                    <rect width="560" height="340" fill="#0d0d0d"/>

                    {/* Header */}
                    <rect x="20" y="20" width="520" height="44" rx="8" fill="#1a1a1a"/>
                    <text x="40" y="48" fill="#FFFFFF" fontSize="16" fontWeight="bold">Hidden Talent Discovery</text>

                    {/* Scatter plot area */}
                    <rect x="60" y="80" width="300" height="240" fill="transparent" stroke="#2B2B2B" strokeWidth="1"/>

                    {/* Axes labels */}
                    <text x="210" y="330" fill="#6B7280" fontSize="11" textAnchor="middle">学歴スコア</text>
                    <text x="30" y="200" fill="#6B7280" fontSize="11" textAnchor="middle" transform="rotate(-90, 30, 200)">問題解決力</text>

                    {/* Grid */}
                    <line x1="60" y1="160" x2="360" y2="160" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="4"/>
                    <line x1="210" y1="80" x2="210" y2="320" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="4"/>

                    {/* Quadrant labels */}
                    <text x="135" y="115" fill="#4B5563" fontSize="10" textAnchor="middle">低学歴・高能力</text>
                    <text x="285" y="115" fill="#4B5563" fontSize="10" textAnchor="middle">高学歴・高能力</text>
                    <text x="135" y="280" fill="#374151" fontSize="10" textAnchor="middle">低学歴・低能力</text>
                    <text x="285" y="280" fill="#374151" fontSize="10" textAnchor="middle">高学歴・低能力</text>

                    {/* Dots - Traditional hires (high education, various ability) */}
                    <circle cx="280" cy="130" r="6" fill="#6B7280"/>
                    <circle cx="300" cy="150" r="6" fill="#6B7280"/>
                    <circle cx="320" cy="180" r="6" fill="#6B7280"/>
                    <circle cx="270" cy="200" r="6" fill="#6B7280"/>
                    <circle cx="290" cy="220" r="6" fill="#6B7280"/>
                    <circle cx="310" cy="250" r="6" fill="#6B7280"/>
                    <circle cx="340" cy="140" r="6" fill="#6B7280"/>

                    {/* Dots - Hidden talent (lower education, high ability) - highlighted */}
                    <circle cx="100" cy="100" r="8" fill="#FFFFFF" stroke="#22c55e" strokeWidth="2"/>
                    <circle cx="130" cy="120" r="8" fill="#FFFFFF" stroke="#22c55e" strokeWidth="2"/>
                    <circle cx="150" cy="140" r="8" fill="#FFFFFF" stroke="#22c55e" strokeWidth="2"/>
                    <circle cx="120" cy="150" r="8" fill="#FFFFFF" stroke="#22c55e" strokeWidth="2"/>
                    <circle cx="170" cy="130" r="8" fill="#FFFFFF" stroke="#22c55e" strokeWidth="2"/>

                    {/* Legend and stats */}
                    <rect x="380" y="80" width="160" height="240" rx="8" fill="#1a1a1a"/>

                    <text x="400" y="108" fill="#FFFFFF" fontSize="12" fontWeight="bold">発掘された人材</text>

                    <circle cx="405" cy="135" r="6" fill="#FFFFFF" stroke="#22c55e" strokeWidth="2"/>
                    <text x="420" y="140" fill="#6B7280" fontSize="11">Hidden Talent</text>
                    <circle cx="405" cy="160" r="5" fill="#6B7280"/>
                    <text x="420" y="165" fill="#6B7280" fontSize="11">従来採用</text>

                    <line x1="395" y1="185" x2="525" y2="185" stroke="#2B2B2B" strokeWidth="1"/>

                    <text x="400" y="210" fill="#6B7280" fontSize="10">平均スコア</text>
                    <text x="400" y="230" fill="#FFFFFF" fontSize="20" fontWeight="bold">4.3</text>
                    <text x="445" y="230" fill="#6B7280" fontSize="12">/5.0</text>

                    <text x="400" y="260" fill="#6B7280" fontSize="10">内定承諾率</text>
                    <text x="400" y="280" fill="#22c55e" fontSize="20" fontWeight="bold">87%</text>

                    <text x="400" y="305" fill="#6B7280" fontSize="10">入社後評価</text>
                    <rect x="400" y="310" width="100" height="6" rx="3" fill="#2B2B2B"/>
                    <rect x="400" y="310" width="85" height="6" rx="3" fill="#22c55e"/>
                  </svg>
                </div>
                <div className="pc-base">
                  <div className="pc-base-top"></div>
                  <div className="pc-base-bottom"></div>
                </div>
              </div>
            </div>
            <div className="feedback-text">
              <h3>従来の採用では見逃していた優秀層</h3>
              <p>学歴・経歴フィルタでは見過ごされていた、<br/ >真に問題解決力の高い人材を発掘。<br/ >多様なバックグラウンドを持つ優秀人材へのアクセスを実現。</p>
              <ul className="feedback-points">
                <li>学歴・経歴に依存しない公平な能力評価を促進</li>
                <li>多様なバックグラウンドを持つ人材プール</li>
                <li>入社後の高パフォーマンスが期待できる問題解決力を重視</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Detail 4: スカウト機能 */}
      <section id="feature-scout" className="feedback-preview-section feedback-preview-light">
        <div className="container">
          <div className="feature-detail-header">
            <span className="feature-detail-number">FEATURE 04</span>
            <h2 className="feature-detail-title">スカウト機能で効率的なアプローチ</h2>
            <p className="feature-detail-subtitle">
              問題解決力スコアと希望条件を登録した候補者に、直接スカウトを送信。<br />ターゲット人材に効率的にアプローチできます。
            </p>
          </div>

          <div className="feedback-row">
            <div className="feedback-mock">
              <div className="pc-mockup">
                <div className="pc-screen">
                  <svg viewBox="0 0 560 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
                    {/* Background */}
                    <rect width="560" height="340" fill="#0d0d0d"/>

                    {/* Header */}
                    <rect x="20" y="20" width="520" height="44" rx="8" fill="#1a1a1a"/>
                    <text x="40" y="48" fill="#FFFFFF" fontSize="16" fontWeight="bold">Candidate Search</text>
                    <rect x="400" y="30" width="120" height="24" rx="6" fill="#FFFFFF"/>
                    <text x="460" y="47" fill="#0d0d0d" fontSize="12" fontWeight="bold" textAnchor="middle">スカウト送信</text>

                    {/* Search filters */}
                    <rect x="20" y="74" width="160" height="246" rx="8" fill="#1a1a1a"/>
                    <text x="40" y="100" fill="#FFFFFF" fontSize="12" fontWeight="bold">フィルタ条件</text>

                    <text x="40" y="130" fill="#6B7280" fontSize="11">最低スコア</text>
                    <rect x="40" y="138" width="120" height="28" rx="4" fill="#141414"/>
                    <text x="50" y="157" fill="#FFFFFF" fontSize="12">4.0以上</text>

                    <text x="40" y="185" fill="#6B7280" fontSize="11">希望職種</text>
                    <rect x="40" y="193" width="120" height="28" rx="4" fill="#141414"/>
                    <text x="50" y="212" fill="#FFFFFF" fontSize="12">コンサルタント</text>

                    <text x="40" y="240" fill="#6B7280" fontSize="11">経験年数</text>
                    <rect x="40" y="248" width="120" height="28" rx="4" fill="#141414"/>
                    <text x="50" y="267" fill="#FFFFFF" fontSize="12">3年以上</text>

                    <rect x="40" y="290" width="120" height="20" rx="4" fill="#22c55e" opacity="0.15"/>
                    <text x="100" y="304" fill="#22c55e" fontSize="11" textAnchor="middle">42名がマッチ</text>

                    {/* Candidate list */}
                    <rect x="190" y="74" width="350" height="76" rx="8" fill="#1a1a1a"/>
                    <circle cx="230" cy="112" r="24" fill="#2B2B2B"/>
                    <text x="270" y="100" fill="#FFFFFF" fontSize="14" fontWeight="bold">Candidate A</text>
                    <text x="270" y="118" fill="#6B7280" fontSize="11">現職：事業会社 経営企画 / 5年</text>
                    <rect x="270" y="126" width="60" height="18" rx="4" fill="#FFFFFF" opacity="0.1"/>
                    <text x="300" y="139" fill="#FFFFFF" fontSize="10" textAnchor="middle">Score 4.5</text>
                    <rect x="470" y="98" width="50" height="28" rx="6" fill="#FFFFFF"/>
                    <text x="495" y="117" fill="#0d0d0d" fontSize="11" fontWeight="bold" textAnchor="middle">選択</text>

                    <rect x="190" y="158" width="350" height="76" rx="8" fill="#141414"/>
                    <circle cx="230" cy="196" r="24" fill="#2B2B2B"/>
                    <text x="270" y="184" fill="#FFFFFF" fontSize="14" fontWeight="bold">Candidate B</text>
                    <text x="270" y="202" fill="#6B7280" fontSize="11">現職：SIer PM / 4年</text>
                    <rect x="270" y="210" width="60" height="18" rx="4" fill="#FFFFFF" opacity="0.1"/>
                    <text x="300" y="223" fill="#FFFFFF" fontSize="10" textAnchor="middle">Score 4.2</text>
                    <rect x="470" y="182" width="50" height="28" rx="6" fill="transparent" stroke="#FFFFFF" strokeWidth="1"/>
                    <text x="495" y="201" fill="#FFFFFF" fontSize="11" textAnchor="middle">選択</text>

                    <rect x="190" y="242" width="350" height="76" rx="8" fill="#111111"/>
                    <circle cx="230" cy="280" r="24" fill="#1f1f1f"/>
                    <text x="270" y="268" fill="#9CA3AF" fontSize="14">Candidate C</text>
                    <text x="270" y="286" fill="#4B5563" fontSize="11">現職：スタートアップ BizDev / 3年</text>
                    <rect x="270" y="294" width="60" height="18" rx="4" fill="#FFFFFF" opacity="0.05"/>
                    <text x="300" y="307" fill="#6B7280" fontSize="10" textAnchor="middle">Score 4.0</text>
                    <rect x="470" y="266" width="50" height="28" rx="6" fill="transparent" stroke="#4B5563" strokeWidth="1"/>
                    <text x="495" y="285" fill="#4B5563" fontSize="11" textAnchor="middle">選択</text>
                  </svg>
                </div>
                <div className="pc-base">
                  <div className="pc-base-top"></div>
                  <div className="pc-base-bottom"></div>
                </div>
              </div>
            </div>
            <div className="feedback-text">
              <h3>ターゲット人材に直接アプローチ</h3>
              <p>スコア・職種・経験年数などでフィルタリングし、<br/ >条件に合う候補者にまとめてスカウトを送信。<br/ >効率的にターゲット人材にリーチできます。</p>
              <ul className="feedback-points">
                <li>スコア・職種・経験でフィルタリング</li>
                <li>条件に合う候補者に一括スカウト送信</li>
                <li>返信率・内定率などのデータを可視化</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Value for HR and Agents Section */}
      <section className="bridge-value-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-accent"></span>導入メリット
          </h2>

          <div className="value-split">
            <div className="value-panel candidate-panel">
              <div className="panel-header">
                <span className="panel-icon">
                  <svg viewBox="0 0 48 48" fill="none">
                    <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2"/>
                    <path d="M16 20h16M16 28h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
                <h3>企業の人事担当者向け</h3>
              </div>
              <ul className="value-list">
                <li>
                  <span className="value-number">01</span>
                  <div className="value-content">
                    <strong>採用コストの最適化</strong>
                    <p>成果報酬型で、極端な仲介手数料負担を大幅に軽減</p>
                  </div>
                </li>
                <li>
                  <span className="value-number">02</span>
                  <div className="value-content">
                    <strong>選考工数の削減</strong>
                    <p>スコアで事前スクリーニング。書類・筆記・一次面接の工数削減</p>
                  </div>
                </li>
                <li>
                  <span className="value-number">03</span>
                  <div className="value-content">
                    <strong>ミスマッチの削減</strong>
                    <p>問題解決力が定量化されているため、入社後のパフォーマンス予測が向上</p>
                  </div>
                </li>
              </ul>
              <Link href="/coming-soon" className="panel-cta">
                企業向け資料請求
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
                    <circle cx="24" cy="16" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 44c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="currentColor" strokeWidth="2"/>
                    <path d="M32 12l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <h3>エージェント向け</h3>
              </div>
              <ul className="value-list">
                <li>
                  <span className="value-number">01</span>
                  <div className="value-content">
                    <strong>新たな人材プールへのアクセス</strong>
                    <p>学歴フィルタでは見つからない優秀層を発掘し、紹介できる</p>
                  </div>
                </li>
                <li>
                  <span className="value-number">02</span>
                  <div className="value-content">
                    <strong>マッチング精度の向上</strong>
                    <p>問題解決力スコアで候補者の能力を客観的に把握し、提案精度向上</p>
                  </div>
                </li>
                <li>
                  <span className="value-number">03</span>
                  <div className="value-content">
                    <strong>成約率の向上</strong>
                    <p>能力が証明済みの候補者を紹介することで、企業の信頼と成約率が向上</p>
                  </div>
                </li>
              </ul>
              <Link href="/coming-soon" className="panel-cta">
                エージェント向け資料請求
                <span className="cta-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="product-cta-section">
        <div className="container">
          <h2 className="product-cta-title">
            採用コストと工数を削減しながら、
            <br />
            これまで見抜けなかったポテンシャル人材を発掘する
          </h2>
          <div className="bridge-cta-buttons">
            <Link href="/coming-soon" className="btn btn-outline-light btn-large">
              デモを申し込む
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

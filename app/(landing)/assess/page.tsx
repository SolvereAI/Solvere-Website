"use client";

import Link from "next/link";
import "../lp-styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AssessPage() {
  return (
    <div className="lp-wrapper">
      <Header />

      {/* Product Hero Section */}
      <section className="product-hero">
        <div className="container">
          <div className="product-hero-content">
            <p className="product-label">Solvere Product</p>
            <h1 className="product-title">Assess</h1>
            <p className="product-tagline">候補者のポテンシャルを見出し、可能性を最大化する</p>
            <p className="product-description">
              候補者のポテンシャルを見極める面接の型、"ケース面接"をAIで再現。
              <br />
              入念な準備やAIの活用だけでは対応できない双方向型の高度な討議を通じて、
              <br />
              候補者の本質的な能力を正しく見極め、既存の面接やAI面接の課題を解消します。
            </p>
            <div className="product-cta">
              <Link href="/coming-soon" className="btn btn-primary-dark">
                お問い合わせ
              </Link>
              <p className="product-release">*リリース予定：2026年6月</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Section - 採用・選考における課題 */}
      <section className="product-target-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-accent"></span>採用・選考における課題
          </h2>
        </div>
        <div className="product-target-box">
          <div className="target-grid">
            <div className="target-card target-card-minimal">
              <span className="target-number">01</span>
              <h3 className="target-title">面接官のリソース不足<br />による選考枠の制限</h3>
              <p className="target-description">
                学生の応募先は大企業に集中。<br />募集過多の状況下、<br />面接官のキャパシティ制約から<br />選考枠には限りがあり、<br />優秀な人材を逃す機会損失が<br />発生しています。
              </p>
            </div>
            <div className="target-card target-card-minimal">
              <span className="target-number">02</span>
              <h3 className="target-title">候補者のAI活用による<br />回答の「均質化」</h3>
              <p className="target-description">
                生成AIを活用した志望動機や<br />”ガクチカ”の高度化が一般化。<br />候補者の回答が均質化し、評価がより難しく、曖昧に。<br />本来の実力よりも準備が差分に
              </p>
            </div>
            <div className="target-card target-card-minimal">
              <span className="target-number">03</span>
              <h3 className="target-title">ポテンシャルを見極める<br />人材･ノウハウの不足</h3>
              <p className="target-description">
                将来のポテンシャルを示す<br />問題解決力を見極めることは<br />難しいため、「磨けば光る人材」<br />を落としてしまう機会損失が<br />問題になっています
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="product-features-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-accent"></span>Assessの特長
          </h2>
          <div className="features-showcase">
            <div className="feature-block">
              <span className="feature-block-number">Feature 01</span>
              <div className="feature-accent-line"></div>
              <div className="feature-content">
                <h3 className="feature-headline">「問題解決力を見極める」ノウハウ</h3>
                <p className="feature-body">
                  問題解決力についてグローバル最高峰の要求水準を持つ外資系戦略コンサルティングファームの<br />
                  育成･採用の経験・ノウハウを丁寧に言語化し、AI面接で再現しています。
                </p>
              </div>
              <a href="#feature-knowhow" className="feature-link-btn">
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
                <h3 className="feature-headline">高度かつ高品質なAI対話機能</h3>
                <p className="feature-body">
                  3次元アバターやAI音声制御技術を活用し、対話の自然さに拘った対話機能を構築。<br />
                  難易度の高いケース面接を高品質な双方向対話で提供します。
                </p>
              </div>
              <a href="#feature-dialogue" className="feature-link-btn">
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
                <h3 className="feature-headline">学歴･経歴では見抜けないポテンシャル候補者を発掘</h3>
                <p className="feature-body">
                  学歴や職歴だけでは測れない「問題解決力」を可視化。<br />
                  従来の選考では見逃されていた隠れた逸材を発掘し、採用の多様性を実現します。
                </p>
              </div>
              <a href="#feature-top" className="feature-link-btn">
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
                <h3 className="feature-headline">選考の高度化と効率化の両立</h3>
                <p className="feature-body">
                  問題解決力を評価するため、従来の筆記試験・1次面接をまとめて代替可能。<br />
                  コストの低減・業務効率化と選考の高度化を両立し、受験者目線でもプロセスが簡素化されます。
                </p>
              </div>
              <a href="#feature-replace" className="feature-link-btn">
                <span>詳しく見る</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Detail 1: 「問題解決力を見極める」ノウハウ */}
      <section id="feature-knowhow" className="feedback-preview-section feedback-preview-light">
        <div className="container">
          <div className="feature-detail-header">
            <span className="feature-detail-number">FEATURE 01</span>
            <h2 className="feature-detail-title">「問題解決力を見極める」ノウハウ</h2>
            <p className="feature-detail-subtitle">
              問題解決力についてグローバル最高峰の要求水準を持つ外資系戦略コンサルティングファームの<br />採用・育成の経験・ノウハウを丁寧に言語化し、AI面接で再現。<br />候補者の本質的なポテンシャルを見抜く対話フロー、評価項目･基準を構築しています。
            </p>
          </div>

          {/* 3つの主要項目 */}
          <div className="knowhow-cards">
            <div className="knowhow-card">
              <span className="knowhow-number">01</span>
              <h3 className="knowhow-title">問題解決力を引き出すテーマ</h3>
              <p className="knowhow-desc">
                フェルミ推定や成長戦略討議など、<br />問題解決力が十分でないと対応できない<br />高度かつ複雑なテーマを設定。<br />準備やAI活用では対処できない、<br />その場の思考力が問われます。
              </p>
            </div>
            <div className="knowhow-card">
              <span className="knowhow-number">02</span>
              <h3 className="knowhow-title">問題解決力を見抜く鋭い問い</h3>
              <p className="knowhow-desc">
                候補者の回答に応じて、前提を問う質問や批判的思考を促す深掘りを実施。<br />双方向の対話を通じて、候補者の本質的な思考プロセスを引き出します。
              </p>
            </div>
            <div className="knowhow-card">
              <span className="knowhow-number">03</span>
              <h3 className="knowhow-title">問題解決力を評価する軸･基準</h3>
              <p className="knowhow-desc">
                論理思考・構造化・仮説思考・コミュニケーションなど多角的な評価軸を設定。戦略コンサルの採用基準を再現した評価基準で、候補者を客観的に評価します。
              </p>
            </div>
          </div>

          {/* レポートセクション */}
          <div className="report-showcase">
            <div className="report-showcase-content">
              <div className="report-showcase-text">
                <h3 className="report-showcase-title">問題解決力を可視化する<br />高精度な評価レポート</h3>
                <p className="report-showcase-desc">
                  面接結果は詳細な評価レポートとして出力。総合スコアに加え、Structure Thinking・Logical Thinking・Critical Thinkingなど<br />多角的な評価軸でスコアリング。各項目の評価根拠と<br />改善フィードバックを提示し、判断を強力にサポートします。
                </p>
                <ul className="report-showcase-points">
                  <li>5点満点の総合スコアで候補者を客観比較</li>
                  <li>問題解決力を複数の評価軸で多面的に評価</li>
                  <li>具体的な発言を引用した明確な評価根拠</li>
                  <li>次の面接官が検証すべき引継ぎ事項も自動生成</li>
                </ul>
              </div>
              <div className="report-showcase-image">
                <img
                  src="/lp-images/report.png"
                  alt="AI Interview Evaluation Report"
                  className="report-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Detail 2: 高度かつ高品質なAI対話機能 */}
      <section id="feature-dialogue" className="feedback-preview-section">
        <div className="container">
          <div className="feature-detail-header">
            <span className="feature-detail-number">FEATURE 02</span>
            <h2 className="feature-detail-title">高度かつ高品質なAI対話機能</h2>
            <p className="feature-detail-subtitle">
              3次元アバターとAI音声制御技術を活用し、対話の自然さに拘った対話機能を構築。<br />
              難易度の高いケース面接を高品質な双方向対話で提供します。
            </p>
          </div>

          {/* Row 1: 3D Avatar - Mock Left, Text Right */}
          <div className="feedback-row">
            <div className="feedback-mock">
              <div className="pc-mockup">
                <div className="pc-screen">
                  <img
                    src="/lp-images/hero-main.jpg"
                    alt="3Dアバターを使用したAI面接画面"
                  />
                </div>
                <div className="pc-base">
                  <div className="pc-base-top"></div>
                  <div className="pc-base-bottom"></div>
                </div>
              </div>
            </div>
            <div className="feedback-text">
              <h3>3Dアバターによるリアルな面接体験</h3>
              <p>高品質な3次元アバターが面接官として登場。表情やジェスチャーを含むリアルな対話体験により、候補者は本番さながらの緊張感の中でパフォーマンスを発揮します。</p>
              <ul className="feedback-points">
                <li>リアルタイムで反応する3Dアバター</li>
                <li>自然な音声・表情で緊張感のある面接を再現</li>
                <li>テキストベースでは測れない「対人力」を評価</li>
              </ul>
            </div>
          </div>

          {/* Row 2: Natural Dialogue - Text Left, Mock Right */}
          <div className="feedback-row feedback-row-reverse">
            <div className="feedback-mock">
              <div className="pc-mockup">
                <div className="pc-screen">
                  <svg viewBox="0 0 560 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
                    {/* Background */}
                    <rect width="560" height="340" fill="#0d0d0d"/>

                    {/* Dialogue bubbles */}
                    <g>
                      {/* AI Message 1 */}
                      <rect x="20" y="20" width="380" height="50" rx="8" fill="#1a1a1a"/>
                      <circle cx="45" cy="45" r="16" fill="#4A5568"/>
                      <text x="45" y="50" fill="#FFFFFF" fontSize="12" textAnchor="middle">AI</text>
                      <rect x="70" y="32" width="280" height="10" rx="2" fill="#FFFFFF" opacity="0.8"/>
                      <rect x="70" y="48" width="200" height="8" rx="2" fill="#FFFFFF" opacity="0.4"/>
                    </g>

                    <g>
                      {/* User Message */}
                      <rect x="160" y="85" width="380" height="60" rx="8" fill="#2B2B2B"/>
                      <circle cx="515" cy="115" r="16" fill="#6B7280"/>
                      <text x="515" y="120" fill="#FFFFFF" fontSize="10" textAnchor="middle">You</text>
                      <rect x="180" y="97" width="300" height="10" rx="2" fill="#FFFFFF" opacity="0.7"/>
                      <rect x="180" y="113" width="260" height="8" rx="2" fill="#FFFFFF" opacity="0.4"/>
                      <rect x="180" y="127" width="180" height="8" rx="2" fill="#FFFFFF" opacity="0.4"/>
                    </g>

                    <g>
                      {/* AI Message 2 - Deep Dive */}
                      <rect x="20" y="160" width="420" height="70" rx="8" fill="#1a1a1a"/>
                      <rect x="30" y="168" width="80" height="18" rx="4" fill="#22c55e" opacity="0.2"/>
                      <text x="70" y="181" fill="#22c55e" fontSize="10" textAnchor="middle">深掘り質問</text>
                      <circle cx="45" cy="205" r="16" fill="#4A5568"/>
                      <text x="45" y="210" fill="#FFFFFF" fontSize="12" textAnchor="middle">AI</text>
                      <rect x="70" y="192" width="340" height="10" rx="2" fill="#FFFFFF" opacity="0.8"/>
                      <rect x="70" y="208" width="280" height="8" rx="2" fill="#FFFFFF" opacity="0.4"/>
                    </g>

                    <g>
                      {/* User Response */}
                      <rect x="160" y="245" width="380" height="75" rx="8" fill="#2B2B2B"/>
                      <circle cx="515" cy="282" r="16" fill="#6B7280"/>
                      <text x="515" y="287" fill="#FFFFFF" fontSize="10" textAnchor="middle">You</text>
                      <rect x="180" y="257" width="300" height="10" rx="2" fill="#FFFFFF" opacity="0.7"/>
                      <rect x="180" y="273" width="320" height="8" rx="2" fill="#FFFFFF" opacity="0.4"/>
                      <rect x="180" y="289" width="260" height="8" rx="2" fill="#FFFFFF" opacity="0.4"/>
                      <rect x="180" y="305" width="180" height="8" rx="2" fill="#FFFFFF" opacity="0.4"/>
                    </g>
                  </svg>
                </div>
                <div className="pc-base">
                  <div className="pc-base-top"></div>
                  <div className="pc-base-bottom"></div>
                </div>
              </div>
            </div>
            <div className="feedback-text">
              <h3>深掘り対話で本質を見抜く</h3>
              <p>候補者の回答に応じて適切な深掘り質問を自動生成。<br />準備した回答では対応できない、<br />その場での思考力・対応力を評価します。</p>
              <ul className="feedback-points">
                <li>回答内容に応じた動的な追加質問</li>
                <li>批判的思考を促すディスカッション形式</li>
                <li>一方的な質問ではない双方向の対話</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Detail 3: 学歴･経歴では見抜けないポテンシャル候補者を発掘 */}
      <section id="feature-top" className="feedback-preview-section feedback-preview-light">
        <div className="container">
          <div className="feature-detail-header">
            <span className="feature-detail-number">FEATURE 03</span>
            <h2 className="feature-detail-title">学歴･経歴では見抜けない<br />ポテンシャル候補者を発掘</h2>
            <p className="feature-detail-subtitle">
              学歴や職歴だけでは測れない「問題解決力」を可視化。<br />
              従来の選考では見逃されていた隠れた逸材を発掘し、採用の多様性を実現します。
            </p>
          </div>

          {/* データで見る：入社後パフォーマンスの予測力 */}
          <div className="performance-insight">
            <div className="performance-chart-container">
              <h3 className="performance-chart-title">入社後パフォーマンスの予測力（相関係数）</h3>
              <p className="performance-chart-source">*Schmidt & Hunter (1998) "The Validity and Utility of Selection Methods in Personnel Psychology" に基づく</p>

              <div className="performance-chart">
                {/* 問題解決力（認知能力） */}
                <div className="chart-row">
                  <span className="chart-label">問題解決力<br /><small>（認知能力テスト）</small></span>
                  <div className="chart-bar-container">
                    <div className="chart-bar chart-bar-high" style={{ width: '100%' }}></div>
                    <span className="chart-value">0.51</span>
                  </div>
                </div>

                {/* 職務経験年数 */}
                <div className="chart-row">
                  <span className="chart-label">職務経験年数</span>
                  <div className="chart-bar-container">
                    <div className="chart-bar chart-bar-low" style={{ width: '35%' }}></div>
                    <span className="chart-value">0.18</span>
                  </div>
                </div>

                {/* 学歴・GPA */}
                <div className="chart-row">
                  <span className="chart-label">学歴・GPA</span>
                  <div className="chart-bar-container">
                    <div className="chart-bar chart-bar-low" style={{ width: '20%' }}></div>
                    <span className="chart-value">0.10</span>
                  </div>
                </div>
              </div>

              <div className="performance-insight-box">
                <p className="quote-ja">85年間の研究が示す結論：<br />学歴や経験年数ではなく、認知能力（問題解決力）が<br />入社後のパフォーマンスを最も正確に予測します。</p>
              </div>
            </div>

            <div className="performance-benefits">
              <div className="benefit-item-simple">
                <div className="benefit-icon-simple">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h4>学歴バイアスを排除</h4>
                  <p>学歴フィルターでは見逃していた<br />「磨けば光る原石」を発掘できます</p>
                </div>
              </div>
              <div className="benefit-item-simple">
                <div className="benefit-icon-simple">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <div>
                  <h4>採用の多様性を実現</h4>
                  <p>多様なバックグラウンドから<br />本当に優秀な人材を採用できます</p>
                </div>
              </div>
              <div className="benefit-item-simple">
                <div className="benefit-icon-simple">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
                    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  </svg>
                </div>
                <div>
                  <h4>入社後の活躍を予測</h4>
                  <p>問題解決力は入社後のパフォーマンス<br />を最も正確に予測します</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Detail 4: 選考の高度化と効率化の両立 */}
      <section id="feature-replace" className="feedback-preview-section">
        <div className="container">
          <div className="feature-detail-header">
            <span className="feature-detail-number">FEATURE 04</span>
            <h2 className="feature-detail-title">選考の高度化と効率化の両立</h2>
            <p className="feature-detail-subtitle">
              既存の選考プロセスのうち、筆記試験・1次面接をSolvere Assessで代替。<br />
              選考の品質向上とコスト削減を同時に実現します。
            </p>
          </div>

          {/* Process Replacement Diagram - Monochrome */}
          <div className="process-replacement-diagram">
            {/* Before: Traditional Process */}
            <div className="process-row">
              <span className="process-row-label">従来</span>
              <div className="process-boxes">
                <div className="process-box process-box-replace">
                  <span className="process-box-text">筆記試験</span>
                </div>
                <div className="process-arrow">→</div>
                <div className="process-box process-box-replace">
                  <span className="process-box-text">1次面接</span>
                </div>
                <div className="process-arrow">→</div>
                <div className="process-box process-box-keep">
                  <span className="process-box-text">2次面接</span>
                </div>
                <div className="process-arrow">→</div>
                <div className="process-box process-box-keep">
                  <span className="process-box-text">最終面接</span>
                </div>
              </div>
            </div>

            <hr className="flow-divider" />

            {/* Pattern 1: Replace 筆記試験 only */}
            <div className="process-pattern-block">
              <div className="process-pattern-header">
                <span className="pattern-badge">導入パターン①</span>
                <span className="pattern-title">筆記試験を置き換え</span>
              </div>
              <p className="pattern-description">
                筆記試験をSolvere Assessで代替。面接官による1次面接は維持しつつ、全応募者をより多角的に評価
              </p>
              <div className="process-row">
                <div className="process-boxes">
                  <div className="process-box process-box-solvere">
                    <span className="process-box-text">Solvere Assess</span>
                  </div>
                  <div className="process-arrow">→</div>
                  <div className="process-box process-box-keep">
                    <span className="process-box-text">1次面接</span>
                  </div>
                  <div className="process-arrow">→</div>
                  <div className="process-box process-box-keep">
                    <span className="process-box-text">2次面接</span>
                  </div>
                  <div className="process-arrow">→</div>
                  <div className="process-box process-box-keep">
                    <span className="process-box-text">最終面接</span>
                  </div>
                </div>
              </div>
            </div>

            <hr className="flow-divider" />

            {/* Pattern 2: Replace both 筆記試験 and 1次面接 */}
            <div className="process-pattern-block">
              <div className="process-pattern-header">
                <span className="pattern-badge">導入パターン②</span>
                <span className="pattern-title">筆記試験＋1次面接を置き換え</span>
              </div>
              <p className="pattern-description">
                筆記試験と1次面接をSolvere Assessで代替。面接官の工数を大幅に削減しながら、選考の質を維持・向上
              </p>
              <div className="process-row">
                <div className="process-boxes process-boxes-pattern2">
                  <div className="process-box process-box-solvere process-box-double" style={{ gridColumn: '1 / 4' }}>
                    <span className="process-box-text">Solvere Assess</span>
                  </div>
                  <div className="process-arrow" style={{ gridColumn: '4' }}>→</div>
                  <div className="process-box process-box-keep" style={{ gridColumn: '5' }}>
                    <span className="process-box-text">2次面接</span>
                  </div>
                  <div className="process-arrow" style={{ gridColumn: '6' }}>→</div>
                  <div className="process-box process-box-keep" style={{ gridColumn: '7' }}>
                    <span className="process-box-text">最終面接</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits - Simplified 3 columns */}
          <div className="replacement-benefits">
            <div className="replacement-benefit-item">
              <span className="replacement-benefit-number">01</span>
              <div className="replacement-benefit-content">
                <h4>選考品質の向上</h4>
                <p>問題解決力を正確に評価し、<br />本当に優秀な人材を見極め</p>
              </div>
            </div>
            <div className="replacement-benefit-item">
              <span className="replacement-benefit-number">02</span>
              <div className="replacement-benefit-content">
                <h4>コスト削減</h4>
                <p>テストベンダー費用・<br />1次面接の人件費を大幅カット</p>
              </div>
            </div>
            <div className="replacement-benefit-item">
              <span className="replacement-benefit-number">03</span>
              <div className="replacement-benefit-content">
                <h4>工数削減</h4>
                <p>面接官のスケジュール調整<br />フォローアップが不要に</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section - 導入の流れ */}
      <section className="journey-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-accent"></span>導入の流れ
          </h2>
          <p className="section-subtitle">採用責任者・担当者が行う6つのステップ</p>

          <div className="journey-grid journey-grid-6">
            <div className="journey-card">
              <span className="journey-watermark">01</span>
              <div className="journey-content">
                <h3 className="journey-title">導入に向けた<br />打ち合わせ</h3>
                <p className="journey-desc-detail">「面接官の負担を減らしたい」<br />「優秀な人材を見逃したくない」<br />貴社の課題に合わせて、<br />最適な面接の型をご提案します。</p>
              </div>
            </div>

            <div className="journey-card">
              <span className="journey-watermark">02</span>
              <div className="journey-content">
                <h3 className="journey-title">貴社独自の<br />選考の型を設計</h3>
                <p className="journey-desc-detail">「どんな人材を採りたいか」<br />を言語化し、貴社ならではの<br />評価基準・合格ラインを設計。<br />貴社の採用方針にBest Fitな<br />選考の型を構築します。</p>
              </div>
            </div>

            <div className="journey-card">
              <span className="journey-watermark">03</span>
              <div className="journey-content">
                <h3 className="journey-title">候補者への<br />受験リンク送付</h3>
                <p className="journey-desc-detail">やることはリンクを送るだけ。<br />候補者は自分で受験する日程･時間を設定。<br />スケジュール調整から解放されます。</p>
              </div>
            </div>

            <div className="journey-card">
              <span className="journey-watermark">04</span>
              <div className="journey-content">
                <h3 className="journey-title">AI面接結果の<br />モニタリング</h3>
                <p className="journey-desc-detail">受験完了と同時にAIがレポートを生成。<br />待ち時間はゼロで、<br />全候補者の評価状況を把握できます。</p>
              </div>
            </div>

            <div className="journey-card">
              <span className="journey-watermark">05</span>
              <div className="journey-content">
                <h3 className="journey-title">結果確認<br />合否判定</h3>
                <p className="journey-desc-detail">スコアと評価根拠を見て判断するだけ。<br />迷った候補者は次の面接官への<br />引継ぎ事項も自動で提示されます。</p>
              </div>
            </div>

            <div className="journey-card">
              <span className="journey-watermark">06</span>
              <div className="journey-content">
                <h3 className="journey-title">次回選考に向けた<br />振り返り</h3>
                <p className="journey-desc-detail">「今回の選考で何が見えたか」<br />をデータで振り返り、次の採用に活かす。<br />選考の質が回を重ねるごとに向上します。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="product-cta-section product-cta-minimal">
        <div className="container">
          <h2 className="product-cta-title">
            候補者のポテンシャルを見出し、可能性を広げる
          </h2>
        </div>
      </section>

      <Footer />
    </div>
  );
}

"use client";

import Link from "next/link";
import "../lp-styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function UpskillPage() {
  return (
    <div className="lp-wrapper">
      <Header />

      {/* Product Hero Section */}
      <section className="product-hero">
        <div className="container">
          <div className="product-hero-content">
            <p className="product-label">Solvere Product</p>
            <h1 className="product-title">Upskill</h1>
            <p className="product-tagline">問題解決力を鍛える</p>
            <p className="product-description">
              外資戦略コンサルファームで行われるユニークな面接の型"ケース面接"。
              <br />
              ケース面接は候補者の問題解決力を見極めることに特化した面接で、
              <br />
              Solvere Upskillでは、このケース面接の実践練習を通じて、あなたの問題解決力を徹底的に鍛え上げます。
              <br />
              パーソナライズされた詳細フィードバックで、着実な成長を実感できます。
            </p>
            <div className="product-cta">
              <Link href="/coming-soon" className="btn btn-primary-dark">
                無料で始める
              </Link>
              <p className="product-release">*リリース予定：2026年2月</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Section */}
      <section className="product-target-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-accent"></span>こんな方におすすめ
          </h2>
        </div>
        <div className="product-target-box">
          <div className="target-grid">
            <div className="target-card target-card-minimal">
              <span className="target-number">01</span>
              <h3 className="target-title">コンサルファームへの<br />転職・就職を目指す方</h3>
              <p className="target-description">
                戦略コンサル・総合コンサルを目指す方に最適。本番さながらのケース面接で実践練習ができます。
              </p>
            </div>
            <div className="target-card target-card-minimal">
              <span className="target-number">02</span>
              <h3 className="target-title">ハイクラス転職で<br />キャリアアップを目指す方</h3>
              <p className="target-description">
                外資系・大手企業の経営企画・事業開発職を目指す方。問題解決力を証明し、特別な選考機会を獲得できます。
              </p>
            </div>
            <div className="target-card target-card-minimal">
              <span className="target-number">03</span>
              <h3 className="target-title">問題解決力を武器に<br />活躍したいすべての方</h3>
              <p className="target-description">
                社会人・学生問わず、問題解決力を体系的に鍛えたい方。学歴ではなく実力で勝負したい方を応援します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="product-features-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-accent"></span>Upskillの特長
          </h2>
          <div className="features-showcase">
            <div className="feature-block">
              <span className="feature-block-number">Feature 01</span>
              <div className="feature-accent-line"></div>
              <div className="feature-content">
                <h3 className="feature-headline">本質的な力が試される双方向AI対話</h3>
                <p className="feature-body">
                  3次元アバターと自然な応答ロジックで、実際の面接に近い高品質の対話を提供。<br />
                  双方向の対話を通じて、本質的な問題解決力を鍛えます。
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
              <span className="feature-block-number">Feature 02</span>
              <div className="feature-accent-line"></div>
              <div className="feature-content">
                <h3 className="feature-headline">成長に直結する高品質なフィードバック</h3>
                <p className="feature-body">
                  外資戦略コンサルの評価基準を再現した多角的な評価。<br />
                  5点満点のスコアと具体的な改善ポイントで、着実な成長を実感できます。
                </p>
              </div>
              <a href="#feature-feedback" className="feature-link-btn">
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
                <h3 className="feature-headline">同じ志をもつ仲間と支えあうコミュニティ</h3>
                <p className="feature-body">
                  問題解決力を高めたい仲間とつながり、互いに高め合う環境。<br />
                  学習の悩みを共有し、モチベーションを維持しながら成長できます。
                </p>
              </div>
              <a href="#feature-community" className="feature-link-btn">
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
                <h3 className="feature-headline">特別な選考機会へのアクセス</h3>
                <p className="feature-body">
                  ハイパフォーマーには招待制の交流機会や特別選考を提供。<br />
                  問題解決力を重視する企業からスカウトを受けられます。
                </p>
              </div>
              <a href="#feature-opportunity" className="feature-link-btn">
                <span>詳しく見る</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Detail 1: 本質的な力が試される双方向AI対話 */}
      <section id="feature-dialogue" className="feature-detail-section">
        <div className="container-wide">
          <div className="feature-detail-header">
            <span className="feature-detail-number">FEATURE 01</span>
            <h2 className="feature-detail-title">本質的な力が試される双方向AI対話</h2>
            <p className="feature-detail-subtitle">
              3次元アバターと自然な応答ロジックにより、実際の面接体験に近い高品質の対話機能を提供。
              入念な準備やAIの活用だけでは対応できない双方向の対話を通じて、本質的な問題解決力を鍛えます。
            </p>
          </div>

          {/* Video Demo - Centered */}
          <div className="video-demo-section">
            <div className="video-thumbnail">
              <img
                src="/lp-images/hero-main.jpg"
                alt="AIケース面接 デモ動画"
              />
              <div className="video-play-button">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <div className="video-duration">12:34</div>
            </div>
            <div className="video-info">
              <h4>AIケース面接 デモンストレーション</h4>
              <p>実際のケース面接の流れをご覧ください</p>
            </div>
          </div>

          {/* Full-width Dialogue Display */}
          <div className="dialogue-showcase">
            <h3 className="dialogue-showcase-title">実際の対話イメージ</h3>
            <p className="dialogue-showcase-subtitle">売上向上施策についての批判的思考を試すディスカッション</p>

            <div className="dialogue-timeline">
              <div className="dialogue-item dialogue-ai">
                <span className="dialogue-tag">前提を問う質問</span>
                <div className="dialogue-speaker">
                  <span className="speaker-badge ai">AI</span>
                  <span className="speaker-name">Interviewer</span>
                </div>
                <div className="dialogue-content">
                  <p>新規顧客の獲得施策をいくつか提案いただきましたが、そもそも「新規顧客を増やす」以外にも、既存顧客からの売上を伸ばすという選択肢もあったはずです。なぜ新規獲得を優先されたのですか？</p>
                </div>
              </div>

              <div className="dialogue-item dialogue-user">
                <div className="dialogue-speaker">
                  <span className="speaker-badge user">You</span>
                  <span className="speaker-name">Candidate</span>
                </div>
                <div className="dialogue-content">
                  <p>はい。既存顧客の売上向上も検討しましたが、現在の顧客基盤では市場全体の5%程度しかカバーできていません。まずは顧客数を増やさないと、いくら一人あたりの売上を上げても成長に限界があると考えました。</p>
                </div>
              </div>

              <div className="dialogue-item dialogue-ai">
                <span className="dialogue-tag">批判的思考を促す質問</span>
                <div className="dialogue-speaker">
                  <span className="speaker-badge ai">AI</span>
                  <span className="speaker-name">Interviewer</span>
                </div>
                <div className="dialogue-content">
                  <p>なるほど。ただ、新規顧客を獲得するには広告費などのコストがかかりますよね。競合も同じように顧客獲得に力を入れたら、広告費が高騰して、結局利益が出にくくなるリスクはありませんか？</p>
                </div>
              </div>

              <div className="dialogue-item dialogue-user">
                <div className="dialogue-speaker">
                  <span className="speaker-badge user">You</span>
                  <span className="speaker-name">Candidate</span>
                </div>
                <div className="dialogue-content">
                  <p>おっしゃる通りです。そのリスクを避けるために、競合があまり注力していない「地方在住の30〜40代」に絞って集中的にアプローチする戦略を考えています。</p>
                </div>
              </div>

              <div className="dialogue-item dialogue-ai">
                <span className="dialogue-tag">仮説の根拠を問う</span>
                <div className="dialogue-speaker">
                  <span className="speaker-badge ai">AI</span>
                  <span className="speaker-name">Interviewer</span>
                </div>
                <div className="dialogue-content">
                  <p>地方に絞るのは面白い視点ですね。ただ、なぜ都市部ではなく地方なのでしょうか？「競合が少ない」以外に、地方を選ぶべき具体的な根拠はありますか？</p>
                </div>
              </div>

              <div className="dialogue-item dialogue-user">
                <div className="dialogue-speaker">
                  <span className="speaker-badge user">You</span>
                  <span className="speaker-name">Candidate</span>
                </div>
                <div className="dialogue-content">
                  <p>3つの理由があります。第一に、リモートワークの普及で地方でも購買力のあるビジネス層が増えています。第二に、地方は広告を出す費用が都市部の約6割で済むため、同じ予算でより多くの人にアプローチできます。第三に、地方は口コミが広がりやすく、一度獲得した顧客が新たな顧客を連れてきてくれる効果も期待できます。</p>
                </div>
              </div>
            </div>

            <div className="dialogue-takeaway">
              <p className="dialogue-takeaway-text">
                双方向の対話だからこそ、議論は深く掘り下げられ、<br />
                <strong>本質的な思考力とコミュニケーション力</strong>が問われます。
              </p>
              <p className="dialogue-takeaway-sub">
                一方的な問題演習では得られない、実践に直結するトレーニング。<br />
                これが、問題解決力を根本から引き上げる最も効果的な方法です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Detail 2: 成長に直結する高品質なフィードバック */}
      <section id="feature-feedback" className="feedback-preview-section">
        <div className="container">
          <div className="feature-detail-header">
            <span className="feature-detail-number">FEATURE 02</span>
            <h2 className="feature-detail-title">成長に直結する高品質なフィードバック</h2>
            <p className="feature-detail-subtitle">
              外資戦略コンサルの採用基準を再現した評価レポートで、着実な成長を実感
            </p>
          </div>

          {/* Row 1: Score Overview - Mock Left, Text Right */}
          <div className="feedback-row">
            <div className="feedback-mock">
              <div className="pc-mockup">
                <div className="pc-screen">
                  <img
                    src="/lp-images/upskill-1.png"
                    alt="Performance Overview - 総合スコアとパフォーマンス概要画面"
                  />
                </div>
                <div className="pc-base">
                  <div className="pc-base-top"></div>
                  <div className="pc-base-bottom"></div>
                </div>
              </div>
            </div>
            <div className="feedback-text">
              <h3>総合スコア＆パフォーマンス概要</h3>
              <p>5点満点の総合スコアで、あなたの問題解決力を一目で把握。Global Percentile（全体順位）やCohort比較で、自分の立ち位置を客観的に確認できます。</p>
              <ul className="feedback-points">
                <li>5点満点の総合スコアで実力を定量化</li>
                <li>Global Percentileで全体での順位を把握</li>
                <li>強み・改善点を具体的なコメントで解説</li>
              </ul>
            </div>
          </div>

          {/* Row 2: Score Breakdown - Text Left, Mock Right */}
          <div className="feedback-row feedback-row-reverse">
            <div className="feedback-mock">
              <div className="pc-mockup">
                <div className="pc-screen">
                  <img
                    src="/lp-images/upskill-3.png"
                    alt="Score Breakdown - 3軸×多項目の詳細評価画面"
                  />
                </div>
                <div className="pc-base">
                  <div className="pc-base-top"></div>
                  <div className="pc-base-bottom"></div>
                </div>
              </div>
            </div>
            <div className="feedback-text">
              <h3>3軸×多項目の詳細評価</h3>
              <p>Problem Solving（問題解決力）、Delivery & Presence（伝達力）、Coachability（成長可能性）の3軸で評価。各軸をさらに細分化し、Structure & Logic・Logical Thinking・Hypothesis-Driven Thinkingなど項目ごとに5点満点でスコアリングします。</p>
              <ul className="feedback-points">
                <li>戦略コンサルの評価軸を完全再現</li>
                <li>Reasoning・Feedback・模範例の3視点で解説</li>
                <li>項目ごとの詳細スコアで課題を特定</li>
              </ul>
            </div>
          </div>

          {/* Row 3: Peer Comparison & Learning - Mock Left, Text Right */}
          <div className="feedback-row">
            <div className="feedback-mock">
              <div className="pc-mockup">
                <div className="pc-screen">
                  <img
                    src="/lp-images/upskill-4.png"
                    alt="Comparison & Suggested Studies - Peer比較と学習推奨画面"
                  />
                </div>
                <div className="pc-base">
                  <div className="pc-base-top"></div>
                  <div className="pc-base-bottom"></div>
                </div>
              </div>
            </div>
            <div className="feedback-text">
              <h3>Peer比較＆パーソナライズ学習</h3>
              <p>全受験者との比較チャートで、Overall・Problem Solving・Delivery & Presence・Coachabilityの各軸における自分の立ち位置を可視化。弱点に基づいた学習コンテンツも自動推奨されます。</p>
              <ul className="feedback-points">
                <li>All Peersとの比較で客観的な立ち位置を把握</li>
                <li>項目別の強み・弱みを一目で確認</li>
                <li>弱点克服のための学習コンテンツを自動推奨</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Feature Detail 3: 同じ志をもつ仲間と支えあうコミュニティ */}
      <section id="feature-community" className="feedback-preview-section feedback-preview-light">
        <div className="container">
          <div className="feature-detail-header">
            <span className="feature-detail-number">FEATURE 03</span>
            <h2 className="feature-detail-title">同じ志をもつ仲間と支えあうコミュニティ</h2>
            <p className="feature-detail-subtitle">
              問題解決力を高めたいという同じ志を持つ仲間とつながり、互いに高め合う環境。
              孤独な学習ではなく、仲間と共に成長できます。
            </p>
          </div>

          {/* Row 1: リーダーボード - Mock Left, Text Right */}
          <div className="feedback-row">
            <div className="feedback-mock">
              <div className="pc-mockup">
                <div className="pc-screen">
                  <svg viewBox="0 0 560 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
                    {/* Background */}
                    <rect width="560" height="340" fill="#0d0d0d"/>

                    {/* Header Bar */}
                    <rect x="20" y="20" width="520" height="44" rx="8" fill="#1a1a1a"/>
                    <text x="40" y="48" fill="#FFFFFF" fontSize="18" fontWeight="bold">Weekly Top Scores</text>
                    <rect x="460" y="30" width="60" height="24" rx="12" fill="#22c55e" opacity="0.2"/>
                    <circle cx="476" cy="42" r="4" fill="#22c55e"/>
                    <text x="488" y="47" fill="#22c55e" fontSize="14">Live</text>

                    {/* Rank 1 */}
                    <g>
                      <rect x="20" y="74" width="520" height="36" rx="6" fill="#1a1a1a"/>
                      <rect x="20" y="74" width="4" height="36" rx="2" fill="#fbbf24"/>
                      <text x="42" y="98" fill="#fbbf24" fontSize="16" fontWeight="bold">1</text>
                      <circle cx="75" cy="92" r="14" fill="#2B2B2B"/>
                      <text x="100" y="96" fill="#FFFFFF" fontSize="15" fontWeight="bold">Yuki T.</text>
                      <text x="180" y="96" fill="#6B7280" fontSize="13">Tokyo</text>
                      <text x="480" y="96" fill="#FFFFFF" fontSize="16" fontWeight="bold" textAnchor="end">3.8</text>
                      <text x="520" y="96" fill="#6B7280" fontSize="13" textAnchor="end">/5.0</text>
                    </g>

                    {/* Rank 2 */}
                    <g>
                      <rect x="20" y="116" width="520" height="36" rx="6" fill="#141414"/>
                      <rect x="20" y="116" width="4" height="36" rx="2" fill="#9ca3af"/>
                      <text x="42" y="140" fill="#9ca3af" fontSize="16" fontWeight="bold">2</text>
                      <circle cx="75" cy="134" r="14" fill="#2B2B2B"/>
                      <text x="100" y="138" fill="#FFFFFF" fontSize="15">Ken M.</text>
                      <text x="180" y="138" fill="#6B7280" fontSize="13">Singapore</text>
                      <text x="480" y="138" fill="#FFFFFF" fontSize="16" fontWeight="bold" textAnchor="end">3.7</text>
                      <text x="520" y="138" fill="#6B7280" fontSize="13" textAnchor="end">/5.0</text>
                    </g>

                    {/* Rank 3 */}
                    <g>
                      <rect x="20" y="158" width="520" height="36" rx="6" fill="#141414"/>
                      <rect x="20" y="158" width="4" height="36" rx="2" fill="#cd7f32"/>
                      <text x="42" y="182" fill="#cd7f32" fontSize="16" fontWeight="bold">3</text>
                      <circle cx="75" cy="176" r="14" fill="#2B2B2B"/>
                      <text x="100" y="180" fill="#FFFFFF" fontSize="15">Mia L.</text>
                      <text x="180" y="180" fill="#6B7280" fontSize="13">London</text>
                      <text x="480" y="180" fill="#FFFFFF" fontSize="16" fontWeight="bold" textAnchor="end">3.6</text>
                      <text x="520" y="180" fill="#6B7280" fontSize="13" textAnchor="end">/5.0</text>
                    </g>

                    {/* Rank 4 */}
                    <g>
                      <rect x="20" y="200" width="520" height="36" rx="6" fill="#111111"/>
                      <text x="42" y="224" fill="#4B5563" fontSize="16">4</text>
                      <circle cx="75" cy="218" r="14" fill="#2B2B2B"/>
                      <text x="100" y="222" fill="#9CA3AF" fontSize="15">Sho K.</text>
                      <text x="180" y="222" fill="#4B5563" fontSize="13">Osaka</text>
                      <text x="480" y="222" fill="#9CA3AF" fontSize="16" fontWeight="bold" textAnchor="end">3.5</text>
                      <text x="520" y="222" fill="#4B5563" fontSize="13" textAnchor="end">/5.0</text>
                    </g>

                    {/* Rank 5 */}
                    <g>
                      <rect x="20" y="242" width="520" height="36" rx="6" fill="#111111"/>
                      <text x="42" y="266" fill="#4B5563" fontSize="16">5</text>
                      <circle cx="75" cy="260" r="14" fill="#2B2B2B"/>
                      <text x="100" y="264" fill="#9CA3AF" fontSize="15">Hana S.</text>
                      <text x="180" y="264" fill="#4B5563" fontSize="13">Seoul</text>
                      <text x="480" y="264" fill="#9CA3AF" fontSize="16" fontWeight="bold" textAnchor="end">3.4</text>
                      <text x="520" y="264" fill="#4B5563" fontSize="13" textAnchor="end">/5.0</text>
                    </g>

                    {/* Rank 6 */}
                    <g>
                      <rect x="20" y="284" width="520" height="36" rx="6" fill="#0f0f0f"/>
                      <text x="42" y="308" fill="#374151" fontSize="16">6</text>
                      <circle cx="75" cy="302" r="14" fill="#1f1f1f"/>
                      <text x="100" y="306" fill="#6B7280" fontSize="15">Alex R.</text>
                      <text x="180" y="306" fill="#374151" fontSize="13">New York</text>
                      <text x="480" y="306" fill="#6B7280" fontSize="16" fontWeight="bold" textAnchor="end">3.3</text>
                      <text x="520" y="306" fill="#374151" fontSize="13" textAnchor="end">/5.0</text>
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
              <h3>リーダーボード</h3>
              <p>週次・月次のトップスコアをリアルタイムでランキング表示。世界中のユーザーと切磋琢磨しながら、自分の成長を実感できます。</p>
              <ul className="feedback-points">
                <li>週次・月次のスコアランキングで競い合える</li>
                <li>大学・企業・国籍などの属性で絞り込み可能</li>
                <li>トップパフォーマーの学習方法を参考にできる</li>
              </ul>
            </div>
          </div>

          {/* Row 2: コミュニティボード - Text Left, Mock Right */}
          <div className="feedback-row feedback-row-reverse">
            <div className="feedback-mock">
              <div className="pc-mockup">
                <div className="pc-screen">
                  <svg viewBox="0 0 560 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
                    {/* Background */}
                    <rect width="560" height="340" fill="#0d0d0d"/>

                    {/* Header Bar */}
                    <rect x="20" y="20" width="520" height="44" rx="8" fill="#1a1a1a"/>
                    <text x="40" y="48" fill="#FFFFFF" fontSize="18" fontWeight="bold">Community Board</text>
                    <circle cx="510" cy="42" r="12" fill="#4A5568"/>

                    {/* Post 1 */}
                    <g>
                      <rect x="20" y="74" width="520" height="50" rx="6" fill="#1a1a1a"/>
                      <circle cx="55" cy="99" r="16" fill="#4A5568"/>
                      <rect x="82" y="88" width="280" height="10" rx="2" fill="#FFFFFF" opacity="0.8"/>
                      <rect x="82" y="104" width="180" height="8" rx="2" fill="#FFFFFF" opacity="0.4"/>
                    </g>

                    {/* Post 2 */}
                    <g>
                      <rect x="20" y="132" width="520" height="50" rx="6" fill="#141414"/>
                      <circle cx="55" cy="157" r="16" fill="#6B7280"/>
                      <rect x="82" y="146" width="320" height="10" rx="2" fill="#FFFFFF" opacity="0.7"/>
                      <rect x="82" y="162" width="200" height="8" rx="2" fill="#FFFFFF" opacity="0.4"/>
                    </g>

                    {/* Post 3 */}
                    <g>
                      <rect x="20" y="190" width="520" height="50" rx="6" fill="#141414"/>
                      <circle cx="55" cy="215" r="16" fill="#4A5568"/>
                      <rect x="82" y="204" width="260" height="10" rx="2" fill="#FFFFFF" opacity="0.7"/>
                      <rect x="82" y="220" width="160" height="8" rx="2" fill="#FFFFFF" opacity="0.4"/>
                    </g>

                    {/* Post 4 */}
                    <g>
                      <rect x="20" y="248" width="520" height="50" rx="6" fill="#111111"/>
                      <circle cx="55" cy="273" r="16" fill="#6B7280"/>
                      <rect x="82" y="262" width="300" height="10" rx="2" fill="#FFFFFF" opacity="0.6"/>
                      <rect x="82" y="278" width="180" height="8" rx="2" fill="#FFFFFF" opacity="0.3"/>
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
              <h3>コミュニティボード</h3>
              <p>問題解決力を伸ばしたい仲間同士で質問し合い、知見を共有するQ&Aコミュニティ。ケース面接のコツや学習方法について、経験者からアドバイスをもらえます。</p>
              <ul className="feedback-points">
                <li>ケース面接に関する疑問を気軽に質問</li>
                <li>経験者や高スコア獲得者からの回答</li>
                <li>過去の質問・回答をナレッジとして蓄積</li>
              </ul>
            </div>
          </div>

          {/* Row 3: 社員・内定者インタビュー - Mock Left, Text Right */}
          <div className="feedback-row">
            <div className="feedback-mock">
              <div className="pc-mockup">
                <div className="pc-screen">
                  <svg viewBox="0 0 560 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
                    {/* Background */}
                    <rect width="560" height="340" fill="#0d0d0d"/>

                    {/* Video Thumbnail Area */}
                    <rect x="20" y="20" width="520" height="240" rx="8" fill="#1a1a1a"/>

                    {/* Person silhouette in video */}
                    <circle cx="280" cy="120" r="50" fill="#2B2B2B"/>
                    <circle cx="280" cy="100" r="20" fill="#4A5568"/>
                    <path d="M245 140 Q280 175 315 140" stroke="#4A5568" strokeWidth="4" fill="none"/>

                    {/* Play button overlay */}
                    <circle cx="280" cy="130" r="32" fill="#000000" opacity="0.6"/>
                    <polygon points="270,115 270,145 298,130" fill="#FFFFFF"/>

                    {/* Duration badge */}
                    <rect x="490" y="230" width="40" height="20" rx="4" fill="#000000" opacity="0.8"/>
                    <text x="510" y="244" fill="#FFFFFF" fontSize="12" textAnchor="middle">12:34</text>

                    {/* Video info area */}
                    <rect x="20" y="270" width="520" height="50" fill="#0d0d0d"/>
                    <circle cx="45" cy="295" r="18" fill="#2B2B2B"/>
                    <rect x="75" y="280" width="300" height="12" rx="2" fill="#FFFFFF" opacity="0.9"/>
                    <rect x="75" y="298" width="180" height="10" rx="2" fill="#FFFFFF" opacity="0.4"/>
                  </svg>
                </div>
                <div className="pc-base">
                  <div className="pc-base-top"></div>
                  <div className="pc-base-bottom"></div>
                </div>
              </div>
            </div>
            <div className="feedback-text">
              <h3>社員・内定者インタビュー</h3>
              <p>戦略コンサルファームの現役社員や内定者へのインタビューコンテンツを多数公開。実際に選考を突破した先輩たちのリアルな体験談から、成功のヒントを学べます。</p>
              <ul className="feedback-points">
                <li>MBB・Big4など主要ファームの社員インタビュー</li>
                <li>選考突破のリアルな体験談と具体的なアドバイス</li>
                <li>入社後のキャリアパスや働き方の実態</li>
              </ul>
            </div>
          </div>

          {/* Row 4: コホート分析 - Text Left, Mock Right */}
          <div className="feedback-row feedback-row-reverse">
            <div className="feedback-mock">
              <div className="pc-mockup">
                <div className="pc-screen">
                  <svg viewBox="0 0 560 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
                    {/* Background */}
                    <rect width="560" height="340" fill="#0d0d0d"/>

                    {/* Header Bar */}
                    <rect x="20" y="20" width="520" height="44" rx="8" fill="#1a1a1a"/>
                    <text x="40" y="48" fill="#FFFFFF" fontSize="16" fontWeight="bold">Cohort Analysis</text>

                    {/* Radar chart */}
                    <g transform="translate(280, 190)">
                      {/* Grid lines */}
                      <polygon points="0,-80 69,-40 69,40 0,80 -69,40 -69,-40" fill="none" stroke="#2B2B2B" strokeWidth="1"/>
                      <polygon points="0,-55 48,-27 48,27 0,55 -48,27 -48,-27" fill="none" stroke="#2B2B2B" strokeWidth="1"/>
                      <polygon points="0,-30 26,-15 26,15 0,30 -26,15 -26,-15" fill="none" stroke="#2B2B2B" strokeWidth="1"/>

                      {/* Cohort average (gray) */}
                      <polygon points="0,-42 36,-21 36,21 0,42 -36,21 -36,-21" fill="#4A5568" fillOpacity="0.3" stroke="#4A5568" strokeWidth="2"/>

                      {/* Your score (white) */}
                      <polygon points="0,-65 55,-18 42,35 0,58 -32,28 -50,-28" fill="#2B2B2B" fillOpacity="0.5" stroke="#FFFFFF" strokeWidth="2"/>

                      {/* Points */}
                      <circle cx="0" cy="-65" r="5" fill="#FFFFFF"/>
                      <circle cx="55" cy="-18" r="5" fill="#FFFFFF"/>
                      <circle cx="42" cy="35" r="5" fill="#FFFFFF"/>
                      <circle cx="0" cy="58" r="5" fill="#FFFFFF"/>
                      <circle cx="-32" cy="28" r="5" fill="#FFFFFF"/>
                      <circle cx="-50" cy="-28" r="5" fill="#FFFFFF"/>
                    </g>

                    {/* Labels */}
                    <text x="280" y="95" fill="#FFFFFF" fontSize="14" textAnchor="middle">論点設定</text>
                    <text x="380" y="155" fill="#FFFFFF" fontSize="14" textAnchor="middle">論理思考</text>
                    <text x="370" y="250" fill="#FFFFFF" fontSize="14" textAnchor="middle">構造化</text>
                    <text x="280" y="295" fill="#FFFFFF" fontSize="14" textAnchor="middle">仮説思考</text>
                    <text x="185" y="250" fill="#FFFFFF" fontSize="14" textAnchor="middle">批判的思考</text>
                    <text x="175" y="155" fill="#FFFFFF" fontSize="14" textAnchor="middle">伝達力</text>

                    {/* Legend */}
                    <rect x="460" y="80" width="14" height="14" fill="#FFFFFF" opacity="0.8"/>
                    <text x="480" y="92" fill="#FFFFFF" fontSize="14">You</text>
                    <rect x="460" y="100" width="14" height="14" fill="#4A5568"/>
                    <text x="480" y="112" fill="#FFFFFF" fontSize="14">Avg</text>
                  </svg>
                </div>
                <div className="pc-base">
                  <div className="pc-base-top"></div>
                  <div className="pc-base-bottom"></div>
                </div>
              </div>
            </div>
            <div className="feedback-text">
              <h3>コホート分析</h3>
              <p>同じ業界や企業を目指す仲間の中での自分のポジショニングを可視化。どのスキルを伸ばせば差別化できるか、データに基づいた戦略的な学習が可能になります。</p>
              <ul className="feedback-points">
                <li>志望業界・企業別のコホート内順位を確認</li>
                <li>コホート平均との比較で強み・弱みを把握</li>
                <li>優先的に強化すべきスキルを可視化</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Feature Detail 4: 特別な選考機会へのアクセス */}
      <section id="feature-opportunity" className="feedback-preview-section">
        <div className="container">
          <div className="feature-detail-header">
            <span className="feature-detail-number">FEATURE 04</span>
            <h2 className="feature-detail-title">特別な選考機会へのアクセス</h2>
            <p className="feature-detail-subtitle">
              一定回数の面接を受験した求職者は、獲得したスコアに応じた招待制の交流機会や特別な選考機会を獲得。
              学歴や経歴ではなく、実力で勝負できる新しいキャリアの扉を開きます。
            </p>
          </div>
          <div className="feedback-row feedback-row-reverse">
            <div className="feedback-mock">
              <div className="pc-mockup">
                <div className="pc-screen">
                  <img
                    src="/lp-images/Scount_Inbox.png"
                    alt="Scout Inbox - 企業からのスカウトメッセージ"
                  />
                </div>
                <div className="pc-base">
                  <div className="pc-base-top"></div>
                  <div className="pc-base-bottom"></div>
                </div>
              </div>
            </div>
            <div className="feedback-text">
              <h3>Solvere Bridgeで企業とつながる</h3>
              <p>公式テストで一定回数の受験を行うと、あなたの問題解決力が公式に認定されます。Solvere Bridgeを通じて、問題解決力を重視する企業からの特別なスカウトを受けることができます。</p>
              <ul className="feedback-points">
                <li>公式認定で問題解決力を客観的に証明</li>
                <li>ハイパフォーマー限定の交流イベントに参加</li>
                <li>学歴・経歴に関わらず実力で評価される選考機会</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section - How it Works */}
      <section className="journey-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-accent"></span>ご利用の流れ
          </h2>
          <p className="section-subtitle">問題解決力を磨き、キャリアを切り拓く6ステップ</p>

          <div className="journey-grid">
            <div className="journey-card">
              <span className="journey-watermark">01</span>
              <div className="journey-content">
                <h3 className="journey-title">アカウント<br />を登録する</h3>
                <p className="journey-desc-detail">メールアドレスで無料登録。学歴・職歴・志望業界などのプロフィールを入力して、あなたに最適化された練習環境を整えます。登録は1分で完了します。</p>
              </div>
            </div>

            <div className="journey-card">
              <span className="journey-watermark">02</span>
              <div className="journey-content">
                <h3 className="journey-title">AIケース面接に<br />挑戦する</h3>
                <p className="journey-desc-detail">30分程度のAIケース面接を体験。フェルミ推定から成長戦略まで、実際のコンサル面接さながらのテーマで実践練習ができます。</p>
              </div>
            </div>

            <div className="journey-card">
              <span className="journey-watermark">03</span>
              <div className="journey-content">
                <h3 className="journey-title">評価レポートで<br />しっかり学ぶ</h3>
                <p className="journey-desc-detail">AIが生成する詳細な評価レポートで、あなたの強みと改善点を把握。5点満点のスコアと具体的なフィードバックで成長を可視化します。</p>
              </div>
            </div>

            <div className="journey-card">
              <span className="journey-watermark">04</span>
              <div className="journey-content">
                <h3 className="journey-title">トレーニングを<br />繰り返す</h3>
                <p className="journey-desc-detail">フィードバックを活かして繰り返し練習。様々なテーマ・難易度のケースに挑戦し、問題解決力を着実に向上させます。</p>
              </div>
            </div>

            <div className="journey-card">
              <span className="journey-watermark">05</span>
              <div className="journey-content">
                <h3 className="journey-title">公式テストで<br />力を試す</h3>
                <p className="journey-desc-detail">十分な練習を積んだら公式テストに挑戦。一定スコアを達成すると、あなたの問題解決力が公式に認定されます。</p>
              </div>
            </div>

            <div className="journey-card">
              <span className="journey-watermark">06</span>
              <div className="journey-content">
                <h3 className="journey-title">特別なオファー<br />を受領する</h3>
                <p className="journey-desc-detail">公式テスト合格者には、コンサルティングファームや優良企業から特別な選考オファーが届きます。実力で勝負できる新しいキャリアの扉が開きます。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="product-pricing-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-accent"></span>料金プラン
          </h2>
          <p className="section-subtitle">まずはFreeプランで、自分の立ち位置を確認しよう</p>
          <div className="pricing-free-highlight">
            <div className="free-highlight-content">
              <p className="free-highlight-text">
                Freeプランでも毎月2回、新しいPracticeケースに挑戦可能。
                <br />
                まずは無料で問題解決力を測定し、Peer内での自分のポジションを把握しましょう。
              </p>
            </div>
          </div>
          <div className="pricing-table-wrapper">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th className="feature-column"></th>
                  <th className="plan-column plan-recommended">
                    <div className="plan-header">
                      <span className="plan-badge">まずはここから</span>
                      <span className="plan-name">Free</span>
                      <span className="plan-target">実力を測定したい方</span>
                    </div>
                  </th>
                  <th className="plan-column">
                    <div className="plan-header">
                      <span className="plan-badge plan-badge-invisible">&nbsp;</span>
                      <span className="plan-name">Light</span>
                      <span className="plan-target">気軽に練習したい方</span>
                    </div>
                  </th>
                  <th className="plan-column">
                    <div className="plan-header">
                      <span className="plan-badge plan-badge-invisible">&nbsp;</span>
                      <span className="plan-name">Standard</span>
                      <span className="plan-target">本格的に鍛えたい方</span>
                    </div>
                  </th>
                  <th className="plan-column">
                    <div className="plan-header">
                      <span className="plan-badge plan-badge-invisible">&nbsp;</span>
                      <span className="plan-name">Premium</span>
                      <span className="plan-target">徹底的に鍛えたい方</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="price-row">
                  <td className="feature-label">月額料金</td>
                  <td className="plan-value plan-recommended"><span className="price-amount">0</span><span className="price-unit">円</span></td>
                  <td className="plan-value"><span className="price-amount">3,000</span><span className="price-unit">円</span></td>
                  <td className="plan-value"><span className="price-amount">8,000</span><span className="price-unit">円</span></td>
                  <td className="plan-value"><span className="price-amount">16,000</span><span className="price-unit">円</span></td>
                </tr>
                <tr>
                  <td className="feature-label">Practiceケース</td>
                  <td className="plan-value plan-recommended highlight-value">2回/月</td>
                  <td className="plan-value">2回/月</td>
                  <td className="plan-value">2回/月</td>
                  <td className="plan-value">2回/月</td>
                </tr>
                <tr>
                  <td className="feature-label">追加Practice</td>
                  <td className="plan-value plan-recommended value-disabled">−</td>
                  <td className="plan-value">+4回/月</td>
                  <td className="plan-value">+8回/月</td>
                  <td className="plan-value">+20回/月</td>
                </tr>
                <tr>
                  <td className="feature-label">Formal Test</td>
                  <td className="plan-value plan-recommended">1回</td>
                  <td className="plan-value">1回</td>
                  <td className="plan-value">1回</td>
                  <td className="plan-value">1回</td>
                </tr>
                <tr>
                  <td className="feature-label">対応モード</td>
                  <td className="plan-value plan-recommended">音声のみ</td>
                  <td className="plan-value">音声のみ</td>
                  <td className="plan-value">AIアバター</td>
                  <td className="plan-value">AIアバター</td>
                </tr>
                <tr>
                  <td className="feature-label">フィードバック</td>
                  <td className="plan-value plan-recommended">サマリー</td>
                  <td className="plan-value">サマリー</td>
                  <td className="plan-value">フルレポート</td>
                  <td className="plan-value">フルレポート</td>
                </tr>
                <tr>
                  <td className="feature-label">スコア詳細</td>
                  <td className="plan-value plan-recommended">大項目レベル</td>
                  <td className="plan-value">大項目レベル</td>
                  <td className="plan-value">項目ごと詳細</td>
                  <td className="plan-value">項目ごと詳細</td>
                </tr>
                <tr className="cta-row">
                  <td className="feature-label"></td>
                  <td className="plan-value plan-recommended"><Link href="/coming-soon" className="btn btn-primary-dark btn-table">無料で始める</Link></td>
                  <td className="plan-value"><Link href="/coming-soon" className="btn btn-primary-dark btn-table">プランを選択</Link></td>
                  <td className="plan-value"><Link href="/coming-soon" className="btn btn-primary-dark btn-table">プランを選択</Link></td>
                  <td className="plan-value"><Link href="/coming-soon" className="btn btn-primary-dark btn-table">プランを選択</Link></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="product-cta-section">
        <div className="container">
          <h2 className="product-cta-title">学歴や経歴に頼らず、実力で勝負する</h2>
          <p className="product-cta-description">
            問題解決力を鍛え、証明し、新しいキャリアを切り拓こう。
            <br />
            Solvere Upskillで、あなたの真のポテンシャルを解き放ちませんか？
          </p>
          <Link href="/coming-soon" className="btn btn-primary-dark btn-large">
            無料で始める
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

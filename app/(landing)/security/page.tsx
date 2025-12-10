import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "情報セキュリティ方針 | Solvere",
  description: "株式会社Solvereの情報セキュリティ方針",
};

export default function SecurityPolicyPage() {
  return (
    <div className="lp-wrapper">
      <Header />
      <main className="legal-page legal-page-centered">
        <div className="container">
          <div className="legal-header-centered">
            <h1>情報セキュリティ方針</h1>
          </div>

          <div className="legal-content-centered">
            <p className="legal-intro-centered">
              当社は、情報資産を脅威から守り、お客様ならびに社会の信頼に応えるべく、<br />
              以下の方針に基づき全社で情報セキュリティに取り組みます。
            </p>

            <section className="security-principles-centered">
              <div className="security-principle-centered">
                <h3>1. 情報資産の保護</h3>
                <p>
                  情報資産の機密性、完全性、可用性を確実に保護するために組織的、技術的に適切な対策を講じ、変化する情報技術や新たな脅威に対応します。
                </p>
              </div>

              <div className="security-principle-centered">
                <h3>2. 教育・周知</h3>
                <p>
                  全社員に情報セキュリティ教育の実施と方針の周知徹底をはかり、意識の向上・維持に努めます。
                </p>
              </div>

              <div className="security-principle-centered">
                <h3>3. 継続的改善</h3>
                <p>
                  マネジメントシステムおよび、情報セキュリティに関する目的を設定し、定期的にレビューし、継続的に改善を実施し、維持します。
                </p>
              </div>
            </section>

            <section className="policy-signature-centered">
              <p className="policy-date">制定日：2025年12月1日</p>
              <p><strong>株式会社Solvere</strong></p>
              <p>代表取締役社長　岸谷 祥平</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

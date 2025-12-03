import Link from "next/link";

export default function ComingSoonPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(3rem, 10vw, 6rem)",
          fontWeight: 700,
          color: "#000000",
          marginBottom: "2rem",
          letterSpacing: "-0.02em",
        }}
      >
        Coming Soon
      </h1>

      <p
        style={{
          fontSize: "1.125rem",
          color: "#333333",
          lineHeight: 1.8,
          maxWidth: "700px",
          marginBottom: "3rem",
        }}
      >
        現在、サービスの最終調整を行っております。
        <br />
        皆様により良い体験をお届けするため、もう少々お待ちください。
      </p>

      <p
        style={{
          fontSize: "0.875rem",
          color: "#666666",
          marginBottom: "3rem",
        }}
      >
        サービス開始予定：2026年2月
      </p>

      <Link
        href="/"
        style={{
          fontSize: "0.875rem",
          color: "#666666",
          textDecoration: "underline",
        }}
      >
        トップページへ戻る
      </Link>
    </div>
  );
}

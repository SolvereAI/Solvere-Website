import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SOLVERE - 問題解決の力で未来を切り拓く",
  description:
    "Advancing Problem Solving to unleash people / organizational potential & elevate Japan's productivity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}

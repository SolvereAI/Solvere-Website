"use client";

import { useState } from "react";
import "../lp-styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const toEmail = "information@solvere.jp";
    const subject = `【お問い合わせ】${formData.company ? `${formData.company} ` : ""}${formData.name}様より`;

    const body = `お名前: ${formData.name}
メールアドレス: ${formData.email}
会社名: ${formData.company || "未記入"}

【お問い合わせ内容】
${formData.message}`;

    const mailtoLink = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="lp-wrapper">
      <Header />

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <h1 className="contact-title">Contact</h1>
          <p className="contact-subtitle">お問い合わせ</p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">お名前 *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="山田 太郎"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">メールアドレス *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="example@company.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="company">会社名</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="株式会社〇〇"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">お問い合わせ内容 *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="お問い合わせ内容をご記入ください"
              />
            </div>

            <button
              type="submit"
              className="btn btn-dark btn-submit"
            >
              メールアプリで送信
            </button>

            <p className="contact-note">
              ※ 送信ボタンをクリックすると、お使いのメールアプリが起動します。
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

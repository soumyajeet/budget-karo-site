import Footer from "../components/Footer";
import Header from "../components/Header";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-700">
      <Header />

      <main className="mx-auto w-full max-w-4xl px-6 py-16">
        <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-500">Last Updated: January 30, 2026</p>

        <div className="mt-10 space-y-8 text-base leading-7 text-slate-600">
          <section>
            <h2 className="text-xl font-semibold text-slate-900">1. Information We Collect</h2>
            <p className="mt-3">
              We collect information that you provide directly to us, including personal information such as your name, email address, and usage data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">2. How We Use Your Information</h2>
            <p className="mt-3">
              We use the information we collect to provide, maintain, and improve our services, communicate with you, and protect our users.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">3. Information Sharing</h2>
            <p className="mt-3">
              We do not sell or share your personal information with third parties except as described in this privacy policy or with your consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">4. Data Security</h2>
            <p className="mt-3">
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">5. Your Rights</h2>
            <p className="mt-3">
              You have the right to access, update, or delete your personal information. Contact us to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">6. Cookies</h2>
            <p className="mt-3">
              We use cookies to enhance your experience. You can control cookie settings through your browser.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">7. Contact Us</h2>
            <p className="mt-3">
              If you have questions about this Privacy Policy, please contact us at support@budgetkaro.app.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

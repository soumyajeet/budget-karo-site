import Footer from "../components/Footer";
import Header from "../components/Header";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-700">
      <Header />

      <main className="mx-auto w-full max-w-4xl px-6 py-16">
        <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">Terms of Service</h1>
        <p className="mt-2 text-sm text-slate-500">Last Updated: January 21, 2026</p>

        <div className="mt-10 space-y-8 text-base leading-7 text-slate-600">
          <section>
            <h2 className="text-xl font-semibold text-slate-900">1. Acceptance of Terms</h2>
            <p className="mt-3">
              By downloading, installing, and using the Budget Karo application ("App"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use the App.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">2. License and Use</h2>
            <p className="mt-3">Budget Karo grants you a limited, non-exclusive, non-transferable license to use the App for personal, non-commercial purposes. You agree not to:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Modify, reverse engineer, or attempt to derive the source code of the App</li>
              <li>Distribute, rent, lease, or lend the App</li>
              <li>Remove or alter any proprietary notices or labels on the App</li>
              <li>Use the App for any illegal or unauthorized purpose</li>
              <li>Attempt to gain unauthorized access to the App or its related systems</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">3. User Accounts</h2>
            <p className="mt-3">To use certain features of the App, you may need to create an account. You are responsible for:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Providing accurate and complete registration information</li>
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use of your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">4. User Content and Data</h2>
            <p className="mt-3">
              You retain ownership of any data, financial information, or content you submit through the App ("User Content"). By submitting User Content, you grant Budget Karo permission to use, display, and store such content solely for the purpose of providing the App's services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">5. Privacy and Data Security</h2>
            <p className="mt-3">
              We take your privacy seriously. Your use of the App is governed by our Privacy Policy. We implement industry-standard security measures to protect your financial information. However, no system is completely secure, and we cannot guarantee absolute security of your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">6. Financial Information Disclaimer</h2>
            <div className="mt-4 rounded-2xl border-l-4 border-indigo-500 bg-indigo-500/10 p-5">
              <p>
                <strong>Important:</strong> Budget Karo provides expense tracking and budgeting tools for personal use only. The App does not provide financial, investment, or legal advice. We recommend consulting with qualified professionals for financial decisions. Budget Karo is not responsible for any financial outcomes resulting from the use of this App.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">7. Limitation of Liability</h2>
            <p className="mt-3">To the fullest extent permitted by law, Budget Karo is provided "AS IS" without any warranties, express or implied. Budget Karo shall not be liable for:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Any indirect, incidental, special, or consequential damages</li>
              <li>Loss of data or revenue</li>
              <li>Errors or omissions in the App</li>
              <li>Interruption or suspension of services</li>
              <li>Third-party actions or content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">8. Third-Party Services</h2>
            <p className="mt-3">
              The App may integrate with or link to third-party services. Budget Karo is not responsible for the accuracy, availability, or security of third-party services. Your use of third-party services is governed by their respective terms and privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">9. Prohibited Activities</h2>
            <p className="mt-3">You agree not to use the App for:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Illegal activities or purposes</li>
              <li>Harassing, threatening, or abusing others</li>
              <li>Spamming, phishing, or malware distribution</li>
              <li>Violating intellectual property rights</li>
              <li>Interfering with or disrupting the App's functionality</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">10. Modifications to the App</h2>
            <p className="mt-3">
              Budget Karo reserves the right to modify, update, or discontinue the App or its features at any time. We will make reasonable efforts to notify users of significant changes. Your continued use of the App after modifications constitutes acceptance of the changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">11. Termination</h2>
            <p className="mt-3">
              Budget Karo reserves the right to suspend or terminate your account and access to the App if you violate these Terms of Service or engage in prohibited activities. Upon termination, your right to use the App immediately ceases.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">12. Governing Law</h2>
            <p className="mt-3">
              These Terms of Service are governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">13. Contact Us</h2>
            <p className="mt-3">If you have questions or concerns about these Terms of Service, please contact us at:</p>
            <p className="mt-3">
              <strong>Budget Karo Support</strong>
              <br />
              Email: support@budgetkaro.app
              <br />
              Website: www.budgetkaro.app
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">14. Entire Agreement</h2>
            <p className="mt-3">
              These Terms of Service constitute the entire agreement between you and Budget Karo regarding your use of the App and supersede all prior or contemporaneous communications, agreements, or understandings.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

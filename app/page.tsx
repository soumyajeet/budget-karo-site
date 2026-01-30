import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-700">
      <Header />

      <main>
        <section className="bg-gradient-to-br from-white via-slate-50 to-slate-100 px-6 py-16">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
                Take Control of Your Finances Today
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Budget Karo is your personal finance companion. Track expenses, manage budgets, and achieve your financial goals with smart money management tools designed for everyone.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href="https://play.google.com/store/apps/details?id=com.budgetkaro.app"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-xl bg-black px-4 py-3 text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5"
                >
                  <svg width="28" height="28" viewBox="0 0 512 512" aria-hidden>
                    <path
                      d="M96 56c-10.7 0-20.4 9.2-20.4 21.4v357.2c0 12.3 9.7 21.4 20.4 21.4l235.7-194L96 56z"
                      fill="#00D2FF"
                    />
                    <path
                      d="M344.2 256 96 56l202 202-202 198 248.2-200z"
                      fill="#00C853"
                    />
                    <path
                      d="m96 456 210.8-190.2L362 305.3 96 456z"
                      fill="#FFD54F"
                    />
                    <path
                      d="m96 56 266 150.7-55.2 46.3L96 56z"
                      fill="#FF5252"
                    />
                  </svg>
                  <span className="flex flex-col leading-none">
                    <span className="text-[11px] uppercase tracking-widest text-white/70">
                      Get it on
                    </span>
                    <span className="text-lg font-semibold">Google Play</span>
                  </span>
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="rounded-[32px] bg-gradient-to-br from-indigo-500 to-pink-500 p-2 shadow-2xl shadow-indigo-500/30">
                <div className="rounded-[28px] bg-white p-6">
                  <svg
                    viewBox="0 0 400 800"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: "100%", maxWidth: "300px", filter: "drop-shadow(0 20px 40px rgba(99, 102, 241, 0.2))" }}
                  >
                    <rect x="20" y="20" width="360" height="760" rx="40" fill="#000" stroke="#222" strokeWidth="2" />
                    <rect x="30" y="60" width="340" height="680" rx="35" fill="#f9fafb" />
                    <rect x="30" y="60" width="340" height="40" rx="35" fill="#1f2937" />
                    <text x="200" y="85" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">
                      9:41
                    </text>
                    <rect x="30" y="100" width="340" height="50" fill="white" />
                    <text x="50" y="132" fontSize="18" fill="#1f2937" fontWeight="bold">
                      Budget Karo
                    </text>
                    <circle cx="350" cy="125" r="15" fill="#6366f1" opacity="0.1" />
                    <rect x="40" y="160" width="320" height="80" rx="12" fill="url(#gradient1)" />
                    <text x="200" y="180" fontSize="12" fill="white" textAnchor="middle" opacity="0.9">
                      Total Balance
                    </text>
                    <text x="200" y="210" fontSize="28" fill="white" textAnchor="middle" fontWeight="bold">
                      ₹24,580
                    </text>
                    <rect x="40" y="255" width="150" height="70" rx="10" fill="#ecfdf5" stroke="#d1fae5" strokeWidth="1" />
                    <text x="115" y="275" fontSize="11" fill="#059669" textAnchor="middle">
                      Income
                    </text>
                    <text x="115" y="305" fontSize="20" fill="#059669" textAnchor="middle" fontWeight="bold">
                      ₹50,000
                    </text>
                    <rect x="210" y="255" width="150" height="70" rx="10" fill="#fef2f2" stroke="#fee2e2" strokeWidth="1" />
                    <text x="285" y="275" fontSize="11" fill="#dc2626" textAnchor="middle">
                      Expenses
                    </text>
                    <text x="285" y="305" fontSize="20" fill="#dc2626" textAnchor="middle" fontWeight="bold">
                      ₹12,450
                    </text>
                    <text x="50" y="350" fontSize="14" fill="#1f2937" fontWeight="bold">
                      Budget Categories
                    </text>
                    <rect x="40" y="365" width="320" height="50" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1" />
                    <circle cx="60" cy="390" r="8" fill="#6366f1" />
                    <text x="80" y="395" fontSize="12" fill="#1f2937" fontWeight="600">
                      Food & Dining
                    </text>
                    <text x="340" y="395" fontSize="12" fill="#6b7280" textAnchor="end">
                      ₹3,200
                    </text>
                    <rect x="80" y="408" width="220" height="4" rx="2" fill="#e5e7eb" />
                    <rect x="80" y="408" width="132" height="4" rx="2" fill="#6366f1" />
                    <rect x="40" y="425" width="320" height="50" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1" />
                    <circle cx="60" cy="450" r="8" fill="#ec4899" />
                    <text x="80" y="455" fontSize="12" fill="#1f2937" fontWeight="600">
                      Transport
                    </text>
                    <text x="340" y="455" fontSize="12" fill="#6b7280" textAnchor="end">
                      ₹2,100
                    </text>
                    <rect x="80" y="468" width="220" height="4" rx="2" fill="#e5e7eb" />
                    <rect x="80" y="468" width="88" height="4" rx="2" fill="#ec4899" />
                    <rect x="40" y="485" width="320" height="50" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1" />
                    <circle cx="60" cy="510" r="8" fill="#f59e0b" />
                    <text x="80" y="515" fontSize="12" fill="#1f2937" fontWeight="600">
                      Utilities
                    </text>
                    <text x="340" y="515" fontSize="12" fill="#6b7280" textAnchor="end">
                      ₹1,800
                    </text>
                    <rect x="80" y="528" width="220" height="4" rx="2" fill="#e5e7eb" />
                    <rect x="80" y="528" width="99" height="4" rx="2" fill="#f59e0b" />
                    <rect x="30" y="700" width="340" height="40" rx="10" fill="#f3f4f6" />
                    <circle cx="80" cy="720" r="12" fill="#6366f1" opacity="0.2" />
                    <circle cx="200" cy="720" r="12" fill="#6366f1" />
                    <circle cx="320" cy="720" r="12" fill="#6366f1" opacity="0.2" />
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6366f1" stopOpacity="1" />
                        <stop offset="100%" stopColor="#ec4899" stopOpacity="1" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-center text-3xl font-semibold text-slate-900 md:text-4xl">Why Choose Budget Karo?</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "📱",
                title: "Easy Expense Tracking",
                text: "Track every expense in real-time with our intuitive interface. Categorize spending and get instant insights into your money flow.",
              },
              {
                icon: "💳",
                title: "Smart Budget Planning",
                text: "Create personalized budgets based on your income and expenses. Receive alerts when you're approaching your spending limits.",
              },
              {
                icon: "📈",
                title: "Opportunity Cost Engine",
                text: "Understand the value of every spending decision with AI-powered opportunity cost analysis. See how each expense impacts your financial goals.",
              },
              {
                icon: "🎯",
                title: "Goal Tracking",
                text: "Set financial goals and track your progress. Whether saving for vacation or emergency fund, we help you stay motivated.",
              },
              {
                icon: "🔐",
                title: "Secure & Private",
                text: "Your financial data is encrypted and secure. We prioritize your privacy with bank-level security standards.",
              },
              {
                icon: "🌐",
                title: "Multi-Device Sync",
                text: "Access your finances from any device. Seamless synchronization keeps all your data updated across platforms.",
              },
            ].map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="text-4xl">{feature.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="benefits" className="bg-gradient-to-r from-indigo-500 to-pink-500 px-6 py-16 text-white">
          <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold md:text-4xl">Master Your Money Management</h2>
              <ul className="mt-8 space-y-4 text-lg">
                {[
                  "You can add expenses smartly with AI",
                  "You can auto categorize expenses",
                  "You can set your savings goals",
                  "You can get help of AI Advisor",
                  "You can set your monthly fixed and variable expenses.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-sm font-bold">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white/10 p-8">
              <div className="text-center text-5xl">💡</div>
              <p className="mt-4 text-center text-lg leading-8">
                Join thousands of users who have taken control of their finances and are saving more money than ever before. Start your financial journey with Budget Karo today!
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-slate-900 px-6 py-16 text-white">
          <div className="mx-auto w-full max-w-4xl text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">Ready to Start Your Financial Journey?</h2>
            <p className="mt-4 text-lg text-slate-200">Join thousands of happy users managing their money smarter with Budget Karo</p>
            <div className="mt-8 flex justify-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.budgetkaro.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-xl bg-black px-4 py-3 text-white shadow-lg shadow-black/30 transition hover:-translate-y-0.5"
              >
                <svg width="28" height="28" viewBox="0 0 512 512" aria-hidden>
                  <path
                    d="M96 56c-10.7 0-20.4 9.2-20.4 21.4v357.2c0 12.3 9.7 21.4 20.4 21.4l235.7-194L96 56z"
                    fill="#00D2FF"
                  />
                  <path d="M344.2 256 96 56l202 202-202 198 248.2-200z" fill="#00C853" />
                  <path d="m96 456 210.8-190.2L362 305.3 96 456z" fill="#FFD54F" />
                  <path d="m96 56 266 150.7-55.2 46.3L96 56z" fill="#FF5252" />
                </svg>
                <span className="flex flex-col leading-none">
                  <span className="text-[11px] uppercase tracking-widest text-white/70">Get it on</span>
                  <span className="text-lg font-semibold">Google Play</span>
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

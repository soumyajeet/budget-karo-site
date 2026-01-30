import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/60 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-xl font-semibold text-slate-900">
          <img
            src="/icon.png"
            alt="Budget Karo logo"
            className="h-11 w-11 rounded-2xl object-cover shadow-lg"
          />
          Budget Karo
        </Link>
        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <Link className="hover:text-indigo-600" href="/#features">
            Features
          </Link>
          <Link className="hover:text-indigo-600" href="/#benefits">
            Benefits
          </Link>
          <Link className="hover:text-indigo-600" href="/#contact">
            Contact
          </Link>
          <a
            className="rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 px-5 py-2 text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5"
            href="https://play.google.com/store/apps/details?id=com.budgetkaro.app"
            target="_blank"
            rel="noreferrer"
          >
            Get Started
          </a>
        </div>
      </nav>
    </header>
  );
}

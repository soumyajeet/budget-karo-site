import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 px-6 py-14 text-slate-300">
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/icon.png"
              alt="Budget Karo logo"
              className="h-10 w-10 rounded-2xl object-cover shadow-lg"
            />
            <h3 className="text-lg font-semibold text-white">About Budget Karo</h3>
          </div>
          <p className="mt-3 text-sm leading-6">
            Your trusted personal finance and money management partner. We help millions manage their budgets and achieve financial freedom.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Legal</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/privacy" className="transition hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition hover:text-white">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 w-full max-w-6xl border-t border-slate-700 pt-6 text-center text-xs text-slate-400">
        &copy; 2026 Budget Karo. All rights reserved. | Made with 💙 for your financial wellness
      </div>
    </footer>
  );
}

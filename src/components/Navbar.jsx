import { useState } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Results', href: '#results' },
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-brandMaroon text-white shadow-soft">
            <img src="/assets/logo.jpg" alt="Marathi Asmita Coaching Classes" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-brandMaroon">Marathi Asmita</p>
            <p className="text-sm font-semibold text-slate-600">Coaching Classes, Basmath</p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-semibold text-slate-700 transition hover:text-brandMaroon">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex">
          <a href="tel:+918446698843" className="inline-flex items-center gap-2 rounded-full bg-brandBlue px-4 py-2 text-sm font-semibold text-white shadow-soft">
            <PhoneCall size={16} />
            Call Now
          </a>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-brandMaroon">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

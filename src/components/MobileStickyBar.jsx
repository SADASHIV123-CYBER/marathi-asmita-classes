import { Phone, MessageCircleMore, PencilLine } from 'lucide-react';

const phone = '918446698843';
const message = 'Hello Sir, I want admission for my child in Marathi Asmita Coaching Classes. Please share details.';
const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

export default function MobileStickyBar() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-3 py-2 shadow-[0_-10px_30px_rgba(15,23,42,0.08)] backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-3 gap-2">
        <a href="tel:+918446698843" className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white py-3 text-sm font-semibold text-slate-800">
          <Phone size={16} />
          Call
        </a>
        <a href={waLink} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-2xl bg-green-500 py-3 text-sm font-semibold text-white">
          <MessageCircleMore size={16} />
          WhatsApp
        </a>
        <button type="button" onClick={scrollToContact} className="flex items-center justify-center gap-2 rounded-2xl bg-brandMaroon py-3 text-sm font-semibold text-white">
          <PencilLine size={16} />
          Enquiry
        </button>
      </div>
    </div>
  );
}

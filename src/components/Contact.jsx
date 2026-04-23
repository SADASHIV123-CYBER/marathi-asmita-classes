import { motion } from 'framer-motion';
import { Phone, MapPin, MessageCircleMore, Clock3 } from 'lucide-react';

export default function Contact() {
  const phone = '+91 84466 98843';

  return (
    <section id="contact" className="bg-slate-50">
      <div className="section-wrap">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-brandMaroon">Contact</p>
          <h2 className="section-heading mt-3">प्रवेशासाठी आजच संपर्क करा.</h2>
          <p className="section-subheading">
            पालकांच्या सर्व प्रश्नांना उत्तर देण्यासाठी आम्ही उपलब्ध आहोत.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-4">
            {[
              { icon: Phone, title: 'Phone', text: phone, href: 'tel:+918446698843' },
              { icon: MessageCircleMore, title: 'WhatsApp', text: 'Admission inquiry available', href: 'https://wa.me/918446698843?text=Hello%20Sir%2C%20I%20want%20admission%20for%20my%20child%20in%20Marathi%20Asmita%20Coaching%20Classes.%20Please%20share%20details.' },
              { icon: MapPin, title: 'Address', text: 'Basmath, Maharashtra', href: 'https://maps.google.com/?q=Basmath,Maharashtra' },
              { icon: Clock3, title: 'Timings', text: 'Morning & Evening Batches', href: '#' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.title} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined} className="glass-card flex items-start gap-4 p-5 transition hover:-translate-y-0.5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brandMaroon/10 text-brandMaroon">
                    <Icon />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500">{item.title}</p>
                    <p className="mt-1 text-lg font-bold text-slate-900">{item.text}</p>
                  </div>
                </a>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="glass-card overflow-hidden p-4"
          >
            <div className="flex h-full min-h-[420px] flex-col rounded-3xl border border-dashed border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6">
              <div className="flex-1 rounded-3xl border border-slate-200 bg-[linear-gradient(135deg,#eff6ff,#fff7ed)] p-6">
                <p className="text-sm font-semibold text-brandMaroon">Map Placeholder</p>
                <h3 className="mt-2 text-3xl font-black text-slate-900">Basmath, Maharashtra</h3>
                <p className="mt-3 max-w-md leading-7 text-slate-600">
                  Real map embed can be added here later without changing layout.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl bg-white/85 p-4 shadow-sm ring-1 ring-slate-200">
                    <p className="text-sm font-semibold text-slate-500">Direct Call</p>
                    <p className="mt-1 text-lg font-bold text-slate-900">{phone}</p>
                  </div>
                  <div className="rounded-3xl bg-white/85 p-4 shadow-sm ring-1 ring-slate-200">
                    <p className="text-sm font-semibold text-slate-500">For Admission</p>
                    <p className="mt-1 text-lg font-bold text-slate-900">WhatsApp Chat</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

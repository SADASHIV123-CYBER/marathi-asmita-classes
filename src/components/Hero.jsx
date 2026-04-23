import { motion } from 'framer-motion';
import { ArrowRight, MessageCircleMore, ShieldCheck, BookOpenCheck, Trophy } from 'lucide-react';

import hero from '../assets/hero.png'

const chips = ['5वी ते 12वी', '100% निकाल', 'अनुभवी शिक्षक'];
const phone = '918446698843';
const message = 'Hello Sir, I want admission for my child in Marathi Asmita Coaching Classes. Please share details.';
const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.12),_transparent_30%),linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)]">
      <div className="section-wrap grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          <span className="inline-flex items-center rounded-full border border-brandGold/30 bg-brandGold/10 px-4 py-2 text-sm font-semibold text-brandMaroon">
            Basmath, Maharashtra
          </span>

          <h1 className="mt-5 text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            तुमच्या मुलासाठी <span className="text-brandMaroon">विश्वासार्ह</span> आणि <span className="text-brandBlue">निकालाभिमुख</span> मार्गदर्शन.
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Marathi Asmita Coaching Classes मध्ये अभ्यास, सराव, पुनरावलोकन आणि पालकांशी स्पष्ट संवाद यावर भर दिला जातो.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="cta-primary">
              प्रवेशासाठी संपर्क करा <ArrowRight className="ml-2" size={18} />
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="cta-secondary"
            >
              <MessageCircleMore className="mr-2" size={18} />
              WhatsApp वर चौकशी करा
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {chips.map((chip) => (
              <span key={chip} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200">
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, label: 'Parent Trust', value: 'High' },
              { icon: BookOpenCheck, label: 'Study Plan', value: 'Structured' },
              { icon: Trophy, label: 'Results', value: 'Proven' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="glass-card p-4">
                <Icon className="text-brandMaroon" />
                <p className="mt-3 text-sm font-medium text-slate-500">{label}</p>
                <p className="text-lg font-bold text-slate-900">{value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -left-6 top-12 h-24 w-24 rounded-full bg-brandGold/20 blur-2xl" />
          <div className="absolute -right-10 bottom-6 h-28 w-28 rounded-full bg-brandMaroon/15 blur-3xl" />

          <div className="glass-card overflow-hidden p-3">
            <img src={hero} alt="Marathi Asmita Coaching Classes classroom" className="h-[320px] w-full rounded-2xl object-cover sm:h-[420px]" loading="eager" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute -bottom-6 left-4 right-4 mx-auto max-w-md rounded-3xl bg-white p-5 shadow-soft ring-1 ring-slate-200"
          >
            <p className="text-sm font-semibold text-brandMaroon">Parent-focused coaching</p>
            <p className="mt-1 text-base leading-7 text-slate-600">
              नियमित चाचण्या, स्पष्ट प्रगती अहवाल, आणि प्रत्येक विद्यार्थ्याकडे लक्ष.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

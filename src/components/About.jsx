import { motion } from 'framer-motion';
import { BadgeCheck, Users, NotebookText, ClipboardCheck } from 'lucide-react';

import about from '../assets/about.png'

const points = [
  { icon: Users, title: 'पालकांशी नियमित संवाद', text: 'मुलाची प्रगती स्पष्टपणे सांगितली जाते.' },
  { icon: NotebookText, title: 'सिस्टेमॅटिक अभ्यास', text: 'पाठांतरापेक्षा समजून शिकण्यावर भर.' },
  { icon: ClipboardCheck, title: 'Test + Revision', text: 'सतत सराव आणि पुनरावलोकनाची सवय.' },
  { icon: BadgeCheck, title: 'विश्वासार्ह वातावरण', text: 'शिस्त, प्रामाणिकपणा आणि काळजी.' },
];

export default function About() {
  return (
    <section id="about">
      <div className="section-wrap grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="glass-card overflow-hidden"
        >
          <img src={about} alt="About Marathi Asmita Coaching Classes" className="h-full min-h-[320px] w-full object-cover" loading="lazy" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-brandMaroon">About Us</p>
          <h2 className="section-heading mt-3">शिक्षणासोबत पालकांचा आत्मविश्वासही वाढवणारे क्लासेस.</h2>
          <p className="section-subheading">
            Marathi Asmita Coaching Classes हे Basmath मधील असे व्यासपीठ आहे जिथे विद्यार्थ्याच्या अभ्यासासोबत घरच्या लोकांना देखील नियमित अपडेट मिळतो. प्रत्येक मुलासाठी समजून शिकवणे, योग्य सराव, आणि परीक्षा-केंद्रित तयारी हे मुख्य उद्दिष्ट आहे.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {points.map(({ icon: Icon, title, text }) => (
              <div key={title} className="glass-card p-5">
                <Icon className="text-brandMaroon" />
                <h3 className="mt-4 text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

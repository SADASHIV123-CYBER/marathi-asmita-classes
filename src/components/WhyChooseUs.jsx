import { motion } from 'framer-motion';
import { Award, MessageSquareText, Users, AlarmClock, Target, ShieldCheck } from 'lucide-react';

const reasons = [
  { icon: Award, title: 'Proven Trust', text: 'पालकांचा विश्वास आणि निकाल यावर मजबूत लक्ष.' },
  { icon: MessageSquareText, title: 'Clear Communication', text: 'फोन व WhatsApp द्वारे अपडेट देणे सोपे.' },
  { icon: Users, title: 'Small Batch Focus', text: 'प्रत्येक विद्यार्थ्याला लक्ष देता येईल असे वातावरण.' },
  { icon: AlarmClock, title: 'Regular Timetable', text: 'अनुशासित वेळापत्रक आणि सुसंगत अभ्यास.' },
  { icon: Target, title: 'Exam-Oriented', text: 'निकाल सुधारण्यासाठी targeted preparation.' },
  { icon: ShieldCheck, title: 'Safe & Respectful', text: 'विद्यार्थ्यांसाठी शांत आणि आदरयुक्त वातावरण.' },
];

export default function WhyChooseUs() {
  return (
    <section>
      <div className="section-wrap">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-brandMaroon">Why Choose Us</p>
          <h2 className="section-heading mt-3">इथे विश्वास, शिस्त आणि परिणाम एकत्र मिळतात.</h2>
          <p className="section-subheading">
            पालकांना हवे असते ते फक्त शिकवणे नाही; त्यांना हवे असते सुरक्षित वातावरण, सातत्यपूर्ण प्रगती आणि स्पष्ट निकाल.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brandBlue/10 text-brandBlue">
                  <Icon />
                </div>
                <h3 className="mt-4 text-xl font-extrabold text-slate-900">{reason.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{reason.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

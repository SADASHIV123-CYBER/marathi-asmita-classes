import { motion } from 'framer-motion';
import { testimonials } from '../data/testimonials';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section>
      <div className="section-wrap">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-brandMaroon">Testimonials</p>
          <h2 className="section-heading mt-3">पालकांचे शब्द, आमचा खरा पुरावा.</h2>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.05 }}
              className="glass-card p-6"
            >
              <Quote className="text-brandMaroon" />
              <p className="mt-4 text-base leading-7 text-slate-700">{item.feedback}</p>
              <div className="mt-5 flex items-center justify-between">
                <p className="font-bold text-slate-900">{item.name}</p>
                <span className="rounded-full bg-brandGold/15 px-3 py-1 text-xs font-semibold text-brandMaroon">Parent</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

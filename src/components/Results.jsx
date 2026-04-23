import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { students } from '../data/students';
import result from '../assets/result.png'

const stats = [
  { label: '100% Result', value: 100, suffix: '%' },
  { label: 'Topper Count', value: 50, suffix: '+' },
  { label: 'Years of Trust', value: 10, suffix: '+' },
];

function Counter({ value, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    const duration = 1200;
    const step = Math.max(1, Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Results() {
  const topper = students[0];

  return (
    <section id="results" className="bg-slate-50">
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-brandMaroon">Results</p>
          <h2 className="section-heading mt-3">निकाल हा आमचा सर्वात मोठा विश्वास.</h2>
          <p className="section-subheading">
            पालकांना परिणाम दिसावा यासाठी इथे नियमित चाचण्या, प्रगती अहवाल आणि लक्षपूर्वक मार्गदर्शन दिले जाते.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="glass-card p-6 sm:p-8"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-brandMaroon">Topper of the Batch</p>
                <h3 className="mt-2 text-2xl font-extrabold text-slate-900">{topper.name}</h3>
                <p className="mt-1 text-slate-600">{topper.subject}</p>
              </div>
              <div className="rounded-3xl bg-brandMaroon px-5 py-4 text-white">
                <p className="text-sm font-medium opacity-90">Marks</p>
                <p className="text-3xl font-black">{topper.marks}</p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {students.map((student) => (
                <motion.div
                  key={student.name}
                  whileHover={{ y: -4 }}
                  className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <p className="text-base font-bold text-slate-900">{student.name}</p>
                  <p className="mt-1 text-sm text-slate-500">{student.subject}</p>
                  <p className="mt-4 text-2xl font-black text-brandBlue">{student.marks}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-6">
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45 }}
                  className="glass-card p-6"
                >
                  <p className="text-sm font-semibold text-slate-500">{stat.label}</p>
                  <p className="mt-3 text-4xl font-black text-brandMaroon">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              className="glass-card overflow-hidden p-3"
            >
              <img src={result} alt="Results celebration" className="h-64 w-full rounded-2xl object-cover" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

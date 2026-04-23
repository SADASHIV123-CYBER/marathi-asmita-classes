import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { students } from '../data/students';
import result from '../assets/result.png';

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
    const stepTime = duration / end;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);

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
    <section id="results" className="bg-slate-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-700">
            Results
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-3">
            निकाल हा आमचा सर्वात मोठा विश्वास
          </h2>

          <p className="text-slate-600 mt-4">
            पालकांना परिणाम दिसावा यासाठी नियमित चाचण्या, प्रगती अहवाल आणि लक्षपूर्वक मार्गदर्शन दिले जाते.
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">

          {/* Left - Students */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-red-700">
                  Topper of the Batch
                </p>
                <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
                  {topper.name}
                </h3>
                <p className="mt-1 text-slate-600">
                  {topper.subject}
                </p>
              </div>

              <div className="rounded-xl bg-red-700 px-5 py-4 text-white">
                <p className="text-sm">Marks</p>
                <p className="text-3xl font-black">{topper.marks}</p>
              </div>
            </div>

            {/* Students Grid */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {students.map((student) => (
                <motion.div
                  key={student.name}
                  whileHover={{ y: -4 }}
                  className="rounded-xl border bg-slate-50 p-4"
                >
                  <p className="font-bold text-slate-900">
                    {student.name}
                  </p>
                  <p className="text-sm text-slate-500">
                    {student.subject}
                  </p>
                  <p className="mt-3 text-xl font-black text-blue-700">
                    {student.marks}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Stats + Image */}
          <div className="grid gap-6">

            {/* ✅ FIXED MOBILE STATS */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-md p-5 text-center sm:text-left"
                >
                  <p className="text-sm font-semibold text-slate-500">
                    {stat.label}
                  </p>

                  <p className="mt-2 text-3xl font-black text-red-700">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={result}
                alt="Results"
                loading="lazy"
                className="h-64 w-full object-cover"
              />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
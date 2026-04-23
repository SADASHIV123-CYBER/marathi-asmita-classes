import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Star } from 'lucide-react';

const courses = [
  {
    icon: BookOpen,
    title: '5वी ते 10वी',
    description: 'बेस मजबूत करणे, बोर्ड तयारी, आणि शिस्तबद्ध अभ्यास.',
    features: ['Regular Tests', 'Doubt Solving', 'Revision Notes'],
  },
  {
    icon: GraduationCap,
    title: '11वी ते 12वी',
    description: 'कठीण संकल्पना सोपी करून मजबूत exam preparation.',
    features: ['Concept Clarity', 'Practice Sets', 'Performance Tracking'],
  },
  {
    icon: Star,
    title: 'Special Support',
    description: 'गरजेनुसार extra guidance आणि extra focus.',
    features: ['Parent Updates', 'Personal Attention', 'Mentor Support'],
  },
];

export default function Courses() {
  return (
    <section id="courses" className="bg-slate-50">
      <div className="section-wrap">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-brandMaroon">Courses</p>
          <h2 className="section-heading mt-3">प्रत्येक वर्गासाठी वेगळा, लक्षित अभ्यासक्रम.</h2>
          <p className="section-subheading">
            विद्यार्थ्याच्या इयत्तेनुसार सिलेबस, टेस्ट, आणि पुनरावलोकनाची योजना तयार केली जाते.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass-card p-6 sm:p-7"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brandMaroon/10 text-brandMaroon">
                  <Icon />
                </div>
                <h3 className="mt-5 text-2xl font-extrabold text-slate-900">{course.title}</h3>
                <p className="mt-3 text-slate-600">{course.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {course.features.map((feature) => (
                    <span key={feature} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

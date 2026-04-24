import { useState } from 'react';
import { motion } from 'framer-motion';

const question = {
  q: '2 + 5 = ?',
  options: ['5', '6', '7', '8'],
  answer: '7',
};

const topStudents = [
  { name: 'Rahul', score: 10 },
  { name: 'Sneha', score: 9 },
  { name: 'Amit', score: 9 },
];

export default function DailyTest() {
  const [selected, setSelected] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!selected) return;
    setSubmitted(true);
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-bold text-slate-800">
            Daily Test 🎯
          </h2>
          <p className="text-slate-600 mt-2">
            दररोज टेस्ट द्या आणि जिंका बक्षीस!
          </p>
        </motion.div>

        <div className="mt-10 grid md:grid-cols-2 gap-8">

          {/* Question */}
          <div className="bg-slate-50 p-6 rounded-2xl shadow">
            <p className="font-semibold text-lg">{question.q}</p>

            <div className="mt-4 space-y-2">
              {question.options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setSelected(opt)}
                  className={`w-full text-left p-3 rounded-lg border ${
                    selected === opt ? 'bg-blue-100 border-blue-500' : ''
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            <button
              onClick={handleSubmit}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg"
            >
              Submit
            </button>

            {submitted && (
              <p className="mt-3 text-green-600 font-semibold">
                {selected === question.answer
                  ? 'Correct! 🎉'
                  : 'Try again tomorrow!'}
              </p>
            )}
          </div>

          {/* Top Students */}
          <div className="bg-slate-50 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold">आजचे टॉप विद्यार्थी 🏆</h3>

            <div className="mt-4 space-y-3">
              {topStudents.map((s, i) => (
                <div
                  key={i}
                  className="flex justify-between bg-white p-3 rounded-lg shadow-sm"
                >
                  <span>{s.name}</span>
                  <span className="font-bold">{s.score}/10</span>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-yellow-100 p-4 rounded-lg text-center">
              🎁 Highest scorer wins Prize!
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
import { motion } from 'framer-motion';

// ✅ IMPORT IMAGES (Correct way in Vite)
import rakshaBandhan from '../assets/rakshaBandhan.png';
import students from '../assets/students.png';
import competition from '../assets/competition.png';
import classRoom from '../assets/classRoom.jpeg';
import rakshaBandhan2 from '../assets/rakshaBandhan2.png';
import banner from '../assets/banner.png';

const imageFiles = [
  { src: rakshaBandhan, alt: 'रक्षाबंधन उत्सव' },
  { src: students, alt: 'अभ्यासू विद्यार्थी' },
  { src: competition, alt: 'विविध स्पर्धा' },
  { src: classRoom, alt: 'सुसज्ज क्लासरूम' },
  { src: rakshaBandhan2, alt: 'विद्यार्थी राखी उपक्रम' },
  { src: banner, alt: 'क्लासेस बॅनर' }
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-700">
            Gallery
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-3 leading-snug">
            क्लासरूम, वातावरण आणि प्रगतीचे क्षण
          </h2>

          <p className="text-slate-600 mt-4">
            येथे विद्यार्थ्यांचे शिक्षण, उपक्रम आणि यशाचे क्षण पाहू शकता.
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {imageFiles.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.04 }}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-64"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
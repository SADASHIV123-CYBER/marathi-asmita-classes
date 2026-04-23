import { motion } from 'framer-motion';
import { Phone, MapPin, MessageCircleMore, Clock3 } from 'lucide-react';

export default function Contact() {
  const phone = '+91 84466 98843';

  return (
    <section id="contact" className="bg-slate-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-700">
            Contact
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-3">
            प्रवेशासाठी आजच संपर्क करा
          </h2>

          <p className="text-slate-600 mt-4">
            पालकांच्या सर्व प्रश्नांना उत्तर देण्यासाठी आम्ही उपलब्ध आहोत.
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">

          {/* Contact Cards */}
          <div className="grid gap-4">
            {[
              {
                icon: Phone,
                title: 'Phone',
                text: phone,
                href: 'tel:+918446698843',
              },
              {
                icon: MessageCircleMore,
                title: 'WhatsApp',
                text: 'Admission inquiry available',
                href: 'https://api.whatsapp.com/send?phone=918446698843&text=Hello%20Sir%2C%20I%20want%20admission%20for%20my%20child%20in%20Marathi%20Asmita%20Coaching%20Classes.%20Please%20share%20details.',
              },
              {
                icon: MapPin,
                title: 'Address',
                text: 'Basmath, Maharashtra',
                href: 'https://maps.google.com/?q=Basmath,Maharashtra',
              },
              {
                icon: Clock3,
                title: 'Timings',
                text: 'Morning & Evening Batches',
                href: '#',
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-700">
                    <Icon />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-500">
                      {item.title}
                    </p>
                    <p className="mt-1 text-lg font-bold text-slate-900">
                      {item.text}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1882.4859685730034!2d77.1581321384395!3d19.327023995482488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smarathi%20asmita%20basmath%20!5e0!3m2!1sen!2sin!4v1776927258922!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[420px]"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
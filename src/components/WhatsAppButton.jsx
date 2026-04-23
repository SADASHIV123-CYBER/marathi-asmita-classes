// import { MessageCircleMore } from 'lucide-react';

// const phone = '918446698843';
// const message = 'Hello Sir, I want admission for my child in Marathi Asmita Coaching Classes. Please share details.';
// const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

// export default function WhatsAppButton() {
//   return (
//     <a
//       href={link}
//       target="_blank"
//       rel="noreferrer"
//       aria-label="Chat on WhatsApp"
//       className="fixed bottom-24 right-4 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl ring-4 ring-green-500/20 transition hover:scale-105 md:flex"
//     >
//       <MessageCircleMore size={28} />
//     </a>
//   );
// }



import { MessageCircleMore } from 'lucide-react';

const phone = '8446698843';
const message =
  'Hello Sir, I want admission for my child in Marathi Asmita Coaching Classes. Please share details.';

const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

export default function WhatsAppButton() {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-20 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl ring-4 ring-green-500/20 transition hover:scale-110"
    >
      <MessageCircleMore size={28} />
    </a>
  );
}
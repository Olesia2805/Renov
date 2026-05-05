import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Wijhayanto",
    role: "Homeowner",
    text: "I am absolutely thrilled with the renovation work! The team not only fixed the plumbing issues I had but also transformed my entire bathroom into a modern, luxurious space. The attention to detail was remarkable, and they finished the project on time. I highly recommend their services!",
  },
  {
    id: 2,
    name: "Daniel Matthew",
    role: "Business Owner",
    text: "Outstanding professionalism from start to finish. They handled a complex commercial plumbing project with precision and kept disruption to a minimum. Will definitely hire again.",
  },
  {
    id: 3,
    name: "John Carter",
    role: "Property Manager",
    text: "Exceptional service! They completed the work ahead of schedule and the quality was top-notch. My tenants are very happy with the results.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState<number>(0);

  const prev = (): void =>
    setCurrent((c: number) => (c === 0 ? testimonials.length - 1 : c - 1));

  const next = (): void =>
    setCurrent((c: number) => (c === testimonials.length - 1 ? 0 : c + 1));

  const active: Testimonial = testimonials[current];
  const nextItem: Testimonial =
    testimonials[(current + 1) % testimonials.length];

  return (
    <section className="bg-black py-12 px-4 sm:py-16 sm:px-8 md:px-12 lg:px-20 xl:px-32">
      {/* Заголовок */}
      <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold max-w-xs sm:max-w-sm md:max-w-lg mb-8 sm:mb-10 leading-tight">
        Hear From Our Satisfied Customers
      </h2>

      {/* Картки — стек на мобільному, сітка на десктопі */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* === АКТИВНА КАРТКА === */}
        <div className="bg-[#1a1a1a] rounded-2xl p-6 sm:p-8 flex flex-col gap-5 sm:gap-6 min-h-64">
          {/* Аватар + ім'я */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-600 overflow-hidden shrink-0">
              {active.avatar ? (
                <img
                  src={active.avatar}
                  alt={active.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white font-bold text-base sm:text-lg">
                  {active.name[0]}
                </div>
              )}
            </div>
            <div>
              <p className="text-white font-semibold text-base sm:text-lg">
                {active.name}
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">{active.role}</p>
            </div>
          </div>

          {/* Текст відгуку */}
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed flex-1">
            {active.text}
          </p>

          {/* Кнопки навігації */}
          <div className="flex gap-3 mt-auto">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-colors duration-200"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-colors duration-200"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* === НАСТУПНА КАРТКА — прихована на мобільному === */}
        <div className="hidden md:flex bg-gray-100 rounded-2xl p-6 sm:p-8 flex-col gap-4 opacity-50 pointer-events-none">
          {/* Аватар + ім'я */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-400 overflow-hidden shrink-0">
              {nextItem.avatar ? (
                <img
                  src={nextItem.avatar}
                  alt={nextItem.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white font-bold text-lg bg-gray-500">
                  {nextItem.name[0]}
                </div>
              )}
            </div>
            <div>
              <p className="text-gray-800 font-semibold text-base sm:text-lg">
                {nextItem.name}
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">
                {nextItem.role}
              </p>
            </div>
          </div>

          {/* Placeholder */}
          <div className="flex-1 flex items-center justify-center min-h-40 border-2 border-dashed border-gray-300 rounded-xl">
            <span className="text-gray-400 text-sm">Next testimonial</span>
          </div>
        </div>
      </div>

      {/* Dot indicators — тільки для мобільного */}
      <div className="flex justify-center gap-2 mt-6 md:hidden">
        {testimonials.map((_: Testimonial, index: number) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to testimonial ${index + 1}`}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === current ? "bg-orange-500" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

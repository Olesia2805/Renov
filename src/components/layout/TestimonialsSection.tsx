import { useState } from "react";
import { UserRound, ChevronLeft, ChevronRight, ImagePlus } from "lucide-react";
import crossIcon from "../../assets/logo.svg";
import { TESTIMONIALS } from "../../constants/testimonials";

const navButtonClass =
  "flex size-12 items-center justify-center rounded-full border border-[#EBEBEB] transition-all hover:bg-black/5";

const titleClass = "font-['Inter_Tight'] font-medium text-black";

const subtitleClass = "font-['Inter_Tight'] text-sm leading-5 text-black";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = TESTIMONIALS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
    );
  };

  return (
    <section className="mx-auto flex min-h-169.75 w-full max-w-360 flex-col justify-center bg-white p-20">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="relative isolate flex min-h-139.75 w-full flex-col justify-between overflow-hidden rounded-xl bg-[#F5AA21] px-8 pt-8 pb-14 lg:max-w-211.25">
          <img
            src={crossIcon}
            alt=""
            className="pointer-events-none absolute top-[-10%] left-[57.63%] z-[-1] aspect-square w-[57.51%] brightness-0 invert opacity-25"
          />

          <h2 className={`${titleClass} max-w-101.75 text-[48px] leading-14`}>
            Hear From Our Satisfied Customers
          </h2>

          <div className="flex w-full max-w-195.25 flex-col gap-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex size-15 items-center justify-center overflow-hidden rounded-full bg-[#F5F5F5]">
                  <UserRound
                    size={32}
                    strokeWidth={1.5}
                    className="text-black/40"
                  />
                </div>

                <div className="flex flex-col gap-1 py-1">
                  <span className={`${titleClass} text-[18px] leading-6.5`}>
                    {current.name}
                  </span>

                  <span className={subtitleClass}>{current.role}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <button onClick={handlePrev} className={navButtonClass}>
                  <ChevronLeft size={20} strokeWidth={1.5} />
                </button>

                <button onClick={handleNext} className={navButtonClass}>
                  <ChevronRight size={20} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            <p className="text-[18px] leading-relaxed text-black">
              I am absolutely thrilled with the renovation work! The team not
              only fixed the plumbing issues I had but also transformed my
              entire bathroom into a modern, luxurious space. The attention to
              detail was remarkable, and they finished the project on time. I
              highly recommend their services!
            </p>
          </div>
        </div>

        <div className="relative flex min-h-139.75 w-full flex-col overflow-hidden rounded-xl bg-[#F5F5F5] lg:max-w-102.75">
          <div className="pointer-events-none absolute top-0 left-0 h-48 w-full rounded-xl bg-[linear-gradient(180deg,#1B1B1B_0%,rgba(27,27,27,0)_77.63%)]" />

          <div className="relative z-10 flex flex-col gap-1 p-8">
            <h3 className={`${titleClass} text-2xl leading-8`}>
              Daniel Matthew
            </h3>

            <p className={subtitleClass}>Business Owner</p>
          </div>

          <div className="relative z-10 flex flex-1 items-center justify-center pb-8">
            <div className="opacity-60">
              <ImagePlus size={128} strokeWidth={1.8} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

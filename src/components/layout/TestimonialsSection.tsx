// import { useState } from "react";
import { ChevronLeft, ChevronRight, ImagePlus } from "lucide-react";
import crossIcon from "../../assets/logo.svg";
// import { TESTIMONIALS } from "../../constants/testimonials";

const Testimonials = () => {
  return (
    <section className="bg-white w-full max-w-360 min-h-169.75 mx-auto p-20 flex flex-col justify-center">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 md:mb-16">
        <div className="bg-[#F5AA21] rounded-xl p-8 w-full lg:max-w-211.25 min-h-139.75 relative isolate grid grid-rows-[auto_1fr] gap-y-25 overflow-hidden">
          <img
            src={crossIcon}
            alt=""
            className="absolute left-[57.63%] w-[57.51%] aspect-square top-[-10%] brightness-0 invert opacity-[0.24] z-[-1] pointer-events-none"
          />
          <h2 className="font-['Inter_Tight'] text-[48px] leading-14 font-medium text-[#070707] max-w-101.75">
            Hear From Our Satisfied Customers
          </h2>
          <div className="grid grid-cols-[1fr_auto] items-center gap-y-6 self-end">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center overflow-hidden">
                <span className="text-black font-bold">SW</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-[18px] text-[#070707]">
                  Sarah Wijhayanto
                </span>
                <span className="text-[14px] text-[#070707]/60">Homeowner</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-white/20 transition-all">
                <ChevronLeft size={20} />
              </button>
              <button className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-white/20 transition-all">
                <ChevronRight size={20} />
              </button>
            </div>
            <p className="col-span-2 text-[18px] leading-6.5 text-[#070707] max-w-195.25">
              I am absolutely thrilled with the renovation work! The team not
              only fixed the plumbing issues I had but also transformed my
              entire bathroom into a modern, luxurious space.
            </p>
          </div>
        </div>

        <div className="bg-[#f5f5f5] rounded-xl flex flex-col w-full lg:max-w-102.75 min-h-139.75 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-48 bg-[linear-gradient(180deg,#1B1B1B_0%,rgba(27,27,27,0)_77.63%)]rounded-[12px] z-0 pointer-events-none" />
          {/* Контент блоку (Daniel Matthew) */}
          <div className="relative z-10 p-8 flex flex-col gap-1">
            <h3 className="font-['Inter_Tight'] font-medium text-[18px] text-white">
              Daniel Matthew
            </h3>
            <p className="text-[14px] text-white/60">Business Owner</p>
          </div>

          <div className="flex-1 flex items-center justify-center pb-8 relative z-10">
            <div className="text-[#6C6C6C] opacity-40">
              <ImagePlus size={80} strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

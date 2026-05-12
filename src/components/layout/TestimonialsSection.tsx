// import { useState } from "react";
import { UserRound, ChevronLeft, ChevronRight, ImagePlus } from "lucide-react";
import crossIcon from "../../assets/logo.svg";
// import { TESTIMONIALS } from "../../constants/testimonials";

const Testimonials = () => {
  return (
    <section className="bg-white w-full max-w-360 min-h-169.75 mx-auto p-20 flex flex-col justify-center">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 md:mb-16">
        <div className="bg-[#F5AA21] rounded-xl pt-8 px-8 pb-14.5 w-full lg:max-w-211.25 min-h-139.75 relative isolate flex flex-col justify-between overflow-hidden">
          <img
            src={crossIcon}
            alt=""
            className="absolute left-[57.63%] w-[57.51%] aspect-square top-[-10%] brightness-0 invert opacity-[0.24] z-[-1] pointer-events-none"
          />
          <h2 className="font-['Inter_Tight'] text-[48px] leading-14 font-medium text-black max-w-101.75">
            Hear From Our Satisfied Customers
          </h2>

          <div className="flex items-start w-full max-w-195.25 max-h-44.5 self-stretch  flex-col justify-between gap-10 order-2 z-2">
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-4">
                <div className="w-15 h-15 rounded-full bg-[#f5f5f5] flex items-center justify-center flex-none order-0 grow-0 overflow-hidden">
                  <UserRound
                    size={32}
                    strokeWidth={1.5}
                    className="text-[#070707]/40"
                  />
                </div>

                <div className="flex max-h-15 py-1.25 self-stretch flex-col justify-between gap-1">
                  <span className="font-['Inter_Tight'] text-[18px] leading-6.5 font-medium text-[#070707] w-34.75 h-[26px]flex-none order-0 self-stretch grow-0">
                    Sarah Wijhayanto
                  </span>
                  <span className="font-['Inter_Tight'] text-[14px] leading-5 font-normal text-[#070707] w-34.75 h-[20px]flex-none order-1 self-stretch grow-0">
                    Homeowner
                  </span>
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
            </div>

            <p className="text-[18px] leading-relaxed text-black max-w-full">
              I am absolutely thrilled with the renovation work! The team not
              only fixed the plumbing issues I had but also transformed my
              entire bathroom into a modern, luxurious space.
            </p>
          </div>
        </div>

        <div className="bg-[#f5f5f5] rounded-xl flex flex-col w-full lg:max-w-102.75 min-h-139.75 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-48 bg-[linear-gradient(180deg,#1B1B1B_0%,rgba(27,27,27,0)_77.63%)] rounded-xl z-0 pointer-events-none" />
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

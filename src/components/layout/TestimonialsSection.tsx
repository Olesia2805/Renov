// import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// interface Testimonial {
//   id: number;
//   name: string;
//   role: string;
//   text: string;
//   avatar?: string;
// }

// const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     name: "Sarah Wijhayanto",
//     role: "Homeowner",
//     text: "I am absolutely thrilled with the renovation work! The team not only fixed the plumbing issues I had but also transformed my entire bathroom into a modern, luxurious space. The attention to detail was remarkable, and they finished the project on time. I highly recommend their services!",
//   },
//   {
//     id: 2,
//     name: "Daniel Matthew",
//     role: "Business Owner",
//     text: "Outstanding professionalism from start to finish. They handled a complex commercial plumbing project with precision and kept disruption to a minimum. Will definitely hire again.",
//   },
//   {
//     id: 3,
//     name: "John Carter",
//     role: "Property Manager",
//     text: "Exceptional service! They completed the work ahead of schedule and the quality was top-notch. My tenants are very happy with the results.",
//   },
// ];

const Testimonials = () => {
  return (
    <section className="bg-white w-full max-w-360 min-h-169.75 mx-auto py-15 px-20 flex flex-col justify-center">
      <ul className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 md:mb-16">
        <li className="bg-[#F5AA21] rounded-xl p-8 flex flex-col items-start isolate w-full lg:max-w-211.25 min-h-139.75">
          <h2 className="w-full lg:w-101.75 min-h-28 font-['Inter_Tight'] text-[48px] leading-14 text-[#070707] font-medium ">
            Hear From Our Satisfied Customers
          </h2>
          <div>
            <ul></ul>
            <p></p>
          </div>
        </li>
        <li className="bg-[#f5f5f5] rounded-xl p-8 flex flex-col items-start  w-full lg:max-w-102.75 min-h-139.75">
          <div className="  "></div>
          <div className=" "></div>
        </li>
      </ul>
    </section>
  );
};

export default Testimonials;

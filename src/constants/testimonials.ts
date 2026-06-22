export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar?: string;
}

export const TESTIMONIALS: Testimonial[] = [
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
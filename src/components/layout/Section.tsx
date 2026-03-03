import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ children, className = "", id }: SectionProps) => {
  return (
    <section id={id} className={`w-full ${className}`}>
      {children}
    </section>
  );
};

export default Section;

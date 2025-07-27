
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import ScrollReveal from './ScrollReveal';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  title?: string;
  subtitle?: string;
  withContainer?: boolean;
  withReveal?: boolean;
  delay?: number;
}

const Section = ({ 
  id, 
  className, 
  children, 
  title, 
  subtitle,
  withContainer = true,
  withReveal = true,
  delay = 0
}: SectionProps) => {
  const content = (
    <section id={id} className={cn("section-padding", className)}>
      {withContainer ? (
        <div className="container mx-auto">
          {(title || subtitle) && (
            <div className="mb-12 text-center">
              {title && <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>}
              {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
            </div>
          )}
          {children}
        </div>
      ) : children}
    </section>
  );

  return withReveal ? <ScrollReveal delay={delay}>{content}</ScrollReveal> : content;
};

export default Section;

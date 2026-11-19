import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx';
import TestimonialItem from './TestimonialItem.jsx';
import { testimonials } from '../../data/content.js';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 70%', 'end 70%'] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="testimonials" className={`section ${styles.section}`} aria-labelledby="testimonials-title">
      <div className="container">
        <SectionHeading id="testimonials-title" eyebrow="03 — Kind Words" title="Testimonials" />

        <div className={styles.listWrap} ref={listRef}>
          {/* Scroll-linked rail that fills as the reader moves through the quotes. */}
          <div className={styles.rail} aria-hidden="true">
            <motion.span className={styles.railFill} style={{ scaleY: progress }} />
          </div>

          <ol className={styles.list}>
            {testimonials.map((t, i) => (
              <TestimonialItem key={t.id} testimonial={t} index={i} total={testimonials.length} reversed={i % 2 === 1} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

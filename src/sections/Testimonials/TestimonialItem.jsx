import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Placeholder from '../../components/Placeholder/Placeholder.jsx';
import RevealText from '../../components/RevealText/RevealText.jsx';
import { ease } from '../../animations/variants.js';
import styles from './Testimonials.module.css';

export default function TestimonialItem({ testimonial, index, total, reversed }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const frameY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  // Image wipes in from the outside edge it sits on.
  const from = reversed ? 'inset(0% 0% 0% 100%)' : 'inset(0% 100% 0% 0%)';
  const viewport = { once: true, amount: 0.4 };

  return (
    // The <li> owns the in-view trigger: a fully clipped child never registers as intersecting.
    <motion.li
      ref={ref}
      className={`${styles.item} ${reversed ? styles.reversed : ''}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <motion.figure className={styles.figure} style={{ y: frameY }}>
        <motion.div
          className={styles.frame}
          variants={{ hidden: { clipPath: from }, visible: { clipPath: 'inset(0% 0% 0% 0%)', transition: { duration: 1.2, ease } } }}
          whileHover={{ scale: 1.02 }}
        >
          <Placeholder
            src={testimonial.image}
            alt={`Braided style for ${testimonial.name}`}
            label="Client photo"
            tone="dark"
            showLabel={false}
            imageMotion={{ style: { y: imageY, scale: 1.25 } }}
          />
          <motion.figcaption
            className={`display ${styles.name}`}
            variants={{
              hidden: { opacity: 0, letterSpacing: '0.3em' },
              visible: { opacity: 1, letterSpacing: '0.02em', transition: { duration: 1.1, ease, delay: 0.5 } },
            }}
          >
            {testimonial.name}
          </motion.figcaption>
        </motion.div>
      </motion.figure>

      <blockquote className={styles.quoteBlock}>
        <motion.span
          className={styles.mark}
          aria-hidden="true"
          variants={{
            hidden: { opacity: 0, scale: 0.4, rotate: -20 },
            visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 160, damping: 14, delay: 0.2 } },
          }}
        >
          “
        </motion.span>

        <RevealText as="p" text={testimonial.quote} className={styles.quote} step={0.018} delay={0.25} />

        <motion.footer
          className={styles.cite}
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease, delay: 0.9 } } }}
        >
          <span className={styles.citeLine} />
          <cite>
            {testimonial.name} — <em>{testimonial.role}</em>
          </cite>
          <span className={styles.count}>
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </motion.footer>
      </blockquote>
    </motion.li>
  );
}

import { motion } from 'framer-motion';
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx';
import { brand, services } from '../../data/content.js';
import { ease, fadeUp, stagger, viewportOnce } from '../../animations/variants.js';
import styles from './Book.module.css';

export default function Book() {
  return (
    <section id="book" className={`section ${styles.section}`} aria-labelledby="book-title">
      <div className="container">
        <SectionHeading id="book-title" eyebrow="04 — Services" title="Book" />

        <motion.ul className={styles.list} variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          {services.map((s, i) => (
            <motion.li key={s.id} variants={fadeUp}>
              <motion.a
                href={brand.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.row}
                initial="rest"
                whileHover="hover"
                whileFocus="hover"
              >
                <motion.span
                  className={styles.fill}
                  variants={{ rest: { scaleY: 0 }, hover: { scaleY: 1 } }}
                  transition={{ duration: 0.5, ease }}
                />
                <span className={styles.num}>0{i + 1}</span>
                <motion.span
                  className={`display ${styles.title}`}
                  variants={{ rest: { x: 0 }, hover: { x: 16 } }}
                  transition={{ duration: 0.5, ease }}
                >
                  {s.title}
                </motion.span>
                <span className={styles.detail}>{s.detail}</span>
                <span className={styles.duration}>{s.duration}</span>
                <motion.span
                  className={styles.arrow}
                  aria-hidden="true"
                  variants={{ rest: { rotate: 0 }, hover: { rotate: -45 } }}
                  transition={{ duration: 0.4, ease }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div className={styles.cta} variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <p>Booking productions and private clients in New York City and Atlanta, GA.</p>
          <motion.a
            href={brand.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className={styles.button}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Book an appointment
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

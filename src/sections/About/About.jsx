import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx';
import Placeholder from '../../components/Placeholder/Placeholder.jsx';
import { about } from '../../data/content.js';
import { clipReveal, fadeUp, stagger, viewportOnce } from '../../animations/variants.js';
import styles from './About.module.css';

export default function About() {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: imageRef, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <SectionHeading id="about-title" eyebrow="01 — The Artist" title="About Me" />

          <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <motion.p className={styles.lead} variants={fadeUp}>
              Hi! My name is Jamille. I am a master hair braider with over a decade of experience, specializing in
              editorial and beauty-focused braiding for photo and video productions.
            </motion.p>
            <motion.p className={styles.body} variants={fadeUp}>
              Known for clean, precise, polished results — serving a diverse roster of clients across the Greater New
              York City Area. And now relocating to <em>Atlanta, GA</em>.
            </motion.p>

            <motion.dl className={styles.stats} variants={stagger(0.1)}>
              {about.stats.map((s) => (
                <motion.div key={s.label} className={styles.stat} variants={fadeUp}>
                  <dt className={styles.statLabel}>{s.label}</dt>
                  <dd className={`display ${styles.statValue}`}>{s.value}</dd>
                </motion.div>
              ))}
            </motion.dl>
          </motion.div>
        </div>

        <motion.figure className={styles.media} ref={imageRef} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <motion.div className={styles.frame} variants={clipReveal}>
            <Placeholder
              src={about.headshot.image}
              alt={about.headshot.alt}
              label={about.headshot.label}
              imageMotion={{ style: { y: imageY, scale: 1.18 } }}
            />
          </motion.div>
          <motion.figcaption className="eyebrow" variants={fadeUp}>Jamille Van Putten — Master Braider</motion.figcaption>
        </motion.figure>
      </div>
    </section>
  );
}

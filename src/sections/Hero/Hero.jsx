import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import useMediaQuery from '../../hooks/useMediaQuery.js';
import Placeholder from '../../components/Placeholder/Placeholder.jsx';
import SocialLinks from '../../components/SocialLinks/SocialLinks.jsx';
import RevealText from '../../components/RevealText/RevealText.jsx';
import { brand, heroImages } from '../../data/content.js';
import { clipReveal, ease, imageSettle } from '../../animations/variants.js';
import styles from './Hero.module.css';

const areas = ['a', 'b', 'c'];
const tones = ['stone', 'sand', 'stone'];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const isDesktop = useMediaQuery('(min-width: 900px)');

  // Each column drifts at its own speed for a layered, editorial parallax.
  const drift = [
    useTransform(scrollYProgress, [0, 1], [0, -60]),
    useTransform(scrollYProgress, [0, 1], [0, -140]),
    useTransform(scrollYProgress, [0, 1], [0, -90]),
  ];

  return (
    <section id="top" ref={ref} className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.grid}`}>
        <h1 id="hero-title" className={`display ${styles.title}`}>
          <RevealText text="Allure" animate="visible" delay={0.15} className={styles.line} />
          <RevealText text="Braids" animate="visible" delay={0.3} className={styles.line} />
        </h1>

        <motion.p
          className={styles.byline}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.9 }}
        >
          by {brand.owner}
        </motion.p>

        {heroImages.map((img, i) => (
          <motion.figure key={img.id} className={styles.figure} style={{ gridArea: areas[i], y: isDesktop ? drift[i] : 0 }}>
            <motion.div
              className={styles.frame}
              variants={clipReveal}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.2, ease, delay: 0.35 + i * 0.15 }}
            >
              <Placeholder
                src={img.image}
                alt={img.alt}
                label={img.label}
                tone={tones[i]}
                imageMotion={{ variants: imageSettle, initial: 'hidden', animate: 'visible', transition: { duration: 1.6, ease, delay: 0.35 + i * 0.15 } }}
              />
            </motion.div>
          </motion.figure>
        ))}

        <motion.div
          className={styles.socials}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <SocialLinks />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className={styles.scrollCue}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <span>Scroll</span>
        <motion.span
          className={styles.cueLine}
          animate={{ scaleY: [0, 1, 0], originY: [0, 0, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.a>
    </section>
  );
}

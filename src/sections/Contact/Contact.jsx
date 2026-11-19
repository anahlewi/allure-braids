import { motion, useMotionValue, useSpring } from 'framer-motion';
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx';
import SocialLinks from '../../components/SocialLinks/SocialLinks.jsx';
import { brand } from '../../data/content.js';
import { fadeUp, viewportOnce } from '../../animations/variants.js';
import styles from './Contact.module.css';

export default function Contact() {
  // Magnetic pull on the email link.
  const x = useSpring(useMotionValue(0), { stiffness: 150, damping: 15 });
  const y = useSpring(useMotionValue(0), { stiffness: 150, damping: 15 });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.15);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.3);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className={`container ${styles.inner}`}>
        <SectionHeading id="contact-title" eyebrow="05 — Say Hello" title="Contact" />

        <motion.a
          href={`mailto:${brand.email}`}
          className={styles.email}
          style={{ x, y }}
          onPointerMove={onMove}
          onPointerLeave={onLeave}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {brand.email}
        </motion.a>

        <motion.div className={styles.row} variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <p>{brand.location}</p>
          <SocialLinks />
        </motion.div>
      </div>
    </section>
  );
}

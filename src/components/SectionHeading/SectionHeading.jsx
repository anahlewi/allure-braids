import { motion } from 'framer-motion';
import RevealText from '../RevealText/RevealText.jsx';
import { fadeUp, viewportOnce } from '../../animations/variants.js';
import styles from './SectionHeading.module.css';

export default function SectionHeading({ eyebrow, title, id }) {
  return (
    <header className={styles.heading}>
      {eyebrow && (
        <motion.p className="eyebrow" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          {eyebrow}
        </motion.p>
      )}
      <RevealText as="h2" id={id} text={title} className={`display ${styles.title}`} />
    </header>
  );
}

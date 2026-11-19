import { motion } from 'framer-motion';
import { ease } from '../../animations/variants.js';
import styles from './RevealText.module.css';

const word = {
  hidden: { y: '110%' },
  visible: ({ i, step, delay }) => ({ y: '0%', transition: { duration: 0.9, ease, delay: delay + i * step } }),
};

/**
 * Masked word-by-word reveal. `step` is the delay between words.
 * Pass `animate` to drive it manually,
 * otherwise it plays once when scrolled into view.
 */
export default function RevealText({ text, as = 'span', className = '', delay = 0, step = 0.06, animate, ...rest }) {
  const Tag = motion[as];
  const words = text.split(' ');
  const trigger = animate
    ? { initial: 'hidden', animate }
    : { initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.6 } };

  return (
    <Tag className={className} aria-label={text} {...trigger} {...rest}>
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className={styles.mask} aria-hidden="true">
          <motion.span className={styles.word} variants={word} custom={{ i, step, delay }}>
            {w}
          </motion.span>
          {i < words.length - 1 && ' '}
        </span>
      ))}
    </Tag>
  );
}

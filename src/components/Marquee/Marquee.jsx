import { motion } from 'framer-motion';
import styles from './Marquee.module.css';

/** Infinite horizontal ticker. Content is duplicated so the loop is seamless. */
export default function Marquee({ items, duration = 28 }) {
  const row = [...items, ...items];
  return (
    <div className={styles.wrap} aria-label={`Clients: ${items.join(', ')}`}>
      <motion.ul
        className={styles.track}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration, ease: 'linear', repeat: Infinity }}
        aria-hidden="true"
      >
        {row.map((name, i) => (
          <li key={`${name}-${i}`} className={`display ${styles.item}`}>
            {name}
            <span className={styles.dot}>✦</span>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}

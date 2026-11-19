import { motion } from 'framer-motion';
import { socials } from '../../data/content.js';
import styles from './SocialLinks.module.css';

const icons = {
  facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M13.2 19v-6h2l.3-2.4h-2.3V9.2c0-.7.2-1.2 1.2-1.2h1.2V5.9c-.2 0-1-.1-1.8-.1-1.8 0-3 1.1-3 3.1v1.7h-2V13h2v6" fill="currentColor" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="11.5" fill="currentColor" />
      <rect x="6.5" y="6.5" width="11" height="11" rx="3" fill="none" stroke="var(--social-inner)" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="2.6" fill="none" stroke="var(--social-inner)" strokeWidth="1.5" />
      <circle cx="15.3" cy="8.7" r="0.8" fill="var(--social-inner)" />
    </svg>
  ),
};

export default function SocialLinks({ className = '' }) {
  return (
    <ul className={`${styles.list} ${className}`}>
      {socials.map((s) => (
        <li key={s.id}>
          <motion.a
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
            aria-label={s.label}
            whileHover={{ y: -3, rotate: -6 }}
            whileTap={{ scale: 0.9 }}
          >
            {icons[s.id]}
          </motion.a>
        </li>
      ))}
    </ul>
  );
}

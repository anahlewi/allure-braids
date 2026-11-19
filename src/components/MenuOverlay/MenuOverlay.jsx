import { useState } from 'react';
import { motion } from 'framer-motion';
import SocialLinks from '../SocialLinks/SocialLinks.jsx';
import useLockBodyScroll from '../../hooks/useLockBodyScroll.js';
import useEscapeKey from '../../hooks/useEscapeKey.js';
import useActiveSection from '../../hooks/useActiveSection.js';
import { brand, navLinks } from '../../data/content.js';
import { ease } from '../../animations/variants.js';
import styles from './MenuOverlay.module.css';

const sectionIds = navLinks.map((l) => l.id);

const panel = {
  hidden: { clipPath: 'circle(0% at calc(100% - 60px) 42px)' },
  visible: { clipPath: 'circle(150% at calc(100% - 60px) 42px)', transition: { duration: 0.85, ease } },
  exit: { clipPath: 'circle(0% at calc(100% - 60px) 42px)', transition: { duration: 0.6, ease, delay: 0.15 } },
};

const list = {
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.3 } },
  exit: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
};

const item = {
  hidden: { y: '110%' },
  visible: { y: '0%', transition: { duration: 0.8, ease } },
  exit: { y: '110%', transition: { duration: 0.4, ease } },
};

export default function MenuOverlay({ onClose }) {
  const active = useActiveSection(sectionIds);
  const [hovered, setHovered] = useState(null);
  const underlined = hovered ?? active;

  useLockBodyScroll(true);
  useEscapeKey(true, onClose);

  return (
    <motion.nav
      id="site-menu"
      className={styles.overlay}
      variants={panel}
      initial="hidden"
      animate="visible"
      exit="exit"
      aria-label="Main"
    >
      <div className={`container ${styles.bar}`}>
        <motion.button
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label="Close menu"
          autoFocus
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0, transition: { delay: 0.35, duration: 0.5, ease } }}
          exit={{ opacity: 0, rotate: 90, transition: { duration: 0.25 } }}
          whileHover={{ rotate: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className={styles.closeLine} />
          <span className={styles.closeLine} />
        </motion.button>
      </div>

      <div className={`container ${styles.inner}`}>
        <motion.ul className={styles.links} variants={list} onMouseLeave={() => setHovered(null)}>
          {navLinks.map((link, i) => (
            <li key={link.id} className={styles.mask}>
              <motion.a
                href={`#${link.id}`}
                className={`display ${styles.link}`}
                variants={item}
                onClick={onClose}
                onMouseEnter={() => setHovered(link.id)}
                onFocus={() => setHovered(link.id)}
              >
                <span className={styles.index}>0{i + 1}</span>
                {link.label}
                {underlined === link.id && (
                  <motion.span layoutId="menu-underline" className={styles.underline} transition={{ type: 'spring', stiffness: 380, damping: 32 }} />
                )}
              </motion.a>
            </li>
          ))}
        </motion.ul>

        <motion.div
          className={styles.meta}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.7, duration: 0.6, ease } }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          <p className="eyebrow">Bookings & enquiries</p>
          <a className={styles.email} href={`mailto:${brand.email}`}>{brand.email}</a>
          <p className={styles.location}>{brand.location}</p>
          <SocialLinks className={styles.socials} />
        </motion.div>
      </div>
    </motion.nav>
  );
}

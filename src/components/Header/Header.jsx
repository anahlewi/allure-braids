import { useCallback, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import MenuOverlay from '../MenuOverlay/MenuOverlay.jsx';
import { ease } from '../../animations/variants.js';
import styles from './Header.module.css';

const lineTransition = { duration: 0.4, ease };

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Hide the bar while scrolling down, bring it back on scroll up.
  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 240);
    setScrolled(y > window.innerHeight * 0.6);
  });

  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <motion.header
        className={`${styles.header} ${scrolled ? styles.solid : ''}`}
        animate={{ y: hidden && !open ? '-100%' : '0%' }}
        transition={{ duration: 0.45, ease }}
      >
        <div className={`container ${styles.inner}`}>
          <AnimatePresence>
            {scrolled && !open && (
              <motion.a
                href="#top"
                className={styles.logo}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease }}
              >
                Allure Braids
              </motion.a>
            )}
          </AnimatePresence>

          {/* Two-line menu button: the lines cross into an X on hover / focus. */}
          <motion.button
            type="button"
            className={styles.burger}
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label="Open menu"
            initial="rest"
            animate="rest"
            whileHover="hover"
            whileFocus="hover"
          >
            <motion.span
              className={styles.line}
              variants={{ rest: { y: -5, rotate: 0 }, hover: { y: 0, rotate: 45 } }}
              transition={lineTransition}
            />
            <motion.span
              className={styles.line}
              variants={{ rest: { y: 5, rotate: 0 }, hover: { y: 0, rotate: -45 } }}
              transition={lineTransition}
            />
          </motion.button>
        </div>
      </motion.header>

      <AnimatePresence>{open && <MenuOverlay onClose={close} />}</AnimatePresence>
    </>
  );
}

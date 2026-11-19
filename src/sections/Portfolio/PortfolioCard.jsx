import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Placeholder from '../../components/Placeholder/Placeholder.jsx';
import { ease } from '../../animations/variants.js';
import styles from './Portfolio.module.css';

const card = {
  hidden: { opacity: 0, y: 60, clipPath: 'inset(20% 0% 0% 0%)' },
  visible: { opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)', transition: { duration: 1, ease } },
};

const spring = { stiffness: 200, damping: 20, mass: 0.6 };

export default function PortfolioCard({ client, index, onOpen }) {
  // Subtle 3D tilt that follows the cursor.
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateY = useSpring(useTransform(mx, [0, 1], [-6, 6]), spring);
  const rotateX = useSpring(useTransform(my, [0, 1], [5, -5]), spring);

  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const reset = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.li variants={card} className={styles.cell}>
      <motion.button
        type="button"
        className={styles.card}
        onClick={onOpen}
        onPointerMove={handleMove}
        onPointerLeave={reset}
        style={{ rotateX, rotateY }}
        initial="rest"
        whileHover="hover"
        whileFocus="hover"
        whileTap={{ scale: 0.98 }}
        aria-label={`View ${client.name} work`}
      >
        <motion.div layoutId={`card-media-${client.id}`} className={styles.media}>
          <Placeholder
            src={client.image}
            alt={`${client.name} editorial`}
            label={`${client.name} cover`}
            tone="dark"
            showLabel={false}
            imageMotion={{ variants: { rest: { scale: 1 }, hover: { scale: 1.08 } }, transition: { duration: 0.9, ease } }}
          />
        </motion.div>

        <motion.span
          className={styles.shade}
          variants={{ rest: { opacity: 0.45 }, hover: { opacity: 0.7 } }}
          transition={{ duration: 0.5 }}
        />

        <span className={styles.number}>0{index + 1}</span>

        <span className={styles.titleWrap}>
          {/* Hover lift lives on the wrapper so it never fights the shared layout animation. */}
          <motion.span variants={{ rest: { y: 0 }, hover: { y: -14 } }} transition={{ duration: 0.5, ease }}>
            <motion.span layoutId={`card-title-${client.id}`} className={`display ${styles.title}`}>
              {client.name}
            </motion.span>
          </motion.span>
          <motion.span
            className={styles.meta}
            variants={{ rest: { opacity: 0, y: 12 }, hover: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.45, ease }}
          >
            {client.category} · View work →
          </motion.span>
        </span>
      </motion.button>
    </motion.li>
  );
}

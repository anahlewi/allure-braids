import { motion } from 'framer-motion';
import Placeholder from '../../components/Placeholder/Placeholder.jsx';
import useLockBodyScroll from '../../hooks/useLockBodyScroll.js';
import useEscapeKey from '../../hooks/useEscapeKey.js';
import { ease, fadeUp, stagger } from '../../animations/variants.js';
import styles from './PortfolioModal.module.css';

/** Expanded case view — the card's image and title morph into place via shared layoutIds. */
export default function PortfolioModal({ client, onClose }) {
  useLockBodyScroll(true);
  useEscapeKey(true, onClose);

  return (
    <motion.div
      className={styles.backdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { delay: 0.15 } }}
      onClick={onClose}
    >
      <motion.article
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`modal-${client.id}`}
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div layoutId={`card-media-${client.id}`} className={styles.cover} transition={{ duration: 0.7, ease }}>
          <Placeholder src={client.image} alt={`${client.name} editorial`} label={`${client.name} cover`} tone="dark"
            showLabel={false} />
          <motion.h3
            id={`modal-${client.id}`}
            layoutId={`card-title-${client.id}`}
            className={`display ${styles.title}`}
            transition={{ duration: 0.7, ease }}
          >
            {client.name}
          </motion.h3>
        </motion.div>

        <motion.div className={styles.body} variants={stagger(0.08, 0.35)} initial="hidden" animate="visible" exit="hidden">
          <motion.div className={styles.metaRow} variants={fadeUp}>
            <span className="eyebrow">{client.category}</span>
            <span className="eyebrow">{client.year}</span>
          </motion.div>
          <motion.p className={styles.desc} variants={fadeUp}>{client.description}</motion.p>

          <motion.ul className={styles.gallery} variants={stagger(0.1)}>
            {Array.from({ length: client.gallery }).map((_, i) => (
              <motion.li key={i} variants={fadeUp} className={styles.thumb}>
                <Placeholder label={`Look ${i + 1}`} alt={`${client.name} look ${i + 1}`} />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.button
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label="Close"
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0, transition: { delay: 0.4 } }}
          exit={{ opacity: 0 }}
          autoFocus
        >
          ✕
        </motion.button>
      </motion.article>
    </motion.div>
  );
}

import { motion } from 'framer-motion';
import styles from './Placeholder.module.css';

/**
 * Image slot. Renders `src` when provided; otherwise a labelled placeholder
 * so layouts can be reviewed before final photography is in.
 * Set `showLabel={false}` when text is overlaid on the image.
 */
export default function Placeholder({
  src,
  alt = '',
  label = 'Image',
  tone = 'sand',
  className = '',
  imageMotion,
  showLabel = true,
}) {
  return (
    <div className={`${styles.frame} ${styles[tone]} ${className}`}>
      {src ? (
        <motion.img className={styles.img} src={src} alt={alt} loading="lazy" {...imageMotion} />
      ) : (
        <motion.div className={styles.empty} role="img" aria-label={alt || label} {...imageMotion}>
          {showLabel && (
            <>
              <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="4" width="18" height="16" rx="1" fill="none" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="9" cy="10" r="1.8" fill="none" stroke="currentColor" strokeWidth="1.2" />
                <path d="M3 17l5-5 4 4 3-3 6 6" fill="none" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              <span className={styles.label}>{label}</span>
            </>
          )}
        </motion.div>
      )}
    </div>
  );
}

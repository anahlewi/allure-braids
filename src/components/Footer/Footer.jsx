import SocialLinks from '../SocialLinks/SocialLinks.jsx';
import { brand } from '../../data/content.js';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>
          Contact: <a href={`mailto:${brand.email}`}>{brand.email}</a>
        </p>
        <p className={styles.copy}>© {new Date().getFullYear()} {brand.name} · {brand.owner}</p>
        <SocialLinks />
      </div>
    </footer>
  );
}

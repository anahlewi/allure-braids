import { useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx';
import PortfolioCard from './PortfolioCard.jsx';
import PortfolioModal from './PortfolioModal.jsx';
import { clients } from '../../data/content.js';
import { stagger } from '../../animations/variants.js';
import styles from './Portfolio.module.css';

export default function Portfolio() {
  const [selectedId, setSelectedId] = useState(null);
  const selected = clients.find((c) => c.id === selectedId);

  return (
    <section id="portfolio" className={`section ${styles.section}`} aria-labelledby="portfolio-title">
      <div className="container">
        <SectionHeading id="portfolio-title" eyebrow="02 — Editorial Work" title="Portfolio" />

        <LayoutGroup>
          <motion.ul
            className={styles.grid}
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {clients.map((client, i) => (
              <PortfolioCard key={client.id} client={client} index={i} onOpen={() => setSelectedId(client.id)} />
            ))}
          </motion.ul>

          <AnimatePresence>
            {selected && <PortfolioModal client={selected} onClose={() => setSelectedId(null)} />}
          </AnimatePresence>
        </LayoutGroup>
      </div>
    </section>
  );
}

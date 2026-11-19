export const ease = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

export const stagger = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});

/** Image "curtain" reveal: the frame wipes open from the bottom while the image settles from a slight zoom. */
export const clipReveal = {
  hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
  visible: { clipPath: 'inset(0% 0% 0% 0%)', transition: { duration: 1.1, ease } },
};

export const imageSettle = {
  hidden: { scale: 1.25 },
  visible: { scale: 1, transition: { duration: 1.4, ease } },
};

export const viewportOnce = { once: true, amount: 0.3 };

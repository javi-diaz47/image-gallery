const ease = [0.43, 0.13, 0.23, 0.96];

const transition = {
  delay: 0.5,
  duration: 1.5,
  ease,
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      ...transition,
      staggerChildren: 2,
    },
  },
};

const figureReveal = {
  hidden: {
    clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
  },
  visible: {
    clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%)",
    transition,
  },
};

const imageReveal = {
  hidden: {
    scale: 1.8,
  },
  visible: {
    scale: 1,
    transition,
  },
};

const text = {
  hidden: {
    y: 300,
  },
  visible: {
    y: 0,
    transition,
  },
};

export { container, figureReveal, imageReveal, text, transition };

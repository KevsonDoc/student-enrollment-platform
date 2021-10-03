export const animations = {
  opacity: {
    initial: {
      opacity: 0,
    },
    final: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: { ease: 'easeInOut' },
    },
  },
};
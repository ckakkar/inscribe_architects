export const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }
  }
  
  export const fadeInDown = {
    initial: { opacity: 0, y: -60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }
  }
  
  export const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }
  }
  
  export const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }
  }
  
  export const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: [0.6, 0.05, 0.01, 0.9] }
  }
  
  export const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  }
  
  export const textReveal = {
    initial: { 
      opacity: 0,
      y: 20,
      clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
    },
    animate: { 
      opacity: 1,
      y: 0,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      }
    }
  }
  
  export const slideIn = (direction = 'up', delay = 0) => {
    return {
      initial: {
        opacity: 0,
        y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
        x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      },
      animate: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          duration: 0.6,
          delay,
          ease: [0.6, 0.05, 0.01, 0.9],
        }
      }
    }
  }
  
  export const hoverScale = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { type: "spring", stiffness: 400, damping: 17 }
  }
  
  export const parallaxY = (offset = 50) => ({
    initial: { y: -offset },
    animate: { y: offset },
    transition: {
      type: "tween",
      ease: "linear",
    }
  })
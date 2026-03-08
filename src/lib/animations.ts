import { Variants, Transition } from "framer-motion";

// ── Shared easing curves ──
export const ease = {
  smooth: [0.22, 1, 0.36, 1] as [number, number, number, number],
  bounce: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
  out: [0, 0, 0.2, 1] as [number, number, number, number],
  inOut: [0.76, 0, 0.24, 1] as [number, number, number, number],
};

// ── Reveal from bottom with blur ──
export const blurUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: ease.smooth },
  },
};

// ── Reveal from left with clip ──
export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: ease.smooth },
  },
};

// ── Reveal from right ──
export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: ease.smooth },
  },
};

// ── Scale up with subtle rotation ──
export const scaleRotate: Variants = {
  hidden: { opacity: 0, scale: 0.85, rotate: -2 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.9, ease: ease.smooth },
  },
};

// ── Mask reveal (clip-path) ──
export const maskReveal: Variants = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)" },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.8, ease: ease.inOut },
  },
};

// ── Stagger container ──
export const staggerContainer = (stagger = 0.1, delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

// ── Word-by-word reveal ──
export const wordStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

export const wordReveal: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: ease.smooth },
  },
};

// ── Character reveal for headlines ──
export const charStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.025 },
  },
};

export const charReveal: Variants = {
  hidden: { opacity: 0, y: 20, rotateX: 90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.4, ease: ease.smooth },
  },
};

// ── Fade item (for stagger children) ──
export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: ease.smooth },
  },
};

// ── Scale item (for stagger children) ──
export const scaleItem: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: ease.bounce },
  },
};

// ── Line draw (for SVG paths) ──
export const lineDraw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: ease.inOut },
  },
};

// ── Number counter transition ──
export const counterTransition: Transition = {
  duration: 2,
  ease: ease.out,
};

// ── Magnetic hover effect values ──
export const magneticHover = {
  scale: 1.03,
  transition: { type: "spring", stiffness: 400, damping: 17 },
};

// ── Card hover ──
export const cardHover = {
  y: -6,
  transition: { duration: 0.3, ease: ease.smooth },
};

// ── Viewport config ──
export const viewport = {
  once: true,
  margin: "-80px" as const,
};

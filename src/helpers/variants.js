const descriptionVariants = {
  in: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: "duration:.3"
  },
  out: {
    opacity: 0,
    x: "-5vw",
    y: 0,
    scale: 0.8,
  },
};
const pageVariant = {
  in: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: "duration:.3"
  },
  out: {
    opacity: 0,
    x: "-5vw",
    y: 0,
  },
};
const pageVariantList = {
  in: {
    opacity: 1,
    x: 150,
    y: 0,
    transition: "all .45s ease-out",
  },
  out: {
    opacity: 0,
    x: 0,
    y: 0,
  },
};
const variantInput = {
  in: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: "duration:1"
  },
  out: {
    opacity: 0,
    x: "5vw",
    y: 0,
    transition: "duration:1"
  },
};

const variantCard = {
  out: {
    opacity: 0,
    x: "5vw",
    y: 0,
    transition: "duration:1"
  },
  in: {
    opacity: 1,
    x: 0,
  }
}
export { descriptionVariants, pageVariant, pageVariantList, variantInput, variantCard };
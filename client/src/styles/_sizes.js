const sizes = {
  down(size) {
    const sizes = {
      sm: "767.98px",
      md: "991.98px",
      lg: "1199.98px",
    };
    return `@media (max-width: ${sizes[size]})`;
  },
};

export default sizes;

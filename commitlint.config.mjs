const Configuration = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [2, "always", 999],
  },
};

export default Configuration;

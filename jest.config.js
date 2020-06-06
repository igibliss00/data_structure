module.exports = {
  roots: ["<rootDir>/"],
  verbose: false,
  transformIgnorePatterns: ["node_modules"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
};

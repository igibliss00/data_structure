module.exports = {
  roots: ["<rootDir>/"],
  verbose: true,
  transformIgnorePatterns: ["node_modules"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
};

module.exports = {
  babel: {
    plugins: [
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      "babel-plugin-transform-function-parameter-decorators"
    ]
  }
};

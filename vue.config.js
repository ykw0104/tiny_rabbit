const path = require("path");

module.exports = {
  pluginOptions: {
    /* 设置scss自动注入 */
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [
        /* 定义自动注入的路径 */
        path.join(__dirname, "./src/assets/styles/variables.scss"),
        path.join(__dirname, "./src/assets/styles/mixins.scss"),
      ],
    },
  },
};

const path = require("path");

module.exports = {
  i18n: {
    locales: ["default", "en", "de-DE", "vi-VN"],
    defaultLocale: "en",
    localeDetection: false,
    localePath: path.resolve("./public/locales"),
  },
};
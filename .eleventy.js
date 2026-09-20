module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("images");
  return {
    dir: { input: ".", output: "_site", includes: "_includes" },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};

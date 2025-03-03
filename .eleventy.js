module.exports = function(eleventyConfig) {
    // Copy styles folder to the output directory.
    eleventyConfig.addPassthroughCopy("src/styles");
    // Optionally, if you have images or scripts:
    eleventyConfig.addPassthroughCopy("src/img");
    // eleventyConfig.addPassthroughCopy("src/scripts");
    
    return {
      dir: {
        input: "src",
        output: "docs"
      }
    };
  };
  
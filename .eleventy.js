// docs: https://www.11ty.io/docs/config/

module.exports = function(eleventyConfig) {
  
  // eleventyConfig.addFilter( "myFilter", function() {});
  
  // copy the css folder in "src" into the compiled "dist" website, without changing it
  eleventyConfig.addPassthroughCopy("src/css");
 
  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};
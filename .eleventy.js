let CleanCSS = require('clean-css')
let htmlmin = require('html-minifier')

module.exports = eleventyConfig => {
  eleventyConfig.addFilter('cssmin', code => {
    return new CleanCSS({}).minify(code).styles
  })

  eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      })
    }
    return content
  })
}

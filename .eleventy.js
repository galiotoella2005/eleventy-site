const esbuild = require("esbuild");
module.exports = function (eleventyConfig){
// Bundle Three.js before every 11ty build
eleventyConfig.on("eleventy.before", async () => {
  await esbuild.build({
    entryPoints: ["_src/threeScene.js"],
    bundle: true,
    minify: true,
    format: "esm",
    outdir: "_site/js",
    sourcemap: true,
  });
});
// This is so 11ty recognize the _includes and CSS folder and its content
     eleventyConfig.addPassthroughCopy("./_src/CSS/");
     eleventyConfig.addPassthroughCopy("./_src/images/");
     eleventyConfig.addPassthroughCopy("./_src/threed-images/");
     eleventyConfig.addPassthroughCopy({
  "node_modules/@11ty/is-land/is-land.js": "js/is-land.js",
  "node_modules/petite-vue/dist/petite-vue.es.js": "js/petite-vue.js"
});

     
     return{
         dir: {
            input: "_src",
            output: "_site"
        },
    };
};

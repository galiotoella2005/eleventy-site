module.exports = function (eleventyConfig){
// This is so 11ty recognize the _includes and CSS folder and its content
     eleventyConfig.addPassthroughCopy("./_src/css/");
     eleventyConfig.addPassthroughCopy("./_src/images/");

     
     return{
         dir: {
            input: "_src",
            output: "_site"
        },
    };
};

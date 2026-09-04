export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("favicon.*");
    eleventyConfig.addPassthroughCopy("content/**/*.css");
    eleventyConfig.addPassthroughCopy("assets");

    return {
        dir: {
            input: "content"
        },
    };
}

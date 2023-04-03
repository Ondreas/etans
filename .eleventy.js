const { EleventyEdgePlugin } = require('@11ty/eleventy');

module.exports = function (eleventyConfig) {
    // eleventyConfig.addWatchTarget('./src/sass/');
    eleventyConfig.addWatchTarget(
        './src/data/**/*.{js,json}',
        './src/assets/css/**/*.css',
        './src/assets/js/**/*.js',
        // './src/views/**/*.njk',
        // './src/views/**/*.md',
        // './src/views/**/*.html'
        './src/data/**/*.{js,json}',
        './src/_includes/**/*.{njk,html,md}',
        './src/_layouts/**/*.{njk,html,md}',
        './src/posts/**/*.{njk,html,md}'
    );
    
    eleventyConfig.addPassthroughCopy({ 
        './src/static/': '/',
        './src/assets/fonts': '/assets/fonts',
        'node_modules/alpinejs/dist/cdn.min.js': '/assets/js/alpine.js',
    });
    
    eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);
    
    eleventyConfig.addFilter('excerpt', (post) => {
        const content = post.replace(/(<([^>]+)>)/gi, '');
        return content.substr(0, content.lastIndexOf(' ', 200)) + '...';
    });
    
    // Opt-in to 11ty Edge
    eleventyConfig.addPlugin(EleventyEdgePlugin);
    
    return {
        dir: {
            input: 'src',
            output: 'dist',
            layouts: '_layouts',
        },
        templateFormats: [
            'md',
            'njk',
            'html',
        ],
        passthroughFileCopy: true,
    };
};

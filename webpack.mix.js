const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const purgeCss = require('laravel-mix-purgecss');

/*
 |—————————————————————————————————————
 | Mix Asset Management
 |—————————————————————————————————————
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.sass('resources/sass/styles.pcss', 'public/css/styles.css')
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('./tailwind.config.js')],
    })
    .purgeCss({
      enabled: mix.inProduction(),
      folders: ['resources/views'],
      extensions: ['php'],
    });

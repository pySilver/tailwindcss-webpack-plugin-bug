let mix = require("laravel-mix");
const { TailwindCSSWebpackPlugin } = require('tailwindcss-webpack-plugin');

mix
    .setPublicPath("dist")
    // @see: https://laravel-mix.com/docs/main/extract
    // .extract(["turbo", "stimulus"])
    .js("src/js/app.js", "dist/js")
    .postCss("src/css/app.css", "dist/css")
    .sourceMaps(false)
    .browserSync({
        server: ["dist", "src"],
        files: ["./dist/**/*", "./src/*.html"],
    })
    .disableSuccessNotifications()
    .webpackConfig({
        plugins: [
            new TailwindCSSWebpackPlugin(),
        ],
    });

if (mix.inProduction()) {
    mix.version();
}
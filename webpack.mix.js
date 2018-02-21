let mix = require('laravel-mix');

mix.js('resources/assets/client/scripts/app.js', 'public/client/scripts/')
   .sass('resources/assets/client/styles/app.scss', 'public/client/styles/');

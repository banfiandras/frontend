import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
export default defineConfig({
    plugins: [
        laravel({
            input: ['src/main.js'],
            refresh: true,
        }),
        vue(),
    ],
    resolve:{
        alias:{
            vue: "vue/dist/vue.esm-bundler.js",
        }
    }
});


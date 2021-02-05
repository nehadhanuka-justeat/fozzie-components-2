import path from 'path';
import { createVuePlugin } from 'vite-plugin-vue2';

export default {
    plugins: [
        createVuePlugin()
    ],

    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index'),
            name: 'f-vue-icons'
        }
    }
};

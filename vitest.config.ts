// // vitest.config.ts
// import { defineConfig } from 'vitest/config'
// import react from '@vitejs/plugin-react'



// export default defineConfig({
//     plugins: [react()],
//     test: {
//         environment: 'jsdom',
//         coverage: {
//             reporter: ['html'],
//         },
//     },
// })


// vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    test: {
        setupFiles: './vitest.setup.ts', // add this line
        environment: 'jsdom',
        globals: true,
    },
});
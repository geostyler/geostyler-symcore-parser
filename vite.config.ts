import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      copyDtsFiles: true,
      include: [
        'src/SymcoreParser.ts',
        'src/types/schema.d.ts'
      ]
    })
  ],
  build: {
    lib: {
      name: 'geostyler-symcore-parser',
      entry: resolve(__dirname, 'src/SymcoreParser.ts'),
      formats: ['es', 'umd'],
    }
  }
});

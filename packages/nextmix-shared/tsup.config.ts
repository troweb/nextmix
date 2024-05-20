import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  dts: true,
  format: ['esm', 'cjs'],
  esbuildOptions(options) {
    // this makes all of the exported components of this module, client-only
    // TODO: https://github.com/egoist/tsup/issues/835
    options.banner = {
      js: '"use client"',
    };
  }
})

import { defineConfig } from "tsup";

export default defineConfig({
    name: 'tsup',
    entry: ["src/index.ts"],
    dts: {
        resolve: true,
        entry: ['src/index.ts', "src/types/index.ts"]
    },
    splitting: false,
    clean: true,
    format: 'esm',
    sourcemap: false,
})
import { defineConfig } from 'vite'
import dts from "vite-plugin-dts";
import Components from "unplugin-vue-components/vite";
import vue from '@vitejs/plugin-vue'
import { resolve } from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    dts({ tsconfigPath: './tsconfig.app.json', outDir: './dist/types' }), 
    Components({
      dts: './src/types/generated.d.ts',
      types: []
    })
  ],
  build: {
    lib: {
      entry: {
        components: resolve(__dirname, "src/components/index.ts"),
        composables: resolve(__dirname, "src/composables/index.ts"),
        stores: resolve(__dirname, "src/stores/index.ts"),
      },
      
      name: "WsAppLib",
      fileName: (format, entry) => {
        const ext = format === 'es' ? 'js' : 'cjs'
        return entry + '.' + ext 
      },
    },
    rollupOptions: {
      external: ["vue", "pinia", "@vueuse/core"],
      output: {
        globals: {
          vue: "Vue",
          pinia: "pinia",
        }
      }
    }
  },
  resolve: {
    alias: {
      'src': resolve(__dirname, 'src'),
      'components': resolve(__dirname, 'src/components'),
      'composables': resolve(__dirname, 'src/composables'),
      'stores': resolve(__dirname, 'src/stores'),
    }
  }
})

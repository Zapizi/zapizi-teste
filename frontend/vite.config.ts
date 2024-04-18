import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';


export default ({ mode }: any) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
    plugins: [
        react({
          include: "**/*.tsx",
        }),
    ],
    server: {
      port: 3000,
      watch: {
        usePolling: true
      },
      host: true,
    },
    resolve: {
      alias: {
        "src": path.resolve(__dirname, "src"),
        "@components": path.resolve(__dirname, "src/components"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@assets": path.resolve(__dirname, "src/assets"),
        "@styles": path.resolve(__dirname, "src/styles"),
        "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
      },
    },
  })
}
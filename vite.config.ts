import { defineConfig } from "vite";
import { join } from "node:path";

export default defineConfig({
  resolve: {
    alias: {
      "$src": join(process.cwd(), "src")
    }
  },
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
    jsxInject: "import {h, Fragment} from 'reactfree-jsx';",
  },
  base: "/single-elimination-tournament/"
});
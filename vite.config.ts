import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tanstackStart({
      // Use the custom SSR error wrapper in src/server.ts.
      server: { entry: "server" },
    }),
    nitro({ defaultPreset: "cloudflare-module" }),
    viteReact(),
    tailwindcss(),
    tsconfigPaths(),
  ],
});

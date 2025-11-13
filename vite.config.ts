import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // WORDPRESS INTEGRATION: Set base path for deployment
  // For WordPress subfolder deployment, uncomment and set your path:
  // base: '/wp-content/uploads/narasapurlace/',
  // For root deployment or development, leave as '/'
  base: '/',
  
  server: {
    host: "::",
    port: 8080,
  },
  
  build: {
    // Generate relative paths for better WordPress compatibility
    outDir: 'dist',
    assetsDir: 'assets',
    // Optional: Disable hashing for easier WordPress integration
    // rollupOptions: {
    //   output: {
    //     entryFileNames: 'assets/[name].js',
    //     chunkFileNames: 'assets/[name].js',
    //     assetFileNames: 'assets/[name].[ext]'
    //   }
    // }
  },
  
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

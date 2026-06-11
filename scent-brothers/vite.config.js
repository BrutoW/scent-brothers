export default {
  server: {
    port: 5173
  },
  build: {
    // Asegura que los assets se copien correctamente
    assetsDir: 'assets',
    // Copia la carpeta public al build
    publicDir: 'public',
    rollupOptions: {
      output: {
        // Mantiene la estructura de carpetas
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
}
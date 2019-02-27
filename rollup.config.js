const commonjs = require("rollup-plugin-commonjs");
const json = require("rollup-plugin-json");
const sourceMaps = require("rollup-plugin-sourcemaps");
const typescript = require("rollup-plugin-typescript2");

module.exports = {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.cjs.js",
      format: "cjs",
      sourcemap: true
    },
    {
      file: "dist/index.es.js",
      format: "es",
      sourcemap: true
    }
  ],
  watch: {
    include: "src/**"
  },
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json",
      useTsconfigDeclarationDir: true
    }),
    json(),
    commonjs(),
    sourceMaps()
  ]
};

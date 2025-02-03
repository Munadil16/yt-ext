import { defineConfig } from "wxt";

export default defineConfig({
    srcDir: "src",
    outDir: "dist",
    extensionApi: "chrome",
    modules: ["@wxt-dev/module-react"],
});

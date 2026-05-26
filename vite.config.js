import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
    return {
        plugins: [react()],
        base: mode === "production" ? "/a2rp-smart-daily-planner-ui/" : "/",
        build: {
            minify: "esbuild",
            sourcemap: false,
        },
        define: {
            __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
        },
    };
});

import { addPlugin, addTypeTemplate, createResolver, defineNuxtModule } from "@nuxt/kit";
export default defineNuxtModule({
    meta: {
        name: "botbye-module",
        configKey: "botbyeModule",
    },
    setup(options) {
        const resolver = createResolver(import.meta.url);
        addTypeTemplate({
            filename: "types/@botbye/nuxt.d.ts",
            getContents: () => `
declare module "nuxt/schema" {
  interface PublicRuntimeConfig {
    botbye?: {
      clientKey: string;
      api?: string;
      withoutSessions?: boolean;
      withoutReload?: boolean;
      withoutRemoteStorage?: boolean;
    };
  }
}
export {};
`,
        });
        if (options.inject) {
            addPlugin({ src: resolver.resolve("./plugin.client") });
        }
    },
});

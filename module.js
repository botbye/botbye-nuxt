import { addPlugin, createResolver, defineNuxtModule } from '@nuxt/kit';
export default defineNuxtModule({
    meta: {
        name: 'botbye-module',
        configKey: 'nuxt-plugin',
    },
    setup(options) {
        const resolver = createResolver(import.meta.url);
        if (options.inject) {
            addPlugin({ src: resolver.resolve('./plugin.client') });
        }
    },
});

declare const MODULE_NAME = "NUXT";
declare const MODULE_VERSION = "2.1.0";
type TWithInternal = {
    internal: {
        integration: {
            version: string;
            type: string;
        };
    };
};
declare const WITH_INTERNAL: TWithInternal;
export { MODULE_NAME, MODULE_VERSION, WITH_INTERNAL, type TWithInternal, };

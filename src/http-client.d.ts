declare const ofetchHttpClient: {
    type: string;
    call: (url: string, init: {
        method: string;
        headers: Record<string, string>;
        body: unknown;
        keepalive?: boolean;
    }) => {
        result: Promise<string>;
        abort: () => void;
    };
};
export { ofetchHttpClient };

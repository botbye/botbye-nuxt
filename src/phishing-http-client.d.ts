type TOfetchPhishingResponse = {
    status: number;
    headers: Record<string, string>;
    body: Uint8Array;
};
declare const ofetchPhishingHttpClient: {
    type: string;
    call: (url: string, init: {
        method: string;
        headers: Record<string, string>;
        body?: unknown;
    }) => {
        result: Promise<TOfetchPhishingResponse>;
        abort: () => void;
    };
};
export { ofetchPhishingHttpClient };

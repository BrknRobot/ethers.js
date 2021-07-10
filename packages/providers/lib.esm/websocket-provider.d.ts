import { Network, Networkish } from "@ethersproject/networks";
import { ConnectionInfo } from "@ethersproject/web";
import { Event } from "./base-provider";
import { JsonRpcProvider } from "./json-rpc-provider";
export declare type InflightRequest = {
    callback: (error: Error, result: any) => void;
    payload: string;
};
export declare type Subscription = {
    tag: string;
    processFunc: (payload: any) => void;
};
export declare type WebSocketConnectionInfo = ConnectionInfo & {
    reconnect?: boolean;
    reconnectInterval?: number;
};
export declare class WebSocketProvider extends JsonRpcProvider {
    readonly connection: WebSocketConnectionInfo;
    private _websocket;
    readonly _requests: {
        [name: string]: InflightRequest;
    };
    readonly _detectNetwork: Promise<Network>;
    readonly _subIds: Map<string, Promise<string>>;
    readonly _subs: Map<string, Subscription>;
    private get _wsReady();
    private _wsHeartbeatTimeout?;
    constructor(url?: WebSocketConnectionInfo | string, network?: Networkish);
    private setupConnection;
    private heartbeat;
    detectNetwork(): Promise<Network>;
    get pollingInterval(): number;
    resetEventsBlock(blockNumber: number): void;
    set pollingInterval(value: number);
    poll(): Promise<void>;
    set polling(value: boolean);
    send(method: string, params?: Array<any>): Promise<any>;
    static defaultUrl(): string;
    _subscribe(tag: string, param: Array<any>, processFunc: (result: any) => void): Promise<void>;
    _startEvent(event: Event): void;
    _stopEvent(event: Event): void;
    destroy(): Promise<void>;
    /**
     * WebSocket event handlers
     */
    private onopen;
    private onmessage;
    private onclose;
    private onerror;
}
//# sourceMappingURL=websocket-provider.d.ts.map
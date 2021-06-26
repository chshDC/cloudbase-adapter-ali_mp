import {SDKAdapterInterface, StorageType, WebSocketContructor} from "@cloudbase/adapter-interface";
import Request from './Request';
import Storage from "./Storage";
import WebSocket from "./WebSocket";

declare const my;

function isMatch(): boolean {
    if (typeof my === 'undefined') {
        return false;
    }
    if (!my.onAppHide) {
        return false;
    }
    if (!my.offAppHide) {
        return false;
    }
    if (!my.onAppShow) {
        return false;
    }
    if (!my.offAppShow) {
        return false;
    }
    if (!my.getSystemInfoSync) {
        return false;
    }
    if (!my.getStorageSync) {
        return false;
    }
    if (!my.setStorageSync) {
        return false;
    }
    if (!my.connectSocket) {
        return false;
    }
    if (!my.request) {
        return false;
    }

    try {
        if (!my.getSystemInfoSync()) {
            return false;
        }
    } catch (e) {
        return false;
    }

    return true;
}

function genAdapter() {
    const adapter: SDKAdapterInterface = {
        // root对象为全局根对象，没有则填空对象{}
        root: window,
        reqClass: Request,
        wsClass: WebSocket as WebSocketContructor,
        localStorage: Storage,
        // 首先缓存存放策略，建议始终保持localstorage
        primaryStorage: StorageType.local,
        // sessionStorage为可选项，如果平台不支持可不填
        // sessionStorage: Storage,
        getAppSign() {
            return my.getAppIdSync().appId;
        }
    };
    return adapter;
}

const adapter = {
    genAdapter,
    isMatch,
    // runtime标记平台唯一性
    runtime: 'ali_miniapp'
};

export {adapter};
export default adapter;
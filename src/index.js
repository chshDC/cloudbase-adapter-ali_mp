"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adapter = void 0;
var adapter_interface_1 = require("@cloudbase/adapter-interface");
var Request_1 = __importDefault(require("./Request"));
var Storage_1 = __importDefault(require("./Storage"));
var WebSocket_1 = __importDefault(require("./WebSocket"));
function isMatch() {
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
    }
    catch (e) {
        return false;
    }
    return true;
}
function genAdapter() {
    var adapter = {
        root: window,
        reqClass: Request_1.default,
        wsClass: WebSocket_1.default,
        localStorage: Storage_1.default,
        primaryStorage: adapter_interface_1.StorageType.local,
        sessionStorage: sessionStorage
    };
    return adapter;
}
var adapter = {
    genAdapter: genAdapter,
    isMatch: isMatch,
    runtime: 'ali_miniapp'
};
exports.adapter = adapter;
exports.default = adapter;

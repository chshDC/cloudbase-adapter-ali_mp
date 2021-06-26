"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var WebSocket = (function () {
    function WebSocket(url, options) {
        if (options === void 0) { options = {}; }
        my.connectSocket(__assign({ url: url }, options));
        var readyState = 0;
        var socketTask = {
            set onopen(cb) {
                var _this = this;
                my.onSocketOpen(function (e) {
                    readyState = _this.OPEN;
                    cb && cb(e);
                });
            },
            set onmessage(cb) {
                my.onSocketMessage(cb);
            },
            set onclose(cb) {
                var _this = this;
                my.onSocketClose(function (e) {
                    readyState = _this.CLOSED;
                    cb && cb(e);
                });
            },
            set onerror(cb) {
                my.onSocketError(cb);
            },
            send: function (data) { return my.sendSocketMessage({ data: data }); },
            close: function (code) {
                readyState = code;
                my.closeSocket();
            },
            get readyState() {
                return readyState;
            },
            CONNECTING: 0,
            OPEN: 1,
            CLOSING: 2,
            CLOSED: 3
        };
        return socketTask;
    }
    return WebSocket;
}());
exports.default = WebSocket;

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var adapter_interface_1 = require("@cloudbase/adapter-interface");
var Request = (function (_super) {
    __extends(Request, _super);
    function Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Request.prototype.download = function (options) {
        return new Promise(function (resolve, reject) {
            try {
                var url = options.url, headers = options.headers;
                my.downloadFile({
                    url: adapter_interface_1.formatUrl('https:', url),
                    headers: headers,
                    success: function (_a) {
                        var apFilePath = _a.apFilePath;
                        resolve({
                            statusCode: 200,
                            tempFilePath: apFilePath
                        });
                    },
                    fail: function (res) {
                        reject(res);
                    }
                });
            }
            catch (e) {
                reject(e);
            }
        });
    };
    Request.prototype.post = function (options) {
        var url = options.url, data = options.data, headers = options.headers;
        return new Promise(function (resolve, reject) {
            my.request({
                url: adapter_interface_1.formatUrl('https:', url),
                method: 'POST',
                data: data,
                headers: headers,
                dataType: 'json',
                success: function (res) {
                    resolve(res);
                },
                fail: function (res) {
                    reject(res);
                },
            });
        });
    };
    Request.prototype.upload = function (options) {
        var url = options.url, file = options.file, data = options.data, headers = options.headers;
        return new Promise(function (resolve, reject) {
            my.uploadFile({
                url: adapter_interface_1.formatUrl('https:', url),
                fileName: 'file',
                filePath: file,
                formData: __assign(__assign({}, data), { file: file }),
                headers: headers,
                success: function (res) {
                    resolve(res);
                },
                fail: function (res) {
                    reject(res);
                },
            });
        });
    };
    return Request;
}(adapter_interface_1.AbstractSDKRequest));
exports.default = Request;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Storage = {
    setItem: function (key, value) {
        my.setStorageSync(key, value);
    },
    getItem: function (key) {
        return my.getStorageSync(key);
    },
    removeItem: function (key) {
        my.removeStorageSync(key);
    },
    clear: function () {
        my.clearStorageSync();
    }
};
exports.default = Storage;

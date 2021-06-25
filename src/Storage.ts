import {StorageInterface} from "@cloudbase/adapter-interface";

declare const my;

const Storage: StorageInterface = {
    setItem(key: string, value: any) {
        my.setStorageSync(key, value);
    },
    getItem(key: string): any {
        return my.getStorageSync(key);
    },
    removeItem(key: string) {
        my.removeStorageSync(key);
    },
    clear() {
        my.clearStorageSync();
    }
};

export default Storage;
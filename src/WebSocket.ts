// WebSocket为平台特有的WebSocket，与HTML5标准规范一致
import {WebSocketInterface} from "@cloudbase/adapter-interface";

declare const my;

export default class WebSocket {
    constructor(url: string, options: object = {}) {
        my.connectSocket({
            url,
            ...options,
        });

        let readyState = 0;
        const socketTask: WebSocketInterface = {
            set onopen(cb) {
                my.onSocketOpen(e => {
                    readyState = this.OPEN;
                    cb && cb(e);
                });
            },
            set onmessage(cb) {
                my.onSocketMessage(cb)
            },
            set onclose(cb) {
                my.onSocketClose(e => {
                    readyState = this.CLOSED;
                    cb && cb(e);
                })
            },
            set onerror(cb) {
                my.onSocketError(cb)
            },
            send: (data) => my.sendSocketMessage({data: data}),
            close: (code?: number) => {
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
}


// export class WebSocket {
//     constructor(url: string, options: object = {}) {
//         const socketTask: WebSocketInterface = {
//             set onopen(cb) {
//                 // ...
//             },
//             set onmessage(cb) {
//                 // ...
//             },
//             set onclose(cb) {
//                 // ...
//             },
//             set onerror(cb) {
//                 // ...
//             },
//             send: (data) => {
//                 // ...
//             },
//             close: (code?: number, reason?: string) => {
//                 // ...
//             },
//             get readyState() {
//                 // ...
//                 return readyState;
//             },
//             CONNECTING: 0,
//             OPEN: 1,
//             CLOSING: 2,
//             CLOSED: 3
//         };
//         return socketTask;
//     }
// }
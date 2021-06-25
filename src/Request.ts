import {
    AbstractSDKRequest,
    formatUrl,
    IRequestOptions
} from "@cloudbase/adapter-interface";

declare const my;

export default class Request extends AbstractSDKRequest {

    download(options: IRequestOptions): any {
        return new Promise((resolve, reject) => {
            try {
                const {url, headers} = options;
                my.downloadFile({
                    url: formatUrl('https:', url),
                    headers,
                    success: ({apFilePath}) => {
                        resolve({
                            statusCode: 200,
                            tempFilePath: apFilePath
                        });
                    },
                    fail: (res) => {
                        reject(res);
                    }
                });
            } catch (e) {
                reject(e);
            }
        });
    }

    post(options: IRequestOptions): any {
        const {url, data, headers} = options;
        return new Promise((resolve, reject) => {
            my.request({
                url: formatUrl('https:', url),
                method: 'POST',
                data,
                headers,
                dataType: 'json',
                success: function (res) {
                    resolve(res);
                },
                fail: function (res) {
                    reject(res);
                },
            });
        })

    }

    upload(options: IRequestOptions): any {
        const {url, file, data, headers} = options;
        return new Promise((resolve, reject) => {
            my.uploadFile({
                url: formatUrl('https:', url),
                fileName: 'file',
                filePath: file,
                formData: {...data, file},
                headers,
                success: res => {
                    resolve(res);
                },
                fail: function (res) {
                    reject(res);
                },
            });
        });
    }

}
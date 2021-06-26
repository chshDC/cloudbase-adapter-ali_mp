## cloudbase-adapter-ali_mp

[![NPM Version](https://img.shields.io/npm/v/cloudbase-adapter-ali_mp.svg?style=flat)](https://www.npmjs.com/package/cloudbase-adapter-ali_mp)
[![](https://img.shields.io/npm/dt/cloudbase-adapter-ali_mp.svg)](https://www.npmjs.com/package/cloudbase-adapter-ali_mp)

cloudbase/js-sdk【阿里系列】适配器接口。

## 安装
```bash
npm i cloudbase-adapter-ali_mp -S
```

## 使用
```javascript
import tcb from "@cloudbase/js-sdk";
import AliMpAdapter from 'cloudbase-adapter-ali_mp';

// 以下两种方式二选一
// 1.单参数传入
tcb.useAdapters(AliMpAdapter);
// 2.数组形式传参
tcb.useAdapters([AliMpAdapter]);
// adapter必须在init之前传入
tcb.init();
```
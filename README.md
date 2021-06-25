## cloudbase-adapter-ali_mp

[![NPM Version](https://img.shields.io/npm/v/cloudbase-adapter-ali_mp.svg?style=flat)](https://www.npmjs.com/package/cloudbase-adapter-ali_mp)


tcb-js-sdk阿里系小程序适配器

## 安装
### npm
```bash
npm i cloudbase-adapter-ali_mp -S
```

## 使用
```javascript
import tcb from "@cloudbase/js-sdk";
import aliMpAdapter from '@jcbbhe/cloudbase-adapter-ali_mp';

// 以下两种方式二选一
// 1.单参数传入
tcb.useAdapters(aliMpAdapter);
// 2.数组形式传参
tcb.useAdapters([aliMpAdapter]);
// adapter必须在init之前传入
tcb.init();
```

### CommonJS
```javascript
import tcb from "@cloudbase/js-sdk";
const aliMpAdapter = require('@jcbbhe/cloudbase-adapter-ali_mp');

// 以下两种方式二选一
// 1.单参数传入
tcb.useAdapters(aliMpAdapter.adapter);
// 2.数组形式传参
tcb.useAdapters([aliMpAdapter.adapter]);
// adapter必须在init之前传入
tcb.init();
```
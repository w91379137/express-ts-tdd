var child_process = require('child_process');

let child = child_process.exec('ping 8.8.8.8', function (err, stdout, stderr) {
    console.log(stdout);
});
console.log(child);
console.log(child.pid);

export var terminal = 1;


// 四個方法的解釋
// https://dzone.com/articles/understanding-execfile-spawn-exec-and-fork-in-node
// https://carlos-studio.com/2017/09/04/node-js-%E4%BD%BF%E7%94%A8-child_process-%E6%A8%A1%E7%B5%84%E5%BB%BA%E7%AB%8B%E5%AD%90%E8%99%95%E7%90%86%E7%A8%8B%E5%BA%8F/

// ipc 通訊
// https://www.byvoid.com/zht/blog/node-child-process-ipc

// 目標 執行一個 一直活著的子程式
// 可以 知道哪幾個 沒有死掉
// 指定關閉 子程式
 
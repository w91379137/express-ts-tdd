var child_process = require('child_process');

let child = child_process.exec('ping 8.8.8.8', function (err, stdout, stderr) {
    console.log(stdout);
});
console.log(child);
console.log(child.pid);

export var terminal = 1;


// 四個方法的解釋
// https://dzone.com/articles/understanding-execfile-spawn-exec-and-fork-in-node

// ipc 通訊
// https://www.byvoid.com/zht/blog/node-child-process-ipc

// 目標 執行一個 一直活著的子程式
// 可以 知道哪幾個 沒有死掉
// 指定關閉 子程式
 
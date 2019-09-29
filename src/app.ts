
require('source-map-support').install();

let debug_AC = require('debug')('app:a:c')
let debug_BC = require('debug')('app:b:c')
let debug_AB = require('debug')('app:a:b')

setTimeout(() => {
    debug_AC('Build env_ac:' + env);
    debug_BC('Build env_bc:' + env);
    debug_AB('Build env_ab:' + env);
}, 100);

// class Foo {
//     constructor() { this.bar(); }
//     bar() { throw new Error('this is a demo'); }
// }
// new Foo();

// 這樣不行
// throw new Error('Test');

// 這個可以
// setTimeout(() => {
//     throw new Error('Test');
// }, 1000);
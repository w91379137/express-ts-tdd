
declare function require(name: string);
require('source-map-support').install();

console.log('Build env:', env);

class Foo {
    constructor() { this.bar(); }
    bar() { throw new Error('this is a demo'); }
}
new Foo();

// 這樣不行
// throw new Error('Test');

// 這個可以
// setTimeout(() => {
//     throw new Error('Test');
// }, 1000);
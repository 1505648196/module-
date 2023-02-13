// import { foo } from './index.js';
// console.log('b.js');
// console.log(foo);
// export let bar = 'bar';

import { foo } from './index.js';
console.log('b');
export function bar() {
  console.log('bar');

  if (Math.random() > 0.5) {
    foo();
  }
}
let bb = 'bb';
console.log(bb);

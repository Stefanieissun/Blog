import {promisify} from 'util'

import {readFile} from 'fs'

let readF=promisify(readFile);

readF('../MongoDB-/MongoDB常用操作.md').then(a=>console.log(a.toString()));
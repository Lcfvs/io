# <a name="reference">io</a>

Simplify your function input destructuring

## <a name="install">Install</a>

`npm i @lcf.vs/io

## <a name="apis">APIs</a>

```js
import io from '@lcf.vs/io'

function defineC([{a, b}, input], c) {
  input.c = c
  input.d = a + b + c
}

function defineD([{a, b, c}, input]) {
  input.d = a + b + c
}

function log([input]) {
  console.log(input)
}

const obj = {a: 1, b: 2}

io(defineC, obj, 3) // obj = {a: 1, b: 2, c: 3}
io(defineD, obj) // obj = {a: 1, b: 2, c: 3, d: 6}
io(log, obj) // {a: 1, b: 2, c: 3, d: 6}
```

## <a name="license">License</a>

[MIT](https://github.com/Lcfvs/io/blob/master/licence.md)
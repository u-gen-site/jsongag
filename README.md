# jsongag

A library to obfuscate JSON using hash algorithm.

## Usage

### Overview

```javascript

import JSONGag from 'jsongag'

const data = {
    "0ba9f954af9e36124b641edc5f574f6f13f3f946602e73213493ecc2ab0bc588": "hello world"
}

const jsongag = new JSONGag({
    salt = "hash salt string",
    data,
})

console.log(jsongag.get('greet'))
// Output: hello world

jsongag.set('greet', 'nyanpasu~~~')

console.log(jsongag.get('greet'))
// Output: nyanpasu~~~

```

### Initialize

- First, you should construct JSONGag object.
- It is better to prepare random salt string. Salt will be empty string by default.

```javascript
import JSONGag from 'jsongag'

const data = {}

const jsongag = new JSONGag({
    salt = "hash salt string",
    data,
})
```

### Set value

```javascript
jsongag.set('<KEY>', __VALUE__)
```

### Get value

```javascript
jsongag.get('<KEY>')
// -> __VALUE__
```

### Export as JSON string

```javascript
const jsongag = new JSONGag({
    salt = "hash salt string",
    data,
})
jsongag.set('greet', 'hello world')
jsongag.toJSON()
// -> '{"0ba9f954af9e36124b641edc5f574f6f13f3f946602e73213493ecc2ab0bc588":"hello world"}'
```

### Change hash function

- JSONGag use SHA256 algorithm by default.
- To change hash function, you can specify it to constructor.

```typescript
const jsongag = new JSONGag({
    salt = "hash salt string",
    hash = (key: string) => {
        return sha1(key);
    }
    data,
})
```

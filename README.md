# is-kubernetes

> Check if the process is running inside a kubernetes container

## Install

```
$ npm install is-kubernetes
```

## Usage

```js
const isKubernetes = require('is-kubernetes');

if (isKubernetes()) {
	console.log('Running inside a kubernetes container');
}
```

## CLI

```
$ npx is-kubernetes
```

Exits with code 0 if inside a kubernetes container and 1 if not.

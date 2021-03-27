/**
Check if the process is running inside a kubernetes container.
@example
```
import isKubernetes = require('is-kubernetes');
if (isKubernetes()) {
	console.log('Running inside a kubernetes container');
}
```
*/
declare function isKubernetes(): boolean;

export = isKubernetes;
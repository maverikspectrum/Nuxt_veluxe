# Installation
> `npm install --save @types/etag`

# Summary
This package contains type definitions for etag (https://github.com/jshttp/etag#readme).

# Details
Files were exported from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/etag.
## [index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/etag/index.d.ts)
````ts
/// <reference types="node" />
export = etag;

declare function etag(entity: string | Buffer | etag.StatsLike, options?: etag.Options): string;

declare namespace etag {
    interface Options {
        weak?: boolean | undefined;
    }

    interface StatsLike {
        ctime: Date;
        mtime: Date;
        ino: number;
        size: number;
    }
}

````

### Additional Details
 * Last updated: Mon, 06 Nov 2023 22:41:05 GMT
 * Dependencies: [@types/node](https://npmjs.com/package/@types/node)

# Credits
These definitions were written by [BendingBender](https://github.com/BendingBender).

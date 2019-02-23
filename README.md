# Moonsharp Types

Typescript definitions for the [Moonsharp Lua interpreter](http://www.moonsharp.org/) made with [types-lua](https://github.com/ark120202/types-lua)

## Installation

1. Get npm package

```sh
yarn add -D https://github.com/tts-community/types-moonsharp
# or
npm install -D https://github.com/tts-community/types-moonsharp

# And if we publish it:
yarn add -D @types/moonsharp
```

2. Configure `tsconfig.json`

> Typescript will not automatically load typescript definitions unless they are a `@types` module

```json
{
  "compilerOptions": {
    "types": ["types-lua"]
  }
}
```

### Loading only a subset of features

Some Lua environments are sandboxed and don't have some globals declared, like io, os and debug. To avoid registering these globals you should look at the version-specific file at the root of this package and loaded each of it's dependencies separately. For example

```json
{
  "compilerOptions": {
    "types": [
      "types-moonsharp/core/coroutine",
      "types-moonsharp/core/global",
      "types-moonsharp/core/math",
      "types-moonsharp/core/metatable",
      "types-moonsharp/core/modules",
      "types-moonsharp/core/string",
      "types-moonsharp/core/table",
      "types-moonsharp/patches"
    ]
  }
}
```
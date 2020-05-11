# ts-to-node

[![Scripts sets up by @solid-soda/scripts v2.1.0](https://img.shields.io/static/v1?label=@solid-soda/scripts&message=2.1.0&color=75ddf4)](https://github.com/solid-soda/scripts)

No-effort way to compile TypeScript with absolute import replacing.

## Usage

```
yarn add -D @solid-soda/ts-to-node
yarn ts-to-node
```

You are fabulous!

## Motivation

Imagine! You want to write TypeScript code, make really great things and use absolute imports. But, Node.js doesn't know about your absolute imports. Just use this task 🌚

## Usage

### Local

You can install it locally:

```
yarn add -D @solid-soda/ts-to-node
yarn @solid-soda/ts-to-node
```

or, if you prefer `npm`:

```
npm i --save-dev @solid-soda/ts-to-node
npm run @solid-soda/ts-to-node
```

### No-install

And you can use it by `dlx`/`npx`:

```
yarn dlx @solid-soda/ts-to-node
```

or, if you prefer `npm`/`yarn@classic`

```
npx @solid-soda/ts-to-node
```

### Custom config

If you want to pass custom `tsconfig.json` to script, you can easily do it with arguments:

```
yarn @solid-soda/ts-to-node tsconfig.custom.json
```

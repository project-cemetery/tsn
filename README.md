# tsn

[![Scripts sets up by @solid-soda/scripts v2.1.0](https://img.shields.io/static/v1?label=@solid-soda/scripts&message=2.1.0&color=75ddf4)](https://github.com/solid-soda/scripts)

No-effort way to compile TypeScript with absolute import replacing.

## Usage

```
yarn add -D @solid-soda/tsn
yarn tsn
```

You are fabulous!

## Motivation

Imagine! You want to write TypeScript code, make really great things and use absolute imports. But, Node.js doesn't know about your absolute imports. Just use this task 🌚

## Usage

### Local

You can install it locally:

```
yarn add -D @solid-soda/tsn
yarn tsn
```

or, if you prefer `npm`:

```
npm i --save-dev @solid-soda/tsn
npm run tsn
```

### No-install

And you can use it by `dlx`/`npx`:

```
yarn dlx @solid-soda/tsn
```

or, if you prefer `npm`/`yarn@classic`

```
npx @solid-soda/tsn
```

### Custom config

If you want to pass custom `tsconfig.json` to script, you can easily do it with arguments:

```
yarn tsn tsconfig.custom.json
```

### Runtime usage

If you using `ts-node` and want check code with absolute imports without compilation, you can use `runtime`-helper.

```
ts-node --project tsconfig.json -r @solid-soda/tsn YOUR_CODE.ts
```

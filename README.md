# @dryauk/commitlint-config

[**commitlint**](https://commitlint.js.org/) shareable config.

## Install

```bash
yarn add -D @commitlint/cli @dryauk/commitlint-config
```

## Usage

The shareable config can be configured in your `package.json`.

```json
{
  "commitlint": {
    "extends": "@dryauk/commitlint-config"
  }
}
```

If you don’t want to use `package.json`, you can use any of the [supported extensions](https://github.com/conventional-changelog/commitlint#config) to export a configuration, e.g. `.commitlintrc`:

```json
{
  "extends": "@dryauk/commitlint-config"
}
```

---
title: Typescript
---
## Typescript

TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.

It runs on any browser, any host, any OS, and is Open Source.

Also, it adds static typing functionality to JavaScript.

If you want to try out TypeScript without installation, visit the <a href='http://www.typescriptlang.org/play/index.html' target='_blank' rel='nofollow'>TypeScript Playground</a>.

### Installation

You can install TypeScript with npm.

```
npm install -g typescript
```

If you want to use it in a project you can install in `devDependencies`:

```
npm install --save-dev typescript
```

And add a script to build on `package.json`'s scripts section.

### Compiling TS files to JS files

Once you have `typescript` installed you can run `tsc file.ts`.

#### Compiling a project

If you have a project and want to compile all files in it you will need to create a config file first. To do that run:

```
tsc -init
```

And a `tsconfig.json` file will be created. Now you can simply call `tsc` and it is going to build the entire folder.

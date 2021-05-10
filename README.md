# plugin issue demo

## background

i'm trying to create a custom plugin using the defaults exposed via:

```
$ cd packages
$ yarn builder new plugin hello-world
```

from there i build and import it via:

```
$ cd hello-world
$ yarn demo // build and import plugin
```

then i run a yarn

```
$ yarn
Ambiguous Syntax Error: Cannot find who to pick amongst the following alternatives:

  0. yarn install [--json] [--immutable] [--immutable-cache] [--check-cache] [--inline-builds] [--skip-builds]
  1. yarn

While running
```

if i remove the plugin from `.yarnrc.yml` and run yarn again

```
$ yarn
➤ YN0000: ┌ Resolution step
➤ YN0002: │ @yarnpkg/builder@npm:3.0.0-rc.2 [1b5f7] doesn't provide esbuild (p92871), requested by @yarnpkg/esbuild-plugin-pnp
➤ YN0000: │ Some peer dependencies are incorrectly met; run yarn explain peer-requirements <hash> for details, where <hash> is the six-letter p-prefixed code
➤ YN0000: └ Completed
➤ YN0000: ┌ Fetch step
➤ YN0000: └ Completed in 0s 207ms
➤ YN0000: ┌ Link step
➤ YN0000: └ Completed
➤ YN0000: Done with warnings in 0s 476ms
```

## `yarn hello world --name test`

i understand that this is supposed to print

```
hello test
```

instead i get

```
$ yarn hello world --name test
Usage Error: Couldn't find a script named "hello".

$ yarn run [--inspect] [--inspect-brk] <scriptName> ...
```

what am i doing incorrectly?


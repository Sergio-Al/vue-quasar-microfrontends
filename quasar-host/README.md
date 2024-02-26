# Quasar App (quasar-host)

A quasar host project

## Microfrontends

In order to work with microfrontends, create and add a new file inside the ```.quasar``` directory called ```main.js``` with the following content

```js
import('./client-entry')
```

that's all. It's already configured to work with module federation!

## Install the dependencies
```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Lint the files
```bash
yarn lint
# or
npm run lint
```


### Format the files
```bash
yarn format
# or
npm run format
```



### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js).

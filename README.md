## Quasar - Microfrontends

In order to work with microfrontends, create and add a new file inside each project ```quasar-host``` and ```quasar-remote``` in the ```.quasar``` directory called ```main.js``` with the following content

```js
import('./client-entry')
```

That's all. It's already configured to work with module federation!
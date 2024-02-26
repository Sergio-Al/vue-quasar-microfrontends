import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';
import { loadRemoteModule } from '@angular-architects/module-federation';

import messages from 'src/i18n';

export type MessageLanguages = keyof typeof messages;
// Type-define 'en-US' as the master schema for the resource
export type MessageSchema = typeof messages['en-US'];

// See https://vue-i18n.intlify.dev/guide/advanced/typescript.html#global-resource-schema-type-definition
/* eslint-disable @typescript-eslint/no-empty-interface */
declare module 'vue-i18n' {
  // define the locale messages schema
  export interface DefineLocaleMessage extends MessageSchema { }

  // define the datetime format schema
  export interface DefineDateTimeFormat { }

  // define the number format schema
  export interface DefineNumberFormat { }
}
/* eslint-enable @typescript-eslint/no-empty-interface */

export default boot(async ({ app }) => {
  // Load remote modules
  const remoteModules = await loadRemoteModule({
    remoteEntry: 'http://localhost:8081/remoteEntry.js',
    remoteName: 'quasar_remote',
    exposedModule: './i18nConfig',
  });

  const mergedMessages = {
    ...messages,
    'en-US': {
      ...messages['en-US'],
      ...remoteModules.default.global.messages.value['en-US']
    },
    'es-ES': {
      ...messages['es-ES'],
      ...remoteModules.default.global.messages.value['es-ES']
    }
  };

  const i18n = createI18n<{ message: MessageSchema }, MessageLanguages>({
    locale: 'en-US',
    legacy: false,
    messages: mergedMessages,
  });

  // Set i18n instance on app
  app.use(i18n);
});

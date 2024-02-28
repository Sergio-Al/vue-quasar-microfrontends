import { boot } from 'quasar/wrappers';

import MainDialogVue from 'src/components/MainDialog.vue';

export default boot(({ app }) => {
  app.component('MainDialog', MainDialogVue);
});

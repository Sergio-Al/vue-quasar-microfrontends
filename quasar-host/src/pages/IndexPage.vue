<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';
import { ref, defineAsyncComponent, watch } from 'vue';

const MyCounter = defineAsyncComponent(
  () => import('quasar_remote/MyCounter.vue')
);
const GeneralComponent = defineAsyncComponent(
  () => import('quasar_accounts/GeneralComponent.vue')
);


const { t } = useI18n();

const counter = ref(0);
const counterMessage = ref(t('card_counter_message'));
const counterModal = ref(false);
const todos = ref<Todo[]>([
  {
    id: 1,
    content: 'ct1',
  },
  {
    id: 2,
    content: 'ct2',
  },
  {
    id: 3,
    content: 'ct3',
  },
  {
    id: 4,
    content: 'ct4',
  },
  {
    id: 5,
    content: 'ct5',
  },
]);
const meta = ref<Meta>({
  totalCount: 1200,
});

const incrementCounter = () => {
  counter.value++;
};

watch(counter, (newVal) => {
  if (newVal > 10) {
    counterMessage.value = t('card_counter_message_2');
  }

  if (newVal > 20) {
    counterModal.value = false;
  }
});
</script>

<template>
  <q-page class="row items-center justify-evenly">
    <example-component :title="$t('example_component_title')" active :todos="todos" :meta="meta"></example-component>
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">{{ $t('card_counter_title') }}</div>
        <div class="text-subtitle2">{{ $t('card_counter_description') }}</div>
      </q-card-section>
      <q-card-section :class="[counter < 10 ? 'text-primary' : 'text-bold text-negative']">{{ counterMessage }}
      </q-card-section>
    </q-card>
    <q-btn @click="counterModal = true" :label="$t('card_counter_dialog_button')" />
  </q-page>
  <main-dialog size-dialog="dialog-lg" v-model="counterModal" header :iconDialog="''" :persistent="false">
    <template #header>
      <q-toolbar>
        <q-btn flat round dense icon="close" @click="counterModal = false" />
        <q-toolbar-title>{{ $t('card_counter_dialog_title') }}</q-toolbar-title>
      </q-toolbar>
    </template>
    <template #body>
      <MyCounter :counter="counter" @increment="incrementCounter" />
      <GeneralComponent />
    </template>
  </main-dialog>
</template>

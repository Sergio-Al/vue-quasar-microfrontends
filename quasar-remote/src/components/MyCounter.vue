<script setup lang='ts'>
import { storeToRefs } from 'pinia';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useUserStore } from 'quasar_host/userStore';

interface Props {
  /** counter */
  counter: number;
  /** title of the counter */
  title?: string;
}

interface Emits {
  /** increment */
  (e: 'increment'): void;
}

const props = withDefaults(defineProps<Props>(),
  {
    title: 'Counter'
  }
);
const emits = defineEmits<Emits>();

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const changeUserName = () => {
  user.value = { ...user.value, name: 'Alejandro' }
};
</script>

<template>
  <div>
    <q-card class="my-card">
      <q-card-section>
        <div class="row q-gutter-x-sm text-h6 items-center q-mb-sm">
          <q-avatar icon="person" size="md" text-color="white" color="primary">
            <q-tooltip>
              {{ $t('remote_my_name', { name: user.name }) }}
            </q-tooltip>
          </q-avatar>
          <span>{{ user.name }}</span>
        </div>
        <span class="q-py-sm text-blue-6 text-bold text-h3">
          {{ props.title }}
        </span>
        <p class="q-mt-sm text-h6">{{ $t('remote_counter_description', { count: props.counter }) }}</p>
      </q-card-section>
      <q-card-section>
        <p>{{ $t('remote_success') }}</p>
        <div class="column q-col-gutter-md justify-center items-center">
          <div>
            <q-btn color="primary" icon="add" :label="$t('remote_counter_button')" @click="emits('increment')" />
          </div>
          <div>
            <q-btn color="warning" icon="remove" :label="$t('remote_change_name')" @click="changeUserName" />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped lang='scss'>
.my-card {
  min-width: 300px;
  margin: 0 auto;
}
</style>

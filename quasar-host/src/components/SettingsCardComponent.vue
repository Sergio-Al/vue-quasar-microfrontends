<script setup lang='ts'>
import { useI18n } from 'vue-i18n';
import { useUserStore } from 'src/stores/userStore';

const { locale } = useI18n();
const userStore = useUserStore();

const localeOptions = [
  {
    label: 'English',
    value: 'en-US'
  },
  {
    label: 'Spanish',
    value: 'es-ES'
  }
];
</script>

<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="text-h6">{{ $t('settings_title') }}</div>
      <div class="text-subtitle2">{{ $t('settings_subtitle') }}</div>
      <span>{{ userStore.username }}</span>
    </q-card-section>
    <q-card-section>
      <q-select v-model="locale" :options="localeOptions" :label="$t('settings_language')" dense borderless emit-value
        map-options options-dense style="min-width: 150px" />
    </q-card-section>
  </q-card>
</template>

<style scoped lang='scss'></style>

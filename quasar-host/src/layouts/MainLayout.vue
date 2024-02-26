<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from 'src/stores/userStore';

import SidebarComponent from 'components/SidebarComponent.vue';
import SettingsCardComponent from 'src/components/SettingsCardComponent.vue';

const user = useUserStore();
const essentialLinks = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
  }
];

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          {{ $t('app_title') }}
        </q-toolbar-title>

        <div>
          <span class="q-mx-sm">{{ user.username }}</span>
          <q-btn color="primary" icon="settings" :label="$t('option_label')">
            <q-popup-proxy>
              <SettingsCardComponent />
            </q-popup-proxy>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <SidebarComponent :title="$t('links_sidebar')" :links="essentialLinks" />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>


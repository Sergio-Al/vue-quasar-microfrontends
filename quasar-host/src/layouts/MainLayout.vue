<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from 'src/stores/userStore';

import SidebarComponent from 'components/SidebarComponent.vue';
import SettingsCardComponent from 'src/components/SettingsCardComponent.vue';

const user = useUserStore();
const essentialLinks = [
  {
    title: 'Accounts',
    caption: 'Manage your accounts',
    icon: 'account_circle',
  },
  {
    title: 'Contacts',
    caption: 'Manage your contacts',
    icon: 'contacts',
  },
  {
    title: 'Prospects',
    caption: 'Manage your prospects',
    icon: 'group',
  },
  {
    title: 'Leads',
    caption: 'Manage your leads',
    icon: 'assignment_ind',
  },
  {
    title: 'Reservation',
    caption: 'Manage your reservations',
    icon: 'event_note',
  },
  {
    title: 'Deliviery',
    caption: 'Manage your deliveries',
    icon: 'local_shipping',
  },
  {
    title: 'Opportunities',
    caption: 'Manage your opportunities',
    icon: 'monetization_on',
  },
  {
    title: 'Quotes',
    caption: 'Manage your quotes',
    icon: 'description',
  },
  {
    title: 'Quotes Models',
    caption: 'Manage your quotes models',
    icon: 'description',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

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

<script setup lang='ts'>
import { ref } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const email = ref('');
const password = ref('');

const submit = () => {
  console.log('submit', email.value, password.value);
  $q.notify({
    message: 'Login',
    color: 'positive',
    position: 'top',
    icon: 'check',
  });
};

const close = () => {
  console.log('close');
};
</script>

<template>
  <q-page-container>
    <q-card class='q-ma-md'>
      <q-card-section>
        <q-input v-model='email' label='Email' outlined type='email' @keyup.enter='submit' />
        <q-input v-model='password' label='Password' outlined type='password' @keyup.enter='submit' />
      </q-card-section>
      <q-card-actions align='right'>
        <q-btn label='Close' color='negative' @click='close' />
        <q-btn label='Submit' color='primary' @click='submit' />
      </q-card-actions>
    </q-card>
  </q-page-container>
</template>

<style scoped lang='scss'></style>

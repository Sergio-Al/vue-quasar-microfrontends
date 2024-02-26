<template>
  <q-page class="row items-center justify-evenly">
    <MyCounter title="Counter from remote" :counter="counter" @increment="incrementCounter" />
  </q-page>
</template>

<script setup lang="ts">
import MyCounter from 'src/components/MyCounter.vue';
import { ref } from 'vue';

const counter = ref<number>(0);

const incrementCounter = () => {
  counter.value++;
};
</script>

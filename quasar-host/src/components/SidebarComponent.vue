<script setup lang='ts'>
import EssentialLink from './EssentialLink.vue';
interface EssentialLinkProps {
  title: string;
  caption?: string;
  icon?: string;
}
interface Props {
  title: string;
  links: EssentialLinkProps[];
}
const props = defineProps<Props>();
</script>

<template>
  <div>
    <q-list>
      <q-item-label header>
        {{ props.title }}
      </q-item-label>
      <EssentialLink v-for="link in props.links" :key="link.title" v-bind="link" />
    </q-list>
  </div>
</template>

<style scoped lang='scss'></style>

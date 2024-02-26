import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

interface User {
  id: number;
  name: string;
  email: string;
}

export const useUserStore = defineStore('user-store', () => {
  const user = ref<User>({
    id: 0,
    name: 'Sergio',
    email: 'sergio@example.com',
  });

  return {
    // State
    user,

    // Getters
    username: computed(() => user.value.name),

    // Actions
  }
})

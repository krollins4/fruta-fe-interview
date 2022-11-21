import { defineStore } from 'pinia'
import { useQuery } from 'villus';

// https://pinia.vuejs.org/core-concepts/
// https://villus.logaretm.com/guide/mutations/

export const useFruitsStore = defineStore('fruits', () => {
  async function listFruits() {
    const { data } = await useQuery({
      query: `
        query listFruits {
          fruits {
            id
            created
          }
        }
      `,
    });
    return { items: data?.value?.fruits, count: data?.value?.fruits?.length };
  }

  return { listFruits }
})

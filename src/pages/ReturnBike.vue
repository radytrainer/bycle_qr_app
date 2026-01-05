<template>
  <div class="min-h-screen bg-slate-100 p-4">
    <div class="bg-white p-4 rounded shadow">
      <h2 class="font-bold mb-3">Return Bike</h2>

      <select v-model="condition" class="border p-2 rounded w-full">
        <option value="good">Good</option>
        <option value="old">Old</option>
        <option value="broken">Broken</option>
      </select>

      <button
        @click="submit"
        class="mt-4 bg-green-600 text-white py-2 rounded w-full"
      >
        Confirm Return
      </button>
    </div>
  </div>
</template>

<script setup>
import axios from "axios"
import { ref } from "vue"
import { useRoute, useRouter } from "vue-router"

const condition = ref("good")
const route = useRoute()
const router = useRouter()

const submit = async () => {
  await axios.post("/api/return-bike", {
    bike_id: route.params.id,
    condition
  })
  router.push(`/bike/${route.params.id}`)
}
</script>

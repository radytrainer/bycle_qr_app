<template>
  <div class="min-h-screen bg-slate-100 p-4">
    <div class="bg-white rounded shadow p-4">
      <h2 class="font-bold text-lg mb-2">Bicycle Information</h2>

      <div v-if="bike">
        <StatusBadge :status="bike.status" />

        <div v-if="bike.status === 'borrowed'" class="mt-3">
          <p><b>Student:</b> {{ bike.student_name }}</p>
          <p><b>Class:</b> {{ bike.class }}</p>
          <p><b>Generation:</b> {{ bike.generation }}</p>
          <p><b>Borrow Date:</b> {{ bike.borrow_date }}</p>
        </div>

        <div v-else class="mt-3 text-green-600 font-semibold">
          This bike belongs to PNC
        </div>

        <router-link
          :to="`/return/${bike.bike_id}`"
          class="block mt-4 text-center bg-orange-500 text-white py-2 rounded"
        >
          Return Bike
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router"
import axios from "axios"
import StatusBadge from "../components/StatusBadge.vue"

const route = useRoute()
const bike = ref(null)

onMounted(async () => {
  const res = await axios.get(`/api/bike?id=${route.params.id}`)
  bike.value = res.data
})
</script>

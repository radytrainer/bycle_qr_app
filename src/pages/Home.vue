<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-slate-100 p-4">
    <h1 class="text-xl font-bold mb-4">Student Bicycle QR</h1>

    <input
      v-model="bikeId"
      placeholder="Enter Bike ID"
      class="border p-2 rounded w-full max-w-xs"
    />

    <button
      @click="generateQR"
      class="mt-3 bg-blue-600 text-white px-4 py-2 rounded w-full max-w-xs"
    >
      Generate QR
    </button>

    <img v-if="qr" :src="qr" class="mt-4 w-40" />
  </div>
</template>

<script setup>
import QRCode from "qrcode"
import { ref } from "vue"

const bikeId = ref("")
const qr = ref("")

const generateQR = async () => {
  qr.value = await QRCode.toDataURL(
    `${location.origin}/bike/${bikeId.value}`
  )
}
</script>

<template>
  <span
    class="px-3 py-1 rounded text-white text-sm"
    :class="status === 'borrowed' ? 'bg-red-500' : 'bg-green-500'"
  >
    {{ status }}
  </span>
</template>

<script setup>
defineProps({ status: String })
</script>

<template>
  <div 
    class="flex items-center py-3 px-4 transition-all duration-300 cursor-pointer hover:bg-white hover:shadow-md rounded-md"
    :class="{ 'bg-white shadow-md': active }"
    @click="$emit('click')"
  >
    <div class="mr-4">
      <slot name="icon">
        <div class="w-6 h-6 flex items-center justify-center text-gray-500">
          <span>⬦</span>
        </div>
      </slot>
    </div>
    <div class="flex-grow">
      <h3 class="font-semibold text-gray-800">{{ title }}</h3>
    </div>
    <div class="text-primary-600">
      <span class="text-xl">→</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: false
  }
});

defineEmits(['click']);
</script>
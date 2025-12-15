<script setup lang="ts">
const { t } = useI18n()

const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(_isDark) {
    colorMode.preference = _isDark ? 'dark' : 'light'
  }
})
</script>

<template>
  <div class="p-5 flex flex-col justify-center items-center gap-4">
    <Button
      color="brand-primary"
      :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
      @click="isDark = !isDark"
    >
      {{ isDark ? 'Light' : 'Dark' }}
    </Button>
  
    <div class="
      bg-brand-primary-50 dark:bg-brand-primary-dark-50 w-[300px] h-[300px]
      flex items-center justify-center rounded-md
    ">
      <h1 class="text-2xl text-brand-primary-600 dark:text-brand-primary-dark-600">
        Test
      </h1>
    </div>
  </div>
</template>

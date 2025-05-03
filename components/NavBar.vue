<template>
  <header class="fixed top-0 left-0 right-0 bg-gray-950 z-50 shadow-sm">
    <div class="container mx-auto px-4 py-6 flex justify-between items-center">
      <div class="flex items-center">
        <NuxtLink to="/" class="flex items-center">
          <!-- <span class="text-xl font-bold text-white">UtahrapTech</span>-->
          <NuxtImg src="/logo.png" alt="utahraptech_logo" width="180" />
        </NuxtLink>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8">
        <div class="flex items-center space-x-14 mr-10 font-light text-lg">
          <NuxtLink
            to="#team"
            class="text-white hover:text-primary-600 transition-colors duration-300"
            >Team</NuxtLink
          >
          <NuxtLink
            to="#contact"
            class="text-white hover:text-primary-600 transition-colors duration-300"
            >Contact</NuxtLink
          >
          <NuxtLink
            to="#blog"
            class="text-white hover:text-primary-600 transition-colors duration-300"
            >Blog</NuxtLink
          >
        </div>

        <!-- Social Icons -->
        <div class="flex items-center space-x-4">
          <a
            href="#"
            target="_blank"
            class="text-white hover:text-primary-600 transition-colors duration-300"
          >
            <span class="sr-only">UpWork</span>
            <span class="uppercase text-xs font-semibold">Up</span>
          </a>
          <a
            href="#"
            target="_blank"
            class="text-white hover:text-primary-600 transition-colors duration-300"
          >
            <span class="sr-only">LinkedIn</span>
            <span class="i-mdi-linkedin w-5 h-5"></span>
            <span>in</span>
          </a>

          <NuxtLink
            href="mailto:o.zhuravko@gmail.com"
            target="_blank"
            class="text-gray-700 hover:text-primary-600 transition-colors duration-300"
          >
            <NuxtImg src="/envelope.svg" alt="Email" width="15" height="15" />
          </NuxtLink>
        </div>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden">
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="text-gray-700 hover:text-primary-600 transition-colors duration-300"
        >
          <span v-if="!mobileMenuOpen">☰</span>
          <span v-else>✕</span>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-white px-4 py-2 shadow-lg">
      <div class="flex flex-col space-y-4 pb-4">
        <NuxtLink
          to="#team"
          class="text-gray-700 hover:text-primary-600 transition-colors duration-300 py-2"
          >Team</NuxtLink
        >
        <NuxtLink
          to="#contact"
          class="text-gray-700 hover:text-primary-600 transition-colors duration-300 py-2"
          >Contact</NuxtLink
        >
        <NuxtLink
          to="#blog"
          class="text-gray-700 hover:text-primary-600 transition-colors duration-300 py-2"
          >Blog</NuxtLink
        >

        <!-- Social Icons for Mobile -->
        <div class="flex items-center space-x-4 pt-2">
          <a
            href="#"
            target="_blank"
            class="text-gray-700 hover:text-primary-600 transition-colors duration-300"
          >
            <span class="sr-only">UpWork</span>
            <span class="uppercase text-xs font-semibold">Up</span>
          </a>
          <a
            href="#"
            target="_blank"
            class="text-gray-700 hover:text-primary-600 transition-colors duration-300"
          >
            <span class="sr-only">LinkedIn</span>
            <span>in</span>
          </a>
          <NuxtLink
            href="mailto:o.zhuravko@gmail.com"
            target="_blank"
            class="text-gray-700 hover:text-primary-600 transition-colors duration-300"
          >
            <NuxtImg
              src="/black_envelope.svg"
              alt="Email"
              width="15"
              height="15"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>

  <!-- Spacer for fixed header -->
  <div class="h-16"></div>
</template>

<script setup>
const mobileMenuOpen = ref(false);
</script>

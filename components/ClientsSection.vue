<template>
  <section class="py-16 bg-gray-900 text-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <p class="mb-6 text-lg">
          We successfully work with companies from different parts of Europe, the United
          States, and Asia. Among our clients are:
        </p>
        <h2 class="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
          REAL ESTATES
        </h2>
        <div class="mt-8">
          <button @click="scrollToContact" class="bg-white text-gray-900 hover:bg-gray-100 font-semibold py-2 px-6 rounded-md transition-all duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>
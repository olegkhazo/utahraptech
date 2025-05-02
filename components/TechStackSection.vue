<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 grid grid-cols-4 gap-6 mb-10 md:mb-0">
          <div v-for="(tech, index) in technologies" :key="index" class="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-all duration-300">
            <div class="text-gray-400 text-xl font-semibold">{{ tech }}</div>
          </div>
        </div>
        
        <div class="md:w-1/2 md:pl-12">
          <h2 class="text-3xl font-bold mb-6">
            THE TECHNOLOGY STACK THAT OUR CATS ARE FAMILIAR WITH
          </h2>
          <p class="text-gray-600 mb-6">
            Our team has amazing designers, incredible project managers, talented front-end and back-end devs. We are familiar with the latest technology stack and are always up-to-date on the most recent changes.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const technologies = [
  'React', 'Vue', 'Node', 'Python', 
  'Go', 'Docker', 'AWS', 'Firebase',
  'MongoDB', 'PostgreSQL', 'Flutter', 'Swift',
  'Kotlin', 'Django', 'Laravel', 'GraphQL'
];
</script>
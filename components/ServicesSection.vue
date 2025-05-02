<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row">
        <div class="md:w-1/2 mb-10 md:mb-0">
          <h2 class="text-2xl font-bold mb-8">We can boost your business with</h2>
          
          <div class="space-y-4">
            <ServiceItem 
              v-for="(service, index) in services" 
              :key="index" 
              :title="service.title"
              :active="activeService === index"
              @click="activeService = index"
            />
          </div>
        </div>
        
        <div class="md:w-1/2 md:pl-12">
          <div v-if="activeService === 4">
            <h3 class="text-2xl font-bold mb-4">
              {{ services[activeService].title }}
            </h3>
            <p class="text-gray-600 mb-6">
              We create custom mobile apps for iOS and Android that deliver a superior user experience. Our apps are designed to meet the demands of modern users. Whether you need a standalone app, a companion app for web integration, or a cross-platform solution, we focus on development, from concept to launch, ensuring your app not only looks great but also performs flawlessly.
            </p>
            <div class="mt-6">
              <button class="text-primary-600 font-semibold flex items-center hover:text-primary-700 transition-colors duration-300">
                Learn more
                <span class="ml-2">→</span>
              </button>
            </div>
          </div>
          <div v-else>
            <h3 class="text-2xl font-bold mb-4">
              {{ services[activeService].title }}
            </h3>
            <p class="text-gray-600 mb-6">
              {{ services[activeService].description }}
            </p>
            <div class="mt-6">
              <button class="text-primary-600 font-semibold flex items-center hover:text-primary-700 transition-colors duration-300">
                Learn more
                <span class="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const activeService = ref(4);

const services = [
  {
    title: 'CORPORATE WEBSITES',
    description: 'We build professional corporate websites that represent your brand effectively. Our sites are optimized for performance, search engines, and conversions.'
  },
  {
    title: 'E-COMMERCE',
    description: 'Create a powerful online store with our e-commerce solutions. We build user-friendly, secure platforms that drive sales and provide excellent customer experiences.'
  },
  {
    title: 'WEB SERVICES AND APPS',
    description: 'From web applications to APIs and services, we develop sophisticated solutions that streamline your business operations and enhance user engagement.'
  },
  {
    title: 'SAAS, CRM, EXCHANGES',
    description: 'We build complex systems including SaaS platforms, CRM solutions, and trading exchanges designed to scale with your business.'
  },
  {
    title: 'MOBILE APPS FOR IOS AND ANDROID',
    description: 'We create custom mobile apps for iOS and Android that deliver a superior user experience. Our apps are designed to meet the demands of modern users.'
  }
];
</script>
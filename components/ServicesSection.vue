<template>
  <section class="py-16 bg-gray-100">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row">
        <div class="md:w-1/2 mb-10 md:mb-0">
          <h2 class="text-2xl font-bold mb-8">
            We can boost your business with
          </h2>

          <div class="space-y-2">
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
          <div v-if="activeService === null">
            <h3 class="text-4xl font-normal mb-4">
              What is the UtharapTech company?
            </h3>
            <p class="text-gray-600 mb-6">
              We are a team of dedicated developers passionate about crafting
              high-quality digital products. Our expertise allows us to deliver
              solutions that are not only visually compelling but also
              technically robust. We believe that exceptional design and clean,
              reliable code are both critical to a product’s success—and we
              bring equal focus to each.
            </p>
          </div>

          <div v-else>
            <h3 class="text-4xl font-normal mb-4">
              {{ services[activeService].title }}
            </h3>
            <p class="text-gray-600 mb-6">
              {{ services[activeService].description }}
            </p>
            <!-- <div class="mt-6">
              <button
                class="text-primary-600 font-semibold flex items-center hover:text-primary-700 transition-colors duration-300"
              >
                Learn more
                <span class="ml-2">→</span>
              </button>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const activeService = ref(null);

const services = [
  {
    title: "WEB SERVICES AND APPS",
    description:
      "We create advanced solutions — from web applications to APIs and services — that simplify your business processes and boost user engagement.",
  },
  {
    title: "SAAS, CRM, EXCHANGES",
    description:
      "We develop robust systems — from SaaS platforms and CRM solutions to trading exchanges — all built to grow alongside your business.",
  },
  {
    title: "E-COMMERCE",
    description:
      "Launch a high-performing online store with our e-commerce solutions. We craft secure, intuitive platforms that boost sales and deliver outstanding customer experiences.",
  },
  {
    title: "CORPORATE WEBSITES",
    description:
      "We create polished corporate websites that showcase your brand with impact. Each site is optimized for speed, SEO, and conversion performance.",
  },
  {
    title: "MOBILE APPS FOR IOS AND ANDROID",
    description:
      "We design custom mobile apps for iOS and Android that offer an exceptional user experience, tailored to the expectations of today’s users.",
  },
];
</script>

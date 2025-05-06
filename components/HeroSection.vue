<template>
  <section class="relative py-16 md:py-24 overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row">
        <div class="md:w-1/2 mb-10 md:mb-0 md:py-11">
          <h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            BUILD POWERFUL DIGITAL PRODUCTS FROM SCRATCH
          </h1>
          <p class="text-gray-600 text-lg mb-8 max-w-lg">
            Our experienced team specializes in building custom web
            applications, scalable SaaS solutions, and startup platforms from
            the ground up — turning your ideas into production-ready digital
            products.
          </p>
          <button
            @click="scrollToContact"
            class="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-md transition-all duration-300 transform"
          >
            Get in Touch
          </button>
        </div>
        <div class="md:w-1/2 relative">
          <div class="relative">
            <div class="circular-text-container">
              <svg
                viewBox="0 0 100 100"
                class="w-full max-w-md mx-auto animate-spin-slow"
              >
                <image
                  href="/public/orange_circle.webp"
                  x="45"
                  y="35"
                  width="35"
                  height="35"
                  clip-path="circle(50%)"
                />
                <path
                  id="curve"
                  fill="transparent"
                  d="M 50, 50 m -44.4, 0 a 44.4,44.4 0 1,1 88.8,0 a 44.4,44.4 0 1,1 -88.8,0"
                />
                <text>
                  <textPath href="#curve" class="text-gray-300 text-[0.365rem]">
                    We'll take your idea and turn it into a great real product.
                    Just share what you need with us right now.
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Background elements -->
    <div class="absolute top-0 left-0 w-full h-full z-[-1] opacity-10">
      <div
        class="absolute top-10 left-20 w-64 h-64 rounded-full bg-primary-400"
      ></div>

      <div
        class="absolute top-20 right-40 w-28 h-28 rounded-full bg-orange-300"
      ></div>
      <div
        class="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-fuchsia-400"
      ></div>
      <div
        class="absolute bottom-28 right-1/2 w-64 h-64 rounded-full bg-green-300"
      ></div>
    </div>
  </section>
</template>

<script setup>
const scrollToContact = () => {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style scoped>
.animate-spin-slow {
  animation: spin 30s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

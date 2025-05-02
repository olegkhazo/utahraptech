<template>
  <section class="relative py-16 md:py-24 overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row">
        <div class="md:w-1/2 md:pr-8 mb-10 md:mb-0">
          <h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            JUST MAKE YOUR BUSINESS POSITIVE
          </h1>
          <p class="text-gray-600 text-lg mb-8 max-w-lg">
            Our professional team is here to help you get your business online right. We provide amazing websites, complex web systems, and mobile apps from start to finish.
          </p>
          <button @click="scrollToContact" class="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105">
            Get in Touch
          </button>
        </div>
        <div class="md:w-1/2 relative">
          <div class="relative">
            <div class="circular-text-container">
              <svg viewBox="0 0 100 100" class="w-full max-w-md mx-auto animate-spin-slow">
                <path id="curve" fill="transparent" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                <text>
                  <textPath href="#curve" class="text-gray-300 text-sm">
                    We create what you need with high quality • We create what you need with high quality •
                  </textPath>
                </text>
              </svg>
            </div>
            <img 
              src="https://images.pexels.com/photos/7439141/pexels-photo-7439141.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Playful cat illustration" 
              class="w-64 h-64 object-contain absolute bottom-0 right-0 animate-float"
            />
          </div>
        </div>
      </div>
    </div>
    
    <!-- Background elements -->
    <div class="absolute top-0 left-0 w-full h-full z-[-1] opacity-5">
      <div class="absolute top-20 left-20 w-64 h-64 rounded-full bg-primary-500"></div>
      <div class="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-accent-500"></div>
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
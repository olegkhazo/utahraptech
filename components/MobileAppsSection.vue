<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 md:pr-12 mb-10 md:mb-0">
          <h2 class="text-3xl font-bold mb-6">
            MOBILE APPS FOR <br>
            IOS AND ANDROID
          </h2>
          <p class="text-gray-600 mb-8">
            We create custom mobile apps for iOS and Android that deliver a superior user experience. Our apps are designed to meet the demands of modern users. Whether you need a standalone app, a companion app for web integration, or a cross-platform solution, we focus on development, from concept to launch, ensuring your app not only looks great but also performs flawlessly.
          </p>
          <div class="flex space-x-3 mt-6">
            <div class="w-2 h-2 bg-primary-500 rounded-full"></div>
            <div class="w-2 h-2 bg-primary-300 rounded-full"></div>
            <div class="w-2 h-2 bg-primary-200 rounded-full"></div>
          </div>
        </div>
        <div class="md:w-1/2 flex justify-center relative">
          <div class="w-64 h-80 bg-gray-100 rounded-3xl relative overflow-hidden shadow-lg transform rotate-3 hover:rotate-0 transition-all duration-500">
            <img 
              src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Mobile App Interface" 
              class="w-full h-full object-cover object-center"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div class="absolute bottom-6 left-6 right-6 text-white">
              <div class="text-sm font-medium mb-1">Featured App</div>
              <div class="text-lg font-bold">Revvus Workspace</div>
            </div>
          </div>
          <div class="w-64 h-80 bg-gray-100 rounded-3xl absolute top-12 -right-12 overflow-hidden shadow-lg transform -rotate-6 hover:rotate-0 transition-all duration-500">
            <img 
              src="https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Mobile App Interface" 
              class="w-full h-full object-cover object-center"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div class="absolute bottom-6 left-6 right-6 text-white">
              <div class="text-sm font-medium mb-1">New Release</div>
              <div class="text-lg font-bold">Revvus Connect</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
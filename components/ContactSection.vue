<template>
  <section id="contact" class="py-16 bg-gray-100">
    <div class="container mx-auto px-4 max-w-4xl">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">You can fill out a short form</h2>
        <p class="text-gray-600">
          After that, we will discuss your project in more detail and details of our work.
        </p>
      </div>
      
      <div class="bg-white rounded-lg shadow-md p-8">
        <form @submit.prevent="submitForm" class="space-y-6">
          <div class="flex flex-col md:flex-row gap-6">
            <div class="md:w-1/2">
              <label for="name" class="block text-gray-700 mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name" 
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Your name"
                required
              />
            </div>
            <div class="md:w-1/2">
              <label for="email" class="block text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email" 
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>
          
          <div>
            <label for="message" class="block text-gray-700 mb-2">Project Description</label>
            <textarea 
              id="message" 
              v-model="form.message" 
              rows="5" 
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Tell us about your project and requirements"
              required
            ></textarea>
          </div>
          
          <div class="text-center">
            <button type="submit" class="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-md transition-all duration-300">
              Open Form
            </button>
          </div>
          
          <div class="text-center text-gray-500 text-sm mt-4">
            It will take no more than 7 minutes!
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
const form = reactive({
  name: '',
  email: '',
  message: ''
});

const submitForm = () => {
  // In a real implementation, this would send the form data to a server
  console.log('Form submitted:', form);
  alert('Thank you for your inquiry! We will get back to you shortly.');
  
  // Reset form
  form.name = '';
  form.email = '';
  form.message = '';
};
</script>
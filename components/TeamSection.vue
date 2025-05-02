<template>
  <section id="team" class="py-16">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div v-for="(member, index) in team" :key="index" class="text-center">
          <div class="mb-4 overflow-hidden rounded-full w-48 h-48 mx-auto relative group">
            <img 
              :src="member.photo" 
              :alt="`${member.name} - ${member.role}`" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <h3 class="text-xl font-semibold mb-2">{{ member.name }}</h3>
          <p class="text-gray-600 mb-4">{{ member.role }}</p>
          <div class="flex justify-center space-x-3">
            <a v-if="member.linkedin" :href="member.linkedin" target="_blank" class="text-gray-600 hover:text-primary-600 transition-colors duration-300">
              <span>in</span>
            </a>
          </div>
        </div>
      </div>
      
      <div class="mt-16 text-center">
        <h2 class="text-3xl font-bold mb-2">THEY ARE <br>NOT <br>WANTED</h2>
        <p class="text-gray-600">Still they are the Finest!</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const team = [
  {
    name: 'Denis Novik',
    role: 'Senior PHP Developer',
    photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    linkedin: '#'
  },
  {
    name: 'Anton Pavlov',
    role: 'Senior Python Developer',
    photo: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600',
    linkedin: '#'
  },
  {
    name: 'Dmitry Bondar',
    role: 'Frontend Developer',
    photo: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600',
    linkedin: '#'
  },
  {
    name: 'Mary Ivanisheva',
    role: 'Project Manager',
    photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    linkedin: '#'
  }
];
</script>
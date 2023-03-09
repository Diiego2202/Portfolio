<template>
  <div class="bg-black h-screen">
    <NavBar />
    <div class="grid grid-cols-2">
      <div class="bg-white max-w-lg rounded shadow-xl py-10 mx-20 my-20">
        <div class="px-6 py-4 pt-15">
          <h1 class="font-bold text-4xl mb-2">Oi, Eu sou o Diego :)</h1>  
          <h3 class="text-xl">Estudante de Sistemas de informação</h3>
          <div class="py-3">
            <router-link to="/Sobre" class="bg-purple-700 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-full">Sobre</router-link>
          </div>
        </div>
      </div>
      <div class="mx-20 my-20">
        <img class="rounded-full max-w-xs" src="/verde.jpg" alt="verde">
      </div>
    </div>
  </div>
    
</template>
  
<script>

  export default {
    name: 'Home',
    components: {
      
    }
  }
</script>
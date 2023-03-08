<template>
    <NavBar />
    <div class="flex flex-row">
      <div class="basis-1/2">
        <h1>Oi, Eu sou o Diego</h1>
        <h3>Estudante de Sistemas de informação</h3>
        <button class="bg-purple-700 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-full">Sobre</button>
      </div>
      <div class="basis-1/2">
        <img class="rounded-full" src="../public/verde.jpg" alt="verde">
      </div>
    </div>
  
  </template>
  
  <script>
    import NavBar from './components/NavBar.vue'
    
    export default {
        name: 'Home',
        components: {
        NavBar
        }
    }
  </script>
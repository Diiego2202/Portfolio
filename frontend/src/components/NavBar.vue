<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/sobre">Sobre</router-link>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    data() {
      return {
        showMenu: false
      }
    },
    methods: {
      toggleNavbar: function(){
        this.showMenu = !this.showMenu;
      }
    }
  }
  </script>
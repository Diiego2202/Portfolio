<template>
  <NavBar />
  <div>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
        <router-link to="/Sobre">Sobre</router-link>
      </li>
    </ul>
    <router-View></router-View>
  </div>
</template>

<script>

  export default {
    name: 'App',
    components: {

    }
  }
</script>
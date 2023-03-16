<template lang="">
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><i class="fa-solid fa-spray-can-sparkles"></i> Luxus</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/">Home</router-link>
          <router-link to="/buy">Buy</router-link>
          <router-link to="/cart">Cart</router-link>
          <router-link to="/login">Log in</router-link>
          <router-link to="/signup">Sign up</router-link>
          <router-link to="/myaccount" v-if="loggedUser">My account</router-link>
          <router-link to="/about">About us</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
    name: 'navbar',
  computed: {
    loggedUser() {
      return this.$store.state.loggedUser;
    }}
}
</script>
<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100vw;
  background: none;
  z-index: +5;
}

.navbar-brand {
  margin-left: 1.2rem;
}

.navbar-nav {
  margin-left: auto;
  gap: 2rem;
}

.navbar-nav a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.5);
}
</style>

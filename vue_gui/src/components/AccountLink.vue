<template lang="">
  <div class="user">
    <h6 class="username" v-if="loggedUser">
      <router-link to="/about"
        ><i class="fa-solid fa-user"></i> {{ loggedUser?.first_name }}
        {{ loggedUser?.last_name }}</router-link
      >
    </h6>
    <h4 v-else>
      <smallSpinner></smallSpinner>
    </h4>
  </div>
</template>
<script>
import smallSpinner from "@/components/SmallSpinner.vue";
export default {
  name: "accountLink",
  computed: {
    loggedUser() {
      return this.$store.state.loggedUser;
    },
  },
  components: {
    smallSpinner,
  },
};
</script>
<style scoped>
.user {
  position: absolute;
  right: 1rem;
  top: 3rem;
}

.user h6 {
  color: rgba(0, 0, 0, 0.5);
}
.user h4 {
  margin-right: 1.5rem;
}
.user a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.5);
}
</style>

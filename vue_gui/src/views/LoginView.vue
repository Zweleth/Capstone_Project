<template lang="">
  <div class="login">
    <div class="left">
      <div class="text">
        <h4>Log in</h4>
        <h5>
          Please login in order to get full access to the site and its features
          which include viewing a single product, making a purchase, a wish list
          and personalizing the app for better experience like adding a product
          to favorites.
        </h5>
      </div>
    </div>

    <div class="right">
      <div class="form">
        <form @submit.prevent="login">
          <div class="user-icon">
            <i class="fa-solid fa-user"></i>
            <!-- {{this.loggedUser?.first_name}} -->
          </div>
          <div class="form-floating">
            <input v-model="payload.email"
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input v-model="payload.password"
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div class="form-buttons">
            <a href="">Forgot password?</a>
            <p>Don't have an account <a href="">Signup</a></p>
            <button type="submit">Log in</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
// import { mapGetters, mapActions, mapMutations} from "vuex";
export default {
  name: "login",
  data() {
    return {
      payload: {
        email: "",
        password: ""
      }
    };
  },
  computed: {
    loggedUser(){
        return this.$store.state.loggedUser
    }
  },
  methods: {
    login() {
        this.$store.dispatch('signIn', this.payload); 
    },
  }
};
</script>
<style scoped>
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
}

.left {
  width: 50vw;
  height: 100vh;
  background-color: var(--tone-one);
  display: grid;
  place-items: center;
}

.right {
  width: 50vw;
  height: 100vh;
  background-color: var(--tone-three);
  display: grid;
  place-items: center;
}

.text {
  margin: 0 4rem 0 4rem;
  color: var(--tone-four);
}
.form {
  margin: 0 4rem 0 4rem;
  width: 27rem;
  height: 32rem;
  padding: 0.6rem;
  background-color: var(--tone-one);
  border-radius: 1rem;
  color: var(--tone-four);
}

.user-icon {
  height: 10rem;
  display: grid;
  place-items: center;
  padding-top: 2rem;
}

form i {
  scale: 5;
  color: var(--tone-three);
}
.form-floating {
  margin-top: 1.5rem;
}

.form-floating input,
input:focus,
input:active {
  background: none;
  border: none;
  border-radius: 0;
  border-bottom: 0.15rem solid var(--tone-four);
  outline: none;
  box-shadow: none;
}
.form-buttons {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 0.6rem;
  justify-content: center;
  align-items: center;
}

.form-buttons button {
  background: none;
  height: 2.2rem;
  width: 5.5rem;
  border: none;
  border: 0.14rem solid var(--tone-four);
  border-radius: 0.3rem;
  color: var(--tone-four);
}
</style>

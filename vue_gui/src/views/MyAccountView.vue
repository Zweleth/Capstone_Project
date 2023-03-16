<template lang="">
  <div class="my_account" v-if="loggedUser">
    <div class="delete_screen">
      <div class="delete_modal">
        <h4>Are you sure you want to delete your account?</h4>
        <div class="del_buttons">
          <button @click="hideDelete()">Cancel</button>
          <button @click="deleteUser()">Delete</button>
        </div>
      </div>
    </div>
    <div class="edit_screen">
      <div class="edit_modal">
        <form @submit.prevent="update()">
          <div class="initials">
            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                id="floatingText"
                placeholder="name@example.com"
                required
                v-model="this.updatingUser.first_name"
              />
              <label for="floatingText">First name</label>
            </div>
            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                id="floatingText"
                placeholder="name@example.com"
                required
                v-model="this.updatingUser.last_name"
              />
              <label for="floatingText">Last name</label>
            </div>
          </div>
          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              required
              v-model="this.updatingUser.email"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="floatingPassword"
              placeholder="number"
              required
              v-model="this.updatingUser.phone_number"
            />
            <label for="floatingText">Phone number</label>
          </div>
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Male"
              required
              v-model="updatingUser.gender"
            />
            <label for="floatingPassword">Gender</label>
          </div>
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="floatingText"
              placeholder="url"
              required
              v-model="updatingUser.image_url"
            />
            <label for="floatingText">Image URL</label>
          </div>
          <div class="form-buttons">
            <button @click="hideEdit()">Cancel</button>
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    </div>
    <div class="left">
      <div class="logged_user">
        <div
          class="img"
          :style="{ backgroundImage: `url(${loggedUser.image_url})` }"
        ></div>
        <h2 class="name">
          {{ loggedUser.first_name }} {{ loggedUser.last_name }}
        </h2>
        <div class="details">
          <h3>E-mail Address :</h3>
          <h3>{{ loggedUser.email }}</h3>
        </div>
        <div class="details">
          <h3>Phone number :</h3>
          <h3>{{ loggedUser.phone_number }}</h3>
        </div>
        <div class="details">
          <h3>Gender :</h3>
          <h3>{{ loggedUser.gender }}</h3>
        </div>
        <div class="details">
          <h3>Role :</h3>
          <h3>{{ loggedUser.user_role }}</h3>
        </div>
        <div class="buttons">
          <button class="btn_edit" @click="showEdit()">
            <i class="fa-solid fa-pen-to-square" ></i> Edit account
          </button>
          <button class="btn_delete" @click="showDelete()">
            <i class="fa-solid fa-trash" ></i> Delete
            account
          </button>
        </div>
      </div>
    </div>
    <div class="right">
    </div>
  </div>
</template>
<script>
import { hide } from '@popperjs/core';

export default {
  name: "myaccount",
  computed: {
    loggedUser() {
      return this.$store.state.loggedUser;
    },
  },
  data() {
    return {
      updatingUser: {
        first_name: this.$store.state.loggedUser?.first_name,
        last_name: this.$store.state.loggedUser?.last_name,
        email: this.$store.state.loggedUser?.email,
        phone_number: this.$store.state.loggedUser?.phone_number,
        gender: this.$store.state.loggedUser?.gender,
        image_url: this.$store.state.loggedUser?.image_url

      }
    };
  },
  methods: {
    showDelete() {
      document.querySelector(".delete_screen").id = "showModal";
    },
    hideDelete() {
      document.querySelector(".delete_screen").id = "hideModal";
    },
    update() {
      this.$store.dispatch('updateUser', this.loggedUser?.user_id, this.updatingUser); 
      this.hideEdit();
    },
    deleteUser() {
      this.$store.dispatch('deleteUser', this.loggedUser?.user_id);
      hide.hideDelete();
    },

    showEdit() {
      document.querySelector(".edit_screen").id = "showModal";
      console.log(this.updatingUser)
    },
    hideEdit() {
      document.querySelector(".edit_screen").id = "hideModal";
    }
  },
};
</script>
<style scoped>
.my_account {
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
}

.left {
  width: 70vw;
  height: 100vh;
  background-color: var(--tone-one);
  display: grid;
  place-items: center;
}

.right {
  width: 30vw;
  height: 100vh;
  background-color: var(--tone-three);
  display: grid;
  place-items: center;
}
.img {
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  margin-bottom: 0.5rem;
  align-self: center;
}

h2 {
  margin-bottom: 2rem;
}
.logged_user {
  display: flex;
  flex-direction: column;
  width: 40rem;
  justify-content: center;
  align-content: center;
  gap: 1rem;
  margin-bottom: 5rem;
  color: var(--tone-four);
}
.details {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.btn_edit,
.btn_delete,
button {
  background: none;
  border: none;
  border: 0.1rem solid;
  width: fit-content;
  height: 2rem;
  border-radius: 0.22rem;
  color: var(--tone-four);
  padding: 0 0.5rem 0 0.5rem;
}
.buttons {
  display: flex;
  margin-top: 3rem;
  gap: 4rem;
  justify-content: center;
  align-items: center;
}

.delete_screen, .edit_screen {
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
}

.delete_modal {
  width: 28rem;
  height: 10rem;
  background-color: var(--tone-one);
  color: var(--tone-four);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 1rem;

}

.delete_modal div {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  width: fit-content;
  margin-right: 0.5rem;
}
#showModal {
  display: grid;
}
#hideModal {
  display: none;
}


.edit_modal {
  margin: 0 4rem 0 4rem;
  width: 28rem;
  height: 30rem;
  padding: 0.6rem;
  background-color: var(--tone-one);
  border-radius: 1rem;
  color: var(--tone-four);
  
}
.initials {
  display:flex;
  gap: 0.3rem;
}
.form-floating {
  margin-top: 1rem;
}

.form-floating input, input:focus, input:active {
  background: none;
  border: none;
  border-radius: 0;
  border-bottom: 0.15rem solid var(--tone-four);
  outline: none;
  box-shadow: none;
}
.form-buttons{
  display: flex;
  margin-top: 1rem;
  gap: 0.6rem;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin-left: auto;
}

.form-buttons button {
  background: none;
  height: 2.2rem;
  width: 5.5rem;
  border:none;
  border: 0.14rem solid var(--tone-four);
  border-radius: 0.3rem;
  color: var(--tone-four);
}
</style>

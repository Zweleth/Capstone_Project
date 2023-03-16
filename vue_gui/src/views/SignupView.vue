<template lang="">
    <div class="signup">
        <div class="left">
            <div class="form" >
                <form @submit.prevent="signUp()">
                    <div class="initials">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingText" placeholder="name@example.com" required v-model="first_name"> 
                            <label for="floatingText">First name</label>
                        </div>
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingText" placeholder="name@example.com" required v-model="last_name">
                            <label for="floatingText">Last name</label>
                        </div>
                    </div>
                    <div class="form-floating">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required v-model="email">
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required v-model="password">
                        <label for="floatingPassword">Password</label>
                    </div>
                    <div class="form-floating">
                        <input type="text" class="form-control" id="floatingText" placeholder="Password" required  v-model="phone_number">
                        <label for="floatingText">Phone number</label>
                    </div>
                    <div class="form-floating">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Male" required v-model="gender">
                        <label for="floatingPassword">Gender</label>
                    </div>
                    <div class="form-floating">
                        <input type="text" class="form-control" id="floatingText" placeholder="url" required v-model="image_url">
                        <label for="floatingText">Image URL</label>
                    </div>
                    <div class="form-buttons">
                        <p>Already have an account? <a href="">Signup</a></p>
                        <button type="submit">Sign up</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="right">
            <div class="text">
                <h4>Sign up</h4>
                <h5>Fill in the provided form to signup and create an account which will allow you to get full access to the our features</h5>
            </div>
        </div>
    </div>
    
</template>
<script>
import {mapActions} from 'vuex';
export default {
    data(){
        return {
            payload: {
                first_name: '',
                last_name: '',
                gender: '',
                phone_number: '',
                email: '',
                password: '',
                image_url: '',
                
            }
        };
    },
    computed: {
        message () {
            return this.$store.state.message
        }
    },
    created() {
        // this.fetchUsers();
    },
    methods: {
        ...mapActions(['fetchUsers']),
        signUp() {
            this.payload = {
                first_name: this.first_name,
                last_name: this.last_name,
                gender: this.gender,
                phone_number: this.phone_number,
                email: this.email,
                password: this.password,
                image_url: this.image_url
            };
            this.$store.dispatch('signUp', this.payload);
            console.log(this.$store.state.user);
            console.log(this.message);
        }
    }
    
}
</script>
<style scoped>
    .initials {
        display:flex;
        gap: 0.3rem;
    }

    .signup {
        width: 100vw;
        height: 100vh;
        display: flex;
    }

    .left {
        width: 50vw;
        height: 100vh;
        background-color: var(--tone-three);
        display: grid;
        place-items: center;
    }

    .right {
        width: 50vw;
        height: 100vh;
        background-color: var(--tone-one);
        display: grid;
        place-items: center;
    }

    .text {
        margin: 0 4rem 0 4rem;
        color: var(--tone-four);
    }
    .form {
        margin: 0 4rem 0 4rem;
        width: 28rem;
        height: 35rem;
        padding: 0.6rem;
        background-color: var(--tone-one);
        border-radius: 1rem;
        color: var(--tone-four)
    }

    .user-icon {
        height: 10rem;
        display: grid;
        place-items: center;
        padding-top: 2rem;
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
        border:none;
        border: 0.14rem solid var(--tone-four);
        border-radius: 0.3rem;
        color: var(--tone-four);
    }
</style>
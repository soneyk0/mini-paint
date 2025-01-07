<script setup lang="ts">
import {ref} from 'vue'
import {toast} from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import router from '../appRoutes/router.js'
import AuthForm from "./AuthForm.vue";
import Button from "../common/Button.vue";

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const errorMessage = ref()

function register() {
  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Passwords miss match'
    return
  }
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
      .then(() => {
        router.push('/mini-paint')
      })
      .catch((error) => {
        if (error.code === 'auth/invalid-email') {
          toast.error('Incorrect email.', {
            autoClose: 3000,
            position: 'bottom-left',
            theme: 'colored',
          })
        } else if (error.code === 'auth/weak-password') {
          toast.error('Password should be at least 6 characters.', {
            autoClose: 3000,
            position: 'bottom-left',
            theme: 'colored',
          })
        } else if (error.code === 'auth/email-already-in-use') {
          toast.error('This email is already in use', {
            autoClose: 3000,
            position: 'bottom-left',
            theme: 'colored',
          })
        } else {
          toast.error('An unexpected error occurred.', {
            autoClose: 3000,
            position: 'bottom-left',
            theme: 'colored',
          })
        }
      })
}
</script>

<template>
  <AuthForm title="Sign up"
            :onSubmit="register"
            :errorMessage="errorMessage">
    <template #inputs>
          <div class="register-form__email">
            <p class="register-form__nameOfInput">Email</p>
            <input
                type="email"
                class="register-form__input"
                placeholder="Enter email"
                v-model="email"
            />
          </div>
          <div class="register-form__password">
            <p class="register-form__nameOfInput">Password</p>
            <input
                type="password"
                class="register-form__input"
                placeholder="Enter password"
                v-model="password"
            />
          </div>
          <div class="register-form__password">
            <p class="register-form__nameOfInput">Confirm password</p>
            <input
                type="password"
                class="register-form__input"
                placeholder="Enter password"
                v-model="confirmPassword"
            />
          </div>
    </template>
    <template #footer>
      <Button :button-text="'Sing up'" :button-width="90" :button-padding="15" class="register-form__button"/>
      <p class="register-form__infoText">
        Already have an account?
        <router-link to="/mini-paint/login" class="register-form__link">Sing in</router-link>
      </p>
    </template>
  </AuthForm>
</template>

<style scoped>

h1 {
  text-align: center;
  font-size: 32px;
  margin-bottom: 50px;
  color: var(--black);
}

.register-form__email,
.register-form__password {
  margin-bottom: 20px;
}

.register-form__nameOfInput {
  font-size: 16px;
  margin-bottom: 5px;
  font-weight: bold;
  color: var(--black);
}

.register-form__input {
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 12px 15px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

.register-form__input:focus {
  border: 2px solid var(--primary);
  outline: var(--primary);
}

.register-form__button {
  display: block;
  margin: 25px auto 0;
  font-size: 18px;
}


.register-form__infoText {
  text-align: center;
  margin-top: 50px;
  color: var(--black);
}

.register-form__link {
  color: var(--primary);
  text-decoration: none;
}

.register-form__link:hover {
  color: var(--secondary);
  text-decoration: underline;
}
</style>

<script setup lang="ts">
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { ref } from 'vue'
import router from '../appRoutes/router.ts'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import BaseForm from '../common/BaseForm.vue'
import BaseButton from '../common/BaseButton.vue'
import BaseInput from '../common/BaseInput.vue'

const email = ref('')
const password = ref('')
const errorMessage = ref('')

function signIn() {
  const auth = getAuth()
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      router.push('/mini-paint/')
    })
    .catch(() => {
      toast.error('Incorrect email or password', {
        autoClose: 3000,
        position: 'bottom-left',
        theme: 'colored',
      })
    })
}
</script>

<template>
  <BaseForm title="Sign in" :onSubmit="signIn" :errorMessage="errorMessage">
    <template #inputs>
      <div class="auth-form__email">
        <p class="auth-form__nameOfInput">Email</p>
        <BaseInput
          type="email"
          class="auth-form__input"
          placeholder="Enter email"
          v-model="email"
        />
      </div>
      <div class="auth-form__password">
        <p class="auth-form__nameOfInput">Password</p>
        <BaseInput
          type="password"
          class="auth-form__input"
          placeholder="Enter password"
          v-model="password"
        />
      </div>
    </template>
    <template #footer>
      <BaseButton
        :button-text="'Sign in'"
        :button-width="100"
        :button-padding="15"
        class="auth-form__button"
      />
      <p class="auth-form__infoText">
        Don't have an account?
        <router-link to="/mini-paint/signup" class="auth-form__link"
          >Sign up
        </router-link>
      </p>
    </template>
  </BaseForm>
</template>

<style scoped>
h1 {
  text-align: center;
  font-size: 32px;
  margin-bottom: 50px;
  color: var(--black);
}

.auth-form__email,
.auth-form__password {
  margin-bottom: 20px;
}

.auth-form__nameOfInput {
  font-size: 16px;
  margin-bottom: 5px;
  font-weight: bold;
  color: var(--black);
}

.auth-form__input {
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 12px 15px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

.auth-form__input:focus {
  border: 2px solid var(--primary);
  text-decoration: none;
  outline: var(--primary);
}

.auth-form__button {
  display: block;
  font-size: 18px;
}

.auth-form__infoText {
  text-align: center;
  margin-top: 20px;
  color: var(--black);
}

.auth-form__link {
  color: var(--primary);
  text-decoration: none;
}

.auth-form__link:hover {
  color: var(--secondary);
  text-decoration: underline;
}
</style>

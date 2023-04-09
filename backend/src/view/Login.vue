<template>
  <AuthLayout title="Sing in to Your account">
    <form class="mt-8 space-y-6" @submit="submit_form" method="POST">
      <input type="hidden" name="remember" value="true" />
      <div class="-space-y-px rounded-md shadow-sm">
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" type="email" autocomplete="email" required="" v-model="email"
            class="relative  block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            :class="{ 'bg-red-500 text-white': !isEmailValid }" placeholder="Email address" />
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input id="password" type="password" autocomplete="current-password" required="" v-model="password"
            class="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            :class="{ 'bg-red-500 text-white': !isPasswordValid }" placeholder="Password" />
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox"
            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
          <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
        </div>

        <div class="text-sm">

          <router-link class="font-medium text-indigo-600 hover:text-indigo-500" to="/request-password">Forgot your
            password?</router-link>
        </div>
      </div>

      <div>
        <button type="button" @click="submit"
          class="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
          </span>
          Sign in
        </button>
        <button></button>
      </div>
    </form>
  </AuthLayout>
</template>
  
<script setup>
import { LockClosedIcon } from '@heroicons/vue/20/solid'
import { ref, watch, onMounted } from 'vue';
import AuthLayout from '../components/AuthLayout.vue';

const email = ref('')
const password = ref('')
const isEmailValid = ref(true)
const isPasswordValid = ref(true)
const pattern = {
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
}
onMounted(() => {
  console.log(isEmailValid.value)
})
function submit() {
  isEmailValid.value = pattern.email.test(email.value)
  isPasswordValid.value = pattern.password.test(password.value)
}

// }
watch([email, password], () => {
  // isEmailValid.value = pattern.email.test(email.value)

})

</script>
<style scoped></style>
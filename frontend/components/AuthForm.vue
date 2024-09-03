<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
        <!-- <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2> -->
        <Heading as="h2">
                <span v-if="props.formType == 'signin'">
                    Sign in to your account
                </span>
                <span v-else>
                    Create a new account
                </span>
        </Heading>
      </div>
  
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">

          <FormGroup v-if="props.formType == 'signup'" label="Full name" name="name" type="text"
                    autocomplete="off" required labelFor="name"
                     />

            <FormGroup label="Email Address" name="email" type="email" autocomplete="email" labelFor="email" required />
  
            <div class="my-2">
              <FormGroup label="Password" name="password" type="password" autocomplete="current-password" labelFor="password" required />

              <FormGroup v-if="props.formType == 'signup'" label="Confirm Password" name="password_confirmation"
                        type="password" autocomplete="off" required
                         labelFor="password"
                        class="my-2" />
              <div class="text-sm text-end" v-else>
                  <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
              </div>
            </div>
            
            <div>
              <FormButton type="submit" >
                <span v-if="props.formType == 'signin'">
                            Sign in
                        </span>
                        <span v-else>
                            Sign up
                        </span>
              </FormButton>
            </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
                <span v-if="props.formType != 'signup'">
                    Not a member?
                    {{ ' ' }}
                    <NuxtLink to="/signup" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a
                        14 day free
                        trial</NuxtLink>
                </span>

                <span v-else>
                    Already a member?
                    {{ ' ' }}
                    <NuxtLink to="/" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login to your
                        account</NuxtLink>
                </span>
            </p>
      </div>
    </div>
</template>
  
<script setup>

const props = defineProps({
  formType: {
    type: String,
    default: "signin",
    validator: prop => ['signin', 'signup'].includes(prop)
  }
})
</script>
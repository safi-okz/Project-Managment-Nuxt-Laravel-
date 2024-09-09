import { useCookie } from 'nuxt/app';

export default defineNuxtRouteMiddleware(async (to, from) => {

    const key = process.server ? 'token' : 'XSRF-TOKEN'
    // console.log('cookieeeeee ', useCookie());
    const token = useCookie(key)

    console.log('token in guest middleware ', token);

    if (token.value) {
      return navigateTo('/dashboard');
    }
  })
  
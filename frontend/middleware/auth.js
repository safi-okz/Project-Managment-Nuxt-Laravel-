export default defineNuxtRouteMiddleware(async (to, from) => {
   
    const { user, me } = useAuth();

    await me();

    console.log('in auth middleware ', user.value);

    if (!user.value) {
      return navigateTo('/');
    }
  })
  
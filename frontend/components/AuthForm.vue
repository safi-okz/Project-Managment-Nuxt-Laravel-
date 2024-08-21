<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
      </div>
  
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">

            <FormGroup label="Email Address" name="email" type="email" autocomplete="email" labelFor="email" required />
  
            <div class="my-2">
              <FormGroup label="Password" name="password" type="password" autocomplete="current-password" labelFor="password" required />
              <div class="text-sm text-end">
                  <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
              </div>
            </div>
            
            <div>
              <FormButton type="submit" >Sign in</FormButton>
            </div>
        </form>
      </div>
    </div>
  </template>
  
<template>
  <section class="App">
    <SignInForm />
  </section>
</template>

<script>
  import SignInForm from './SignInForm';

  // const model = {
  //   email: [
  //     (v) => !!v.trim() || 'E-Mail is required.',
  //     (v) => /^.+@.+\..+$/.test(v) || 'E-Mail is invalid.',
  //     async (v) => { // emulates an async validator
  //       await new Promise((resolve) => setTimeout(resolve, 1000));
  //       return !v.includes('@hotmail.com') || 'E-Mail is already registered.';
  //     }
  //   ]
  // };

  export default {
    components: { SignInForm }
  };
</script>

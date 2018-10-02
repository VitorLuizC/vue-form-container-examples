<template>
  <section class="App">
    <form-container name="SignInForm" :model="model">
      <template slot-scope="{ fields, errors }">

        <fieldset>
          <label>Username</label>
          <input type="text" v-model="fields.username" />
          <span>{{ errors.username }}</span>
        </fieldset>

        <fieldset>
          <label>E-Mail</label>
          <input type="email" v-model="fields.email" />
          <span>{{ errors.email }}</span>
        </fieldset>

        <fieldset>
          <label>Password</label>
          <input type="password" v-model="fields.password" />
          <span>{{ errors.password }}</span>
        </fieldset>
      </template>
    </form-container>

    <button @click="save()">Salvar</button>
  </section>
</template>

<script>
  const model = {
    username: [
      (v) => !!v.trim() || 'Username is required.',
      (v) => v.length >= 4 || 'Username can\'t be smaller than 4 characters.',
      (v) => v.length <= 36 || 'Username can\'t be higher than 36 characters.'
    ],
    password: [
      (v) => !!v.trim() || 'Password is required.',
      (v) => v.length >= 8 || 'Password can\'t be smaller than 8 characters.',
      (v) => v.length <= 36 || 'Password can\'t be higher than 36 characters.'
    ],
    email: [
      (v) => !!v.trim() || 'E-Mail is required.',
      (v) => /^.+@.+\..+$/.test(v) || 'E-Mail is invalid.',
      async (v) => { // emulates an async validator
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return !v.includes('@hotmail.com') || 'E-Mail is already registered.';
      }
    ]
  };

  export default {
    data () {
      return {
        model
      }
    },
    methods: {
      async save () {
        await this.$form('SignInForm').validateForm();
        if (!this.$form('SignInForm').isValid)
          return;
        console.dir(this.$form('SignInForm').values);
      }
    }
  };
</script>

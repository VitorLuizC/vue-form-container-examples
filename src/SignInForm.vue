<template>
  <section class="App">
    <form-container ref="form" :schema="schema" :initial="initial">
      <form slot-scope="{ fields, errors }">
        <fieldset>
          <label>Username</label>
          <input type="text" v-model="fields.username" />
          <span>{{ errors.username }}</span>
        </fieldset>

        <fieldset>
          <label>Password</label>
          <input type="password" v-model="fields.password" />
          <span>{{ errors.password }}</span>
        </fieldset>
      </form>
    </form-container>

    <button @click="save()">Salvar</button>
  </section>
</template>

<script>
  import FormContainer from 'vue-form-container';

  export default {
    components: { FormContainer },
    data () {
      return {
        schema: {
          username: [
            (v) => !!v.trim() || 'Username is required.',
            (v) => v.length >= 4 || 'Username can\'t be smaller than 4 characters.',
            (v) => v.length <= 36 || 'Username can\'t be higher than 36 characters.'
          ],
          password: [
            (v) => !!v.trim() || 'Password is required.',
            (v) => v.length >= 8 || 'Password can\'t be smaller than 8 characters.',
            (v) => v.length <= 36 || 'Password can\'t be higher than 36 characters.'
          ]
        },
        initial: {
          username: 'user'
        }
      }
    },
    methods: {
      async save () {
        await this.$refs.form.validateForm();
        if (!this.$refs.form.isValid)
          return;
        console.dir(this.$refs.form.fields);
      }
    }
  };
</script>

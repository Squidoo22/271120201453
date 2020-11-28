<template>
  <v-app>
    <v-main>
      <user-component/>
    </v-main>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet">
  </v-app>
</template>

<script>
import UserComponent from './components/UserComponent';

export default {
  name: 'App',

  components: {
    UserComponent,
  },

  data: () => ({
    //
  }),
};
</script>

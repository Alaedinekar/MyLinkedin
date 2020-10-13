<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

       
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/Alaedinekar"
        target="_blank"
        text
      >
        <span class="mr-2">Mon Github</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <listepersonne/>   
      <accueil/>
      <skills/>    
      
    </v-main>
  </v-app>
</template>

<script>
import listepersonne from './components/listepersonne'
import accueil from './components/accueil'
import skills from './components/skills'

export default {
  name: 'App',

  components: {
    listepersonne,
    accueil,
    skills
  },

  data: () => ({
    //
  }),
};
</script>

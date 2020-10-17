<template>
  <v-form
    ref="form"    
    lazy-validation
  >
    <v-text-field     
      label="Nom"
      required
    ></v-text-field>

    <v-text-field
      label="Prenom"
      required
    ></v-text-field>

    <v-btn
      
      color="success"
      class="mr-4"
      @click="getData"
    >
      Rechercher
    </v-btn>

    
  </v-form>
</template>


<script>
const fetch = require('node-fetch');

export default {
 
  methods:{

    getData : async () => {
      var jsonContent = await fetch('http://localhost:3000/user/');
      var json = await jsonContent.json();
      console.log(json)
      return json

  }
  }
};

</script>

<style>
</style>
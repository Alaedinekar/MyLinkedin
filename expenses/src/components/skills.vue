<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-combobox
          v-model="select"
          :items="items"
          label= {{ name }}
          multiple
          outlined
          dense
        ></v-combobox>
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const fetch = require('node-fetch');
 //var contenu = await fetch('http://localhost:3000/skill/');
    //deserialize
    //var json = await jsonContent.json();
  export default {
    name: 'skills',

    data: () => ({
      //contenu
    })
  }
</script>

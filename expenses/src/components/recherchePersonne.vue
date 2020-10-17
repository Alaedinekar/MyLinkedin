<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"      
      :rules="nameRules"
      label="Nom"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="Prenom"
      required
    ></v-text-field>

    <v-btn
      
      color="success"
      class="mr-4"
      @click="validate"
    >
      Rechercher
    </v-btn>

    
  </v-form>
</template>


<script>
export default {
  
};
</script>

<style>
</style>
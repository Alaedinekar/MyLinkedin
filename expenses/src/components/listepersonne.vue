<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Solo"
            placeholder="Nom"
            solo
          ></v-text-field>
        </v-col>

      </v-row>
    </v-container>
  </v-form>
  </template>

<script>
  export default {
  name: 'listepersonne',
  props: {
    msg: String
  }
}
</script>


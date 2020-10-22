<template>

  <v-card height="150">
    <v-footer
      absolute
      class="footer"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — Projet web BUFFA <br><strong> KAROUIA -- TRENTIN</strong>
      </v-col>
    </v-footer>
  </v-card>

</template>

<script>
  export default {
    data: () => ({
      
    }),
  }
</script>

<style>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: red;
  color: white;
  text-align: center;
}
</style>
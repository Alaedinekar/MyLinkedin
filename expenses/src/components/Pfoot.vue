<template>
<div class="footer">
    <v-footer
      absolute
    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — Projet web BUFFA <br><strong> KAROUIA -- TRENTIN</strong>
      </v-col>
    </v-footer>
</div>
</template>

<script>
  export default {
    data: () => ({
      
    }),
  }
</script>

<style>
#footer {
   position:fixed;
   left:0px;
   bottom:0px;
   height:30px;
   width:100%;
   background:#999;
}
</style>
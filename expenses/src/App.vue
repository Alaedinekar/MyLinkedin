<template>
  <v-app>
    <PHeader/>
    <recherchePersonne/>
    <footer>
      <Pfoot/>
    </footer>
  </v-app>
  
</template>

<script>

 import PHeader from "./components/PHeader";
 import recherchePersonne from "./components/recherchePersonne";
 import Pfoot from "./components/Pfoot";

 const fetch = require('node-fetch');

export default {
  name: "App",
  components: {
    PHeader,
    recherchePersonne,
    Pfoot
  },
  
  data: () => ({
    //
  })
,
methods :
{

}
}
</script>

<style>
#footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>

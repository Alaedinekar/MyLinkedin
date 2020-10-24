<template>
  <v-app>
      <Pmap/>
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
 import Pmap from "./components/Pmap";
 

export default {
  name: "App",
  components: {
    PHeader,
    recherchePersonne,
    Pfoot,
    Pmap
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

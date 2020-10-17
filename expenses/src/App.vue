<template>
  <v-app>
    <PHeader/>
    <recherchePersonne/>
    <div class="foot">
      <Pfoot/>
    </div>
  </v-app>
  
</template>

<script>

 import PHeader from "./components/PHeader";
 import recherchePersonne from "./components/recherchePersonne";
 import Pfoot from "./components/Pfoot";
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
};
</script>

<style>
.foot{
  bottom: sticky;
}
</style>

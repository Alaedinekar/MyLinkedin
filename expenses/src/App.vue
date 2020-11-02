<template>
  <v-app>
      
    <PHeader/>
    <router-view/>
    <!-- <recherchePersonne/> -->
    <footer>
      <Pfoot/>
    </footer>
  
  </v-app>
  
</template>

<script>

 import PHeader from "./components/PHeader";
//  import recherchePersonne from "./components/recherchePersonne";
 import Pfoot from "./components/Pfoot";
 //import LoginRegister from  "./components/LoginRegister";
//import Pmap from "./components/Pmap";


export default {
  name: "App",
  mounted(){
    if(!this.authenticated) {
                // this.$router.replace({ name: "login" });

            }else{
                this.$router.replace({ name: "search" });
                
            }
  },
  components: {
    "PHeader" : PHeader,
    //"Pmap" : Pmap,
    // "recherchePersonne" : recherchePersonne,
    "Pfoot" : Pfoot,
    //"LoginRegister" : LoginRegister
  },
  data () {
    return {
      // component : "recherchePersonne",
      authenticated : false,
      userId : ''
    }
  }
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

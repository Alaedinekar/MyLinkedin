<template>
  <div id="app">
    <listepersonne msg='jb'/>
    <main> 
      <div class="search-box">
        <input type="text"  class="search bar"  placeholder=" recherche..."/>
      </div>
    
  
  </main>
  </div>
</template>

<script>

import listepersonne from './components/listepersonne.vue'
export default {
  name: 'App',
  components: {
    listepersonne
    
  }
}
</script>

<style>



* {
margin: 0;
padding: 0;
box-sizing: border-box;
}
body {
  font-family: 'montserrat',sans-serif;

}
#app{
  background-image: './assets/background.jpg';
  background-size: cover;

}
</style>

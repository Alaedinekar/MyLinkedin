<template>
<v-container>
  <v-form
    ref="form"    
    lazy-validation
  >
    <v-text-field     
      label="Nom"
      required
      v-model="nom"
    ></v-text-field>

    <v-text-field
      label="Prenom"
      required
      v-model="prenom"
    ></v-text-field>

    <v-text-field
      label="Skill"
      required
      v-model="skill"
    ></v-text-field>

   
<div v-if="this.users.length > 0">

    <v-card v-for="user in filterUsers" :key="user.userName" outlined tile elevation="2" class="pa-8">
      <!-- <v-card elevation="2"> -->
        <v-card-title> <h2>{{user.userName}}</h2> </v-card-title>
        <v-card-subtitle> {{user.userEmail}} <br> {{user.userPhoneNumber}}</v-card-subtitle>
        <v-card-text>
          <h2>Skills List</h2>
            <ul v-for="skill in user.skillsList" :key="skill.id">
              <li>{{skill.skillName}}</li>
            </ul>
        </v-card-text>
       <!--map/> -->
      <!-- </v-card> -->
    </v-card>
</div>
  </v-form>
  </v-container>
</template>


<script>


const fetch = require('node-fetch');
export default {
  name : "search",
  data() {
    // declare message with an empty value
    return{
      users:{},
      prenom :'',
      nom : '',
      skill : ''
    }
    
  },
 
  mounted(){
    this.getData().then((result)=>{
      // console.log(result)
      this.users = result;
    });
  },
  // Pompé sur :  https://www.youtube.com/watch?v=G34_yNV8FMY
  computed: {
    filterUsers: function () {
      return this.users.filter((user) => {
          return user.userName.match(this.prenom.toUpperCase());
      });
      // TODO la même chose sur les skills
    }
  },
  methods:{
    getData : async () => {
      var jsonContent = await fetch('http://localhost:3000/user');
      var json = await jsonContent.json();
      // console.log(json)
      return json
  },
  //elle sert à rien pour l'intant --> go voir computed !
  getDataByName: async function () {
      var jsonContent = await fetch(`http://localhost:3000/user/name/${this.prenom}`);
      var json = await jsonContent.json();
      // console.log(json)
      this.users = json;
      return json
  }
  }
};

</script>

<style>

</style>
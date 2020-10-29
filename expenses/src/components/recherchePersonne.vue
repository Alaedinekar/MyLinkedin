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
    <v-card v-for="user in filterFinal" :key="user._id" outlined tile elevation="10" class="pa-8">
      <!-- <v-card elevation="2"> -->
        <v-icon x-large right  @click="goToUserPage" :id="user._id" style="cursor: pointer">mdi-account-cowboy-hat</v-icon>
        <v-card-title> <h2>{{user.userFirstName}}</h2> <h3>  <i>{{user.userLastName}}</i></h3> </v-card-title>
        <v-card-subtitle> {{user.userEmail}} <br> {{user.userPhoneNumber}}</v-card-subtitle>
        <v-card-text>
          <h2>Skills List</h2>
            <ul v-for="skill in user.skillsList" :key="skill.id">
              <li>{{skill.skillName}}</li>
            </ul>
        </v-card-text>
       <!--<Pmap  :adress = "adress"   />-->
    </v-card>
</div>
  </v-form>
  </v-container>
</template>


<script>
//import Pmap from "./Pmap";


const fetch = require('node-fetch');
export default {
 // components:{Pmap},
  name : "search",
  data() {
    // declare message with an empty value
    return{
      users:{},
      prenom :'',
      nom :'',
      skill :'',
      adress :{lat:10,lng:10}
      
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
    filterUsersFirst: function () {
        if (this.prenom !=''){
        return this.users.filter((user) => {
        if(user.userFirstName != undefined){
          return user.userFirstName.match(this.prenom.toUpperCase());
        }
        
      });
        }
        return this.users;
      
    },
     filterUsersName: function () {
       if (this.nom !=''){
       return this.users.filter((user) => {
         if(user.userLastName != undefined){
           
         return user.userLastName.match(this.nom.toUpperCase());
         }
       });
       }
       return this.users;
     },

    filterSkill: function () {
      let lis = [];
      lis = []
        if(this.skill != ''){
        this.users.forEach(user => {          
        
        
          user.skillsList.forEach(element => {
            if(element.skillName.match(this.skill.toUpperCase())){
            lis.push(user);
            }
            
          });
          });
          return lis;
        
        }
        return this.users;
      
    },
     
      filterFinal: function(){
        var data = [this.filterSkill,this.filterUsersName,this.filterUsersFirst];
        var res = data.reduce((a, b) => a.filter(c => b.includes(c)));
        //console.log(res)
        var res2 = res.filter((item,index)=> res.indexOf(item)==index);//j'enleve les doublons
        return res2;

        
        }
         
      
  },
  
  methods:{
    
    goToUserPage: function (event){
      this.$router.replace({
                name : `user`,
                params: {
                    idUser: event.target.id
                }
            })
    },
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

<style scoped>
</style>
<template>
 <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="2"
          >
          
            <v-card
              rounded="lg"
              min-height="268"
              elevation="5"
            >
                <v-img
                rounded="lg"
                :src="`${userInfos.picUrl}`"
                ></v-img>
              <!--  -->
          <v-card-text>
            <h3>{{userInfos.userLastName + " " + userInfos.userFirstName}}</h3>
            <div>
            <a :href="`mailto:${userInfos.userEmail}`"> {{userInfos.userEmail}}</a><br>
            {{userInfos.userAddress}}<br>
            {{userInfos.userPhoneNumber}}
            </div>
          </v-card-text>
               
            </v-card>
            <input v-model="skillName" placeholder="skill">
            <button @click="addSkill">ajoutez</button>
          </v-col>

          <v-col
            cols="12"
            sm="8"       
          >
          <!-- <v-container > -->
        <v-row>
            <v-col cols="0" >
              
            <v-card outlined tile elevation="5" height="200px"></v-card>
            </v-col>
        </v-row>
            <v-row>
          <v-col
            v-for="proj in userProjects"
            :key="proj.id"
            cols="4"
          >
            <v-card height="200" elevation="5"></v-card>
          </v-col>
        </v-row>
      <!-- </v-container> -->
            <!-- <v-sheet
              min-height="70vh"
              rounded="lg"
            >
            </v-sheet> -->
          </v-col>
          <v-col
            cols="12"
            sm="2"
          >
            <v-card
              rounded="lg"
              height="268"
              elevation="5"
              class="pa-4"
            >
            
               <v-card
              height="30%"
              elevation="4"
              class="ma-2"
              color="#007bb5"
              @click="getUserInfos"
            >
            <div class="a"><v-icon dark large>mdi-linkedin </v-icon> Linkedin</div>
            
            </v-card>
            
            <v-card
              height="30%"
              elevation="4"
              class="ma-2"
              color="#24292e"
              @click="getUserInfos"
              hover
            >
            <div class="a pa-2"><v-icon dark large>mdi-github </v-icon>GitHub </div>
            </v-card>
            <v-card
              height="30%"
              elevation="4"
              class="ma-2 insta"
              href=""
              target="blank"
            >
            <div class="pa-2 a"><v-icon dark large>mdi-instagram </v-icon> Instagram</div>
            </v-card>
            </v-card>
          </v-col>
        </v-row>
         
      </v-container>
    </v-main>
    <!-- <v-main>
      <v-container>
        <v-row>
            <v-col cols="0">
            <v-card outlined tile elevation="5" height="200px"></v-card>
            </v-col>
        </v-row>
            <v-row>
          <v-col
            v-for="n in 24"
            :key="n"
            cols="4"
          >
            <v-card height="200"></v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main> -->
</template>

<script>
  export default {
      name: 'user',
    data(){
        return {
            userInfos: '',
            userId: '',
            userProjects: {},
            userLink: {},
            skillName :''
        }
    },
    mounted: async function (){
        await this.getUserInfos();
        await this.getUserProjects();
        this.userInfos.userFirstName = this.capitalizeFirstLetter(this.userInfos.userFirstName);
        
    },
    methods: {
        getUserInfos: async function (){
            var jsonContent = await fetch(`http://localhost:3000/user/id/${this.$route.params.idUser}`);
            var json = await jsonContent.json();
            this.userInfos = json[0];
            console.log(this.userInfos.linkList[0].URL);
        },
        getUserProjects: async function(){
            var jsonContent = await fetch(`http://localhost:3000/user/id/${this.userInfos._id}/projects`);
            var json = await jsonContent.json();
            this.userProjects = json;
        },
        capitalizeFirstLetter: function(string) {
            string = string.toLowerCase();
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        
        addSkill : async function () {
        let body = {
            skillName : this.skillName.toUpperCase(),
            }
        fetch('http://localhost:3000/user/id/${this.userId}/addSkill',{
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res=> {
        if(res.ok){
          
            this.skillName = '';
            
        }
            });
            // 
       
    
  }
    },
  }
</script>
<style lang="css" scoped>
h3.capitalize{
    text-transform: capitalize;
}
.insta {
  background: #f09433; 
background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
}
.a{
  font-size: 16px;
  color: aliceblue;
  padding: 0.5em;
  
    }
</style>
<template>
 <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="3"
          >
          
            <v-card
              rounded="lg"
              min-height="268"
              elevation="5"
            >
                <v-img
                rounded="lg"
                src="https://vignette.wikia.nocookie.net/heros/images/a/a5/Winnie_l%27Ourson_Infobox.jpeg/revision/latest?cb=20200607154813&path-prefix=fr"
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
          </v-col>

          <v-col
            cols="12"
            sm="9"       
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
            userProjects: {}
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
        },
        getUserProjects: async function(){
            var jsonContent = await fetch(`http://localhost:3000/user/id/${this.userInfos._id}/projects`);
            var json = await jsonContent.json();
            this.userProjects = json;
        },
        capitalizeFirstLetter: function(string) {
            string = string.toLowerCase();
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }
  }
</script>
<style  scoped>
h3.capitalize{
    text-transform: capitalize;
}
</style>
<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="30%"
    >
      <template v-slot:activator="{ on, attrs }" 
          max-height="100%">
        <v-btn
          color="blue"
          dark
          v-bind="attrs"
          v-on="on"
          width="80%"
        >
          Modifier ma photo
        </v-btn>
      </template>
      <v-form ref="registerForm"  lazy-validation>
      <v-card>
        <v-card-title>
          <span class="headline">Saisissez l'url de la photo souhaitée</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="12"
              >
                <v-text-field
                  label="URL..."
                  v-model="newUrl"
                  required
                ></v-text-field>
              </v-col>
             
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
          elevation="3"
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Fermer
          </v-btn>
          <v-btn
          elevation="3"
            color="blue darken-1"
            text
            @click="setPicURL"
          >
            Enregistrer
          </v-btn>
        </v-card-actions>
      </v-card>
      </v-form>
    </v-dialog>
  </v-row>

</template>

<script>
export default {
  props: [
        'idUser'
      ],
      methods: {
           setPicURL : async function () {
        let body = {
            picUrl : this.newUrl,
            }
        fetch(`http://localhost:3000/user/id/${this.idUser}/setPic`,{
        method: 'PATCH',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    })
      .then(res => {
          if(res.status == 200){
              alert(`Votre photo à été modifiée !`);
              window.location.reload();
          }else{
              alert('Problème dans la matrice');
          }
      })
             
       
           }
  
       
        },
    data(){
        return {
          newUrl: '',
          dialog: false,
            
        }
    }
}
  
</script>

<style>

</style>
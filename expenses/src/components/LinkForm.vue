<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="70%"
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
          Ajouter un lien
        </v-btn>
      </template>
      <v-form ref="registerForm"  lazy-validation>
      <v-card>
        <v-card-title>
          <span class="headline">Saisissez l'url de votre lien</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
                <v-col
                cols="12"
                sm="6"
                md="3"
              >
                <v-select
                  :items="['github', 'instagram','linkedin']"
                  label="Réseau"
                  v-model="target"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="9"
              >
                <v-text-field
                  label="URL..."
                  v-model="URL"
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
            @click="setLink"
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
           setLink : async function () {
        let body = {
        linkTarget : this.target,
        URL : this.URL
}
        fetch(`http://localhost:3000/user/id/${this.idUser}/setLink`,{
        method: 'PATCH',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    })
      .then(res => {
          if(res.status == 200){
              alert(`Votre lien a été modifié !`);
              window.location.reload();
          }else{
              alert('Problème dans la matrice');
          }
      })
             
       
           }
  
       
        },
    data(){
        return {
          URL: '',
          target: '',
          dialog: false,
            
        }
    }
}
  
</script>

<style>

</style>
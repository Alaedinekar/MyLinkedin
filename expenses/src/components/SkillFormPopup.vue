<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="60%"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="blue"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Ajouter une competence
        </v-btn>
      </template>
      <v-form ref="registerForm"  lazy-validation>
      <v-card>
        <v-card-title>
          <span class="headline">Nouvelle competence</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="Nom de la competence"
                  v-model="newSkill"
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
            @click="addSkill"
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
           addSkill : async function () {
        let body = {
            skillName : this.newSkill.toUpperCase(),
            }
        fetch(`http://localhost:3000/user/id/${this.idUser}/addSkill`,{
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    })
      .then(res => {
          if(res.status == 200){
              alert(`La competence ${this.newSkill} ajouté avec succès !`);
              window.location.reload();
          }else if(res.status == 403){
              alert('Deja inscrit');
              this.$refs.registerForm.reset();
              
          }
      })
             
       
           }
  
       
        },
    data(){
        return {
          newSkill: '',
          dialog: false,
            
        }
    }
}
  
</script>

<style>

</style>
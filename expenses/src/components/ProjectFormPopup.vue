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
          width="80%"
        >
          Nouveau projet
        </v-btn>
      </template>
      <v-form ref="registerForm"  lazy-validation>
      <v-card>
        <v-card-title>
          <span class="headline">Nouveau projet</span>
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
                  label="Nom du projet"
                  v-model="newProjectBody.projectName"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="2"
              >
                <v-select
                  :items="['1', '2', '3', '4', '5', '5+']"
                  label="Nb Intervenants"
                  v-model="newProjectBody.groupSize"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Temps de developpement"
                  hint="en mois"
                  v-model="newProjectBody.devTime"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Description courte"
                  v-model="newProjectBody.shortDescription"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  label="Description"
                  v-model="newProjectBody.longDescription"
                  required
                  counter="500"
                ></v-textarea>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-combobox
                  :items="langages"
                  label="Langages / Frameworks"
                  v-model="tabLangages"
                  chips
                  multiple
                ></v-combobox>
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
            @click="addProject"
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
        addProject: async function(){
        
        this.newProjectBody;
        this.tabLangages.forEach(lang => {
          this.newProjectBody.languagesInvolved.push({"skillName": lang})
        });
        fetch(`http://localhost:3000/user/id/${this.idUser}/addProject`, {
          method: 'post',
          body:    JSON.stringify(this.newProjectBody),
          headers: { 'Content-Type': 'application/json' },
      })
      .then(res => {
          if(res.status == 200){
              alert(`Le projet ${this.newProjectBody.projectName} ajouté avec succès !`);
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
          newProjectBody: {
            projectName: '',
            groupSize: 0,
            languagesInvolved: [],
            shortDescription : '',
            longDescription : '',
            devTime: ''
          },
            tabLangages: [],

            dialog: false,
            langages: [
              "Rust",
              "TypeScript",
              "Python",
              "C#",
              "Swift",
              "SQL",
              "Bash/Shell/PowerShell",
              "HTML/CSS",
              "R (lol)",
              "Java",
              "C++",
              "Ruby",
              "PHP",
              "C",
              "Objective-C",
              "VBA",
              ".NET Core",
              "Node.js",
              "React Native",
              "Unity 3D",
              ".NET",
              "PostgreSQL",
              "MongoDB",
              "MariaDB",
              "Microsoft SQL Server",
              "SQLite",
              "MySQL",
              "Oracle"
            ]
        }
    }
}
  
</script>

<style>

</style>
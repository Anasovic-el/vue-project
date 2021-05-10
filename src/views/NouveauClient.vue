<template>
  <div>
    <Header :routerLinks="routerLinks" />
    <div class="container">
      <div class="form-control">
        <label for="title">Nom</label>
        <input type="text" v-model="user.last_name" id="Nom" required />
      </div>
      <div class="form-control">
        <label for="title">modele</label>
        <input type="text" id="modele" v-model="user.model" required />
      </div>
      <div class="form-control">
        <label for="title">Numéro de série</label>
        <input type="text" id="serial" v-model="user.serial_number" required />
      </div>
      <div class="form-control">
        <p>le drone a t'il été dans l'eau?</p>
        <label for="oui"
          ><input type="radio" id="oui" name="eau" value="oui" v-model="user.been_in_water"/> Oui</label
        >
        <br />
        <label for="non">
          <input type="radio" id="non" value="non" v-model="user.been_in_water"/>Non</label
        ><br />
      </div>
      <div class="form-control">
        <p>catégorie de réparation</p>
        <label for="cache">
          <input type="checkbox" 
          id="cache" name="categorie" 
          v-model="user.reapir_category" 
          value="cache">
          Cache
          </label
        ><br />
        <label for="elices">
          <input
            type="checkbox"
            id="elices"
            name="categorie"
            v-model="user.reapir_category"
           value="elices"
          />
          Elices</label
        ><br />

        <label for="camera"
          ><input
            type="checkbox"
            id="camera"
            name="categorie"
            value="camera"
            v-model="user.reapir_category"

          />
          Caméra</label
        ><br />
        <label for="processeur">
          <input
            type="checkbox"
            id="processeur"
            name="categorie"
            value="processeur"
            v-model="user.reapir_category"
          />
          Processeur</label
        ><br />
      </div>
      <div class="form-control">
        <p>Commentaire</p>
        <textarea
          rows="4"
          cols="50"
          name="commentaire"
          form="nouveau_client_form"
          placeholder="Entrer votre commentaire"
          v-model="user.comment"
        ></textarea>
      </div>
      <button class="btn" type="submit" @click="createClient()">Ajouter</button>
      <button class="btn" type="reset">Annuler</button>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  components: { Header },
  data() {
    return {
      routerLinks: [
        {
          href: "/",
          label: "Demande de réparation",
        },
      ],
      user: {
        last_name: '',
        model:'',
        serial_number:'',
        been_in_water:'',
        reapir_category:[],
        comment:''
      },
    };
  },
  methods: {
    createClient() {
      const client = this.user
      this.$store.dispatch('createNewClient',client).then(()=>{
        alert('Client Created successful')
        this.$router.push("/clients/client_validation");
      })
    }
  },
};
</script>

<style scoped>
.container {
  width: 80%;
  margin: auto;
}
.form-control {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
}
.form-control label {
  display: flex;
  align-items: center;
  margin-bottom: 9px;
}
p {
  color: gray;
  margin-bottom: 9px;
}
.btn {
  margin: 10px;
}
</style>
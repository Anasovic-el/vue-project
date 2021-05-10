<template>
  <div>
    <Header :routerLinks="routerLinks" />
    <div class="container">
      <div class="form-control">
        <label for="title">Nom</label>
        <input type="text" v-model="user.last_name" id="Nom" disabled />
      </div>
      <div class="form-control">
        <label for="title">modele</label>
        <input type="text" id="modele" v-model="user.model" required />
      </div>
      <div class="form-control">
        <label for="title">Numéro de série</label>
        <input type="text" id="serial" v-model="user.serial_number" disabled />
      </div>
      <div class="form-control">
        <p>le drone a t'il été dans l'eau?</p>
        <label for="oui"
          ><input
            type="radio"
            id="oui"
            name="eau"
            value="oui"
            v-model="user.been_in_water"
          />
          Oui</label
        >
        <br />
        <label for="non">
          <input
            type="radio"
            id="non"
            value="non"
            v-model="user.been_in_water"
          />Non</label
        ><br />
      </div>
      <div class="form-control">
        <p>catégorie de réparation</p>
        <label for="cache">
          <input
            type="checkbox"
            id="cache"
            name="categorie"
            v-model="user.reapir_category"
            value="cache"
          />
          Cache </label
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
      <button class="btn" type="submit" @click="editClient()">Ajouter</button>
      <button class="btn" type="reset">Annuler</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "../components/Header.vue";
export default {
  components: { Header },
  data() {
    return {
      routerLinks: [
        {
          href: "",
          label: "Demande de réparation",
        },
        {
          href:
            "/client/" +
            this.$route.params.name +
            "-" +
            this.$route.params.id +
            "/mes_réparations",
          label: "Mes reparations",
        },
      ],
      client: null,
      reparation: null,
      user: {
        last_name: "",
        model: "",
        serial_number: "",
        been_in_water: "",
        reapir_category: [],
        comment: "",
      },
    };
  },
  created() {
    axios
      .get(
        `http://localhost:5000/api/clients/${this.$route.params.name}-${this.$route.params.id}/reparations`
      )
      .then((res) => {
        this.reparation = res.data;
        const individClient = this.$store.state.individualClient[0];
        (this.user.last_name = individClient.Nom),
          (this.user.model = individClient.modele),
          (this.user.serial_number = individClient.id_client),
          (this.user.been_in_water = this.reparation[0].eau),
          (this.user.comment = this.reparation[0].description),
          (this.user.reapir_category = this.reparation[0].Nom_cat.split("&"));
      }).catch((err)=>{
        console.log(err);
      });
  },
  methods: {
    editClient() {
      axios
        .put(
          `http://localhost:5000/api/clients/${this.$route.params.name}-${this.$route.params.id}`,
        {
          Nom: this.user.last_name,
          N_serie: this.user.serial_number,
          modele: this.user.model,
          categorie: this.user.reapir_category,
          eau: this.user.been_in_water,
          commentaire: this.user.comment 
        })
        .then((res) => {
          alert(res.data.message)
            this.$router.push("/client/" +
            this.$route.params.name +
            "-" +
            this.$route.params.id +
            "/mes_reparations")
        }).catch((err)=>{
        console.log(err);
      });
    },
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
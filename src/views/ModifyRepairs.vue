<template>
  <div>
    <Header :routerLinks="routerLinks" />
    <div class="container">
      <div class="form-control">
        <label for="title">Technicien ID</label>
        <input
          type="text"
          name="id_tech"
          id="id_tech"
          disabled
          :value="this.$route.params.id"
        />
      </div>
      <div class="reparCat__form" v-for="(reparation,index) in allReparations" :key="index">
        <span>N_reparation : {{ reparation.N_reparation }}</span>
        <span>Categorie : {{ reparation.Nom_cat }}</span><br />
        <span>Etat : {{ reparation.Etat }}</span><br />
        <div class="label_group"> 
                <input type="radio" name="5e" value="En cours"/>In progress 
                <input type="radio" name="5f" value="Fini"/>Finished 
                <input type="radio" name="5i" value="Impossible"/>Impossible                           
        </div>
        <button class="btn" @click="updateEtat(reparation.id_repar_cat)">Update Etat</button>
      </div>
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
        selected:'',
      routerLinks: [
        {
          href: "",
          label: "modifier les réparations",
        },
        {
          href: "/techniciens/" + this.$route.params.id + "/mes_reparations",
          label: "Mes reparations",
        },
      ],
      allReparations: [],
    };
  },
  created() {
    axios
      .get("http://localhost:5000/api/techniciens/all_reparations")
      .then((res) => {
        this.allReparations = res.data;
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.form-control {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
}
.container {
  width: 90%;
  margin: auto;
}
.reparCat__form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
}
.label_group {
  display: flex;
  align-items: center;
}
.label_group label {
  margin-right: 10px;
}
</style>
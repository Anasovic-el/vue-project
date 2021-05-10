<template>
  <div>
    <Header :routerLinks="routerLinks" />
    <div class="reparation">
      <table style="width: 50%">
        <thead>
          <tr>
            <th>N_reparation</th>
            <th>Nom_cat</th>
            <th>description</th>
            <th>Eau</th>
            <th>Etat</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(reparCat, index) in reparCats" :key="index">
            <td>{{ reparCat.N_reparation }}</td>
            <td>{{ reparCat.Nom_cat }}</td>
            <td>{{ reparCat.description }}</td>
            <td>{{ reparCat.eau }}</td>
            <td>{{ reparCat.Etat }}</td>
            <td>
              <button class="btn-danger" @click="onDelete(reparCat.Nom_cat)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from '../components/Header'

export default {
    components: {
        Header,
    },
  data() {
    return {
      reparCats: [],
      routerLinks: [
        {
          href:
            "/client/" +
            this.$route.params.name +
            "-" +
            this.$route.params.id +
            "/formule",
          label: "Demande de réparation",
        },
        {
          href: "",
          label: "Mes reparations",
        },
      ],
    };
  },
  created() {
    axios
      .get(
        `http://localhost:5000/api/clients/${this.$route.params.name}-${this.$route.params.id}/repar-categorie`
      )
      .then((res) => {
        this.reparCats = res.data;
      })
      .catch((err) => console.log(err));
  },
  methods: {
    onDelete(cat) {
      axios
        .delete(
          `http://localhost:5000/api/clients/${this.$route.params.name}-${this.$route.params.id}-${cat}/delete`
        )
        .then((res) => {
          const index = this.reparCats.findIndex((i) => i.Nom_cat == cat);
          this.reparCats.splice(index, 1);
          alert(res.data.message);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
.reparation {
  margin: auto;
  width: 80%;
  padding: 1rem;
}
.btn-danger {
  background-color: salmon;
  color: black;
  padding: 5px;
}
</style>
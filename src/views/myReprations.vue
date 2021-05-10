<template>
  <div>
    <Header :routerLinks="routerLinks" />
    <div class="container">
    <div class="reparCat__form" v-for="(reparation,index) in myreparations" :key="index">
      <span
        ><font style="vertical-align: inherit"
          ><font style="vertical-align: inherit"
            >N_reparation: {{reparation.N_reparation}}</font
          ></font
        ></span
      >
      <span
        ><font style="vertical-align: inherit"
          ><font style="vertical-align: inherit"
            >Category: {{reparation.Nom_cat}}</font
          ></font
        ></span
      ><br />
      <span
        ><font style="vertical-align: inherit"
          ><font style="vertical-align: inherit"
            >Status:{{reparation.Etat}}</font
          ></font
        ></span
      ><br />
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Header from "../components/Header.vue";
export default {
  components: { Header },
  data() {
    return {
      routerLinks: [
        {
          href: "",
          label: "Mes reparations",
        },
        {
          href: "/techniciens/" + this.$route.params.id + "/modifications",
          label: "modifier les réparations",
        },
      ],
      myreparations: [],
    };
  },
  created(){
      axios.get(`http://localhost:5000/api/techniciens/${this.$route.params.id}/reparations`)
      .then(res=>{
          this.myreparations = res.data;
      }).catch(err=>{
          console.log(err);
      })
  }
};
</script>

<style scoped>
.reparCat__form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}
.container {
  width: 80%;
  margin: auto;
}
</style>
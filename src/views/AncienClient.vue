<template>
  <div>
    <Header :routerLinks="routerLinks" />
    <div class="container">
      <div class="form-control">
        <label for="title">Nom</label>
        <input type="text" id="Nom" v-model="user.last_name" required />
      </div>
      <div class="form-control">
        <label for="title">Numéro de série</label>
        <input type="text" id="serial" v-model="user.serial_number" required />
      </div>
      <button class="btn" @click="getClient(user.last_name,user.serial_number)">Submit</button>
      <button class="btn">Cancel</button>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import axios from 'axios';

export default {
  components: { Header },
  data() {
    return {
      routerLinks: [
        {
          href: "/",
          label: "Demande de réparation",
        },
        {
          href: "/clients/client_validation",
          label: "Mes réparations",
        },
      ],
      user: {
        last_name: "",
        serial_number: "",
      },
    };
  },
  methods: {
    getClient(last_name,serial_number) {
      axios
        .get(
          'http://localhost:5000/api/clients/'+last_name+'-'+serial_number
        )
        .then((res) => {
          this.$store.commit('CLIENT_INFO',res.data);
          this.$router.push('/client/'+last_name+'-'+serial_number)
        }).catch((err)=>{
          console.log(err);
          alert('No user found')
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
<template>
  <div>
    <div class="container">
      <div class="welcome">
          <h2>Choisi ton statut</h2>
          <Button href="/clients" label="Clients"/>
          <Button href="/techniciens" label="Techniciens"/>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button'
export default {
    components:{
        Button,
    },
    created(){
      this.$store.dispatch('getAllClients');
    }
};
</script>

<style scoped>
.welcome {
  width: 700px;
  height: 400px;
  margin: 60px auto;
  background-color: lightgoldenrodyellow;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
<template>
  <div>
    <div class="container">
      <div class="welcome">
          <h2>Choisi ton statut</h2>
          <Button :href="this.hrefs.formule" label="modifier ma réparation"/>
          <Button :href="this.hrefs.mes_reparations" label="Mes Reparations"/>
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
   data() {
       return {
           hrefs:{
            formule:'/client/'+ this.$route.params.name+'-'+this.$route.params.id+'/formule',
            mes_reparations:'/client/'+ this.$route.params.name+'-'+this.$route.params.id+'/mes_reparations',
        }
       }
   },
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
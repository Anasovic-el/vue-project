<template>
  <div>
    <div class="container">
      <div class="welcome">
          <h2>choissez votre genre</h2>
          <Button href="/clients/nouveau-client" label="Nouveau Client"/>
          <Button href="/clients/client_validation" label="Ancien Client"/>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button'
export default {
    components:{
        Button,
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
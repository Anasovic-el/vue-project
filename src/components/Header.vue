<template>
<div class="main-header">
    <nav class="main-header__nav">
    <ul class="main-header__item-list">
      <li class="main-header__item" v-for="link in routerLinks" :key="link.label">
        <router-link :to=link.href class="main-header__link">{{ link.label }}</router-link>
      </li>
    </ul>
  </nav>
</div>
</template>

<script>
export default {
    props:['routerLinks']
};
</script>

<style scoped>
.main-header {
    width: 100%;
    height: 3.5rem;
    background-color: #00695c;
    padding: 0 1.5rem;
}
.main-header__nav {
    height: 100%;
    display: flex;
    align-items: center;
}
.main-header__item-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
}
.main-header__item {
    margin: 0 1rem;
    padding: 0;
}
.main-header__link {
    color: white;
}
</style>
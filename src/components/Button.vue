<template>
    <div>
        <router-link :to=href class="button__link">{{ label }}</router-link>
    </div>
</template>

<script>
    export default {
        props:['href','label']
    }
</script>

<style scoped>
.button__link {
    width: 150px;
    padding: 20px;
    background-color: gray;
    margin: 10px;
    text-align: center;
    color: #fff;
    border-radius: 8px;
    font-size: 23px;
    text-decoration: none;
    display: block;
}
</style>
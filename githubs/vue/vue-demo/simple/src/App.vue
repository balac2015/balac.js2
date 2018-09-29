<template>
  <div id="app" >
    <img src="./assets/logo.png">
    <div>Hello Vue!</div>
  </div>
</template>

<script >


export default {
  destroyed() {
    console.log("destoryed");
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

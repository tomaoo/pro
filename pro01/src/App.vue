<template>
  <div id="app" v-cloak>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
[v-cloak]{ display:none !important}
body,ul,dl,p{
  margin:0;
  padding:0;
}
ul,dl{
  list-style:none;
}
a{
  color:#333;
  text-decoration:none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.regDialog .dialog-content,.logDialog .dialog-content{
  width:20%;
  overflow:hidden;
  left:40%;
  top:20%;
}
.regDialog .dialog-content{
  width:40%;
  overflow:hidden;
  left:30%;
  top:20%;
}

</style>

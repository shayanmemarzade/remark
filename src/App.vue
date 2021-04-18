<template>
  <div id="nav">
    <a
      class="mx-5 px-5 py-1 rounded-md text-white bg-green-500"
      @click="$refs.loginSignup.openModal()"
      >Login/signup</a
    >
    <router-link to="/account-setting/overview">Account Setting</router-link>
  </div>
  <loginSignup ref="loginSignup"></loginSignup>
  <router-view />
</template>
<script>
import loginSignup from "./components/LoginSignup.vue";

export default {
  name: "App",
  components: {
    loginSignup,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

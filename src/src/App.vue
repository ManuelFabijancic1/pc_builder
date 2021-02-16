<template>
  <div>
    <!-- Image and text -->
    <nav id="app" class="navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <a class="navbar-brand" href="#">
            <router-link to="/"><img src="@/assets/logo.png"
                height="40"
                class="d-inline-block align-top"
                alt=""
                loading="lazy" /></router-link >
                </a>
        </a>

        <div class="nav-item">
          <div v-if="!store.currentUser" class="links">
            <div class="col">
              
            <router-link to="/login">login</router-link>
            </div>
             <div class="row"></div>
            <div class="col">
            <router-link to="/signup">signup</router-link>
            </div>
            
          </div>
          <div v-if="store.currentUser" class="links">
            <div class="row">
              
            <p id='tekst1'>Logged in as:</p><a href="#" @click="logout()" class="nav-link">a{{username}} </a>
            
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div class="container">
      <router-view />
    </div>
 <footer id="foot">

 </footer>
    
</div>
</template>

<script>
import store from "@/store";
import { firebase } from "@/firebase";


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("***", user.email);
    store.currentUser = user.email;
  } else {
    console.log("**** No user");
    store.currentUser = null;
  }
});
export default {
  name: "app",
  data() {
    return {
      store,
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "login" });
        });
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #353535;
  height: 70px;
}

#nav-item {
  border: 10px;
}
#yes {
  height: 40px;
}
#links {
  align: right;
}
#tekst1{
 color:white;
}
#foot{
height: 40px;
background-color: black;
}
</style>

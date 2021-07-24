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
            <div class="row">
              
            <router-link to="/login"> <button type="button" class="btn btn-primary">login</button></router-link>
            <span class="razmak">
            <p>_</p></span>
            <router-link to="/signup"> <button type="button" class="btn btn-primary">signup</button></router-link>
            </div>
            
          </div>
          <div v-if="store.currentUser" class="links">
            <div class="row">
               <router-link to="/loginhome"> <button type="button" class="btn btn-primary">Profile</button></router-link>
            <span class="razmak">
            <p>_</p></span>
              <a href="#" @click.prevent="logout()" class="nav-link"><button type="button" class="btn btn-primary">logout</button></a>
            
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
import router from '@/router';
firebase.auth().onAuthStateChanged((user) => {
    const currentRoute = router.currentRoute;
    if (user) {
        console.log('*** User', user.email);
        store.currentUser = user.email;
        
        
        if (!currentRoute.meta.needsUser) {
            router.push({ name: 'home' });
        }
    } else {
        console.log('*** No user');
        store.currentUser = null;
        if (currentRoute.meta.needsUser) {
            router.push({ name: 'home' });
        }
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
.razmak{
 color: transparent;
 user-select: none;
}
</style>

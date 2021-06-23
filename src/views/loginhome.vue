  
<template>
   <div class="razmak"> <p> loginhome </p>
    <a href="#"  @click="logout()" class="nav-link">Logout</a>
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
  name: 'loginhome',
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
  },}
</script>


<style scoped lang="scss">
#razmak{
  margin-bottom: 500px;
}
</style>
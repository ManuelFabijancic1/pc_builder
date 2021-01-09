<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> <router-link to="/">
    <a class="navbar-brand" href="#"><img src="@/assets/logo.png" height="40" class="d-inline-block align-top" alt="" loading="lazy" /></a></router-link>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <div class="links">
          <router-link to="/login">Login</router-link></div>
        </li>
        <li class="nav-item"><div class="links">
          <router-link to="/signup">Signup</router-link></div> 
        
        </li>
      </ul>
    </div>
  </div>
</nav>
 <div class="container">
            <router-view />
           
        </div>

      <!--footer-->
        <nav class="navbar fixed-bottom navbar-dark bg-dark">
  <div class="container-fluid">
    
    <a class="navbar-brand" href="#">@copyright</a>
 
  </div>
</nav>
    </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav-item{
  border: 10px;
}

#links{
 align: right;
}

</style>

<template>
  <div >
  

<!-- Image and text -->
<nav id='app' class="navbar ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
     <a class="navbar-brand" href="#"> <router-link to="/"><img src="@/assets/logo.png" height="40" class="d-inline-block align-top" alt="" loading="lazy" /></router-link></a>
      
    </a>
    
        
 <div class="nav-item"><div class="links">
  <router-link to="/login">login</router-link></div> 
 </div>
        
  </div>
</nav>

 <div class="container">
            <router-view />
           
        </div>

      <!--footer-->
        <nav id='yes' class="navbar fixed-bottom navbar-dark bg-dark">
  <div class="container-fluid">
    
    <a class="navbar-brand" href="#"></a>
 
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
  background-color: #353535;
  height: 70px;
}

#nav-item{
  border: 10px;
}
#yes{
  height: 40px;
}
#links{
 align: right;
}


</style>

<template>
  

  <div class="container">
  <div class="row">
    <div class="col-sm">
        <router-link to="budget">
      <div id='card1' class="card" style="width: 20rem; ">
  <img class="card-img-top" src="@/assets/gamingpc.png" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Gaming Computer</p>
  </div>
</div>
</router-link>
    </div>
    <div class="col-sm">
        <router-link to="budget">
       <div id='card1' class="card" style="width: 20rem;">
  <img class="card-img-top" src="@/assets/basic.png" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Basic Computer</p>
  </div>
  </div>
  </router-link>
    </div>
    <div class="col-sm">
        <router-link to="budget">
     <div id='card1' class="card" style="width: 20rem;">
  <img class="card-img-top" src="@/assets/editing.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Editing Computer</p>
  </div>
  </div>
  </router-link>
    </div>
  </div>
  <div id="donjired" class="row">
    <div class="col-sm">
        <router-link to="budget">
       <div id='card1' class="card" style="width: 20rem;">
  <img class="card-img-top" src="@/assets/workstation.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Workstation Computer</p>
  </div>
  </div>
  </router-link>
    </div>
    <div class="col-sm">
    </div>
    <div class="col-sm">
        <router-link to="budget">
       <div id='card1' class="card" style="width: 20rem;">
  <img class="card-img-top" src="@/assets/thebest.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Fastest Computer</p>
  </div>
  </div>
  </router-link>
    </div>
  </div>
</div>

</template>

<script>


export default {
  name: "comptype",
}
</script>
<style>
#p{
    text-: black;
}
#card1{
    background-color: rgb(43, 43, 43);
    margin-top: 30px;
}
#donjired{
  margin-bottom: 70px;
}
</style>
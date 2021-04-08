<template>
  

  <div class="container">
  <div class="row">
    <div class="col-sm">
        <router-link v-on:click.native="builder.computertype=1;" to="budget">
      <div id='card1' class="card" style="width: 20rem;">
  <img class="card-img-top" src="@/assets/gamingpc.png" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Gaming Computer</p>
  </div>
</div >
</router-link>
    </div>
    <div class="col-sm">
        <router-link to="budget" v-on:click.native="builder.computertype='2';">
       <div id='card1' class="card" style="width: 20rem;">
  <img class="card-img-top" src="@/assets/basic.png" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Basic Computer</p>
  </div>
  </div>
  </router-link>
    </div>
    <div class="col-sm">
        <router-link to="budget" v-on:click.native="builder.computertype=3;">
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
        <router-link to="budget" v-on:click.native="builder.computertype=4;">
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
        <router-link to="fastestpc" v-on:click.native="builder.computertype=5;">
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
import builder from '@/builder';

export default {
  name: 'comptype',
  data() {
    return{ 
      builder,};
  },
 
      destroyed:function(){


     builder.prijedlog=[]
      switch(this.builder.computertype){
      case '1': 
      builder.prijedlog=8000
  
      case '2': 
      builder.prijedlog=5000
      case '3': 
      builder.prijedlog=11000
      case '4': 
      builder.prijedlog=16000
      }
      }

  
  };
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
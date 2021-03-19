<template>
  <div class="container">
     <div class="row">
       <h3>Power suply</h3>
     </div>
     <div class="row">
       <div id="nazkomp" class="col-sm rounded-pill" ><p id="komp">{{String(builder.powersnaziv)}}</p></div>   
       <div class="col-sm"></div> 
       <div class="col-sm"></div>   
       </div>
  <div id="specif" class="row">
    <p>
      {{String(builder.powersstvarnacijena)}}
    </p>
  </div>
  <div id="shopnow" class="row">
    <div class="col-sm"></div>
      <a :href=builder.powerslink>
    <div class="col-sm"><button id="butshop" type="button" class="btn btn-primary btn-lg">SHOP NOW!</button></div>
      </a>
     <div class="col-sm"></div>
  </div>
</div>
</template>
<script>
import store from "@/store";
import { firebase } from "@/firebase";
import { db } from "@/firebase";
import builder from "@/builder";

export default {
  data() {
    return{ 
      builder,
      };
  },
}
</script>
<style>
#specif{
  background-color: rgb(51, 51, 51);
  border-radius: 25px;
  height: 300px;
 
}
#shopnow{
  margin-top: 50px;
   margin-bottom: 490px;
}

#nazkomp{
height: 50px;
background-color: white;
margin-bottom: 70px;
}
#komp{
  text-align: center;
  vertical-align: middle;
  
}
</style>
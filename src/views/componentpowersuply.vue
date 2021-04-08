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
    <p id="info_o_ps">
      {{String(builder.powersstvarnacijena)}}
    </p>
  </div>
  <div id="shopnow" class="row">
    <div class="col-sm"></div>
      <a :href=builder.powerslink target="_blank">
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
#info_o_ps{
 color: rgb(194, 194, 194);
  margin-top: 1%;
  margin-left:1% ;
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
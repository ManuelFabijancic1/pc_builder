<template>
  <div class="container">
     <div class="row">
       <h3>GPU</h3>
     </div>
     <div class="row">
       <div id="nazkomp" class="col-sm rounded-pill" ><p id="komp">{{String(builder.gpunaziv)}}</p></div>   
       <div class="col-sm"></div> 
       <div class="col-sm"></div>   
       </div>
  <div id="specif" class="row">
    <p id="info_o_gpu">
      {{String(builder.cpuinfo)}}
    </p>
  </div>
  <div id="shopnow" class="row">
    <div class="col-sm"></div>
       <a :href=builder.gpulink target="_blank">
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
#info_o_gpu{
    color: rgb(194, 194, 194);
  margin-top: 1%;
  margin-left:1% ;
}
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
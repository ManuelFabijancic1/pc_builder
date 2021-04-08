<template>
  <div class="home" >
    
 <div class="row">
 <div class="col-2"><!--useless--></div>
 <div class="col-8">
   <center>
 <welcomebar />
<router-link to="computertype">
<button id="nextbutton" type="button" class="btn btn-primary btn-lg">Next</button></router-link>


</center>
 </div>
 <div class="col-2">
 <!--dont matter-->
 </div>
 </div>
 </div>
 </template>

<script>
import Welcomebar from '../components/welcomebar.vue'


export default {
  name: 'Home',
  components: {
    Welcomebar
   
  }
}
</script >

<style scoped lang="scss">
#nextbutton {
 background: #0978b8; 
  text-align: center;
  font-color: black;
  font-weight: bold;
  font-size: 200%;
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-bottom: 560px;
}
  </style>
 
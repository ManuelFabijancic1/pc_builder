<template>
  
  <div class="container gap-3">
     <div class="row"></div>
     <div class="row"></div>
     <div class="row"></div>
     <div class="row"></div>
     <div class="row"></div>
     <div class="row"></div>
    <div id="inputp0" class="row">
      <div class="col-sm">
    <h4>What is youre budget?</h4>
    </div>
    <div class="col-sm"></div>
    <div class="col-sm"></div>
    
    </div>
    
  <div class="row gy-6">
    
   <div class="col-sm"> 
    
    <div id="inputp" class="input-group input-group-lg">
  <span class="input-group-text" id="inputGroup-sizing-lg">$</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"  placeholder="1000$">
</div>
   </div>
   </div>
   <div id="butcont" class="row ">
   <div class="col-sm"> </div>
     
     
       
          <div id="button" class="col-sm"> 
            <router-link to="components">
            <button  type="button" class="btn btn-primary btn-lg">Continue</button>
            </router-link>
          </div>
   </div>   
    
    </div>
  
</template>
<script>



</script>
<style>

#inputp0{
  padding-top: 250px;
}
#butcont{
padding-top: 300px;

}
#button{
  margin-bottom: 300px;
}


</style>
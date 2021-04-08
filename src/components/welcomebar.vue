<template>
  <div class="welcomebar">
   <p id="square">Welcome to the PC builder where our goal is to build your perfect computer </p>
  </div>
</template>

<script>
export default {
  name: 'welcomebar',
  props: {
    msg: String
  }
}
</script>


<style scoped lang="scss">
#square {
  border-radius: 15px;
  background: #4d4d4d;
  padding: 20px; 
  width: 80%;
  height: auto; 
  text-align: center;
  color: black;
  font-weight: bold;
  font-size: 40px;
  margin-top: 50px;
  margin-bottom: 50px;
} 
</style>

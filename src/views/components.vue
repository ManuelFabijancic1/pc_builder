<template>
  <div class="components">
    <div class="row">
      <div class="col-3">
        <componentwindow />
      </div>
      <div class="col-3">
        fdgdfgfdhgbfd
      </div>
      <div class="col-3">
        sxgy
      </div>
      <div class="col-3">
        
      </div>
    </div>
    <div class="feedback">
    
    </div>
  </div>
</template>

<script>
import componentwindow from "../components/componentwindow.vue";
export default {
  name: "componentwindow",
  components: {
    componentwindow,
  },
};
</script >

<style scoped lang="scss">
  .feedback{
    border-radius: 20px;
    background: rgb(92, 92, 92);
    font-size: 20px;
    height: fit-content;
    width: 80%;
  }
</style>
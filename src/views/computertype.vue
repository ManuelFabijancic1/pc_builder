<template>
  <div class="computertype">
    <div class="tekst">
      <p id="pitanje">What is your computer gonna be used for?</p>
    </div>
    <div class="container">
      <div class="row">
        <div class="col order-1">
          <computertypewindow />
        </div>
        <div class="col order-2">
          <computertypewindow />
        </div>
        <div class="col order-3">
          <computertypewindow />
        </div>
        <div class="col order-4">
          <computertypewindow />
        </div>
        <div class="col order-5">
          <computertypewindow />
        </div>
        <div class="col order-6">
          <computertypewindow />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import computertypewindow from "../components/computertypewindow.vue";
export default {
  name: "computertype",
  components: {
    computertypewindow,
  },
};
</script >

<style scoped lang="scss">
#pitanje {
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>
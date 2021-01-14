<template>
  <div class="computertypewindow">
    <div class="tekst">
      <p>GAMING</p>
    </div>
    <div class="slika">
      <router-link to="@/views/components.vue">
        <img src="@/assets/slika.jpg" alt="" loading="lazy" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "computertypewindow",
  props: {
    msg: String,
  },
};
</script>


<style scoped lang="scss">
.computertypewindow {
  width: fit-content;
  height: 500px;
  padding: 20px;
}
.tekst {
  font-size: 50px;
  font-color: black;
  text-align: center;
}
.slika {
  width: fit-content;
  height: fit-content;
}
</style>

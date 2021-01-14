<template>
  <div class="componentwindow">
    <div class="tekst">
      <p>GPU</p>
    </div>
    <div class="componentname">
    <p>gtx 1660ti</p>
    </div>
    <div class="slika">
      <router-link to="@/views/componentspecs.vue">
        <img src="@/assets/componentslika.jpg" alt="" loading="lazy" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "componentwindow",
  props: {
    msg: String,
  },
};
</script>


<style scoped lang="scss">
.componentwindow {
  width: fit-content;
  height: 300px;
  padding: 20px;
  backfround: blue;
}
.tekst {
  font-size: 40px;
  font-color: black;
  text-align: left;
}
.componentname{
    background: white;
    border-radius: 15px;
    font-size: 30px;
}
.slika {
  width: fit-content;
  height: fit-content;
}
</style>
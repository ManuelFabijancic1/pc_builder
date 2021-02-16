<template>
  <div class="budget">
    <div class="tekst">
      <p>Budget:</p>
    </div>
    <div class="numinput">
      <div class="input-group mb-3">
        <span class="input-group-text">kn</span>
        <input id
          type="number"
          v-model="builder.money"
          class="form-control"
          aria-label="Dollar amount (with dot and two decimal places)"
        />
      </div>
    </div>
    <div class="cpu">
      
      <select class="form-select" v-model="builder.cpu" aria-label="Default select example">
  <option selected>Please select CPU type?</option>
  <option value="AM4">AMD</option>
  <option value="1151">Intel</option>
</select>
    </div>
    <div class="ssd">
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          v-model="builder.ssd"
          value=""
          id="ssdcheckbox"
        />
        <label class="form-check-label" for="flexCheckDefault">
          <p>Do you want a SSD?</p>
        </label>
      </div>
    </div>
    <p> value:{{builder.money}} ssd:{{builder.ssd}} computer type: {{builder.computertype}} CPU:{{builder.cpu}}</p>
    <div class="next" onclick="savebudget">
      <router-link to="components" @click="kalk()">Next</router-link>
    </div>
  </div>
</template>

<script>
import builder from '@/builder';
import welcomebar from '../../../pc_builder/src/components/welcomebar.vue';

export default {
  components: { welcomebar },
  name: 'budget',
  data() {
    return{ 
      builder,};
  }
}
</script>

<style lang="scss">
.cpu{
  margin-top: 20px;
  margin-bottom: 20px ;
}
.budget {
}
.tekst {
  margin-top: 100px;
  font-weight: bold;
  font-size: 50px;
}
.numinput {
  width: 50%;
}
.ssd {
  font-size: 20px;
}
.next {
  font-size: 30px;
  margin-top: 30px;
  background: #0978b8;
  width: fit-content;
  height: auto;
  padding: 10px;
  margin-bottom: 570px;
}
</style>
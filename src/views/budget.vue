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
    <p> value:{{builder.money}} ssd:{{builder.ssd}} computer type: {{builder.computertype}}</p>
    <div class="next" onclick="savebudget">
      <router-link to="components">Next</router-link>
    </div>
  </div>
</template>

<script>
import builder from '@/builder';

export default {
  name: 'budget',
  data() {
    return{ 
      builder,};
  }
}
</script>

<style lang="scss">
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
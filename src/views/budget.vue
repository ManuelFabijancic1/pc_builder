<template>
  <div class="budget">
    <div class="tekst">
      <p>Budget:</p>
    </div>
    <div class="numinput">
      <div class="input-group mb-3">
        <span class="input-group-text">kn</span>
        <input
          type="number"
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
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          <p>Do you want a SSD?</p>
        </label>
      </div>
    </div>
    <div class="next">
      <router-link to="components">Next</router-link>
    </div>
  </div>
</template>

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
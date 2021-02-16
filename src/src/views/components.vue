<template>
  <div class="container">
    <div class="row">
      <div class="row">
        <div id="nazivkomponente" class="col-sm rounded-pill">
          <samp>This text sample output from a computer program.</samp>
        </div>
        <div id="nazivkomponente" class="col-sm rounded-pill">
          <samp>This text sample output from a computer program.</samp>
        </div>
        <div id="nazivkomponente" class="col-sm rounded-pill">
          <samp>This text sample output from a computer program.</samp>
        </div>
        <div id="nazivkomponente" class="col-sm rounded-pill">
          <samp>This text sample output from a computer program.</samp>
        </div>
      </div>
      <div class="col-sm">
        <router-link to="componentcpu">
          <div id="card" class="card" style="width: 15rem">
            <img
              class="card-img-top"
              src="@/assets/cpu.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <p class="card-text">CPU</p>
            </div>
          </div>
        </router-link>
      </div>
      <div class="col-sm">
        <router-link to="componentgpu">
          <div id="card" class="card" style="width: 15rem">
            <img
              class="card-img-top"
              src="@/assets/GPU.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <p class="card-text">GPU</p>
            </div>
          </div>
        </router-link>
      </div>
      <div class="col-sm">
        <router-link to="componentmotherboard">
          <div id="card" class="card" style="width: 15rem">
            <img
              class="card-img-top"
              src="@/assets/motherboard.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <p class="card-text">Motherboard</p>
            </div>
          </div>
        </router-link>
      </div>
      <router-link to="componentram">
        <div id="card" class="card" style="width: 15rem">
          <img
            class="card-img-top"
            src="@/assets/ram.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text">RAM</p>
          </div>
        </div>
      </router-link>
    </div>
    <div class="row">
      <div id="nazivkomponente" class="col-sm rounded-pill">
        <samp>This text sample output from a computer program.</samp>
      </div>
      <div id="nazivkomponente" class="col-sm rounded-pill">
        <samp>This text sample output from a computer program.</samp>
      </div>
      <div id="nazivkomponente" class="col-sm rounded-pill">
        <samp>This text sample output from a computer program.</samp>
      </div>
      <div id="nazivkomponente" class="col-sm rounded-pill">
        <samp>This text sample output from a computer program.</samp>
      </div>
    </div>
    <div id="drugired" class="row">
      <div class="col-sm">
        <router-link to="componentpowersuply">
          <div id="card" class="card" style="width: 15rem">
            <img
              class="card-img-top"
              src="@/assets/powersuply.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <p class="card-text">Power suply</p>
            </div>
          </div>
        </router-link>
      </div>
      <div class="col-sm">
        <router-link to="componentstorage">
          <div id="card" class="card" style="width: 15rem">
            <img
              class="card-img-top"
              src="@/assets/storage.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <p class="card-text">Storage</p>
            </div>
          </div>
        </router-link>
      </div>
      <div class="col-sm">
        <router-link to="componentcase">
          <div id="card" class="card" style="width: 15rem">
            <img
              class="card-img-top"
              src="@/assets/case.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <p class="card-text">Case</p>
            </div>
          </div>
        </router-link>
      </div>
      <div class="col-sm">
        <router-link to="componentsystemcooling">
          <div id="card" class="card" style="width: 15rem">
            <img
              class="card-img-top"
              src="@/assets/fan.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <p class="card-text">System cooling</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="row">
          <div class="row">
      <div id="nazkomp" class="col-sm rounded-pill">
        <p id="komp">{{ builder.pomcpu }}</p>
      </div>
      <div class="col-sm"></div>
      <div class="col-sm"></div>
    </div>
    <div id="specif" class="row">
      <p id="spec" style="color: white">{{ builder.socket }}</p>
    </div>
    <div id="shopnow" class="row">
      <div class="col-sm"></div>

</div>
    </div>
    <div class="row">
      <div id="naslov" class="col-sm">
        <h3>About the build</h3>
      </div>
    </div>
    <div id="aboutbuild" class="row">
      <div class="col-sm rounded-pill">
        <h6 id="buildinfo">Build good</h6>
      </div>
    </div>
    <div class="row">
      <div id="resetbuild" class="col-sm">
        <router-link to=""
          ><button type="button" class="btn btn-primary btn-lg">
            Save Build
          </button></router-link
        >
      </div>
      <div class="col-sm"></div>
      <div class="col-sm"></div>
      <div class="col-sm"></div>
      <div class="col-sm"></div>
      <div id="resetbuild" class="col-sm">
        <router-link to="computertype"
          ><button type="button" class="btn btn-primary btn-lg">
            Build it again
          </button></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { firebase } from "@/firebase";
import { db } from "@/firebase";

export default {
  data: function () {
    return {
      cards: [],
      x: [],
    };
  },
 

mounted() {
    this.getData();
  },
  methods: {
    getData() {
      console.log("firebase dohvat....");

      db.collection("GPU").where("cijena",'==',"9999")
        .get()
        .then((query) => {
          query.forEach((doc) => {
            const data = doc.data();

            this.cards.push(
              data.ime,

            );
          
            this.x.push(
               data.desc,
            );
          });
        });
    },
  },
};

</script>


<style >
#buildinfo {
  padding-top: 20px;
  color: white;
}
#card {
  margin-top: 10px;
  background-color: rgb(65, 65, 65);
}
#drugired {
  align-self: center;
}
#nazivkomponente {
  margin-top: 10px;
  background-color: white;
  align-content: center;
  margin-top: 30px;
  margin-left: 30px;
}
#naslov {
  margin-top: 40px;
}
#aboutbuild {
  border-radius: 25px;
  height: 300px;
  background-color: rgb(51, 50, 50);
  margin-bottom: 50px;
}
#resetbuild {
  margin-bottom: 50px;
}
</style>
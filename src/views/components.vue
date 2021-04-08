<template>
  <div class="container">

    <div class="row">
  
      <div class="col-sm">
        <div id="nazivkomponente" class="col-sm rounded-pill">
          <samp>{{String(builder.cpunaziv)}}</samp>
        </div>
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
        <div id="nazivkomponente" class="col-sm rounded-pill">
          <samp>{{String(builder.gpunaziv)}}</samp>
        </div>
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
        <div id="nazivkomponente" class="col-sm rounded-pill">
          <samp>{{String(builder.mbnaziv)}}</samp>
        </div>
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
      <div class="col-sm">
        <div id="nazivkomponente" class="col-sm rounded-pill">
          <samp>{{String(builder.ramnaziv)}}</samp>
        </div>
        <router-link to="componentcpu">
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
    </div>
   
    <div id="drugired" class="row">
      <div class="col-sm">
        <div id="nazivkomponente" class="col-sm rounded-pill">
          <samp>{{String(builder.powersnaziv)}}</samp>
        </div>
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
        <div id="nazivkomponente" class="col-sm rounded-pill">
          <samp>{{String(builder.storagenaziv)}}</samp>
        </div>
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
        <div id="nazivkomponente" class="col-sm rounded-pill">
          <samp>{{String(builder.casenaziv)}}</samp>
        </div>
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
        <div id="nazivkomponente" class="col-sm rounded-pill">
          <samp>{{String(builder.coolingnaziv)}}</samp>
        </div>
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
          <p id="komp"></p>
        </div>
        <div class="col-sm"></div>
        <div class="col-sm"></div>
      </div>
      <div id="specif" class="row">
        <p id="spec" style="color: white"></p>
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
        <p>pomcpu: {{builder.cpucijena}} socket: {{String(builder.cpusocket)}} cijena: {{ String(builder.stvarnacijenacpu)}} naziv:{{String(builder.cpunaziv)}}
      
        </p>

        pomcpu: {{String(builder.stvarnacijenacpu)}} socket:{{String(builder.mbsocket)}} naziv: {{String(builder.mbnaziv)}}  cijena:{{String(builder.mbstvarnacijena)}}
         <p>
         pomcpu3: {{ builder.cooolingcijena}} socket: naziv:   cijena:
         </p>
      </div>
    </div>
    <div class="row">
      <div id="resetbuild" class="col-sm">
        <router-link to=""
          ><button type="button" @click="savebuild()" class="btn btn-primary btn-lg">
            Save Build
          </button></router-link>
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
import builder from "@/builder";


export default {
  data() {
    return{ 
      builder,
      
     
      };
  },
methods: {
    savebuild() {
      db.collection('users').doc(this.email).set({
        case: String(builder.casenaziv),
        cpu: String(builder.cpunaziv),
        gpu: String(builder.gpunaziv),
        motherboard: String(builder.mbnaziv),
        powersupply: String(builder.powersnaziv),
        ram: String(builder.ramnaziv),
        storage: String(builder.storagenaziv),
        systemcooling: String(builder.coolingnaziv)
      });
    }
  }
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
  margin-top:2%;
  background-color: white;
  
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
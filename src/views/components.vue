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
<div class="row" id="razmak"></div>
    
    
    <div class="row">
      <div id="resetbuild" class="col-sm">
        <router-link to="" v-on:click.native="savebuild()">
          <button type="button" class="btn btn-primary btn-lg">
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
      
      db.collection("users").doc(String(store.currentUser)).set({
        id: String(store.currentUser),
        case: String(this.builder.casenaziv),
        cpu: String(this.builder.cpunaziv),
        gpu: String(this.builder.gpunaziv),
        motherboard: String(this.builder.mbnaziv),
        powersupply: String(this.builder.powersnaziv),
        ram: String(this.builder.ramnaziv),
        storage: String(this.builder.storagenaziv),
        systemcooling: String(this.builder.coolingnaziv)
        
      });
      
    },
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
#razmak{
  margin-bottom: 10%;
}
</style>

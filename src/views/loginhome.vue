<template onLoad="javascript:print()">
  <div class="container">
    <div class="row">
      <div class="col-2"><!--useless2--></div>
      <div class ="col-sm">
        <center>
          <div class="spacing">
            <div class="square">
              <p>Username: {{ String(store.currentUser) }}</p>
            </div>
            </div>
           <div class="col-8">
            <div class="square">
              <p> Saved build: </p>

              <div class="build"><button v-on:click="print()" class="btn btn-primary btn-lg">LOAD BUILD</button></div>

              <div class="displaycomponents">
                <p> CPU: {{String(builder.cpuuser)}} </p>
                <p> GPU: {{String(builder.gpuuser)}} </p>
                <p> CASE: {{String(builder.caseuser)}} </p>
                <p> MOTHERBOARD: {{String(builder.mbuser)}} </p>
                <p> POWER SUPPLY: {{String(builder.poweruser)}} </p>
                <p> RAM: {{String(builder.ramuser)}} </p>
                <p> COOLING: {{String(builder.coolinguser)}} </p>
                <p> STORAGE: {{String(builder.storageuser)}} </p>

              </div>
            </div>
          </div> 
        </center>
      </div>
      <div class="col-2">
        <!--dont matter2-->
      </div>
    </div>
  </div>
</template>


<script>
import builder from '@/builder';
import store from "@/store";
import { firebase } from "@/firebase";
import { db } from "@/firebase";



export default {
  name: 'loginhome',

  data(){
   return {
    builder,
    store
   };
  },

  methods: {
    print(){
        

        this.builder.cpuuser=[],
        this.builder.caseuser=[],
        this.builder.gpuuser=[],
        this.builder.mbuser=[],
        this.builder.poweruser=[],
        this.builder.ramuser=[],
        this.builder.storageuser=[],
        this.builder.coolinguser=[],

        db.collection("users").where("id", "==", String(store.currentUser))
                        .get()
                        .then((query) => {           
                              query.forEach((doc) => {
                                    const data = doc.data();
                                        this.builder.cpuuser.push(
                                            data.cpu,
                                        );
                                        this.builder.gpuuser.push(
                                            data.gpu,
                                        );
                                        this.builder.mbuser.push(
                                            data.motherboard,
                                        );
                                        this.builder.ramuser.push(
                                            data.ram,
                                        );
                                        this.builder.poweruser.push(
                                            data.powersupply,
                                        );
                                        this.builder.coolinguser.push(
                                            data.systemcooling,
                                        );
                                        this.builder.caseuser.push(
                                            data.case,
                                        );
                                        this.builder.storageuser.push(
                                            data.storage,
                                        );
                                        
                                  
                              });
                        });
        },
    },
};
  
</script>


<style scoped lang="scss">
.spacing {
  padding: 8px 16px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.square {
  border-radius: 15px;
  background: #4d4d4d;
  padding: 20px;
  width: auto;
  height: auto;
  text-align: center;
  color: black;
  font-weight: bold;
  font-size: 40px;
  margin-top: 50px;
  margin-bottom: 50px;

  

}

</style>

<template>
  <div class="budget">
    <div class="tekst">
      <p>Budget:</p>
    </div>
    <div class="numinput">
      <div class="input-group mb-3">
        <span class="input-group-text">kn</span>
        <input
          id
          type="number"
          v-model="builder.money"
          class="form-control"
          aria-label="Dollar amount (with dot and two decimal places)"
        />
      </div>
    </div>
    
    <div class="cpu">
      <h6>Select cpu type</h6>
      <select
        class="form-select"
        v-model="builder.socket"
        aria-label="Default select example"
        aria-placeholder="Please select CPU type?"
      >
      
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
    <p>
      value:{{ builder.money }} ssd:{{ builder.ssd }} computer type:
      {{ builder.computertype }} CPU:{{ builder.socket }}

    </p>
     <p>pomcpu: {{builder.pomcpu}} socket: {{builder.cpusocket}}</p>
    <div class="next">
      <router-link to="components" v-on:click.native="kalkulator()"
        >Next</router-link
      >
    </div>
  </div>
</template>

<script>
import builder from '@/builder';
import store from "@/store";
import { firebase } from "@/firebase";
import { db } from "@/firebase";

export default {
  name: 'budget',
  data() {
    return{ 
      builder,
      
      };
       
  },
 
  

 

  computed: {
        kalkulator() {
          console.log('bruh!');
          console.log(this.builder.computertype);
          switch (String(this.builder.computertype)) {
            case '1': 
                  //gaming
          
            break;
            case '2': 
                  //basic
                  console.log("god");
                  
                  builder.cpucijena = builder.money * 0.5;


                     db.collection("CPU").where("cijena", "<=", String(builder.cpucijena)).orderBy("cijena", "desc").limit(1)
                        .get()
                        .then((query) => {
                          this.builder.stvarnacijenacpu= []
                          this.builder.cpusocket=[]
                          
                              query.forEach((doc) => {
                                    const data = doc.data();
                                    
                                  
                                   this.builder.stvarnacijenacpu.push(
                                          data.cijena,
                                    );

                                    this.builder.cpusocket.push(
                                          data.socket,
                                    );
                                    this.builder.cpunaziv.push(
                                         data.ime
                                   ); 
                              });
                        });

               builder.ostatak1=Number(builder.money)-Number(builder.stvarnacijenacpu[0]);
               
               
                builder.mbcijena=builder.ostatak1*0.3;

                  db.collection("MOTHERB").where("cijena", "<=", String(builder.mbcijena)).orderBy("cijena", "desc").limit(1)
                        .get()
                        .then((query) => {
                           this.builder.mbstvarnacijena=[]
                           this.builder.mbnaziv=[]
                            this.builder.mbsocket=[]
                            this.builder.mbstvarnacijena=[]
                              query.forEach((doc) => {
                                    const data = doc.data();

                                    this.builder.mbstvarnacijena.push(
                                          data.cijena,
                                        
                                    );
                                    this.builder.mbnaziv.push(
                                          data.ime,
                                        
                                    );
                                    this.builder.mbsocket.push(
                                      data.socket
                                    );
                                    this.builder.mbstvarnacijena.pus(
                                      data.cijena
                                    )
                          
                                
                              });
                        });
                  
            
         

         
                  
            break;
            case '3': 
                  //editing
            
            break;
            case '4': 
                  //workstation
            
            break;
            case '5': 
                  //fastest
            
            break;
          }
  
        },
    },
}
</script>

<style lang="scss">
.cpu {
  margin-top: 20px;
  margin-bottom: 20px;
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
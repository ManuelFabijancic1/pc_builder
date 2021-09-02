<template>
  <div class="budget">
    <div class="tekst">
      <p>Budget:</p>
    </div>
    <div class="numinput">
      <div class="input-group mb-3">
        <span class="input-group-text">kn</span>
        <input
          :placeholder="builder.prijedlog"
          type="number"
          v-model="builder.money"
          class="form-control"
          aria-label="Dollar amount (with dot and two decimal places)"
        />
      </div>
    </div>
    <h4>Select cpu type:</h4>
    <div>
     <select
        class="form-select"
        v-model="builder.socket"
        aria-label="Default select example"
      
      >
        
        <option value="AM4">AMD</option>
        <option value="1151">Intel</option>
      </select>
    </div>
      
    
        <router-link to="components" v-on:click.native="kalkulator()" >
<button id="next" type="button" class="btn btn-primary btn-lg" >Next</button></router-link>
    
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
   
  


 methods: {
       
        kalkulator() {
                         this.builder.stvarnacijenacpu= []
                          this.builder.cpusocket=[]
                          this.builder.cpunaziv=[]
                          this.builder.cpuinfo=[]
                          this.builder.cpulink=[]
                          this.builder.gpustvarnacijena=[]
                           this.builder.gpunaziv=[]
                            this.builder.gpusocket=[]
                            this.builder.gpuinfo=[]
                            this.builder.gpulink=[]
                            this.builder.mbstvarnacijena=[]
                           this.builder.mbnaziv=[]
                            this.builder.mbsocket=[]
                            this.builder.mbinfo=[]
                            this.builder.mblink=[]
                            this.builder.ramcijena=[]
                           this.builder.raminfo=[]
                           this.builder.ramlink=[]
                           this.builder.ramnaziv=[] 
                           this.builder.powersinfo=[]
                           this.builder.powerslink=[]
                           this.builder.powersnaziv=[]
                           this.builder.powersstvarnacijena=[]  
                           this.builder.storageinfo=[]
                           this.builder.storagelink=[]
                           this.builder.storagenaziv=[]
                           this.builder.storagestvarnacijena=[]         
                           this.builder.caseinfo=[]
                           this.builder.caselink=[]
                           this.builder.casenaziv=[]
                           this.builder.casestvarnacijena=[]   
                           this.builder.coolinginfo=[]
                           this.builder.coolinglink=[]
                           this.builder.coolingnaziv=[]
                           this.builder.coolingstvarnacijena=[]                          

          switch (String(this.builder.computertype)) {
            case '1': 
                  //gaming
                  
                  builder.cpucijena = builder.money * 0.35;
                  


                     db.collection("CPU").where("cijena","<=",String(builder.cpucijena)).where("socket","==",String(builder.socket)).orderBy("cijena",  "desc").limit(1)
                        .get()
                        .then((query) => {
                          
                              query.forEach((doc) => {
                                    const data = doc.data();
                                    
                                  
                                   this.builder.stvarnacijenacpu.push(
                                          data.cijena,
                                    );

                                    this.builder.cpusocket.push(
                                          data.socket,
                                    );
                                    this.builder.cpunaziv.push(
                                         data.ime,
                                   ); 
                                   this.builder.cpuinfo.push(
                                        data.desc
                                   );
                                   this.builder.cpulink.push(
                                        data.link
                                   );
                              });
                        });

                        builder.ostatakgpu=builder.money-builder.stvarnacijenacpu
                        builder.gpucijena=builder.ostatakgpu*0.4

                        db.collection("GPU").where("cijena","<=",String(builder.gpucijena)).orderBy("cijena",  "desc").limit(1).get().then((query) => {
                          
                            
                              query.forEach((doc) => {
                                    const data = doc.data();
                                    

                                    this.builder.gpustvarnacijena.push(
                                          data.cijena,
                                        
                                    );
                                    this.builder.gpunaziv.push(
                                          data.ime,
                                        
                                    );
                                    
                                    this.builder.gpuinfo.push(
                                      data.desc
                                    );
                                    this.builder.gpulink.push(
                                      data.link
                                    );
                                    
                          
                                
                              });
                        });

              
               builder.ostatak1=builder.ostatakgpu-builder.gpustvarnacijena;
              builder.mbsoc=builder.cpusocket;
               
                builder.mbcijena=builder.ostatak1*0.3;

               
                
                  db.collection("MOTHERB").where("cijena", "<=", String(builder.mbcijena)).where("socket","==",builder.socket).orderBy("cijena", "desc").limit(1)
                        .get()
                        .then((query) => {
                           
                            
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
                                    this.builder.mbinfo.push(
                                      data.desc
                                    );
                                    this.builder.mblink.push(
                                      data.link
                                    );
                                    
                          
                                
                              });
                        });
                        builder.ostatak2=builder.ostatak1-builder.mbstvarnacijena

                        builder.rampomvar=builder.ostatak2*0.22

                  
             db.collection("RAM").where("cijena", "<=", String(builder.rampomvar)).orderBy("cijena", "desc").limit(1)
                        .get()
                        .then((query) => {
                                       
                              query.forEach((doc) => {
                                    const data = doc.data();

                                    this.builder.ramcijena.push(
                                          data.cijena,
                                        
                                    );
                                    this.builder.ramnaziv.push(
                                          data.ime,
                                        
                                    );
                                    this.builder.ramlink.push(
                                      data.link,
                                    );
                                   this.builder.raminfo.push(
                                     data.desc,
                                   );
                          
                                
                              });
                        });
                
                builder.ostatak3=builder.ostatak2-builder.ramcijena
                builder.powerscijna=builder.ostatak3*0.25

               db.collection("POWERS").where("cijena", "<=", String(builder.powerscijna)).orderBy("cijena", "desc").limit(1)
                        .get()
                        .then((query) => {
                                      
                              query.forEach((doc) => {
                                    const data = doc.data();

                                    this.builder.powersstvarnacijena.push(
                                          data.cijena,
                                        
                                    );
                                    this.builder.powersnaziv.push(
                                          data.ime,
                                        
                                    );
                                    this.builder.powerslink.push(
                                      data.link,
                                    );
                                   this.builder.powersinfo.push(
                                     data.desc,
                                   );
                          
                                
                              });
                        });

                        builder.ostatak4=builder.ostatak3-builder.powersstvarnacijena
                        builder.storagecijena=builder.ostatak4*0.3

                     db.collection("STORAGE").where("cijena", "<=", String(builder.storagecijena)).orderBy("cijena", "desc").limit(1)
                        .get()
                        .then((query) => {
                                        
                              query.forEach((doc) => {
                                    const data = doc.data();

                                    this.builder.storagestvarnacijena.push(
                                          data.cijena,
                                        
                                    );
                                    this.builder.storagenaziv.push(
                                          data.ime,
                                        
                                    );
                                    this.builder.storagelink.push(
                                      data.link,
                                    );
                                   this.builder.storageinfo.push(
                                     data.desc,
                                   );
                          
                                
                              });
                        });
                        builder.ostatak5=builder.ostatak4-builder.storagestvarnacijena
                        builder.casecijena=builder.ostatak5*0.5
                         db.collection("CASE").where("cijena", "<=", String(builder.casecijena)).orderBy("cijena", "desc").limit(1)
                        .get()
                        .then((query) => {
                                       
                              query.forEach((doc) => {
                                    const data = doc.data();

                                    this.builder.casestvarnacijena.push(
                                          data.cijena,
                                        
                                    );
                                    this.builder.casenaziv.push(
                                          data.ime,
                                        
                                    );
                                    this.builder.caselink.push(
                                      data.link,
                                    );
                                   this.builder.caseinfo.push(
                                     data.desc,
                                   );
                          
                                
                              });
                        });
                        builder.ostatak6=builder.ostatak5-builder.casestvarnacijena
                        builder.cooolingcijena=builder.ostatak6

                         db.collection("SYSTEMC").where("cijena", "<=", String(builder.cooolingcijena)).orderBy("cijena", "desc").limit(1)
                        .get()
                        .then((query) => {
                           
                              query.forEach((doc) => {
                                    const data = doc.data();

                                    this.builder.coolingstvarnacijena.push(
                                          data.cijena,
                                        
                                    );
                                    this.builder.coolingnaziv.push(
                                          data.ime,
                                        
                                    );
                                    this.builder.coolinglink.push(
                                      data.link,
                                    );
                                   this.builder.coolinginfo.push(
                                     data.desc,
                                   );
                          
                                
                              });
                        });
         
          
            break;
            case '2': 
                  //basic
                 
                  
                  

                  builder.cpucijena = builder.money * 0.35;
               


                     db.collection("CPU").where("cijena","<=",String(builder.cpucijena)).where("socket","==",String(builder.socket)).orderBy("cijena",  "desc").limit(1)
                        .get()
                        .then((query) => {
                          
                              query.forEach((doc) => {
                                    const data = doc.data();
                                    
                                  
                                   this.builder.stvarnacijenacpu.push(
                                          data.cijena,
                                    );

                                    this.builder.cpusocket.push(
                                          data.socket,
                                    );
                                    this.builder.cpunaziv.push(
                                         data.ime,
                                   ); 
                                   this.builder.cpuinfo.push(
                                        data.desc
                                   );
                                   this.builder.cpulink.push(
                                        data.link
                                   );
                              });
                        });
              
               builder.ostatak1=builder.money-builder.stvarnacijenacpu;
               
               
                builder.mbcijena=builder.ostatak1*0.3;

             
                
                  db.collection("MOTHERB").where("cijena", "<=", String(builder.mbcijena)).where("socket","==",String(builder.socket)).orderBy("cijena", "desc").limit(1)
                        .get()
                        .then((query) => {
                           
                            
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
                                    this.builder.mbinfo.push(
                                      data.desc
                                    );
                                    this.builder.mblink.push(
                                      data.link
                                    );
                                    
                          
                                
                              });
                        });
                        builder.ostatak2=builder.ostatak1-builder.mbstvarnacijena

                        builder.rampomvar=builder.ostatak2*0.22

                  
             db.collection("RAM").where("cijena", "<=", String(builder.rampomvar)).orderBy("cijena", "desc").limit(1)
                        .get()
                        .then((query) => {
                           
                              query.forEach((doc) => {
                                    const data = doc.data();

                                    this.builder.ramcijena.push(
                                          data.cijena,
                                        
                                    );
                                    this.builder.ramnaziv.push(
                                          data.ime,
                                        
                                    );
                                    this.builder.ramlink.push(
                                      data.link,
                                    );
                                   this.builder.raminfo.push(
                                     data.desc,
                                   );
                          
                                
                              });
                        });
                
                builder.ostatak3=builder.ostatak2-builder.ramcijena
                builder.powerscijna=builder.ostatak3*0.25

               db.collection("POWERS").where("cijena", "<=", String(builder.powerscijna)).orderBy("cijena", "desc").limit(1)
                        .get()
                        .then((query) => {
                           
                              query.forEach((doc) => {
                                    const data = doc.data();

                                    this.builder.powersstvarnacijena.push(
                                          data.cijena,
                                        
                                    );
                                    this.builder.powersnaziv.push(
                                          data.ime,
                                        
                                    );
                                    this.builder.powerslink.push(
                                      data.link,
                                    );
                                   this.builder.powersinfo.push(
                                     data.desc,
                                   );
                          
                                
                              });
                        });

                        builder.ostatak4=builder.ostatak3-builder.powersstvarnacijena
                        builder.storagecijena=builder.ostatak4*0.3

                     db.collection("STORAGE").where("cijena", "<=", String(builder.storagecijena)).orderBy("cijena", "desc").limit(1)
                        .get()
                        .then((query) => {
                           
                              query.forEach((doc) => {
                                    const data = doc.data();

                                    this.builder.storagestvarnacijena.push(
                                          data.cijena,
                                        
                                    );
                                    this.builder.storagenaziv.push(
                                          data.ime,
                                        
                                    );
                                    this.builder.storagelink.push(
                                      data.link,
                                    );
                                   this.builder.storageinfo.push(
                                     data.desc,
                                   );
                          
                                
                              });
                        });
                        builder.ostatak5=builder.ostatak4-builder.storagestvarnacijena
                        builder.casecijena=builder.ostatak5*0.5
                         db.collection("CASE").where("cijena", "<=", String(builder.casecijena)).orderBy("cijena", "desc").limit(1)
                        .get()
                        .then((query) => {
                           
                              query.forEach((doc) => {
                                    const data = doc.data();

                                    this.builder.casestvarnacijena.push(
                                          data.cijena,
                                        
                                    );
                                    this.builder.casenaziv.push(
                                          data.ime,
                                        
                                    );
                                    this.builder.caselink.push(
                                      data.link,
                                    );
                                   this.builder.caseinfo.push(
                                     data.desc,
                                   );
                          
                                
                              });
                        });
                        builder.ostatak6=builder.ostatak5-builder.casestvarnacijena
                        builder.cooolingcijena=builder.ostatak6

                         db.collection("SYSTEMC").where("cijena", "<=", String(builder.cooolingcijena)).orderBy("cijena", "desc").limit(1)
                        .get()
                        .then((query) => {
                           
                              query.forEach((doc) => {
                                    const data = doc.data();

                                    this.builder.coolingstvarnacijena.push(
                                          data.cijena,
                                        
                                    );
                                    this.builder.coolingnaziv.push(
                                          data.ime,
                                        
                                    );
                                    this.builder.coolinglink.push(
                                      data.link,
                                    );
                                   this.builder.coolinginfo.push(
                                     data.desc,
                                   );
                          
                                
                              });
                        });
         

                  
            break;
            case '3': 
                  //editing
            builder.cpucijena = builder.money * 0.35;
                  


                     db.collection("CPU").where("cijena","<=",String(builder.cpucijena)).where("socket","==",String(builder.socket)).orderBy("cijena",  "desc").limit(1)
                        .get()
                        .then((query) => {
                          
                              query.forEach((doc) => {
                                    const data = doc.data();
                                    
                                  
                                   this.builder.stvarnacijenacpu.push(
                                          data.cijena,
                                    );

                                    this.builder.cpusocket.push(
                                          data.socket,
                                    );
                                    this.builder.cpunaziv.push(
                                         data.ime,
                                   ); 
                                   this.builder.cpuinfo.push(
                                        data.desc
                                   );
                                   this.builder.cpulink.push(
                                        data.link
                                   );
                              });
                        });

                        builder.ostatakgpu=builder.money-builder.stvarnacijenacpu
                        builder.gpucijena=builder.ostatakgpu*0.4

                        db.collection("GPU").where("cijena","<=",String(builder.gpucijena)).orderBy("cijena",  "desc").limit(1).get().then((query) => {
                           
                            
                              query.forEach((doc) => {
                                    const data = doc.data();
                                    

                                    this.builder.gpustvarnacijena.push(
                                          data.cijena,
                                        
                                    );
                                    this.builder.gpunaziv.push(
                                          data.ime,
                                        
                                    );
                                    
                                    this.builder.gpuinfo.push(
                                      data.desc
                                    );
                                    this.builder.gpulink.push(
                                      data.link
                                    );
                                    
                          
                                
                              });
                        });

              
               builder.ostatak1=builder.ostatakgpu-builder.gpustvarnacijena;
               
               
                builder.mbcijena=builder.ostatak1*0.3;

              
                
                  db.collection("MOTHERB").where("cijena", "<=", String(builder.mbcijena)).where("socket","==",String(builder.socket)).orderBy("cijena", "desc").limit(1)
                        .get()
                        .then((query) => {
                           
                            
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
                                    this.builder.mbinfo.push(
                                      data.desc
                                    );
                                    this.builder.mblink.push(
                                      data.link
                                    );
                                    
                          
                                
                              });
                        });
                        builder.ostatak2=builder.ostatak1-builder.mbstvarnacijena

                        builder.rampomvar=builder.ostatak2*0.22

                  
             db.collection("RAM").where("cijena", "<=", String(builder.rampomvar)).orderBy("cijena", "desc").limit(1)
                        .get()
                        .then((query) => {
                           
                              query.forEach((doc) => {
                                    const data = doc.data();

                                    this.builder.ramcijena.push(
                                          data.cijena,
                                        
                                    );
                                    this.builder.ramnaziv.push(
                                          data.ime,
                                        
                                    );
                                    this.builder.ramlink.push(
                                      data.link,
                                    );
                                   this.builder.raminfo.push(
                                     data.desc,
                                   );
                          
                                
                              });
                        });
                
                builder.ostatak3=builder.ostatak2-builder.ramcijena
                builder.powerscijna=builder.ostatak3*0.25

               db.collection("POWERS").where("cijena", "<=", String(builder.powerscijna)).orderBy("cijena", "desc").limit(1)
                        .get()
                        .then((query) => {
                           
                              query.forEach((doc) => {
                                    const data = doc.data();

                                    this.builder.powersstvarnacijena.push(
                                          data.cijena,
                                        
                                    );
                                    this.builder.powersnaziv.push(
                                          data.ime,
                                        
                                    );
                                    this.builder.powerslink.push(
                                      data.link,
                                    );
                                   this.builder.powersinfo.push(
                                     data.desc,
                                   );
                          
                                
                              });
                        });

                        builder.ostatak4=builder.ostatak3-builder.powersstvarnacijena
                        builder.storagecijena=builder.ostatak4*0.3

                     db.collection("STORAGE").where("cijena", "<=", String(builder.storagecijena)).orderBy("cijena", "desc").limit(1)
                        .get()
                        .then((query) => {
                           
                              query.forEach((doc) => {
                                    const data = doc.data();

                                    this.builder.storagestvarnacijena.push(
                                          data.cijena,
                                        
                                    );
                                    this.builder.storagenaziv.push(
                                          data.ime,
                                        
                                    );
                                    this.builder.storagelink.push(
                                      data.link,
                                    );
                                   this.builder.storageinfo.push(
                                     data.desc,
                                   );
                          
                                
                              });
                        });
                        builder.ostatak5=builder.ostatak4-builder.storagestvarnacijena
                        builder.casecijena=builder.ostatak5*0.5
                         db.collection("CASE").where("cijena", "<=", String(builder.casecijena)).orderBy("cijena", "desc").limit(1)
                        .get()
                        .then((query) => {
                                       
                              query.forEach((doc) => {
                                    const data = doc.data();

                                    this.builder.casestvarnacijena.push(
                                          data.cijena,
                                        
                                    );
                                    this.builder.casenaziv.push(
                                          data.ime,
                                        
                                    );
                                    this.builder.caselink.push(
                                      data.link,
                                    );
                                   this.builder.caseinfo.push(
                                     data.desc,
                                   );
                          
                                
                              });
                        });
                        builder.ostatak6=builder.ostatak5-builder.casestvarnacijena
                        builder.cooolingcijena=builder.ostatak6

                         db.collection("SYSTEMC").where("cijena", "<=", String(builder.cooolingcijena)).orderBy("cijena", "desc").limit(1)
                        .get()
                        .then((query) => {
                                    
                              query.forEach((doc) => {
                                    const data = doc.data();

                                    this.builder.coolingstvarnacijena.push(
                                          data.cijena,
                                        
                                    );
                                    this.builder.coolingnaziv.push(
                                          data.ime,
                                        
                                    );
                                    this.builder.coolinglink.push(
                                      data.link,
                                    );
                                   this.builder.coolinginfo.push(
                                     data.desc,
                                   );
                          
                                
                              });
                        });
         
            break;
            case '4': 
                  //workstation
            builder.cpucijena = builder.money * 0.35;
                  


                     db.collection("CPU").where("cijena","<=",String(builder.cpucijena)).where("socket","==",String(builder.socket)).orderBy("cijena",  "desc").limit(1)
                        .get()
                        .then((query) => {
                         
                              query.forEach((doc) => {
                                    const data = doc.data();
                                    
                                  
                                   this.builder.stvarnacijenacpu.push(
                                          data.cijena,
                                    );

                                    this.builder.cpusocket.push(
                                          data.socket,
                                    );
                                    this.builder.cpunaziv.push(
                                         data.ime,
                                   ); 
                                   this.builder.cpuinfo.push(
                                        data.desc
                                   );
                                   this.builder.cpulink.push(
                                        data.link
                                   );
                              });
                        });

                        builder.ostatakgpu=builder.money-builder.stvarnacijenacpu
                        builder.gpucijena=builder.ostatakgpu*0.4

                        db.collection("GPU").where("cijena","<=",String(builder.gpucijena)).orderBy("cijena",  "desc").limit(1).get().then((query) => {
                           
                            
                              query.forEach((doc) => {
                                    const data = doc.data();
                                    

                                    this.builder.gpustvarnacijena.push(
                                          data.cijena,
                                        
                                    );
                                    this.builder.gpunaziv.push(
                                          data.ime,
                                        
                                    );
                                    
                                    this.builder.gpuinfo.push(
                                      data.desc
                                    );
                                    this.builder.gpulink.push(
                                      data.link
                                    );
                                    
                          
                                
                              });
                        });

              
               builder.ostatak1=builder.ostatakgpu-builder.gpustvarnacijena;
               
               
                builder.mbcijena=builder.ostatak1*0.3;

                
                
                  db.collection("MOTHERB").where("cijena", "<=", String(builder.mbcijena)).where("socket","==",String(builder.socket)).orderBy("cijena", "desc").limit(1)
                        .get()
                        .then((query) => {
                           
                            
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
                                    this.builder.mbinfo.push(
                                      data.desc
                                    );
                                    this.builder.mblink.push(
                                      data.link
                                    );
                                    
                          
                                
                              });
                        });
                        builder.ostatak2=builder.ostatak1-builder.mbstvarnacijena

                        builder.rampomvar=builder.ostatak2*0.22

                  
             db.collection("RAM").where("cijena", "<=", String(builder.rampomvar)).orderBy("cijena", "desc").limit(1)
                        .get()
                        .then((query) => {
                           
                              query.forEach((doc) => {
                                    const data = doc.data();

                                    this.builder.ramcijena.push(
                                          data.cijena,
                                        
                                    );
                                    this.builder.ramnaziv.push(
                                          data.ime,
                                        
                                    );
                                    this.builder.ramlink.push(
                                      data.link,
                                    );
                                   this.builder.raminfo.push(
                                     data.desc,
                                   );
                          
                                
                              });
                        });
                
                builder.ostatak3=builder.ostatak2-builder.ramcijena
                builder.powerscijna=builder.ostatak3*0.25

               db.collection("POWERS").where("cijena", "<=", String(builder.powerscijna)).orderBy("cijena", "desc").limit(1)
                        .get()
                        .then((query) => {
                                        
                              query.forEach((doc) => {
                                    const data = doc.data();

                                    this.builder.powersstvarnacijena.push(
                                          data.cijena,
                                        
                                    );
                                    this.builder.powersnaziv.push(
                                          data.ime,
                                        
                                    );
                                    this.builder.powerslink.push(
                                      data.link,
                                    );
                                   this.builder.powersinfo.push(
                                     data.desc,
                                   );
                          
                                
                              });
                        });

                        builder.ostatak4=builder.ostatak3-builder.powersstvarnacijena
                        builder.storagecijena=builder.ostatak4*0.3

                     db.collection("STORAGE").where("cijena", "<=", String(builder.storagecijena)).orderBy("cijena", "desc").limit(1)
                        .get()
                        .then((query) => {
                                        
                              query.forEach((doc) => {
                                    const data = doc.data();

                                    this.builder.storagestvarnacijena.push(
                                          data.cijena,
                                        
                                    );
                                    this.builder.storagenaziv.push(
                                          data.ime,
                                        
                                    );
                                    this.builder.storagelink.push(
                                      data.link,
                                    );
                                   this.builder.storageinfo.push(
                                     data.desc,
                                   );
                          
                                
                              });
                        });
                        builder.ostatak5=builder.ostatak4-builder.storagestvarnacijena
                        builder.casecijena=builder.ostatak5*0.5
                         db.collection("CASE").where("cijena", "<=", String(builder.casecijena)).orderBy("cijena", "desc").limit(1)
                        .get()
                        .then((query) => {
                           
                              query.forEach((doc) => {
                                    const data = doc.data();

                                    this.builder.casestvarnacijena.push(
                                          data.cijena,
                                        
                                    );
                                    this.builder.casenaziv.push(
                                          data.ime,
                                        
                                    );
                                    this.builder.caselink.push(
                                      data.link,
                                    );
                                   this.builder.caseinfo.push(
                                     data.desc,
                                   );
                          
                                
                              });
                        });
                        builder.ostatak6=builder.ostatak5-builder.casestvarnacijena
                        builder.cooolingcijena=builder.ostatak6

                         db.collection("SYSTEMC").where("cijena", "<=", String(builder.cooolingcijena)).orderBy("cijena", "desc").limit(1)
                        .get()
                        .then((query) => {
                           
                              query.forEach((doc) => {
                                    const data = doc.data();

                                    this.builder.coolingstvarnacijena.push(
                                          data.cijena,
                                        
                                    );
                                    this.builder.coolingnaziv.push(
                                          data.ime,
                                        
                                    );
                                    this.builder.coolinglink.push(
                                      data.link,
                                    );
                                   this.builder.coolinginfo.push(
                                     data.desc,
                                   );
                          
                                
                              });
                        });
         
          
         
            
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
#next {
  font-size: 30px;
  margin-top: 30px;
  background: #0978b8;
  width: fit-content;
  height: auto;
  padding: 10px;
  margin-bottom: 270px;
}
  

</style>

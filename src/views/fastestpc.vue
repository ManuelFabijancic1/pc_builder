<template>
  <div class="container">
    
    <h4 id="cpusel">Select cpu type:</h4>
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
      

<div class="col-sm">
        <router-link to="components" v-on:click.native="fastest()" >
<button id="nextb" type="button" class="btn btn-primary btn-lg" >Next</button></router-link>
</div>
  </div>
</template>

<script>
import builder from '@/builder';
import store from "@/store";
import { firebase } from "@/firebase";
import { db } from "@/firebase";
export default{
     
  data() {
    return{ 
      builder,
      
      
      
      };
       
  },
    methods:{
        fastest(){
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

                     db.collection("CPU").where("socket","==",String(builder.socket)).orderBy("cijena",  "desc").limit(1)
                        .get()
                        .then((query) => {
                          
                              query.forEach((doc) => {
                                    const data = doc.data();
                                    
                                  
                                   

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

                    

                        db.collection("GPU").orderBy("cijena",  "desc").limit(1).get().then((query) => {
                           
                            
                              query.forEach((doc) => {
                                    const data = doc.data();
                                    

                                    
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

              
               

               
                
                  db.collection("MOTHERB").where("socket","==",String(builder.socket)).orderBy("cijena", "desc").limit(1)
                        .get()
                        .then((query) => {
                           
                            
                              query.forEach((doc) => {
                                    const data = doc.data();
                                    

                                    
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
                        
                  
             db.collection("RAM").orderBy("cijena", "desc").limit(1)
                        .get()
                        .then((query) => {
                                      
                              query.forEach((doc) => {
                                    const data = doc.data();

                                    
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
                
                

               db.collection("POWERS").orderBy("cijena", "desc").limit(1)
                        .get()
                        .then((query) => {
                           
                              query.forEach((doc) => {
                                    const data = doc.data();

                                   
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

                       

                     db.collection("STORAGE").orderBy("cijena", "desc").limit(1)
                        .get()
                        .then((query) => {
                                        
                              query.forEach((doc) => {
                                    const data = doc.data();

                                    
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
                       
                         db.collection("CASE").orderBy("cijena", "desc").limit(1)
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
                        

                         db.collection("SYSTEMC").orderBy("cijena", "desc").limit(1)
                        .get()
                        .then((query) => {
                                        
                              query.forEach((doc) => {
                                    const data = doc.data();

                                    
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
  
        }
}
    
    
</script>
<style scoped>
#cpusel{
      margin-top:5%;
      margin-bottom: 1%;
}
#nextb {
  
  font-size: 30px;
  margin-top: 30px;
  background: #0978b8;
  width: fit-content;
  height: auto;
  padding: 10px;
  margin-bottom: 600px;
  margin-top: 10%;
  
  
}
</style>
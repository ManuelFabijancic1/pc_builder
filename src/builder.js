import store from "@/store";
import { firebase } from "@/firebase";
import { db } from "@/firebase";

export default {
      ssd: '',
      money: '',
      computertype: '',
      cpu: '',
      mbcijena: '',
      cpucijena: '',
      gpucijena: '',
      stocijena: '',
      casecijena: '',
      ramcijena: '',
      kulcijena: '',
      powercijena: '',
      mounted() {
            this.getData();
      },

      methods: {
            getData(){
                  db.collection("CPU").where("cijena", '<=', "9999").orderby(descending).limit(1)
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


function kalk(computertype, money, cpu, ssd) {
      switch (computertype) {
            case 1: {
                  //basic
                  cpucijena = money * 0.5;
                  
                  
      }
            case 2: {
            //gaming

      }
            case 3: {
            //editing

      }
            case 4: {
            //workstation

      }
            case 5: {
            //fastest

      }
} 
}





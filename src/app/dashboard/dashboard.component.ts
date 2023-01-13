import { Component } from '@angular/core';
import { dashData, Data } from './raw-data/data';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  user : Data[] = [
    {
      first : "Pandit",
      last : "Alabi",
      pic: "./assets/pharma1.jpg"
    },
  ]

  public getJsonValue : any;
  public postJsonValue : any;

  constructor(private http : HttpClient) {
    console.log(environment.production); // Debug for CORS Error

   }

  ngOnInit(){
    this.getMeth()
  }

  getMeth(){
      this.http.get('https://utils.mikebergafu.me/api/v1.0.0/facilities/favorites').subscribe((data) => {
        console.log(data);
      })

      //  Nav Link
    }

    dash : boolean = true;
    prod : boolean = false;
    trans : boolean = false;
    medi : boolean = false;
    insti : boolean = false;
    offi : boolean = false;
    meds : boolean = false;
    repo : boolean = false;
    subrepo : boolean = false;
    sysc : boolean = false;
   
  dashh(){
    this.dash = true;
    this.prod = false; 
    this.trans = false; 
    this.medi = false; 
    this.insti = false;
    this.offi = false;
    this.meds = false;
    this.repo = false;
    this.sysc = false;
  }
  pro(){
    this.dash = false;
    this.prod = true; 
    this.trans = false; 
    this.medi = false; 
    this.insti = false;
    this.offi = false;
    this.meds = false;
    this.repo = false;
    this.sysc = false;
  }
  tra(){
    this.dash = false;
    this.prod = false; 
    this.trans = true; 
    this.medi = false; 
    this.insti = false;
    this.offi = false;
    this.meds = false;
    this.repo = false;
    this.sysc = false;
  }
  med(){
    this.dash = false;
    this.prod = false; 
    this.trans = false; 
    this.medi = true; 
    this.insti = false;
    this.offi = false;
    this.meds = false;
    this.repo = false;
    this.sysc = false;
  }
  ins(){
    this.dash = false;
    this.prod = false; 
    this.trans = false; 
    this.medi = false; 
    this.insti = true;
    this.offi = false;
    this.meds = false;
    this.repo = false;
    this.sysc = false;
  }
  medOfi(){
    this.dash = false;
    this.prod = false; 
    this.trans = false; 
    this.medi = false; 
    this.insti = false;
    this.offi = true;
    this.meds = false;
    this.repo = false;
    this.sysc = false;
  }
  medSes(){
    this.dash = false;
    this.prod = false; 
    this.trans = false; 
    this.medi = false; 
    this.insti = false;
    this.offi = false;
    this.meds = true;
    this.repo = false;
    this.sysc = false;
  }
  Repo(){
    this.dash = false;
    this.prod = false; 
    this.trans = false; 
    this.medi = false; 
    this.insti = false;
    this.offi = false;
    this.meds = false;
    this.repo = true;
    this.sysc = false;
  }
  sysConf(){
    this.dash = false;
    this.prod = false; 
    this.trans = false; 
    this.medi = false; 
    this.insti = false;
    this.offi = false;
    this.meds = false;
    this.repo = false;
    this.sysc = true;
  }
  seReLo(){
    this.dash = false;
    this.prod = false; 
    this.trans = false; 
    this.medi = false; 
    this.insti = false;
    this.offi = false;
    this.meds = false;
    this.repo = false;
    this.subrepo = false;
    this.sysc = true;
  }

  // Nav Open and Close

  nav : boolean = true;

  navOpen(){
    this.nav = !this.nav;
  }

  // Sub Nav

  sub : boolean = false;
  sub2 : boolean = false;

  suB(){
    this.sub = !this.sub;
    this.sub2 = false;
  }
  

  subt(){
    this.sub2 = !this.sub2;
    this.sub = false
  }



  
  userData = this.user;

}

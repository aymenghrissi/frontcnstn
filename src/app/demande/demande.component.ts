import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Dem } from '../dem';
import { ServiceDemandeService } from '../services/service-demande.service';
import { ServiceemployeeService } from '../services/serviceemployee.service';
import { UserAuthService } from '../services/user-auth.service';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent {
  employees:any;
     newdemande:Dem={
      id:0,
      date_demmande:new Date(),
      materiel_demmander:'',
      employee:{
       
        }	
     } 
   constructor(private servicedemande: ServiceDemandeService, private empserv: ServiceemployeeService, private router:Router,public auth : UserAuthService) { }
 
   ngOnInit() {
     this.empserv.getEmployee().subscribe((data: any) => {
       this.employees= data;
       console.log(this.employees);
       
     });
   }
   
     adddemande(){
      this.newdemande.employee = this.auth.getUser().role;
     this.servicedemande.adddemande (this.newdemande).subscribe(()=>{
       alert('Damande ajouter ');
       
       },
       (error)=> {
         console.error('error',error);
         alert('error')
       }
       );
 
   }
 


}

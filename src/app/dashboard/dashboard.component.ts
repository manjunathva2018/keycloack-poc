import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'keycloack-poc';
  username='';
  roles=[];
  role='';

  constructor(private KeycloakService:KeycloakService) { }

  ngOnInit() {
    this.username=this.KeycloakService.getUsername();
    this.roles=this.KeycloakService.getUserRoles();
    // this.roles.forEach(el=>{
    //   if(this.KeycloakService.isUserInRole(el,this.username)){
    //     this.role=el;
    //   }
    // })
   console.log(this.KeycloakService.getToken()) ;
   console.log(this.KeycloakService.loadUserProfile()) ;
  }

  logout(){
    this.KeycloakService.logout();
  }

}

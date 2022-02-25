import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  firstName: String | undefined;
  lastName: String | undefined;



  constructor(public loginService:LoginService) {

  }

  ngOnInit(): void {

    this.loginService.loginResponse$.subscribe(loginResponse=>{
      this.firstName = loginResponse.first_name, this.lastName = loginResponse.last_name;
    })


   }

}
